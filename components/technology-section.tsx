import { Brain, Network, TrendingUp, Settings } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      icon: Brain,
      title: "Advanced Graph Neural Networks",
      description:
        "Proprietary algorithms optimized for real-time analysis of complex interconnected systems, identifying patterns invisible to traditional approaches.",
      specs: ["512D Embeddings", "Multi-Head Attention", "Real-time Processing"],
      featured: true,
    },
    {
      icon: Network,
      title: "Multi-dimensional Pattern Recognition",
      description:
        "Identifies subtle correlations across disparate data sources, revealing critical insights that drive strategic decision-making.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling Engine",
      description:
        "Forecasts future states with high accuracy using historical and real-time data, enabling proactive strategic planning.",
    },
    {
      icon: Settings,
      title: "Adaptive Learning Systems",
      description:
        "Continuously evolving algorithms that improve performance over time, adapting to new patterns and emerging threats.",
    },
  ]

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Graph Technology Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proprietary graph neural network architecture represents the next evolution in AI-driven analytics,
            capable of processing complex interconnected systems with unprecedented speed and accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                tech.featured
                  ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
                  : "bg-gray-50 border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl ${tech.featured ? "bg-blue-600" : "bg-gray-600"}`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>

              {tech.specs && (
                <div className="flex flex-wrap gap-2">
                  {tech.specs.map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
