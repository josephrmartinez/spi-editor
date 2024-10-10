import { NextResponse } from 'next/server';
import  OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});



export async function POST(request: Request) {
  try {
    const { selectedText, fullDocumentText } = await request.json();
 
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
        messages: [
          {role: "user", "content": `Your job is to provide just one piece of specific feedback on the following text: "${selectedText}". Here's the full context: "${fullDocumentText}". // Provide your feedback as though you are a high school student. Just return a few sentences. Be specific. DO NOT GIVE A REVISED EXAMPLE. JUST GIVE ONE SPECIFIC PIECE OF FEEDBACK, NOT SEVERAL ITEMS. The point of this request is to get feedback in the voice of the intended audience. In this case, the intended audience is high school students.`
 }
      ],
      max_tokens: 700,
      temperature: 0.7,
    });

      const feedback = response.choices[0].message.content

    return NextResponse.json({ feedback });
  } catch (error) {
    console.error('Error generating AI feedback:', error);
    return NextResponse.json(
      { error: 'Failed to generate feedback' },
      { status: 500 }
    );
  }
}
