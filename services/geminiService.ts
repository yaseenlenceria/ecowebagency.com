import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateConsultation = async (businessType: string, goal: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    You are a senior digital strategist for "Eco Web Agency", a premium agency specializing in sustainable, high-performance web solutions.
    
    A potential client has approached us with the following details:
    - Business Type: ${businessType}
    - Primary Goal: ${goal}

    Provide a brief, high-impact strategic summary (max 150 words) on how a sustainable web approach can help them achieve this goal. 
    Focus on performance, SEO, and carbon footprint reduction. 
    Tone: Professional, visionary, and encouraging.
    Format: Plain text, no markdown headers.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "We are currently experiencing high demand. Please contact our team directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to generate consultation at this time.");
  }
};