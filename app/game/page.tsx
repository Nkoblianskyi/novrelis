"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  RefreshCw,
  Mountain,
  Info,
  Wind,
  Trophy,
  AlertTriangle,
  Trees,
  Sparkles,
  Sun,
  CloudSnow,
  CloudFog,
  CloudDrizzle,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import React from "react"

// Slope types
const SLOPE_TYPES = [
  { name: "Green (Easy)", icon: <div className="text-3xl">🟢</div>, points: 5, rarity: 0.3 },
  { name: "Blue (Intermediate)", icon: <div className="text-3xl">🔵</div>, points: 10, rarity: 0.3 },
  { name: "Red (Advanced)", icon: <div className="text-3xl">🔴</div>, points: 15, rarity: 0.2 },
  { name: "Black (Expert)", icon: <div className="text-3xl">⚫</div>, points: 20, rarity: 0.1 },
  { name: "Moguls", icon: <div className="text-3xl">⛰️</div>, points: 12, rarity: 0.2 },
  { name: "Powder", icon: <div className="text-3xl">❄️</div>, points: 8, rarity: 0.3 },
  { name: "Groomed", icon: <div className="text-3xl">🏂</div>, points: 6, rarity: 0.4 },
  { name: "Icy Patch", icon: <AlertTriangle className="h-8 w-8 text-blue-500" />, points: -5, rarity: 0.2 },
  { name: "Trees", icon: <Trees className="h-8 w-8 text-green-600" />, points: -8, rarity: 0.15 },
  { name: "Rocks", icon: <div className="text-3xl">🪨</div>, points: -10, rarity: 0.1 },
]

// Trick types
const TRICK_TYPES = [
  { name: "Jump", icon: <div className="text-3xl">⬆️</div>, points: 8, rarity: 0.3 },
  { name: "Spin", icon: <div className="text-3xl">🔄</div>, points: 12, rarity: 0.2 },
  { name: "Flip", icon: <div className="text-3xl">🤸</div>, points: 15, rarity: 0.15 },
  { name: "Grab", icon: <div className="text-3xl">👐</div>, points: 10, rarity: 0.25 },
  { name: "Rail Slide", icon: <div className="text-3xl">➖</div>, points: 12, rarity: 0.2 },
  { name: "Perfect Landing", icon: <Sparkles className="h-8 w-8 text-amber-500" />, points: 20, rarity: 0.1 },
  { name: "Combo", icon: <div className="text-3xl">🔥</div>, points: 25, rarity: 0.05 },
  { name: "Fall", icon: <div className="text-3xl">💥</div>, points: -10, rarity: 0.2 },
  { name: "Crash", icon: <div className="text-3xl">🚑</div>, points: -15, rarity: 0.15 },
  { name: "Out of Bounds", icon: <div className="text-3xl">⛔</div>, points: -20, rarity: 0.1 },
]

// Weather conditions
const WEATHER_CONDITIONS = [
  { name: "Sunny", icon: Sun, modifier: 1, description: "Perfect visibility and great snow conditions" },
  { name: "Snowing", icon: CloudSnow, modifier: 0.8, description: "Fresh powder but reduced visibility" },
  { name: "Foggy", icon: CloudFog, modifier: 0.7, description: "Very limited visibility makes skiing challenging" },
  { name: "Windy", icon: Wind, modifier: 0.9, description: "Strong winds affect balance and control" },
  { name: "Rainy", icon: CloudDrizzle, modifier: 0.6, description: "Wet conditions make slopes icy and dangerous" },
]

export default function GamePage() {
  // Game state
  const [score, setScore] = useState(100)
  const [isSkiing, setIsSkiing] = useState(false)
  const [mode, setMode] = useState("slopes")
  const [currentWeather, setCurrentWeather] = useState(WEATHER_CONDITIONS[0])
  const [runsCompleted, setRunsCompleted] = useState(0)
  const [gameHistory, setGameHistory] = useState([])
  const historyRef = useRef(null)
  const [grid, setGrid] = useState(generateEmptyGrid())
  const [showInfoModal, setShowInfoModal] = useState(false)

  // Initialize game
  useEffect(() => {
    // Change weather every 3 minutes
    const weatherInterval = setInterval(() => {
      const randomWeather = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)]
      setCurrentWeather(randomWeather)
      addToHistory(`Weather changed to ${randomWeather.name}`)
    }, 180000)

    return () => clearInterval(weatherInterval)
  }, [])

  // Scroll to bottom of history when updated
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [gameHistory])

  // Generate empty 3x3 grid
  function generateEmptyGrid() {
    return Array(3)
      .fill()
      .map(() => Array(3).fill(null))
  }

  // Add entry to game history
  const addToHistory = (message) => {
    const timestamp = new Date().toLocaleTimeString()
    setGameHistory([...gameHistory, { message, timestamp }])
  }

  // Change mode
  const changeMode = (newMode) => {
    setMode(newMode)
    addToHistory(`Switched to ${newMode === "slopes" ? "Slope Skiing" : "Trick Park"}`)
  }

  // Get random element based on mode
  const getRandomElement = () => {
    const elements = mode === "slopes" ? SLOPE_TYPES : TRICK_TYPES

    // Use rarity to determine probability
    const totalRarity = elements.reduce((sum, element) => sum + element.rarity, 0)
    let random = Math.random() * totalRarity

    for (const element of elements) {
      random -= element.rarity
      if (random <= 0) {
        return element
      }
    }

    return elements[0] // Fallback
  }

  // Fill grid with random elements
  const fillGrid = () => {
    const newGrid = generateEmptyGrid()

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        newGrid[row][col] = getRandomElement()
      }
    }

    return newGrid
  }

  // Calculate points from grid
  const calculatePoints = (grid) => {
    let totalPoints = 0
    const foundElements = []

    // Check each cell
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col]) {
          const element = grid[row][col]
          totalPoints += element.points
          foundElements.push(element)
        }
      }
    }

    // Apply weather modifier
    totalPoints = Math.floor(totalPoints * currentWeather.modifier)

    return { totalPoints, foundElements }
  }

  // Main game ski function
  const startSkiing = () => {
    if (isSkiing) return

    // Check if player has enough points
    if (score < 10) {
      addToHistory("Not enough points to continue skiing!")
      return
    }

    setIsSkiing(true)
    setScore(score - 10) // Cost to ski

    // Add to history
    addToHistory(`Started ${mode === "slopes" ? "skiing down the slope" : "performing tricks"}`)

    // Simulate skiing
    setTimeout(() => {
      const newGrid = fillGrid()
      setGrid(newGrid)

      // Calculate results
      const { totalPoints, foundElements } = calculatePoints(newGrid)

      // Update score
      setScore((score) => score + totalPoints)

      // Update runs completed
      setRunsCompleted((runs) => runs + 1)

      // Log findings
      if (totalPoints > 0) {
        addToHistory(`Great run! Earned ${totalPoints} points!`)
      } else if (totalPoints < 0) {
        addToHistory(`Tough run, lost ${Math.abs(totalPoints)} points.`)
      } else {
        addToHistory("Average run, no points gained or lost.")
      }

      setIsSkiing(false)
    }, 1500)
  }

  return (
    <div className="py-8 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-teal-800">Alpine Rush</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowInfoModal(true)}>
              <Info className="h-4 w-4 mr-1" />
              About
            </Button>
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">18+</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Game Area - 2 columns wide */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center bg-teal-100 px-3 py-1 rounded-lg mr-3 border border-teal-200">
                            {React.createElement(currentWeather.icon, { className: "h-4 w-4 text-teal-600 mr-1" })}
                            <span className="text-sm font-medium">{currentWeather.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{currentWeather.description}</p>
                          <p className="text-sm text-gray-500">Point modifier: {currentWeather.modifier}x</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                      <p className="text-sm">Points</p>
                      <p className="text-2xl font-bold">{score}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-lg border border-teal-200">
                      <p className="text-sm font-medium">Runs: {runsCompleted}</p>
                    </div>
                    <p className="text-xs text-gray-500 italic mt-1">
                      Free social simulation game. No real money. For entertainment only. Ages 18+.
                    </p>
                  </div>
                </div>

                {/* Mode Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-teal-800">Choose Mode</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={mode === "slopes" ? "default" : "outline"}
                      className={`h-auto py-3 ${mode === "slopes" ? "bg-teal-600" : ""}`}
                      onClick={() => changeMode("slopes")}
                      disabled={isSkiing}
                    >
                      <div className="flex flex-col items-center">
                        <Mountain className="h-6 w-6 mb-1" />
                        <span>Slope Skiing</span>
                      </div>
                    </Button>

                    <Button
                      variant={mode === "tricks" ? "default" : "outline"}
                      className={`h-auto py-3 ${mode === "tricks" ? "bg-teal-700" : ""}`}
                      onClick={() => changeMode("tricks")}
                      disabled={isSkiing}
                    >
                      <div className="flex flex-col items-center">
                        <Trophy className="h-6 w-6 mb-1" />
                        <span>Trick Park</span>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Main Grid */}
                <div
                  className={`bg-gradient-to-b ${mode === "slopes" ? "from-teal-500 to-teal-600" : "from-teal-600 to-teal-700"} p-6 rounded-xl mb-6`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {mode === "slopes" ? "Slope Run" : "Trick Performance"}
                    </h3>
                    <Badge className="bg-teal-200 text-teal-800 border border-teal-300">
                      {currentWeather.name} Weather
                    </Badge>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-3 gap-2">
                      {grid.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`bg-white/20 rounded-lg overflow-hidden flex items-center justify-center h-24 ${isSkiing ? "animate-pulse" : ""}`}
                          >
                            {cell ? (
                              <div className="flex flex-col items-center">
                                {cell.icon}
                                <span className="text-white text-xs mt-1">
                                  {cell.points > 0 ? `+${cell.points}` : cell.points}
                                </span>
                              </div>
                            ) : (
                              <div className="text-white/30 text-xs">?</div>
                            )}
                          </div>
                        )),
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-white hover:bg-teal-50 text-teal-600 hover:text-teal-700 text-xl py-6 border border-teal-200"
                    onClick={startSkiing}
                    disabled={isSkiing || score < 10}
                  >
                    {isSkiing ? (
                      <div className="flex items-center">
                        <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                        Skiing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        {mode === "slopes" ? (
                          <>
                            <Mountain className="h-5 w-5 mr-2" />
                            Start Skiing (10 points)
                          </>
                        ) : (
                          <>
                            <Trophy className="h-5 w-5 mr-2" />
                            Perform Tricks (10 points)
                          </>
                        )}
                      </div>
                    )}
                  </Button>
                </div>

                {/* Activity Log */}
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold mb-2 text-teal-800">Activity Log:</h3>
                  <div className="h-32 overflow-y-auto text-sm space-y-1 bg-white p-2 rounded-lg" ref={historyRef}>
                    {gameHistory.length === 0 ? (
                      <p className="text-gray-500 italic">No activity yet. Start skiing!</p>
                    ) : (
                      gameHistory.map((entry, index) => (
                        <div key={index} className="text-xs">
                          <span className="text-gray-500">{entry.timestamp}</span>: {entry.message}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Panel - 1 column wide */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="guide" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="guide">Guide</TabsTrigger>
                <TabsTrigger value="elements">Elements</TabsTrigger>
              </TabsList>

              <TabsContent value="guide" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-teal-800">How to Play</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-teal-600 mr-2">1.</span> Choose Your Mode
                        </h4>
                        <p className="mt-1">
                          Select between Slope Skiing and Trick Park. Each offers different challenges and scoring
                          opportunities.
                        </p>
                      </div>

                      <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-teal-600 mr-2">2.</span> Start Skiing
                        </h4>
                        <p className="mt-1">
                          Spend 10 points to start a run. You'll encounter various slope conditions or trick
                          opportunities.
                        </p>
                      </div>

                      <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-teal-600 mr-2">3.</span> Watch the Weather
                        </h4>
                        <p className="mt-1">
                          Weather conditions affect your performance. Sunny days are best for skiing!
                        </p>
                      </div>

                      <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-teal-600 mr-2">4.</span> Earn Points
                        </h4>
                        <p className="mt-1">
                          Accumulate as many points as possible to become the ultimate alpine skier!
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-700">Educational Note:</h4>
                      <p className="mt-1 text-sm">
                        Alpine skiing is a popular winter sport that involves sliding down snow-covered hills on skis
                        with fixed-heel bindings. It originated in the European Alps and has been an Olympic sport since
                        1936.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="elements" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-teal-800">Slope Types</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {SLOPE_TYPES.slice(0, 6).map((element, index) => (
                        <div key={index} className="flex items-center p-2 bg-teal-50 rounded-lg border border-teal-100">
                          <div className="mr-2">{element.icon}</div>
                          <div>
                            <p className="font-medium text-sm">{element.name}</p>
                            <p className={`text-xs ${element.points >= 0 ? "text-green-600" : "text-red-600"}`}>
                              {element.points >= 0 ? `+${element.points}` : element.points} points
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold mb-2 mt-4 text-teal-800">Trick Types</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {TRICK_TYPES.slice(0, 6).map((element, index) => (
                        <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="mr-2">{element.icon}</div>
                          <div>
                            <p className="font-medium text-sm">{element.name}</p>
                            <p className={`text-xs ${element.points >= 0 ? "text-green-600" : "text-red-600"}`}>
                              {element.points >= 0 ? `+${element.points}` : element.points} points
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold mb-2 mt-4 text-teal-800">Weather Effects</h3>
                    <div className="space-y-2">
                      {WEATHER_CONDITIONS.map((weather, index) => (
                        <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg border border-blue-100">
                          {React.createElement(weather.icon, { className: "h-6 w-6 text-blue-500 mr-2" })}
                          <div>
                            <p className="font-medium text-sm">{weather.name}</p>
                            <p className="text-xs text-gray-600">Point modifier: {weather.modifier}x</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Info className="h-5 w-5 text-yellow-500 mr-2" />
              About Alpine Rush
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-teal-50 p-4 rounded-md text-sm border border-teal-200">
              <p className="font-bold mb-2">This is a free social simulation game:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>For entertainment purposes only</li>
                <li>No real money involved</li>
                <li>No prizes or rewards</li>
                <li>Everything is virtual with no monetary value</li>
                <li>Completely free to use</li>
                <li>For users 18+</li>
              </ul>
              <p className="mt-3">
                Alpine Rush is an educational simulation that teaches about skiing techniques, mountain environments,
                and winter sports.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-md text-sm border border-blue-100">
              <p className="font-bold mb-2">Educational Value:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Learn about different skiing techniques and styles</li>
                <li>Understand how weather affects skiing conditions</li>
                <li>Discover various types of ski slopes and their difficulty levels</li>
                <li>Explore the challenges and thrills of alpine skiing</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => setShowInfoModal(false)}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              I Understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
