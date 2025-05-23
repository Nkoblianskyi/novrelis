"use client"

import { motion } from "framer-motion"
import { Snowflake, TreesIcon as Tree, RabbitIcon as Deer, Star } from "lucide-react"
import Image from "next/image"

export default function SkiingGameDescription() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-teal-800"
          >
            Alpine Adventure: The Ultimate Skiing Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Experience the thrill of skiing down beautiful mountain slopes while collecting various winter treasures
            along the way!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-amber-100"
          >
            <div className="absolute inset-0">
              <Image
                src="/snowy-mountain-landscape.png"
                alt="Snowy mountain skiing landscape"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
              {/* Mountain background */}
              <div className="absolute bottom-0 w-full">
                <svg viewBox="0 0 1440 320" className="w-full">
                  <path
                    fill="#f3f4f6"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-teal-700">Collect Winter Treasures</h3>
            <p className="text-gray-700">
              As you ski down the mountain slopes, you'll encounter various collectibles that will enhance your skiing
              adventure:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full text-blue-500">
                  <Snowflake size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Snowflakes</h4>
                  <p className="text-gray-600">
                    Collect magical snowflakes to increase your speed and earn bonus points.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full text-green-600">
                  <Tree size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Christmas Trees</h4>
                  <p className="text-gray-600">
                    Find hidden Christmas trees to unlock special skiing abilities and trails.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-amber-100 p-2 rounded-full text-amber-700">
                  <Deer size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Reindeer</h4>
                  <p className="text-gray-600">
                    Spot the elusive reindeer to receive temporary speed boosts and jump abilities.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-purple-100 p-2 rounded-full text-purple-600">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-teal-800">Star Crystals</h4>
                  <p className="text-gray-600">
                    Gather rare star crystals to unlock premium ski equipment and outfits.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-6">
              <p className="text-teal-700 font-medium">
                Remember, this is a free social platform for entertainment purposes only. No real money involved. All
                collectibles and achievements are virtual and have no monetary value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
