import {
  Shield,
  TrendingUp,
  Microscope,
  Brain,
  BarChart3,
  Lightbulb,
  Calculator,
  Globe,
  Users,
  Rocket,
  Database,
} from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      title: "CyberWatch",
      category: "Cybersecurity Intelligence",
      status: "Active",
      statusType: "active" as const,
      description:
        "Revolutionary cybersecurity platform combining advanced AI with real-time threat prediction. Transforms cybersecurity from reactive monitoring to proactive strategic intelligence.",
      features: [
        { icon: Shield, label: "Real-time Threat Detection" },
        { icon: Brain, label: "Predictive Analytics" },
        { icon: BarChart3, label: "Network Graph Analysis" },
        { icon: BarChart3, label: "Strategic Intelligence" },
      ],
      metrics: [
        { value: "99.2%", label: "Threat Detection Rate" },
        { value: "85%", label: "False Positive Reduction" },
      ],
    },
    {
      title: "FinanceWatch",
      category: "Financial Intelligence",
      status: "Coming Soon",
      statusType: "future" as const,
      description:
        "Next-generation financial intelligence platform delivering Event-to-Market insights. Transforms market analysis through advanced graph correlation and game theory modeling.",
      features: [
        { icon: TrendingUp, label: "Event-to-Market Intelligence" },
        { icon: Calculator, label: "Game Theory Analysis" },
        { icon: Globe, label: "Global Market Correlation" },
        { icon: Lightbulb, label: "Strategic Recommendations" },
      ],
      roadmap: ["Q3 2025: Pilot Phase", "Q1 2026: General Availability"],
    },
    {
      title: "ResearchGraph",
      category: "Research Intelligence",
      status: "Coming Soon",
      statusType: "future" as const,
      description:
        "Advanced research management platform utilizing graph intelligence to accelerate discovery and optimize research portfolios across multiple disciplines and institutions.",
      features: [
        { icon: Microscope, label: "Research Portfolio Analysis" },
        { icon: Users, label: "Collaboration Networks" },
        { icon: Rocket, label: "Innovation Acceleration" },
        { icon: Database, label: "Knowledge Graph Mining" },
      ],
      roadmap: ["Q4 2025: Pilot Phase", "Q2 2026: General Availability"],
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Intelligence Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on our revolutionary graph technology platform, each solution delivers transformative capabilities
            tailored to specific industry challenges and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                solution.statusType === "active" ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    solution.statusType === "active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {solution.status}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <span className="text-blue-600 font-medium">{solution.category}</span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">{solution.description}</p>

              <div className="space-y-4 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{feature.label}</span>
                  </div>
                ))}
              </div>

              {solution.metrics && (
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  {solution.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {solution.roadmap && (
                <div className="pt-6 border-t border-gray-200">
                  <div className="space-y-2">
                    {solution.roadmap.map((item, roadmapIndex) => (
                      <div key={roadmapIndex} className="text-sm text-gray-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
