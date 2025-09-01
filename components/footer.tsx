"use client"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">MetaGraphAI</span>
            </div>
            <p className="text-gray-400 max-w-md">Transforming Intelligence Through Revolutionary Graph Technology</p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Technology</h5>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("technology")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Platform Overview
              </button>
              <button
                onClick={() => scrollToSection("innovation")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Research & IP
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Solutions</h5>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                CyberWatch
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FinanceWatch
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                ResearchGraph
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            © 2025 MetaGraphAI. All rights reserved. | Proprietary technology protected by pending patents.
          </p>
        </div>
      </div>
    </footer>
  )
}
