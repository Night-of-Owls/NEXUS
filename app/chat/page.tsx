"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  Brain,
  Send,
  User,
  Sparkles,
  Bot,
  Zap,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant" | "error";
  content: string;
  id: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm NEXUS, your AI educational assistant. How can I help you today?",
      id: "welcome",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Improved scroll to bottom function
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    // Use a small timeout to ensure the DOM has updated
    const timeoutId = setTimeout(() => {
      scrollToBottom();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [messages]);

  // Hide intro animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false); 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setErrorMessage(null);

    // Generate a unique ID for the message
    const userMessageId = `user-${Date.now()}`;

    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage, id: userMessageId },
    ]);
    setIsLoading(true);

    try {
      // Create context from previous messages (last 10 messages for context window management)
      const recentMessages = messages
        .filter((msg) => msg.role !== "error") // Filter out error messages
        .slice(-10);

      const context = recentMessages
        .map(
          (msg) => `${msg.role === "user" ? "User" : "NEXUS"}: ${msg.content}`
        )
        .join("\n");

      // Call our API route that will handle the Gemini API call
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: recentMessages,
          userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response from Gemini API");
      }

      const botMessageId = `assistant-${Date.now()}`;

      // Add assistant response to chat
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text, id: botMessageId },
      ]);

      // Ensure we scroll to bottom after adding the new message
      setTimeout(scrollToBottom, 100);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMsg =
        error instanceof Error ? error.message : "An unknown error occurred";
      setErrorMessage(errorMsg);

      setMessages((prev) => [
        ...prev,
        {
          role: "error",
          content:
            "I'm sorry, I encountered an error processing your request. Please try again with a different question.",
          id: `error-${Date.now()}`,
        },
      ]);

      // Ensure we scroll to bottom after adding the error message
      setTimeout(scrollToBottom, 100);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/3 w-40 h-40 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container flex flex-col flex-1 px-4 mx-auto relative z-10">
        {/* Intro animation */}
        {showIntro && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-sm">
            <div className="text-center">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse">
                <Brain
                  className="w-12 h-12 text-white animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">NEXUS</h2>
              <p className="text-gray-400 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Initializing AI Interface
                <Sparkles className="w-4 h-4 text-blue-400" />
              </p>
            </div>
          </div>
        )}

        <div className="py-6 text-center relative">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
            Chat with NEXUS
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-md text-red-200 flex items-center gap-2 animate-in fade-in duration-300">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold">API Error</p>
              <p className="text-red-300 text-xs">{errorMessage}</p>
            </div>
          </div>
        )}

        <Card className="flex flex-col flex-1 border-gray-800 bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(124,58,237,0.2)] overflow-hidden">
          <CardContent className="flex flex-col flex-1 p-0">
            <div
              ref={chatContainerRef}
              className="flex-1 p-4 overflow-y-auto scrollbar-thin"
            >
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex w-full mb-4 animate-in fade-in duration-300",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={cn(
                      "flex items-start gap-3 max-w-[80%] group",
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <Avatar
                      className={cn(
                        "h-10 w-10 border-2 transition-all duration-300 group-hover:scale-110",
                        message.role === "assistant"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 border-purple-500/50"
                          : message.role === "error"
                          ? "bg-gradient-to-r from-red-600 to-orange-600 border-red-500/50"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-500/50"
                      )}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="w-5 h-5 text-white" />
                      ) : message.role === "error" ? (
                        <AlertCircle className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </Avatar>
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm shadow-lg transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(124,58,237,0.3)]",
                        message.role === "assistant"
                          ? "bg-gray-800/80 text-gray-100 rounded-tl-none border-l-2 border-purple-500/50"
                          : message.role === "error"
                          ? "bg-red-900/30 text-red-100 rounded-tl-none border-l-2 border-red-500/50"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none"
                      )}
                    >
                      {message.role === "assistant" ? (
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex w-full mb-4 justify-start animate-in fade-in duration-300">
                  <div className="flex items-start gap-3 max-w-[80%]">
                    <Avatar className="bg-gradient-to-r from-purple-600 to-blue-600 h-10 w-10 border-2 border-purple-500/50">
                      <Bot className="w-5 h-5 text-white" />
                    </Avatar>
                    <div className="rounded-2xl rounded-tl-none px-4 py-3 text-sm bg-gray-800/80 text-gray-100 shadow-lg border-l-2 border-purple-500/50">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <span className="text-xs text-gray-400 ml-1">
                          NEXUS is thinking...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} className="h-4" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm"
            >
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask NEXUS anything..."
                    className="bg-gray-800/50 border-gray-700 text-white pr-10 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                    disabled={isLoading}
                  />
                  <Zap className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 opacity-70" />
                </div>
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-[0_0_10px_rgba(124,58,237,0.3)] hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-center text-gray-500">
                Powered by{" "}
                <a
                  href="https://night-owls.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Night Owls
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
