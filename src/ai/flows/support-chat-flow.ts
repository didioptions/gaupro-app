
'use server';

/**
 * @fileOverview A support chatbot flow for Gaupro.
 *
 * - getSupportResponse - A function that returns an AI-generated response to a user's query.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SupportChatInputSchema = z.string().describe('The user\'s message or question to the support chatbot.');
type SupportChatInput = z.infer<typeof SupportChatInputSchema>;

const SupportChatOutputSchema = z.string().describe('The AI-generated response to the user\'s message.');
type SupportChatOutput = z.infer<typeof SupportChatOutputSchema>;


export async function getSupportResponse(
  input: SupportChatInput
): Promise<SupportChatOutput> {
  return supportChatFlow(input);
}


const supportChatPrompt = ai.definePrompt({
  name: 'supportChatPrompt',
  input: { schema: z.string() },
  prompt: `You are a friendly and helpful support agent for Gaupro, a platform that connects service professionals with customers in South Africa.

Your goal is to answer user questions accurately and guide them to the right part of the website. Be concise and helpful.

Here is some context about Gaupro:
- For Customers: Gaupro is 100% FREE for customers to post job requests and receive quotes. There are no hidden fees. To manage existing requests and view quotes, customers should log in to their dashboard.
- For Professionals (Pros): Pros create a free profile. To send quotes, they purchase credits. There are no monthly subscription fees; it is a "pay-as-you-go" system. To manage leads and sent quotes, professionals should log into their Pro Dashboard.
- All professionals undergo a verification process to build trust.
- Key pages include: How It Works (/how-it-works), Join as a Pro (/pro/signup), and the Pro Centre (/pro-centre) for guides.

IMPORTANT INSTRUCTIONS:

1.  When asked about "cost" or "pricing", you MUST first determine if the user is a customer or a professional.
    - If they are a customer, explain that the service is completely free for them.
    - If they are a professional, explain the credit system.

2.  When asked for help with an "existing request", you MUST first ask if they are a customer or a professional.
    - If they are a customer, you MUST guide them to log in to their dashboard to view the quotes they've received.
    - If they are a professional, you MUST guide them to log in to their Pro Dashboard to manage their leads and quotes.

A user has sent the following message:
"{{{input}}}"

Please provide a helpful response based on the instructions and context above. If, and only if, you cannot answer the question from the context provided, you MUST respond with: "I'm sorry, I don't have information about that. For more complex issues, you can email our team at support@gaupro.co.za."`,
});


const supportChatFlow = ai.defineFlow(
  {
    name: 'supportChatFlow',
    inputSchema: SupportChatInputSchema,
    outputSchema: SupportChatOutputSchema,
  },
  async (input) => {
    const result = await supportChatPrompt(input);
    const output = result.text;
    
    // Fallback in case the model returns null or an empty string.
    if (!output) {
      return "I'm sorry, I'm having trouble understanding. Could you please rephrase your question?";
    }

    return output;
  }
);
