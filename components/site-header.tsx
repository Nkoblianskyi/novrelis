"use client"

import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-amber-400 rounded-xl flex items-center justify-center mr-3 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M18 6a4 4 0 0 0-4-4 7 7 0 0 0-6 4c-2 0-4 2-4 4 0 1 0 3 2 4v1c0 1 0 3 2 3h8c2 0 2-2 2-3v-1c2-1 2-3 2-4 0-2-2-4-2-4Z" />
                <path d="M18 10c0 1 0 4-4 4-4 0-4-3-4-4" />
                <path d="M17 16.5c.64.8 1 1.7 1 2.5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3c0-.8.36-1.7 1-2.5" />
              </svg>
            </div>
            Novrelis
          </Link>
          <div className="space-x-6">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
