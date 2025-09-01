import { FileText, Code, Clock } from "lucide-react"

export function InnovationSection() {
  const metrics = [
    {
      icon: FileText,
      number: "3",
      label: "Patents Pending",
    },
    {
      icon: Code,
      number: "60K+",
      label: "Lines of Code",
    },
    {
      icon: Clock,
      number: "~3",
      label: "Years R&D",
    },
  ]

  return (
    <section id="innovation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Innovation in Graph Intelligence</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our research and development efforts focus on pushing the boundaries of what's possible with graph-based
                artificial intelligence, developing proprietary technologies that deliver measurable competitive
                advantages.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Intellectual Property Portfolio</h4>
                <p className="text-gray-600">
                  Three patent applications: one for core MetaGraphAI technology platform and two for
                  cybersecurity-specific implementations, protecting our innovative approaches to graph-based
                  intelligence.
                </p>
              </div>

              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Strategic Partnership Vision</h4>
                <p className="text-gray-600">
                  Seeking collaborative opportunities with leading academic institutions and industry partners to
                  accelerate innovation and expand market reach in graph-based AI applications.
                </p>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Continuous Innovation</h4>
                <p className="text-gray-600">
                  Ongoing investment in R&D ensures our technology platform remains at the forefront of graph
                  intelligence capabilities and market applications.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{metric.number}</div>
                    <div className="text-gray-600 font-medium">{metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
