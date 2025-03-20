import { type NextRequest, NextResponse } from "next/server"
import { AI_PERSONALITY } from "../../../lib/ai-personality"


export async function POST(request: NextRequest) {
  try {
    
    const { userMessage, messages } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key is not configured" }, { status: 500 })
    }

    // Replace the hardcoded system prompt with personality instructions
    const systemPrompt = AI_PERSONALITY.baseInstructions

    // Create context from previous messages
    const context = messages.map((msg) => `${msg.role === "user" ? "User" : ""}: ${msg.content}`).join("\n")

    // Prepare the prompt with context and the new user message
    const prompt = `${context}\n\nUser: ${userMessage}\n\nNEXUS:`

    // Updated Gemini API endpoint with the newer model
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\n${prompt}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error(" API error:", errorData)
      return NextResponse.json(
        { error: `Failed to get response from  API: ${JSON.stringify(errorData)}` },
        { status: response.status },
      )
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

    return NextResponse.json({ text })
  } catch (error) {
    console.error("Error in chat API route:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}

