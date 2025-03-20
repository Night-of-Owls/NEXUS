import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Database, FileText, Lightbulb, Rocket, Brain } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Educational Resources</h1>
          <p className="text-xl text-gray-400">
            Explore our curated collection of AI and educational resources to enhance your learning journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Fundamentals */}
          <Card className="overflow-hidden border-gray-800 bg-gray-900/50 hover:border-purple-500 transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 mb-4 rounded-lg bg-purple-900/30 flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-white">AI Fundamentals</CardTitle>
              <CardDescription className="text-gray-400">
                Learn the core concepts of artificial intelligence and machine learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Introduction to AI and Machine Learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Neural Networks and Deep Learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Natural Language Processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Computer Vision and Image Recognition
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/coming-soon" className="w-full">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-2" /> Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Programming */}
          <Card className="overflow-hidden border-gray-800 bg-gray-900/50 hover:border-blue-500 transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-900/30 flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-white">Programming</CardTitle>
              <CardDescription className="text-gray-400">
                Master programming languages and software development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Python for Data Science and AI
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  JavaScript and Web Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Algorithms and Data Structures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Mobile App Development
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/coming-soon" className="w-full">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-2" /> Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Data Science */}
          <Card className="overflow-hidden border-gray-800 bg-gray-900/50 hover:border-cyan-500 transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 mb-4 rounded-lg bg-cyan-900/30 flex items-center justify-center">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <CardTitle className="text-white">Data Science</CardTitle>
              <CardDescription className="text-gray-400">
                Analyze and visualize data to extract meaningful insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Statistical Analysis and Probability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Data Visualization Techniques
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Big Data Processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  Predictive Modeling
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/coming-soon" className="w-full">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-2" /> Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* AI Applications */}
          <Card className="overflow-hidden border-gray-800 bg-gray-900/50 hover:border-green-500 transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 mb-4 rounded-lg bg-green-900/30 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-green-400" />
              </div>
              <CardTitle className="text-white">AI Applications</CardTitle>
              <CardDescription className="text-gray-400">
                Discover real-world applications of AI across industries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  AI in Healthcare and Medicine
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  AI for Business and Finance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  AI in Education and Learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  AI for Environmental Sustainability
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/coming-soon" className="w-full">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-2" /> Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* AI Ethics */}
          <Card className="overflow-hidden border-gray-800 bg-gray-900/50 hover:border-amber-500 transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 mb-4 rounded-lg bg-amber-900/30 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-amber-400" />
              </div>
              <CardTitle className="text-white">AI Ethics</CardTitle>
              <CardDescription className="text-gray-400">
                Explore ethical considerations in AI development and deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Bias and Fairness in AI Systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Privacy and Data Protection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Transparency and Explainability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Responsible AI Development
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/coming-soon" className="w-full">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-2" /> Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Gemini API */}
          <Card className="overflow-hidden border-gray-800 bg-gray-900/50 hover:border-purple-500 transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 mb-4 rounded-lg bg-purple-900/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-white">Gemini API</CardTitle>
              <CardDescription className="text-gray-400">
                Learn how to build applications with Google's Gemini API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Getting Started with Gemini API
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Building Chatbots with Gemini
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Content Generation and Summarization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Advanced Gemini API Techniques
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/coming-soon" className="w-full">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <BookOpen className="w-4 h-4 mr-2" /> Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-3xl p-8 mx-auto mt-16 text-center border rounded-lg border-gray-800 bg-gray-900/50">
          <h2 className="mb-4 text-2xl font-bold text-white">Need Help Finding Resources?</h2>
          <p className="mb-6 text-gray-400">
            Chat with NEXUS to get personalized educational resource recommendations based on your interests and
            learning goals.
          </p>
          <Link href="/chat">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Ask NEXUS for Recommendations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

