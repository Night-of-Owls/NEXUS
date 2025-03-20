import Link from "next/link"
import { Brain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 border-t bg-black border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">NEXUS</span>
            </Link>
            <p className="text-sm text-gray-400">Your futuristic AI educational companion</p>
          </div>

          <div className="flex flex-col items-center gap-6 md:flex-row">
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="/chat" className="text-sm text-gray-400 hover:text-white">
                Chat
              </Link>
              <Link href="/resources" className="text-sm text-gray-400 hover:text-white">
                Resources
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                About
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center text-gray-500 border-t border-gray-800">
          &copy; {new Date().getFullYear()} <a href="https://night-owls.tech" className="hover:underline text-gray-400">Night-OWLS</a>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

