'use client';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold">Palmate LLC</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Features</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Pricing</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">About</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">Contact</Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to Palmate LLC
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Your trusted partner in innovative solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © {mounted ? new Date().getFullYear() : "2024"} Palmate LLC. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">Terms</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  )
}
