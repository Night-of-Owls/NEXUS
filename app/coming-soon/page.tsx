import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, ArrowLeft } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-gray-800 bg-gray-900/50 overflow-hidden">
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            <Clock className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">Resources Coming Soon</h1>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>

          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            We're working hard to curate high-quality educational resources for this section. Check back soon for
            comprehensive learning materials on this topic.
            Sorry for inconvience !!!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
              </Button>
            </Link>

            <Link href="/chat">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Chat with NEXUS Instead
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

