"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Instagram, Linkedin, Globe, Code } from "lucide-react"; // Added Globe and Code icons

// DeveloperCard component
interface DeveloperCardProps {
  name: string;
  role: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  hoverBorder: string;
  imageUrls?: string[]; // Array of image URLs (made optional)
  socialLinks?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string; // Added website link
    devpost?: string; // Added Devpost link
  };
}

export default function DeveloperCard({
  name,
  role,
  initials,
  gradientFrom,
  gradientTo,
  hoverBorder,
  imageUrls = [], // Default to empty array if not provided
  socialLinks = {}, // Default to empty object if not provided
}: DeveloperCardProps) {
  const [imageError, setImageError] = useState([false, false, false]); // State for each image error

  return (
    <Card
      className={`overflow-hidden border-gray-800 bg-gray-900/50 hover:border-${hoverBorder} transition-all`}
    >
      <CardContent className="p-6">
        <div
          className={`w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-r from-${gradientFrom} to-${gradientTo} relative`}
        >
          {imageUrls.length > 0 ? (
            imageUrls.map((url, index) => (
              <div key={index} className="flex flex-col items-center">
                {!imageError[index] && url ? (
                  <img
                    src={url || "/placeholder.svg"}
                    alt={`${name} image ${index + 1}`}
                    className="object-cover w-full h-full"
                    onError={() => {
                      const newImageError = [...imageError];
                      newImageError[index] = true;
                      setImageError(newImageError);
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-white">
                    {initials}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-white">
              {initials}
            </div>
          )}
        </div>
        <h3 className="mb-1 text-xl font-bold text-center text-white">
          {name}
        </h3>
        <p className="mb-4 text-sm text-center text-gray-400">{role}</p>
        <div className="flex justify-center gap-4">
          {socialLinks.github && (
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Github className="w-5 h-5" />
              </Button>
            </Link>
          )}
          {socialLinks.linkedin && (
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </Link>
          )}
          {socialLinks.instagram && (
            <Link
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </Link>
          )}
          {socialLinks.website && (
            <Link
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Globe className="w-5 h-5" />
              </Button>
            </Link>
          )}
          {socialLinks.devpost && (
            <Link
              href={socialLinks.devpost}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Code className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
