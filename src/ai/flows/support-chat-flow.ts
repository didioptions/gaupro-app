'use server';

/**
 * @fileOverview A support chatbot flow for Gaupro.
 *
 * - getSupportResponse - A function that returns an AI-generated response to a user's query.
 * - SupportChatInput - The input type for the getSupportResponse function.
 * - SupportChatOutput - The return type for the getSupportResponse function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const SupportChatInputSchema = z.string().describe('The user\'s message or question to the support chatbot.');
export type SupportChatInput = z.infer<typeof SupportChatInputSchema>;

export const SupportChatOutputSchema = z.string().describe('The AI-generated response to the user\'s message.');
export type SupportChatOutput = z.infer<typeof SupportChatOutputSchema>;


export async function getSupportResponse(
  input: SupportChatInput
): Promise<SupportChatOutput> {
  return supportChatFlow(input);
}


const supportChatPrompt = ai.definePrompt({
  name: 'supportChatPrompt',
  input: { schema: SupportChatInputSchema },
  output: { schema: SupportChatOutputSchema },
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

Please provide a helpful response.`,
});


const supportChatFlow = ai.defineFlow(
  {
    name: 'supportChatFlow',
    inputSchema: SupportChatInputSchema,
    outputSchema: SupportChatOutputSchema,
  },
  async (input) => {
    const { output } = await supportChatPrompt(input);
    return output!;
  }
);
