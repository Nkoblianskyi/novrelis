"use client"

import { useEffect, useState } from "react"

export default function AboutGame() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Alpine Rush</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-amber-700">Skiing Adventure</h3>
            <p className="mb-4 text-gray-700">
              Alpine Rush is a social game for entertainment. No purchases, no winnings, no monetary value. Control your
              skier as they navigate down challenging slopes, avoid obstacles, and perform impressive tricks.
            </p>
            <p className="mb-4 text-gray-700">
              Experience the thrill of skiing down various mountain terrains, from gentle beginner slopes to challenging
              expert runs. Earn points by successfully completing runs and performing tricks while avoiding crashes.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="font-bold mb-2">Game Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Multiple ski slopes with varying difficulty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Realistic skiing physics and controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Exciting trick system with point rewards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Compete with friends on the global leaderboard</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2 border border-amber-100">
              <SkiSlopeAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2 border border-amber-100">
              <SkiLiftAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2 border border-amber-100">
              <SkierAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2 border border-amber-100">
              <TrickAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkiSlopeAnimation() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#e0f2fe" />

      {/* Sun */}
      <circle cx="250" cy="40" r="20" fill="#fcd34d" className="animate-pulse" />

      {/* Mountains */}
      <path d="M0,80 L50,30 L100,70 L150,20 L200,60 L250,10 L300,50 L300,200 L0,200 Z" fill="#f1f5f9" />

      {/* Ski Slope */}
      <path d="M0,100 L300,180 L300,200 L0,200 Z" fill="#f8fafc" />

      {/* Trees */}
      <g className="tree" transform="translate(50, 110) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(80, 120) scale(0.2)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(230, 160) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(260, 170) scale(0.2)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      {/* Ski Trail Markers */}
      <g transform="translate(120, 140)">
        <rect x="-1" y="-10" width="2" height="10" fill="#0ea5e9" />
        <circle cx="0" cy="-12" r="3" fill="#0ea5e9" />
      </g>

      <g transform="translate(180, 150)">
        <rect x="-1" y="-10" width="2" height="10" fill="#0ea5e9" />
        <circle cx="0" cy="-12" r="3" fill="#0ea5e9" />
      </g>

      {/* Snow particles */}
      <g className="snow-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 300}
            cy={Math.random() * 200}
            r={Math.random() * 1.5 + 0.5}
            fill="white"
            opacity={Math.random() * 0.8 + 0.2}
          />
        ))}
      </g>
    </svg>
  )
}

function SkiLiftAnimation() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev < 100 ? prev + 0.5 : 0))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Mountains */}
      <path d="M0,70 L50,30 L100,60 L150,20 L200,50 L250,10 L300,40 L300,200 L0,200 Z" fill="#f1f5f9" />

      {/* Ski Slope */}
      <path d="M0,100 L300,150 L300,200 L0,200 Z" fill="#f8fafc" />

      {/* Ski Lift Cable */}
      <line x1="50" y1="80" x2="250" y2="100" stroke="#64748b" strokeWidth="2" />

      {/* Ski Lift Poles */}
      <rect x="50" y="80" width="4" height="70" fill="#64748b" />
      <rect x="150" y="90" width="4" height="60" fill="#64748b" />
      <rect x="250" y="100" width="4" height="50" fill="#64748b" />

      {/* Ski Lift Chairs */}
      <g transform={`translate(${50 + position * 2}, ${80 + position * 0.2})`}>
        <line x1="0" y1="0" x2="0" y2="20" stroke="#64748b" strokeWidth="2" />
        <rect x="-10" y="20" width="20" height="15" rx="2" fill="#0ea5e9" />
        <g transform="translate(0, 25)">
          <circle cx="-5" cy="0" r="3" fill="#0369a1" /> {/* Skier */}
          <rect x="-8" y="3" width="16" height="2" fill="#fbbf24" /> {/* Skis */}
        </g>
      </g>

      <g transform={`translate(${150 + position * 2}, ${90 + position * 0.2})`}>
        <line x1="0" y1="0" x2="0" y2="20" stroke="#64748b" strokeWidth="2" />
        <rect x="-10" y="20" width="20" height="15" rx="2" fill="#0ea5e9" />
      </g>

      <g transform={`translate(${250 + position * 2 - 200}, ${100 + position * 0.2})`}>
        <line x1="0" y1="0" x2="0" y2="20" stroke="#64748b" strokeWidth="2" />
        <rect x="-10" y="20" width="20" height="15" rx="2" fill="#0ea5e9" />
        <g transform="translate(0, 25)">
          <circle cx="-5" cy="0" r="3" fill="#0369a1" /> {/* Skier */}
          <rect x="-8" y="3" width="16" height="2" fill="#fbbf24" /> {/* Skis */}
        </g>
      </g>

      {/* Trees */}
      <g className="tree" transform="translate(80, 130) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(180, 140) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(220, 150) scale(0.2)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      {/* Snow particles */}
      <g className="snow-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 300}
            cy={Math.random() * 200}
            r={Math.random() * 1.5 + 0.5}
            fill="white"
            opacity={Math.random() * 0.8 + 0.2}
          />
        ))}
      </g>
    </svg>
  )
}

function SkierAnimation() {
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev + 2 * direction
        if (newPosition > 100 || newPosition < 0) {
          setDirection((d) => -d)
        }
        return newPosition
      })
    }, 50)
    return () => clearInterval(interval)
  }, [direction])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#f1f5f9" />

      {/* Ski Slope */}
      <path d="M0,50 L300,150 L300,200 L0,200 Z" fill="#f8fafc" />

      {/* Skier */}
      <g transform={`translate(${150 - position}, ${100 + position * 0.5})`}>
        {/* Skier Body */}
        <rect x="-5" y="-20" width="10" height="15" rx="3" fill="#0369a1" />

        {/* Skier Head */}
        <circle cx="0" cy="-25" r="5" fill="#f8fafc" />

        {/* Ski Helmet */}
        <path d="M-5,-27 C-5,-30 5,-30 5,-27 C5,-22 -5,-22 -5,-27" fill="#0284c7" />

        {/* Ski Goggles */}
        <rect x="-4" y="-26" width="8" height="2" rx="1" fill="#fbbf24" />

        {/* Skier Arms */}
        <line x1="-5" y1="-15" x2="-12" y2="-8" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="-15" x2="12" y2="-8" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />

        {/* Ski Poles */}
        <line x1="-12" y1="-8" x2="-15" y2="10" stroke="#737373" strokeWidth="1" />
        <line x1="12" y1="-8" x2="15" y2="10" stroke="#737373" strokeWidth="1" />

        {/* Skier Legs */}
        <line x1="-2" y1="-5" x2="-7" y2="5" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="-5" x2="7" y2="5" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />

        {/* Skis */}
        <rect x="-12" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(15 -12 5)" />
        <rect x="-2" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(15 -2 5)" />

        {/* Snow Spray */}
        <path
          d="M-10,7 C-12,10 -15,7 -17,10 M-7,9 C-10,12 -12,9 -15,12"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path d="M0,7 C2,10 5,7 7,10 M2,9 C5,12 7,9 10,12" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Trees */}
      <g className="tree" transform="translate(50, 100) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(80, 120) scale(0.2)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(230, 160) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      {/* Ski Trail Markers */}
      <g transform="translate(120, 140)">
        <rect x="-1" y="-10" width="2" height="10" fill="#0ea5e9" />
        <circle cx="0" cy="-12" r="3" fill="#0ea5e9" />
      </g>

      <g transform="translate(200, 170)">
        <rect x="-1" y="-10" width="2" height="10" fill="#0ea5e9" />
        <circle cx="0" cy="-12" r="3" fill="#0ea5e9" />
      </g>

      {/* Snow particles */}
      <g className="snow-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 300}
            cy={Math.random() * 200}
            r={Math.random() * 1.5 + 0.5}
            fill="white"
            opacity={Math.random() * 0.8 + 0.2}
          />
        ))}
      </g>
    </svg>
  )
}

function TrickAnimation() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev < 3 ? prev + 1 : 0))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Mountains */}
      <path d="M0,70 L50,30 L100,60 L150,20 L200,50 L250,10 L300,40 L300,200 L0,200 Z" fill="#f1f5f9" />

      {/* Ski Jump */}
      <path d="M50,100 L150,150 L300,150 L300,200 L0,200 L0,100 Z" fill="#f8fafc" />
      <path d="M100,120 L150,150 L200,150" fill="none" stroke="#e2e8f0" strokeWidth="2" />

      {/* Skier doing trick - different frames */}
      {frame === 0 && (
        <g transform="translate(150, 100)">
          {/* Taking off */}
          <rect x="-5" y="-20" width="10" height="15" rx="3" fill="#0369a1" />
          <circle cx="0" cy="-25" r="5" fill="#f8fafc" />
          <path d="M-5,-27 C-5,-30 5,-30 5,-27 C5,-22 -5,-22 -5,-27" fill="#0284c7" />
          <rect x="-4" y="-26" width="8" height="2" rx="1" fill="#fbbf24" />
          <line x1="-5" y1="-15" x2="-12" y2="-8" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="-15" x2="12" y2="-8" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
          <line x1="-12" y1="-8" x2="-15" y2="10" stroke="#737373" strokeWidth="1" />
          <line x1="12" y1="-8" x2="15" y2="10" stroke="#737373" strokeWidth="1" />
          <line x1="-2" y1="-5" x2="-7" y2="5" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="-5" x2="7" y2="5" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
          <rect x="-12" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(15 -12 5)" />
          <rect x="-2" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(15 -2 5)" />
        </g>
      )}

      {frame === 1 && (
        <g transform="translate(170, 90)">
          {/* Mid-air rotation */}
          <rect x="-5" y="-20" width="10" height="15" rx="3" fill="#0369a1" transform="rotate(45)" />
          <circle cx="0" cy="-25" r="5" fill="#f8fafc" transform="rotate(45)" />
          <path d="M-5,-27 C-5,-30 5,-30 5,-27 C5,-22 -5,-22 -5,-27" fill="#0284c7" transform="rotate(45)" />
          <rect x="-4" y="-26" width="8" height="2" rx="1" fill="#fbbf24" transform="rotate(45)" />
          <line
            x1="-5"
            y1="-15"
            x2="-15"
            y2="-15"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(45)"
          />
          <line
            x1="5"
            y1="-15"
            x2="15"
            y2="-15"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(45)"
          />
          <line x1="-15" y1="-15" x2="-20" y2="-5" stroke="#737373" strokeWidth="1" transform="rotate(45)" />
          <line x1="15" y1="-15" x2="20" y2="-5" stroke="#737373" strokeWidth="1" transform="rotate(45)" />
          <line
            x1="-2"
            y1="-5"
            x2="-10"
            y2="0"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(45)"
          />
          <line
            x1="2"
            y1="-5"
            x2="10"
            y2="0"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(45)"
          />
          <rect x="-15" y="0" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(60)" />
          <rect x="-5" y="0" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(60)" />
        </g>
      )}

      {frame === 2 && (
        <g transform="translate(190, 90)">
          {/* Full rotation */}
          <rect x="-5" y="-20" width="10" height="15" rx="3" fill="#0369a1" transform="rotate(180)" />
          <circle cx="0" cy="-25" r="5" fill="#f8fafc" transform="rotate(180)" />
          <path d="M-5,-27 C-5,-30 5,-30 5,-27 C5,-22 -5,-22 -5,-27" fill="#0284c7" transform="rotate(180)" />
          <rect x="-4" y="-26" width="8" height="2" rx="1" fill="#fbbf24" transform="rotate(180)" />
          <line
            x1="-5"
            y1="-15"
            x2="-12"
            y2="-8"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(180)"
          />
          <line
            x1="5"
            y1="-15"
            x2="12"
            y2="-8"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(180)"
          />
          <line x1="-12" y1="-8" x2="-15" y2="10" stroke="#737373" strokeWidth="1" transform="rotate(180)" />
          <line x1="12" y1="-8" x2="15" y2="10" stroke="#737373" strokeWidth="1" transform="rotate(180)" />
          <line
            x1="-2"
            y1="-5"
            x2="-7"
            y2="5"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(180)"
          />
          <line
            x1="2"
            y1="-5"
            x2="7"
            y2="5"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(180)"
          />
          <rect x="-12" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(195)" />
          <rect x="-2" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(195)" />
        </g>
      )}

      {frame === 3 && (
        <g transform="translate(210, 100)">
          {/* Landing */}
          <rect x="-5" y="-20" width="10" height="15" rx="3" fill="#0369a1" transform="rotate(315)" />
          <circle cx="0" cy="-25" r="5" fill="#f8fafc" transform="rotate(315)" />
          <path d="M-5,-27 C-5,-30 5,-30 5,-27 C5,-22 -5,-22 -5,-27" fill="#0284c7" transform="rotate(315)" />
          <rect x="-4" y="-26" width="8" height="2" rx="1" fill="#fbbf24" transform="rotate(315)" />
          <line
            x1="-5"
            y1="-15"
            x2="-12"
            y2="-8"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(315)"
          />
          <line
            x1="5"
            y1="-15"
            x2="12"
            y2="-8"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(315)"
          />
          <line x1="-12" y1="-8" x2="-15" y2="10" stroke="#737373" strokeWidth="1" transform="rotate(315)" />
          <line x1="12" y1="-8" x2="15" y2="10" stroke="#737373" strokeWidth="1" transform="rotate(315)" />
          <line
            x1="-2"
            y1="-5"
            x2="-7"
            y2="5"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(315)"
          />
          <line
            x1="2"
            y1="-5"
            x2="7"
            y2="5"
            stroke="#1e3a8a"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(315)"
          />
          <rect x="-12" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(330)" />
          <rect x="-2" y="5" width="20" height="1" rx="0.5" fill="#fbbf24" transform="rotate(330)" />
          <path
            d="M-10,7 C-12,10 -15,7 -17,10 M-7,9 C-10,12 -12,9 -15,12"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Score popup */}
      {frame === 3 && (
        <g transform="translate(210, 70)">
          <rect x="-25" y="-15" width="50" height="20" rx="5" fill="white" stroke="#fbbf24" strokeWidth="2" />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fbbf24"
            fontSize="12"
            fontWeight="bold"
          >
            +500 pts
          </text>
        </g>
      )}

      {/* Trees */}
      <g className="tree" transform="translate(50, 120) scale(0.2)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(250, 160) scale(0.3)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#0f766e" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#0f766e" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#0f766e" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      {/* Snow particles */}
      <g className="snow-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 300}
            cy={Math.random() * 200}
            r={Math.random() * 1.5 + 0.5}
            fill="white"
            opacity={Math.random() * 0.8 + 0.2}
          />
        ))}
      </g>
    </svg>
  )
}
