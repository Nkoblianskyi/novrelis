import Link from "next/link"
import Image from "next/image"
import { AlertTriangle, ExternalLink, Mountain, Snowflake, Trophy } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Mountain className="h-20 w-20 text-white" />
        </div>
        <div className="absolute top-20 right-20">
          <Snowflake className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-20 left-1/3">
          <Trophy className="h-12 w-12 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-amber-400 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-white"
                >
                  <path d="M18 6a4 4 0 0 0-4-4 7 7 0 0 0-6 4c-2 0-4 2-4 4 0 1 0 3 2 4v1c0 1 0 3 2 3h8c2 0 2-2 2-3v-1c2-1 2-3 2-4 0-2-2-4-2-4Z" />
                  <path d="M18 10c0 1 0 4-4 4-4 0-4-3-4-4" />
                  <path d="M17 16.5c.64.8 1 1.7 1 2.5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3c0-.8.36-1.7 1-2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  Novrelis
                </h3>
                <p className="text-teal-200 text-lg">Skiing Adventure Game</p>
              </div>
            </div>
            <p className="text-teal-100 text-lg leading-relaxed mb-6 max-w-md">
              Experience the thrill of virtual skiing in our completely free social platform. Collect items, master
              slopes, and enjoy endless winter adventures!
            </p>
            <div className="flex items-center bg-teal-800/50 rounded-lg p-4 border border-teal-600">
              <AlertTriangle className="h-6 w-6 text-amber-400 mr-3 flex-shrink-0" />
              <div>
                <span className="text-amber-400 font-bold text-lg">18+ Entertainment Only</span>
                <p className="text-teal-200 text-sm mt-1">Free virtual gaming • No real money involved</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Site Navigation</h4>
            <div className="space-y-3">
              <Link
                href="/disclaimer"
                className="block text-teal-200 hover:text-amber-300 transition-colors duration-200"
              >
                Game Disclaimer
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-teal-200 hover:text-amber-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-teal-200 hover:text-amber-300 transition-colors duration-200">
                Terms of Use
              </Link>
              <Link href="/cookies" className="block text-teal-200 hover:text-amber-300 transition-colors duration-200">
                Cookie Settings
              </Link>
              <Link href="/contact" className="block text-teal-200 hover:text-amber-300 transition-colors duration-200">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 mr-3 text-amber-400 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div className="text-teal-200">
                  <p className="font-medium">Novrelis Gaming</p>
                  <p className="text-sm">79 Saint Laurent Blvd</p>
                  <p className="text-sm">Montreal, QC, H2Z 1X7</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-teal-200 hover:text-amber-300 transition-colors">mail@novrelis.com</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-teal-200 hover:text-amber-300 transition-colors">+1 514 511 3471</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className="border-t border-teal-600 pt-8 mb-8">
          <h4 className="text-center text-xl font-bold mb-8 text-amber-300">Gaming Support Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center border border-teal-500/30 group"
            >
              <div className="relative w-32 h-12 mb-4">
                <Image
                  src="/aware.png"
                  alt="GambleAware Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center text-teal-200 group-hover:text-amber-300 transition-colors">
                <span className="font-medium">Information & Support</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center border border-teal-500/30 group"
            >
              <div className="relative w-32 h-12 mb-4">
                <Image
                  src="/care.png"
                  alt="GamCare Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center text-teal-200 group-hover:text-amber-300 transition-colors">
                <span className="font-medium">Professional Counseling</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </Link>
            <Link
              href="https://www.gordonmoody.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col items-center border border-teal-500/30 group"
            >
              <div className="relative w-32 h-12 mb-4">
                <Image
                  src="/moody.png"
                  alt="Gordon Moody Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center text-teal-200 group-hover:text-amber-300 transition-colors">
                <span className="font-medium">Addiction Therapy</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>

        {/* Copyright with Date */}
        <div className="text-center border-t border-teal-600 pt-6">
          <p className="text-teal-300 text-lg font-medium mb-2">
            &copy; {new Date().getFullYear()} Novrelis • Pure Virtual Entertainment
          </p>
          <p className="text-teal-400 text-sm">
            Free social platform • No real money • Virtual items only • 18+ entertainment platform
          </p>
        </div>
      </div>
    </footer>
  )
}
