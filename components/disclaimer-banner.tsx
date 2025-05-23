"use client"

import { AlertTriangle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="bg-teal-50 border-b-2 border-teal-200 py-2 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="flex items-start md:items-center">
            <AlertTriangle className="h-4 w-4 text-teal-500 mr-2 mt-1 md:mt-0 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-teal-800 mb-1">
                <strong>Important Notice:</strong> This is a free social platform exclusively for entertainment
                purposes. Our skiing game lets you collect virtual items as you ski down slopes. No real money. No
                winnings. Everything is virtual and has no value. Completely free to use. For users 18+.
              </p>
              <p className="text-xs text-teal-700">
                If the fun stops, take a step back. You can also visit support resources like{" "}
                <Link
                  href="https://www.gordonmoody.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-600 font-medium"
                >
                  Gordon Moody
                </Link>
                ,{" "}
                <Link
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-600 font-medium"
                >
                  GamCare
                </Link>
                , or{" "}
                <Link
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-600 font-medium"
                >
                  BeGambleAware
                </Link>{" "}
                for help and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
