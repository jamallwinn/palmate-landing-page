"use client";

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Coffee, Heart, Users, HeartHandshake, Syringe, Baby, Hospital, Droplet, ShoppingBag, Utensils, Droplets } from "lucide-react"

export default function LandingPage() {
  const year = new Date().getFullYear();
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <HeartHandshake className="h-6 w-6 text-pink-500" />
          <span className="ml-2 text-2xl font-bold text-pink-700">Palmate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Features</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">How It Works</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">About Us</Link>
        </nav>
      </header>
      {/* Rest of your component remains the same */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-pink-50">
        <p className="text-xs text-gray-600">© {year} Palmate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">Privacy</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">Contact</Link>
        </nav>
      </footer>
    </div>
  )
}
