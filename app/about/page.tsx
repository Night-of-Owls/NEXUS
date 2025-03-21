import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain } from "lucide-react";
import DeveloperCard from "@/components/developer-card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">About NEXUS</h1>
          <p className="text-xl text-gray-400">
            The next generation AI educational assistant
          </p>
        </div>

        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-center text-white">
                Our Mission
              </h2>
              <p className="text-gray-400">
                NEXUS was created with a clear mission: to democratize access to
                high-quality educational resources through the power of
                artificial intelligence. We believe that everyone should have
                access to personalized learning experiences that adapt to their
                unique needs and learning styles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-gray-900/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-center text-white">
                What Makes NEXUS Special
              </h2>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <span>Powered by Gemeni API .</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span>Designed specifically for educational purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span>Continuously learning and improving</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <span>Built with a focus on accuracy and ethical AI use</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

      
        <h2 className="mb-8 text-3xl font-bold text-center text-white">
          Meet the Team
        </h2>
        <div className="grid gap-8 mb-16 grid-cols-5">
          {/* Developer 1 */}
          <DeveloperCard
            name="Rabin Chudali"
            role="Lead Developer & API Integrator for chatbot"
            initials="RC"
            gradientFrom="purple-600"
            gradientTo="blue-600"
            hoverBorder="purple-500"
            imageUrls={["https://iili.io/2yt9vbs.jpg"]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/rabin-chudali-9600b934b/",
              github: "https://github.com/TechnophileCracker",
              instagram: "https://instagram.com/rabinchudali_07",
            }}
          />
          {/* Developer 2 */}
          <DeveloperCard
            name="Narayan Bhusal"
            role="Lead Developer || Frontend Developer"
            initials="SP"
            gradientFrom="blue-600"
            gradientTo="cyan-600"
            hoverBorder="blue-500"
            imageUrls={["https://iili.io/2yBChFV.png"]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/naranbhusal02",
              github: "https://github.com/naranbhusal02",
              instagram: "https://instagram.com/naranbhusal02",
              website: "https://naranbhusal02.me",
            }}
          />
          {/* Developer 3 */}
          <DeveloperCard
            name="Nayan Acharya"
            role="Researcher || Backend Developer"
            initials="NA"
            gradientFrom="blue-600"
            gradientTo="cyan-600"
            hoverBorder="blue-500"
            imageUrls={["https://iili.io/2Z7vNls.jpg"]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/nayan135/",
              github: "https://github.com/nayan135",
              instagram: "https://instagram.com/naayan135",
              website: "https://nayan135.com.np",
            }}
          />
          {/* Developer 4 */}
          <DeveloperCard
            name="Sanjog Pandey"
            role="UI/UX Designer"
            initials="SP"
            gradientFrom="blue-600"
            gradientTo="cyan-600"
            hoverBorder="blue-500"
            imageUrls={["https://iili.io/3q8y6Ss.jpg"]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/sanjog-pandey-4317ba31a/",
              github: "https://github.com/sanjogpandey47",
              instagram: "https://instagram.com/exactly_sanjog",
            }}
          />
          {/* Developer 5 */}
          <DeveloperCard
            name="Siddhant Panthi"
            role="UI Developer"
            initials="SP"
            gradientFrom="cyan-600"
            gradientTo="green-600"
            hoverBorder="cyan-500"
            imageUrls={["https://iili.io/3qS9E5G.jpg"]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/siddhantasf",
              github: "https://github.com/SiddanthPanthi",
              instagram: "https://instagram.com/siddu.psd",
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            How NEXUS Works
          </h2>
          <div className="relative">
            {/* Removed the thread-like line */}
            <div className="relative z-10 mb-12">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  <span className="font-bold text-white">1</span>
                </div>
                <div className="w-full h-px ml-4 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>
              <div className="pl-14">
                <h3 className="mb-2 text-xl font-bold text-white">
                  Ask a Question
                </h3>
                <p className="text-gray-400">
                  Type your question or topic of interest in the chat interface.
                  NEXUS works with natural language, so you can ask questions
                  just as you would to a human tutor.
                </p>
              </div>
            </div>

            <div className="relative z-10 mb-12">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  <span className="font-bold text-white">2</span>
                </div>
                <div className="w-full h-px ml-4 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>
              <div className="pl-14">
                <h3 className="mb-2 text-xl font-bold text-white">
                  AI Processing
                </h3>
                <p className="text-gray-400">
                  NEXUS processes your question using Google's Gemini AI model,
                  analyzing the context and intent to generate the most helpful
                  response. The next gen AI
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="w-full h-px ml-4 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>
              <div className="pl-14">
                <h3 className="mb-2 text-xl font-bold text-white">
                  Educational Response
                </h3>
                <p className="text-gray-400">
                  Receive a detailed, educational response tailored to your
                  question. NEXUS provides explanations, examples, and
                  additional resources to help deepen your understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl p-8 mx-auto text-center border rounded-lg border-gray-800 bg-gray-900/50">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Ready to Experience NEXUS?
          </h2>
          <p className="mb-6 text-gray-400">
            Start chatting with our AI educational assistant and discover a new
            way of learning.
          </p>
          <Link href="/chat">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Chat with NEXUS Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
