import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Started with Dissafyt</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect solution for your business needs. Start your journey towards optimized operations
              today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Consultation */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-orange-200 transition-colors">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Consultation</h2>
                <p className="text-gray-600">Perfect for strategic planning and process optimization</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Strategic planning session</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Process analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Improvement recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Implementation roadmap</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Software Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-200">
              <div className="text-center mb-6">
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Most Popular
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Software Solutions</h2>
                <p className="text-gray-600">Advanced tools to automate and optimize your operations</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">OCR Waybill Scanner</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Free trial available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Integration support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">24/7 technical support</span>
                </div>
              </div>

              <Link
                href="/software"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Explore Software <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-orange-200 transition-colors">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Solutions</h2>
                <p className="text-gray-600">Tailored solutions designed specifically for your business</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Custom software development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">System integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Ongoing maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm">Dedicated support team</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Discuss Requirements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure which option is right for you?</h2>
            <p className="text-gray-600 mb-8">
              Our team of experts is here to help you choose the perfect solution for your business needs.
            </p>
            <Link
              href="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
