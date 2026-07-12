import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateSample(prompt, filename) {
  console.log(`Generating sample for: ${prompt}`);
  try {
    const response = await ai.models.generateContentStream({
      model: 'lyria-3-clip-preview',
      contents: prompt
    });

    let audioBase64 = '';

    for await (const chunk of response) {
      const parts = chunk.candidates?.[0]?.content?.parts;
      if (!parts) continue;

      for (const part of parts) {
        if (part.inlineData?.data) {
          audioBase64 += part.inlineData.data;
        }
      }
    }

    if (audioBase64) {
      const binary = Buffer.from(audioBase64, 'base64');
      const filepath = path.join(process.cwd(), 'public', 'samples', filename);
      fs.mkdirSync(path.dirname(filepath), { recursive: true });
      fs.writeFileSync(filepath, binary);
      console.log(`Saved sample to ${filepath}`);
    } else {
      console.log(`No audio generated for ${filename}`);
    }
  } catch (err) {
    console.error(`Error generating ${filename}:`, err.message);
  }
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('Please set GEMINI_API_KEY environment variable.');
    process.exit(1);
  }

  console.log('Finished generating samples.');
}

main();
