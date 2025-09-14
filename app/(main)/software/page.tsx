import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Software Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cutting-edge software designed to optimize your business operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OCR Waybill Scanner */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="ocr-waybill-scanner">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                Featured Software
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">OCR Waybill Scanner</h2>
              <p className="text-muted-foreground md:text-xl">
                Our cutting-edge OCR technology automates the processing of waybills, reducing manual data entry and
                errors while increasing efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Automated Data Extraction:</span> Instantly extract critical
                    information from waybills, including tracking numbers, addresses, weights, and more.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span>
                    <span className="font-medium">High Accuracy Recognition:</span> Advanced machine learning algorithms
                    ensure high accuracy even with poor quality scans or images.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Seamless Integration:</span> Easily integrates with your existing
                    logistics, ERP, or warehouse management systems.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span>
                    <span className="font-medium">Time and Cost Savings:</span> Dramatically reduce processing time and
                    eliminate costly manual data entry errors.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/software/ocr-waybill-scanner">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="outline">Get Access</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="OCR Waybill Scanner"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our OCR Waybill Scanner simplifies your document processing workflow
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Scan or Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply scan waybills using your device's camera or upload existing images or PDFs.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Automatic Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Our OCR technology automatically extracts and processes all relevant information.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Data Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Extracted data is automatically integrated with your existing systems or exported in your preferred
                    format.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best fits your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            <Card className="border-muted-foreground/20">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">
                  $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Up to 500 waybills per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Basic data extraction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>CSV export</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/auth/signup?plan=starter" className="w-full">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-orange-500 relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold">
                  $249<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription>Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Up to 2,000 waybills per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Advanced data extraction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>API integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Priority email & phone support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/auth/signup?plan=professional" className="w-full">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-muted-foreground/20">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold">Custom</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Unlimited waybills</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Custom data extraction fields</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Full system integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact?inquiry=enterprise" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Join businesses that have already streamlined their operations with our OCR Waybill Scanner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/auth/signup">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Sign Up Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Request a Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
