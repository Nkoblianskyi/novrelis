"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Snowflake, Mountain, AlertTriangle, ChevronRight } from "lucide-react"

export default function AgeVerificationModal() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already verified age
    const isVerified = localStorage.getItem("ageVerified")
    if (!isVerified) {
      setOpen(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true")
    setOpen(false)
  }

  const handleDeny = () => {
    router.push("/denied")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden max-w-lg rounded-xl border-0 shadow-2xl">
        <div className="relative">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
            style={{
              backgroundImage: "url('/snowy-mountain-landscape.png')",
              filter: "blur(2px)",
            }}
          />

          {/* Animated snowflakes */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white opacity-70 animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-20px`,
                  animation: `fall ${5 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`,
                  transform: `scale(${0.5 + Math.random() * 0.5})`,
                }}
              >
                <Snowflake />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <div className="flex items-center space-x-3">
                <Mountain className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Alpine Adventure</h2>
              </div>
              <p className="mt-2 text-blue-100">A virtual skiing experience for entertainment</p>
            </div>

            {/* Body */}
            <div className="bg-white bg-opacity-90 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Age Verification</h3>
                <p className="text-gray-600">
                  This virtual skiing platform is designed for adult users. It's completely free with no real money
                  involved.
                </p>
              </div>

              {/* Warning box */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <div className="flex">
                  <AlertTriangle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-700">Important Notice</p>
                    <p className="text-sm text-blue-600 mt-1">
                      While this is a free social platform with virtual skiing games and no real money involved, it's
                      intended for users 18 years and older.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center font-bold text-gray-800 mb-6">
                Please confirm you are 18 years of age or older
              </p>

              {/* Buttons */}
              <div className="flex flex-col space-y-3">
                <Button
                  onClick={handleVerify}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-lg flex items-center justify-center"
                >
                  <span>Yes, I am 18 or older</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  onClick={handleDeny}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 py-3 rounded-lg"
                >
                  No, I am under 18
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 p-4 text-center text-xs text-gray-500">
              By entering, you acknowledge that this is a virtual platform with no real money or gambling.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Add the animation keyframes to the global CSS
const fallAnimation = `
@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  85% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall 10s linear infinite;
}
`

// Add the animation to the global style
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.innerHTML = fallAnimation
  document.head.appendChild(style)
}
