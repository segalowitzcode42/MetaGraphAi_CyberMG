import { Rocket, ShieldCheck, TrendingUp } from "lucide-react"

export function AboutSection() {
  const valueProps = [
    {
      icon: Rocket,
      title: "Market Leadership",
      description:
        "First-mover advantage in graph-based intelligence solutions with significant commercial potential and expanding market opportunities.",
    },
    {
      icon: ShieldCheck,
      title: "Validated Technology",
      description:
        "Advanced algorithms and architectures successfully validated through comprehensive simulations, demonstrating strong performance indicators for real-world deployment.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description:
        "Platform architecture designed for rapid scaling across multiple verticals and geographic markets with established expansion roadmap.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transforming Intelligence Through Revolutionary Graph Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MetaGraphAI represents the next evolution in intelligent systems, delivering breakthrough solutions that
            transform how organizations understand, analyze, and act upon complex interconnected data. Our proprietary
            technology unlocks unprecedented insights across multiple industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-xl flex-shrink-0">
                  <prop.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
