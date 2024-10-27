import { useClient } from "@/hooks/use-client";import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Coffee, Heart, Users, HeartHandshake, Syringe, Baby, Hospital, Droplet, ShoppingBag, Utensils, Droplets } from "lucide-react"

export default function LandingPage() {
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-pink-800">
                  Connect, Support, Thrive with Palmate
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Schedule meetups, find companions for various activities, and enjoy social time with other women in your area.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-pink-600 text-white hover:bg-pink-700">Get Started</Button>
                <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full overflow-hidden bg-purple-100 py-4">
          <div className="animate-marquee whitespace-nowrap">
            {[
              "Coffee Meetups",
              "Pregnancy Companions",
              "Dinner Dates",
              "Shopping Buddies",
              "Workout Partners",
              "Book Club",
              "Chemo Appointment Mate",
              "Maternity Appointment Mate",
              "Outpatient Care Mate",
              "Dialysis Appointment Mate",
              "Coffee Mate",
              "Lunch Mate",
              "Shopping Mate",
              "Spa Mate",
            ].map((item, index) => (
              <span key={index} className="text-2xl font-bold text-purple-700 mx-8">
                {item}
              </span>
            ))}
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-pink-700">
              Why Choose Palmate?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Safe Community</h3>
                <p className="text-gray-600">Connect with verified women in a secure environment.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book meetups that fit your busy lifestyle.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Heart className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Supportive Network</h3>
                <p className="text-gray-600">Find companions for various life events and activities.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Coffee className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Diverse Meetups</h3>
                <p className="text-gray-600">From coffee dates to medical appointments, we have got you covered.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-purple-800">
              Discover Connections
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Coffee Meetups", icon: Coffee },
                { title: "Pregnancy Companions", icon: Baby },
                { title: "Dinner Dates", icon: Utensils },
                { title: "Shopping Buddies", icon: ShoppingBag },
                { title: "Workout Partners", icon: Users },
                { title: "Book Club", icon: Heart },
                { title: "Chemo Appointment Mate", icon: Syringe },
                { title: "Maternity Appointment Mate", icon: Baby },
                { title: "Outpatient Care Mate", icon: Hospital },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                  <item.icon className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">{item.title}</h3>
                  <p className="text-gray-600">Connect with like-minded women for {item.title.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-pink-800">
              Coming Soon
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Dialysis Appointment Mate", icon: Droplet },
                { title: "Coffee Mate", icon: Coffee },
                { title: "Lunch Mate", icon: Utensils },
                { title: "Shopping Mate", icon: ShoppingBag },
                { title: "Spa Mate", icon: Droplets },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                  <item.icon className="h-12 w-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-pink-700">{item.title}</h3>
                  <p className="text-gray-600">Stay tuned for this exciting new service!</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                  Ready to Join Palmate?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Sign up now and start connecting with amazing women in your area!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 border-purple-200"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700">
                    Join Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-pink-50">
        <p className="text-xs text-gray-600">© 2024 Palmate. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">Privacy</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">Contact</Link>
        </nav>
      </footer>
    </div>
  )
}
