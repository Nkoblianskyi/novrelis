"use client"

import { motion } from "framer-motion"
import { Mountain, Snowflake, Timer, Trophy, Map, Users, Sparkles, Shield } from "lucide-react"

const features = [
  {
    icon: Mountain,
    title: "Alpine Slopes",
    description: "Experience a variety of challenging mountain terrains from beginner to expert difficulty.",
    color: "bg-teal-50 text-teal-700 border border-teal-200",
    delay: 0.1,
  },
  {
    icon: Snowflake,
    title: "Weather Conditions",
    description: "Adapt to changing weather conditions that affect visibility and snow quality.",
    color: "bg-blue-50 text-blue-700 border border-blue-200",
    delay: 0.2,
  },
  {
    icon: Timer,
    title: "Time Trials",
    description: "Race against the clock to complete runs in record time and earn bonus points.",
    color: "bg-teal-50 text-teal-700 border border-teal-200",
    delay: 0.3,
  },
  {
    icon: Trophy,
    title: "Trick System",
    description: "Perform impressive aerial tricks and maneuvers to earn style points and bonuses.",
    color: "bg-teal-50 text-teal-700 border border-teal-200",
    delay: 0.4,
  },
  {
    icon: Map,
    title: "Multiple Resorts",
    description: "Explore different ski resorts with unique layouts, challenges, and scenery.",
    color: "bg-blue-50 text-blue-700 border border-blue-200",
    delay: 0.5,
  },
  {
    icon: Users,
    title: "Multiplayer Races",
    description: "Challenge friends to races and compete for the best times and highest scores.",
    color: "bg-teal-50 text-teal-700 border border-teal-200",
    delay: 0.6,
  },
  {
    icon: Sparkles,
    title: "Equipment Upgrades",
    description: "Unlock better skis, poles, and outfits to improve your performance on the slopes.",
    color: "bg-blue-50 text-blue-700 border border-blue-200",
    delay: 0.7,
  },
  {
    icon: Shield,
    title: "Avalanche Avoidance",
    description: "Navigate dangerous terrain and avoid avalanches that can end your run prematurely.",
    color: "bg-teal-50 text-teal-700 border border-teal-200",
    delay: 0.8,
  },
]

export default function GameFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-teal-800"
          >
            Master Your Skiing Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Conquer the slopes and experience the thrill of alpine skiing with these exciting features
          </motion.p>
        </div>

        {/* Featured item - larger size */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Trick System</h3>
                <p className="text-amber-100">
                  Perform impressive aerial tricks and maneuvers to earn style points and bonuses. Master flips, spins,
                  grabs, and combinations to become the ultimate freestyle champion.
                </p>
              </div>
              <div className="bg-amber-100 h-64 md:h-auto relative">
                <div className="absolute inset-0 bg-[url('/skier-aerial-trick.png')] bg-cover bg-center opacity-90"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main features grid - alternating layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-blue-100"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center mb-4">
                <Mountain className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-800">Alpine Slopes</h3>
              <p className="text-gray-600">
                Experience a variety of challenging mountain terrains from beginner to expert difficulty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-teal-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-teal-100"
            >
              <div className="w-14 h-14 rounded-lg bg-teal-100 text-teal-700 border border-teal-200 flex items-center justify-center mb-4">
                <Timer className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-800">Time Trials</h3>
              <p className="text-gray-600">
                Race against the clock to complete runs in record time and earn bonus points.
              </p>
            </motion.div>
          </div>

          {/* Middle column - taller card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <Map className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Multiple Resorts</h3>
            <p className="text-blue-100 mb-6">
              Explore different ski resorts with unique layouts, challenges, and scenery.
            </p>

            <div className="mt-auto grid grid-cols-3 gap-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-white">Alps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-white">Rockies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-white">Andes</p>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-blue-100"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center mb-4">
                <Snowflake className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-800">Weather Conditions</h3>
              <p className="text-gray-600">
                Adapt to changing weather conditions that affect visibility and snow quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-teal-50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-teal-100"
            >
              <div className="w-14 h-14 rounded-lg bg-teal-100 text-teal-700 border border-teal-200 flex items-center justify-center mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-800">Multiplayer Races</h3>
              <p className="text-gray-600">
                Challenge friends to races and compete for the best times and highest scores.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
