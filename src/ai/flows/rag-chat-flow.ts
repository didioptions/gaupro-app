
'use server';
/**
 * @fileOverview A support chatbot flow for Gaupro using Retrieval-Augmented Generation (RAG).
 *
 * This flow answers user questions based on a predefined set of documents representing
 * the website's content. It uses an in-memory vector store for development purposes.
 *
 * - ragChatFlow - A function that takes a user's query and returns an AI-generated response
 *   based on relevant information retrieved from the website's content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Document, index, retrieve } from 'genkit/document';
import { memoryIndexer, devLocalRetriever } from 'genkit/tools';
import { googleAI } from '@genkit-ai/google-genai';


const gauproKnowledge = [
    Document.fromText(
        `About Gaupro: Gaupro is South Africa's fastest-growing platform for finding, comparing, and hiring verified local service professionals. It simplifies the process of getting any job done right. We connect thousands of South Africans with skilled professionals across 50+ service categories. Whether you need an emergency plumber in Johannesburg, an electrician in Cape Town, or a builder in Durban, Gaupro matches you with the right pro. Our mission is to make it effortless for customers to find trusted professionals and to empower local businesses. For Customers, Gaupro is 100% FREE to post job requests and receive quotes. There are no hidden fees. For Professionals, Pros create a free profile. To send quotes, they purchase credits. There are no monthly subscription fees; it is a "pay-as-you-go" system.`,
        {
            source: 'https://gaupro.co.za/about',
            title: 'About Gaupro'
        }
    ),
    Document.fromText(
        `How Gaupro Works for Customers: 1. Post Your Job for free in under 2 minutes. Describe what you need. 2. Receive Multiple Quotes within hours from interested, verified professionals. 3. Compare profiles, ratings, portfolios, and prices. 4. Hire with Confidence by selecting your preferred pro and getting the job done. Your contact details are only shared with pros you choose to engage.`,
        {
            source: 'https://gaupro.co.za/how-it-works',
            title: 'How Gaupro Works'
        }
    ),
    Document.fromText(
        `Trust and Safety: All professionals on Gaupro undergo a verification process to build trust. This includes ID verification, business registration checks, and qualification validation where applicable. We also have a transparent review system where customers can read genuine feedback from verified users. Your privacy is protected; contact details are only shared with professionals you choose.`,
        {
            source: 'https://gaupro.co.za/trust-and-safety',
            title: 'Trust and Safety'
        }
    ),
    Document.fromText(
        `For Professionals - How to Succeed: To succeed on Gaupro, professionals should create a complete and detailed profile with high-quality photos. Responding to leads quickly (ideally under 30 minutes) dramatically increases the chances of getting hired. Actively requesting and managing customer reviews is crucial for building a strong reputation. Top professionals maintain a high star rating (4.8+). Professionals buy credits to respond to leads; it is not a subscription model. The ROI is high, with a single job often covering the cost of credits for months.`,
        {
            source: 'https://gaupro.co.za/blog/how-to-succeed-on-gaupro',
            title: 'Success Guide for Professionals'
        }
    ),
    Document.fromText(
        `Why Choose Gaupro: Gaupro is chosen by over 50,000 South Africans because it solves the traditional hiring nightmare. Instead of hours of searching and calling, you post a job in 2 minutes. Instead of unverifiable claims, you get access to ID-checked professionals with verified reviews. You compare multiple quotes side-by-side transparently, and your contact details remain private until you decide to share them. This saves time, reduces anxiety, and ensures you hire with confidence.`,
        {
            source: 'https://gaupro.co.za/blog/why-choose-gaupro',
            title: 'Why Choose Gaupro'
        }
    ),
    Document.fromText(
        `Gaupro vs Traditional Hiring: The old way of hiring involves searching classifieds, having no verification, price mysteries, and no accountability. The Gaupro way offers a single job post that reaches hundreds, ID and credential-checked pros, side-by-side quote comparison, and verified customer reviews. This makes the process faster, safer, and more convenient.`,
        {
            source: 'https://gaupro.co.za/blog/gaupro-difference',
            title: 'Gaupro Difference'
        }
    ),
    Document.fromText(
        `How Gaupro Works (Detailed): Step 1 is posting a job by selecting a service category and answering smart questions. Step 2 is receiving and comparing quotes from multiple pros on your dashboard, where you can see profiles, reviews, and portfolios. Step 3 is hiring with confidence. You accept a quote, arrange service directly, and pay the pro upon completion. Gaupro offers dispute support and ensures accountability through its review system.`,
        {
            source: 'https://gaupro.co.za/blog/how-gaupro-works',
            title: 'How Gaupro Works Detailed'
        }
    ),
    Document.fromText(
        `Why Professionals Love Gaupro: Professionals choose Gaupro to get a steady stream of quality leads from real customers. It allows them to build their online reputation through verified reviews and showcase their work. It's a cost-effective marketing channel with flexible, pay-as-you-go credit options instead of expensive monthly subscriptions. Professionals report higher quality leads, better job values, and significant business growth.`,
        {
            source: 'https://gaupro.co.za/blog/why-professionals-love-gaupro',
            title: 'Why Professionals Love Gaupro'
        }
    ),
     Document.fromText(
        `Gaupro vs Competitors: Compared to Kandua, Bark, and Facebook, Gaupro is the overall winner. It is completely free for customers, offers complete verification of all pros, provides instant quotes, has a verified review system, and offers 24/7 support with dispute help. Other platforms lack in one or more of these key areas, especially in verification and support. Professionals prefer Gaupro for higher quality leads and better ROI.`,
        {
            source: 'https://gaupro.co.za/blog/gaupro-vs-others',
            title: 'Gaupro vs Other Options'
        }
    ),
];

// Define an indexer for our knowledge base. For development, we use an in-memory indexer.
const gauproIndexer = memoryIndexer('gaupro-knowledge-base');

// Define a retriever for the same index.
const knowledgeBaseRetriever = devLocalRetriever({
    indexer: gauproIndexer,
    embedder: googleAI.embedder('text-embedding-004'),
});


export async function ragChatFlow(query: string): Promise<string> {

    // Index the documents. In a real app, this might be done in a separate script or on a schedule.
    await index({ indexer: gauproIndexer, documents: gauproKnowledge });

    // Retrieve relevant documents based on the user's query.
    const docs = await retrieve({
        retriever: knowledgeBaseRetriever,
        query: query,
        options: { k: 3 }, // Get the top 3 most relevant documents
    });

    // Augment the prompt with the retrieved documents.
    const augmentedPrompt = `You are a friendly and helpful support agent for Gaupro. Answer the user's question based on the following information. If the information isn't available, say "I'm sorry, I don't have information about that. For more complex issues, you can email our team at support@gaupro.co.za."

    User's Question: "${query}"

    Relevant Information:
    ${docs.map(doc => doc.text()).join('\n---\n')}
    `;
    
    // Generate the response.
    const llmResponse = await ai.generate({
        prompt: augmentedPrompt,
        model: 'googleai/gemini-2.5-flash',
    });

    return llmResponse.text;
}
