import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-white overflow-hidden">
        {/* Hexagon Background */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url('/hexagon.svg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-orange-500"> Smart Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dissafyt provides innovative software solutions and expert consultation to optimize your business operations
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 hover:border-orange-500 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Dissafyt?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep business expertise to deliver solutions that make a real
              difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Implementation</h3>
              <p className="text-gray-600">Quick deployment of solutions that start delivering value from day one.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated team of professionals providing ongoing support and guidance.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability you can trust with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Business Consultation</h3>
              <p className="text-gray-600 text-sm">Strategic guidance to optimize your operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Systems Analysis</h3>
              <p className="text-gray-600 text-sm">In-depth analysis of your current systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Systems Design</h3>
              <p className="text-gray-600 text-sm">Custom system design and architecture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Internal Audit</h3>
              <p className="text-gray-600 text-sm">Comprehensive internal audit services</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already improved their operations with Dissafyt solutions.
          </p>
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
