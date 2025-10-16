'use server';

/**
 * @fileOverview Matches user service requests with relevant professionals.
 *
 * - matchServiceRequestsWithProfessionals - A function that matches service requests with professionals.
 * - MatchServiceRequestsInput - The input type for the matchServiceRequestsWithProfessionals function.
 * - MatchServiceRequestsOutput - The return type for the matchServiceRequestsWithProfessionals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchServiceRequestsInputSchema = z.object({
  serviceRequestDescription: z
    .string()
    .describe('Detailed description of the service request.'),
  userLocation: z.string().describe('The location of the user.'),
  professionalProfiles: z.array(
    z.object({
      name: z.string().describe('The name of the professional.'),
      skills: z.array(z.string()).describe('List of skills the professional possesses.'),
      location: z.string().describe('The location of the professional.'),
      availability: z.string().describe('The availability of the professional.'),
      response: z.string().optional().describe('The professional response to the service request'),
    })
  ).describe('Array of professional profiles to match against.'),
});
export type MatchServiceRequestsInput = z.infer<typeof MatchServiceRequestsInputSchema>;

const MatchServiceRequestsOutputSchema = z.array(
  z.object({
    name: z.string().describe('The name of the matched professional.'),
    matchScore: z.number().describe('A score indicating how well the professional matches the request.'),
    reason: z.string().describe('Explanation of why the professional was matched, highlighting relevant skills, location, and availability.'),
  })
);
export type MatchServiceRequestsOutput = z.infer<typeof MatchServiceRequestsOutputSchema>;

export async function matchServiceRequestsWithProfessionals(
  input: MatchServiceRequestsInput
): Promise<MatchServiceRequestsOutput> {
  return matchServiceRequestsWithProfessionalsFlow(input);
}

const matchServiceRequestsPrompt = ai.definePrompt({
  name: 'matchServiceRequestsPrompt',
  input: {schema: MatchServiceRequestsInputSchema},
  output: {schema: MatchServiceRequestsOutputSchema},
  prompt: `You are an expert at matching service requests with qualified professionals.

Given the following service request:
Description: {{{serviceRequestDescription}}}
Location: {{{userLocation}}}

And the following professional profiles:
{{#each professionalProfiles}}
Name: {{{name}}}
Skills: {{#each skills}}{{{this}}}, {{/each}}
Location: {{{location}}}
Availability: {{{availability}}}
Response: {{{response}}}
{{/each}}

Determine which professionals are the best match for the service request based on their skills, location, and availability.

For each professional, provide a match score (0-100) and a reason for the match, highlighting relevant skills, location and whether their response answers the users needs.. Return an array of matched professionals. Only include professionals with a match score higher than 50.

Output in JSON format.
`,
});

const matchServiceRequestsWithProfessionalsFlow = ai.defineFlow(
  {
    name: 'matchServiceRequestsWithProfessionalsFlow',
    inputSchema: MatchServiceRequestsInputSchema,
    outputSchema: MatchServiceRequestsOutputSchema,
  },
  async input => {
    const {output} = await matchServiceRequestsPrompt(input);
    return output!;
  }
);
