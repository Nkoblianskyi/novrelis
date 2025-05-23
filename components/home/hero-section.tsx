"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function HeroSection() {
  const [warningOpen, setWarningOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Gold gradient accent */}
        <div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-200 via-amber-100 to-transparent rounded-bl-full opacity-60"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />

        {/* Bottom decorative pattern */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/4 bg-teal-50"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            maskImage: 'url("/bf1909e07f13b84dd376f1406331e2df.jpg")',
            maskSize: "cover",
            WebkitMaskImage: 'url("/snow-pattern.png")',
            WebkitMaskSize: "cover",
          }}
        />

        {/* Subtle gold particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-teal-800 leading-tight">
              Alpine <span className="text-amber-500">Ski</span> Adventure
            </h1>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              Join our free social platform for entertainment purposes only. Control your skier as they race down
              exciting slopes, collecting snowflakes, Christmas trees, reindeer, and other winter treasures. No real
              money involved.
            </p>
            <p className="text-sm font-medium text-teal-700 bg-teal-50 px-4 py-2 rounded-md inline-block border border-teal-200">
              For entertainment purposes only. No real money. Ages 18+.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-teal-100">
              <Image
                src="/bf1909e07f13b84dd376f1406331e2df.jpg"
                alt="Urban Raccoon Adventure"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-800/30 to-transparent"></div>

              {/* Floating elements */}

            </div>
          </motion.div>
        </div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              Important Notice
            </DialogTitle>
            <DialogDescription>Please read and confirm before starting your skiing adventure.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-teal-50 p-4 rounded-md text-sm text-teal-700 border border-teal-200">
              <p className="font-bold mb-2">This is a free social platform:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>This is not a gambling game</li>
                <li>No real money</li>
                <li>No winnings</li>
                <li>Everything is virtual and has no value</li>
                <li>Completely free to use</li>
                <li>Exclusively for entertainment purposes</li>
                <li>For users 18+</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleConfirm} className="bg-teal-500 hover:bg-teal-600 text-white">
              I Understand, Start Skiing
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, 15px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  )
}
