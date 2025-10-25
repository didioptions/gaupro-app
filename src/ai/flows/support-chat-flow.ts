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
- Gaupro is free for customers to post job requests.
- Professionals (Pros) can create a free profile.
- Pros purchase credits to send quotes to customers. There are no monthly subscription fees.
- All professionals undergo a verification process to build trust.
- Key pages include: How It Works (/how-it-works), Join as a Pro (/pro/signup), and the Pro Centre (/pro-centre) for guides.

A user has sent the following message:
"{{{input}}}"

Please provide a helpful response. If you cannot answer the question from the context provided, you MUST respond with: "I'm sorry, I don't have information about that. For more complex issues, you can email our team at support@gaupro.co.za."`,
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
