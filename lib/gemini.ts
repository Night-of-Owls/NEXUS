"use server"

import type { AIProvider } from "ai"

// Create a Gemini provider
export const gemini = (modelName: string): AIProvider => {
  return {
    id: "gemini",
    name: "Gemini",
    model: modelName,

    // This function is called when generating text
    async generateText({ prompt, system }) {
      const apiKey = process.env.GEMINI_API_KEY || "AIzaSyC_AFbM-iqZUC09WC-CvNx4bJgv66aQJ-E"

      if (!apiKey) {
        throw new Error("Missing Gemini API key")
      }

      // Updated Gemini API endpoint with the newer model
      const modelPath = "gemini-2.0-flash"
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelPath}:generateContent?key=${apiKey}`

      // Prepare the request payload
      const payload = {
        contents: [
          {
            parts: [
              {
                text: system ? `${system}\n\n${prompt}` : prompt,
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
      }

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(`Gemini API error: ${JSON.stringify(errorData)}`)
        }

        const data = await response.json()

        // Extract the generated text from the response
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

        return {
          text,
          usage: {
            promptTokens: 0, // Gemini doesn't provide token counts in this API
            completionTokens: 0,
            totalTokens: 0,
          },
          finishReason: data.candidates?.[0]?.finishReason || "STOP",
        }
      } catch (error) {
        console.error("Error calling Gemini API:", error)
        throw error
      }
    },
  }
}

