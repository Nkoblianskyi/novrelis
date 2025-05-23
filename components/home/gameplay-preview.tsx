"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const screenshots = [
  {
    id: "beginner",
    title: "Beginner Slopes",
    description:
      "Start your skiing adventure on gentle slopes perfect for beginners. Collect snowballs and practice your basic skiing techniques while enjoying beautiful mountain scenery.",
    images: ["/screenshots/forest-1.png", "/screenshots/forest-2.png", "/screenshots/forest-3.png"],
  },
  {
    id: "advanced",
    title: "Advanced Trails",
    description:
      "Challenge yourself on steeper slopes with more obstacles. Collect special golden snowballs for bonus points while performing impressive skiing maneuvers!",
    images: ["/screenshots/city-1.png", "/screenshots/city-2.png", "/screenshots/city-3.png"],
  },
  {
    id: "expert",
    title: "Expert Runs",
    description:
      "Test your skills on expert-level slopes with jumps, narrow passages, and challenging terrain. Collect rare blue snowballs while avoiding obstacles at high speeds!",
    images: ["/raccoon-night-adventure.png", "/raccoon-night-city-foraging.png", "/raccoon-night-stealth.png"],
  },
]

export default function GameplayPreview() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const nextImage = (currentTab: string) => {
    const tab = screenshots.find((s) => s.id === currentTab)
    if (!tab) return
    const maxIndex = tab.images.length - 1
    setCurrentImageIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const prevImage = (currentTab: string) => {
    const tab = screenshots.find((s) => s.id === currentTab)
    if (!tab) return
    const maxIndex = tab.images.length - 1
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return null
}
