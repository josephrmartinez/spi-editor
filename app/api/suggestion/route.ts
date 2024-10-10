import { NextResponse } from 'next/server';
import  OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});



export async function POST(request: Request) {
  try {
    const { currentBlockText, fullDocumentText } = await request.json();
 
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
        messages: [
          {role: "user", "content": `You are a writing assistant. The writer is trying to develop a text but they are stuck at the following text: "${currentBlockText}". Here's the full context: "${fullDocumentText}". /// Your job is to ask the writer a relevant follow-up question or give them a suggestion of something they could write about next. DO NOT GENERATE CONTENT FOR THE WRITER. Your job is to simply nudge them slightly so that they can get out of writer's block. Give them an open-ended question or thing to consider. Your suggestion should be based on the full context of what they are writing about and it should be relevant to the exact point where the writer is currently stuck. JUST RETURN A BRIEF SUGGESTION, NO INTRO OR OTHER THOUGHTS.`
 }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

      const suggestion = response.choices[0].message.content

    return NextResponse.json({ suggestion });
  } catch (error) {
    console.error('Error generating AI suggestion:', error);
    return NextResponse.json(
      { error: 'Failed to generate suggestion' },
      { status: 500 }
    );
  }
}
