import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            <span className="block">Meet</span>
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
                NEXUS
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 blur-xl opacity-20"></span>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Your futuristic AI companion powered by Gemini. Explore knowledge, get answers, and learn with cutting-edge
            artificial intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/chat">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Educational Resources
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-900 to-blue-900 text-purple-200">
              FEATURES
            </span>
            <br />
            Advanced AI Capabilities
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 transition-all border rounded-lg border-gray-800 hover:border-purple-500 bg-gray-800/50 hover:bg-gray-800/80">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-900/50">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Gemini Powered</h3>
              <p className="text-gray-400">
                Leveraging Google's advanced Gemini 2.0 Flash model for intelligent, context-aware responses.
              </p>
            </div>

            <div className="p-6 transition-all border rounded-lg border-gray-800 hover:border-blue-500 bg-gray-800/50 hover:bg-gray-800/80">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-900/50">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Educational Resources</h3>
              <p className="text-gray-400">
                Access a wealth of learning materials and AI-powered educational assistance.
              </p>
            </div>

            <div className="p-6 transition-all border rounded-lg border-gray-800 hover:border-cyan-500 bg-gray-800/50 hover:bg-gray-800/80">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-cyan-900/50">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Lightning Fast</h3>
              <p className="text-gray-400">
                Get instant responses with our optimized AI integration and streamlined interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-white">Ready to experience the future?</h2>
          <Link href="/chat">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Start Chatting with NEXUS
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

