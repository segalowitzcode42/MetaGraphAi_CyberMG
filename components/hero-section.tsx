"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"
import { NeuralGraph } from "./neural-graph"

export function HeroSection() {
  const [animatedStats, setAnimatedStats] = useState({
    patents: 0,
    events: 0,
    accuracy: 0,
  })

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof animatedStats, duration = 2000) => {
      let start = 0
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setAnimatedStats((prev) => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setAnimatedStats((prev) => ({ ...prev, [key]: Math.floor(start) }))
        }
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter(3, "patents")
      animateCounter(50000, "events")
      animateCounter(99.5, "accuracy")
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionary Graph Intelligence
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transforming Complex Networks
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                MetaGraphAI delivers breakthrough graph-based AI solutions that unlock unprecedented insights across
                cybersecurity, finance, and research domains. Our proprietary neural network architecture processes vast
                interconnected datasets in real-time, discovering hidden patterns that traditional systems cannot
                detect.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{animatedStats.patents}</div>
                <div className="text-sm text-gray-600 font-medium">Patents Pending</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{Math.floor(animatedStats.events / 1000)}K+</div>
                <div className="text-sm text-gray-600 font-medium">Events/Minute</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{animatedStats.accuracy}%</div>
                <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("solutions")}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Explore Solutions
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                <Play size={20} />
                View Technology
              </button>
            </div>
          </div>

          <div className="relative">
            <NeuralGraph />
          </div>
        </div>
      </div>
    </section>
  )
}
