"use client"

import { DialogFooter } from "@/components/ui/dialog"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { AlertTriangle, Award, Shield, Gift, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function DownloadCta() {
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
    <section className="py-20 bg-gradient-to-tr from-blue-50 via-amber-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-teal-800">Start Your Adventure Today</h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto">
              Join thousands of players already enjoying thrilling ski runs on our free social platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-teal-200 h-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-teal-800 text-center">Game Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">Unlimited playtime with no additional fees</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">Weekly challenges and seasonal events</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <Gift className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">Virtual rewards and collectible items</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-4">
                    <Shield className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">Safe environment with no real money</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-8 text-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Start for Free</h3>
                <p className="mb-6">
                  Our platform is completely free to use. No hidden fees, subscriptions, or microtransactions.
                  Everything is virtual and has no monetary value.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <p className="font-medium">What you'll get:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <span className="text-amber-200 mr-2">✓</span>
                      <span>Access to all slopes and game modes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-200 mr-2">✓</span>
                      <span>Personal achievement tracking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-200 mr-2">✓</span>
                      <span>Unlimited gameplay sessions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white hover:bg-amber-50 text-teal-600 text-xl px-8 py-6 w-full"
                onClick={handleStartGame}
              >
                Start Playing
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center"
          >
            <p className="text-blue-700">
              <span className="font-bold">Important:</span> This is a free social platform exclusively for entertainment
              purposes. No real money. No winnings. Everything is virtual and has no value. Completely free to use. For
              users 18+.
            </p>
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
            <DialogDescription>Please read and confirm before starting the game.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-amber-50 p-4 rounded-md text-sm text-amber-700">
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
            <Button type="button" onClick={handleConfirm} className="bg-amber-500 hover:bg-amber-600 text-black">
              I Understand, Start Game
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
