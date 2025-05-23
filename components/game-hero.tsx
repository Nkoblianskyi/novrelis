"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function GameHero() {
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white text-amber-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Alpine Rush</h1>
            <p className="text-xl mb-8 text-amber-800">
              Experience the thrill of skiing down breathtaking mountain slopes. Navigate challenging terrain, perform
              impressive tricks, and become the ultimate skiing champion!
            </p>
            <div className="flex flex-col items-center md:items-start">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white text-xl px-8 py-6"
                onClick={handleStartGame}
              >
                Hit the Slopes
              </Button>
              <p className="mt-3 text-sm font-bold text-amber-700 bg-amber-50 px-3 py-2 rounded-md inline-block border border-amber-200">
                For entertainment purposes only. No real money. No prizes. Ages 18+.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
            <div className="w-full h-full relative">
              <SkierIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Snow effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/snow-pattern.png')", backgroundSize: "100px" }}
        ></div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              Important Notice
            </DialogTitle>
            <DialogDescription>Please read and confirm before continuing to the game.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-amber-50 p-4 rounded-md text-sm text-amber-700 border border-amber-200">
              <p className="font-bold mb-2">This is a free social game:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>It is not a casino</li>
                <li>No real money can be won or lost</li>
                <li>No prizes are offered</li>
                <li>For entertainment purposes only</li>
                <li>Intended for users 18+</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleConfirm} className="bg-amber-500 hover:bg-amber-600 text-white">
              I Understand, Continue to Game
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function SkierIllustration() {
  return (
    <div className="w-full h-full relative">
      {/* Background Scene */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="800" height="600" fill="#e0f2fe" />

        {/* Sun */}
        <circle cx="650" cy="100" r="60" fill="#fcd34d" />
        <circle cx="650" cy="100" r="70" fill="#fcd34d" opacity="0.3" />

        {/* Mountains in background */}
        <path
          d="M0,200 L100,100 L200,180 L300,80 L400,150 L500,50 L600,120 L700,70 L800,150 L800,600 L0,600 Z"
          fill="#f8fafc"
        />

        {/* Snow-covered mountains in foreground */}
        <path
          d="M-100,250 L0,150 L100,200 L200,100 L300,180 L400,120 L500,200 L600,150 L700,220 L800,180 L900,250 L900,600 L-100,600 Z"
          fill="#f1f5f9"
        />

        {/* Ski slope */}
        <path d="M0,300 L800,500 L800,600 L0,600 Z" fill="#f8fafc" />

        {/* Trees */}
        <g className="tree" transform="translate(150, 350) scale(0.7)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(100, 380) scale(0.5)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(650, 460) scale(0.6)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(700, 480) scale(0.4)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        {/* Skier Character */}
        <g transform="translate(400, 400)">
          {/* Skier Body */}
          <rect x="-10" y="-40" width="20" height="30" rx="5" fill="#0369a1" />

          {/* Skier Head */}
          <circle cx="0" cy="-50" r="10" fill="#f8fafc" />

          {/* Ski Helmet */}
          <path d="M-10,-55 C-10,-60 10,-60 10,-55 C10,-45 -10,-45 -10,-55" fill="#0284c7" />

          {/* Ski Goggles */}
          <rect x="-8" y="-53" width="16" height="5" rx="2" fill="#fbbf24" />

          {/* Skier Arms */}
          <line x1="-10" y1="-30" x2="-25" y2="-15" stroke="#0369a1" strokeWidth="5" strokeLinecap="round" />
          <line x1="10" y1="-30" x2="25" y2="-15" stroke="#0369a1" strokeWidth="5" strokeLinecap="round" />

          {/* Ski Poles */}
          <line x1="-25" y1="-15" x2="-30" y2="20" stroke="#737373" strokeWidth="2" />
          <line x1="25" y1="-15" x2="30" y2="20" stroke="#737373" strokeWidth="2" />

          {/* Skier Legs */}
          <line x1="-5" y1="-10" x2="-15" y2="10" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" />
          <line x1="5" y1="-10" x2="15" y2="10" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" />

          {/* Skis */}
          <rect x="-25" y="10" width="40" height="3" rx="1" fill="#fbbf24" transform="rotate(15 -25 10)" />
          <rect x="-5" y="10" width="40" height="3" rx="1" fill="#fbbf24" transform="rotate(15 -5 10)" />

          {/* Snow Spray */}
          <path
            d="M-20,15 C-25,20 -30,15 -35,20 M-15,18 C-20,23 -25,18 -30,23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,15 C5,20 10,15 15,20 M5,18 C10,23 15,18 20,23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Snow particles */}
        <g className="snow-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 800}
              cy={Math.random() * 600}
              r={Math.random() * 2 + 1}
              fill="white"
              opacity={Math.random() * 0.8 + 0.2}
            />
          ))}
        </g>

        {/* Ski lift in background */}
        <line x1="100" y1="150" x2="700" y2="250" stroke="#64748b" strokeWidth="2" />
        <g transform="translate(200, 170)">
          <line x1="0" y1="0" x2="0" y2="30" stroke="#64748b" strokeWidth="2" />
          <rect x="-10" y="30" width="20" height="15" rx="2" fill="#0ea5e9" />
        </g>
        <g transform="translate(400, 200)">
          <line x1="0" y1="0" x2="0" y2="30" stroke="#64748b" strokeWidth="2" />
          <rect x="-10" y="30" width="20" height="15" rx="2" fill="#0ea5e9" />
        </g>
        <g transform="translate(600, 230)">
          <line x1="0" y1="0" x2="0" y2="30" stroke="#64748b" strokeWidth="2" />
          <rect x="-10" y="30" width="20" height="15" rx="2" fill="#0ea5e9" />
        </g>
      </svg>
    </div>
  )
}
