import { Phone } from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Direct Line",
      value: (
        <>
          +972-55-663-6821
          <br />
          (Text & WhatsApp)
        </>
      ),
      href: "tel:+972-55-663-6821",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Partnerships & Investment Opportunities</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We partner with forward-thinking organizations and investors who share our vision for transforming
            intelligence through revolutionary graph technology.
          </p>

          <div className="flex justify-center mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 max-w-sm"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 font-medium mb-1">{method.label}</div>
                    <a href={method.href} className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      {method.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <p className="text-lg text-gray-700 mb-6">
              Ready to explore how MetaGraphAI can transform your organization's intelligence capabilities?
            </p>
            <div className="text-gray-600">
              Contact us through the methods above to schedule a strategic discussion.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
