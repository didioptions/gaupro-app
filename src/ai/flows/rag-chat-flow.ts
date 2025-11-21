
'use server';

/**
 * @fileOverview A RAG-powered support chatbot flow for Gaupro.
 *
 * - getRagSupportResponse - A function that returns an AI-generated response using website content as context.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Document } from 'genkit/document';
import { memoryIndexer, devLocalRetriever } from 'genkit/dev-tools';


const SupportChatInputSchema = z.string().describe("The user's message or question to the support chatbot.");
type SupportChatInput = z.infer<typeof SupportChatInputSchema>;

const SupportChatOutputSchema = z.string().describe("The AI-generated response to the user's message.");
type SupportChatOutput = z.infer<typeof SupportChatOutputSchema>;

// Define the documents that make up the chatbot's knowledge base.
// In a real-world app, this would come from a CMS or by scraping the website.
const gauproKnowledgeBase = [
  Document.fromText(
    `About Gaupro: Gaupro is South Africa's fastest-growing platform for finding, comparing, and hiring verified local service professionals. Our mission is to make it simple, safe, and stress-free to get any job done right. We connect thousands of South Africans with skilled professionals across 50+ service categories.`,
    { title: 'About Us' }
  ),
  Document.fromText(
    `How Gaupro Works for Customers: 1. Post Your Job for Free: Describe what you need in under 2 minutes. 2. Receive Multiple Quotes: Get responses from interested professionals within hours. 3. Compare & Choose: Review profiles, ratings, and prices. 4. Hire with Confidence: Select your preferred pro and get the job done. The service is 100% FREE for customers. There are no hidden fees.`,
    { title: 'How It Works for Customers' }
  ),
  Document.fromText(
    `How Gaupro Works for Professionals: 1. Create Your Profile: Showcase your skills and experience. 2. Get Notified: Receive alerts for jobs matching your expertise. 3. Send Quotes: Respond to interested customers. To send quotes, pros purchase credits. There are no monthly subscription fees; it is a "pay-as-you-go" system. 4. Grow Your Business: Build your reputation through reviews.`,
    { title: 'How It Works for Professionals' }
  ),
  Document.fromText(
    `Trust and Safety: All professionals on Gaupro undergo a verification process to build trust. This includes ID verification and checking qualifications where applicable. Customer contact details are kept private until they decide to share them with a professional. We also have a review system for accountability.`,
    { title: 'Trust and Safety' }
  ),
  Document.fromText(
    `Pro Centre: The Pro Centre is a resource hub for professionals. It contains guides, tips, and strategies to help them attract more clients, optimize their profiles, and grow their business on the Gaupro platform.`,
    { title: 'Pro Centre' }
  ),
];

// Index the documents for retrieval.
// In a production app, you'd use a persistent vector store like Pinecone or Chroma.
// For this example, we'll use an in-memory index.
const gauproRetriever = devLocalRetriever({
  indexer: memoryIndexer,
  docs: gauproKnowledgeBase,
});


export async function getRagSupportResponse(input: SupportChatInput): Promise<SupportChatOutput> {
  return ragChatFlow(input);
}

const ragChatPrompt = `You are a friendly and helpful support agent for Gaupro, a platform that connects service professionals with customers in South Africa.

Your goal is to answer user questions accurately based *only* on the context provided below. Be concise and helpful.

If the context does not contain the answer to the question, you MUST respond with: "I'm sorry, I don't have information about that. For more complex issues, you can email our team at support@gaupro.co.za."

CONTEXT:
{{#each docs}}
- {{document.text}}
{{/each}}

A user has sent the following message:
"{{query}}"

Please provide a helpful response based on the instructions and the context above.
`;

const ragChatFlow = ai.defineFlow(
  {
    name: 'ragChatFlow',
    inputSchema: SupportChatInputSchema,
    outputSchema: SupportChatOutputSchema,
  },
  async (query) => {
    const docs = await gauproRetriever.retrieve(query, 3);

    const llmResponse = await ai.generate({
      prompt: ragChatPrompt,
      variables: { query, docs },
    });

    const output = llmResponse.text;
    
    if (!output) {
      return "I'm sorry, I'm having trouble understanding. Could you please rephrase your question?";
    }

    return output;
  }
);
