import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-white"
        style={{
          backgroundImage: "url('/hexagon.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-orange-500 block">Expert Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide comprehensive business consulting and cutting-edge software solutions to help your organization
            thrive in today's competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to address every aspect of your business transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Business Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategic guidance to optimize operations and drive sustainable growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Systems Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep dive into your current systems to identify improvement opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Systems Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Custom system architecture designed for your specific business needs.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Internal Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive audits to ensure compliance and operational excellence.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovative Software Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools designed to streamline your operations and boost productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">OCR Waybill Scanner</CardTitle>
                <CardDescription>Automated document processing for logistics and shipping</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Instant waybill data extraction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    99% accuracy rate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Real-time processing
                  </li>
                </ul>
                <Link href="/software/ocr-waybill-scanner">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Nwata - Ethical Productivity</CardTitle>
                <CardDescription>Gamified productivity intelligence for modern workplaces</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Entropy of effort measurement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Privacy-first design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Gamified engagement
                  </li>
                </ul>
                <Link href="/software/nwata-ethical-productivity">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/software">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 bg-transparent"
              >
                View Our Software
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
