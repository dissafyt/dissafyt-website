import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileSearch, CheckCircle } from "lucide-react"

export default function OCRWaybillScannerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                Software Solution
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">OCR Waybill Scanner</h1>
              <p className="text-muted-foreground md:text-xl">
                Automate your waybill processing with our advanced OCR technology, reducing manual data entry and errors
                while increasing efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/auth/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
                </Link>
                <Link href="/contact?inquiry=demo">
                  <Button variant="outline">Request a Demo</Button>
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

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Powerful capabilities designed to streamline your document processing
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <FileSearch className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced OCR Technology</h3>
                  <p className="text-sm text-muted-foreground">
                    Our proprietary OCR engine accurately extracts data from waybills, even with poor quality scans or
                    images.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Batch Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Process multiple waybills simultaneously, saving time and increasing productivity.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m7 10 2 2 6-6"></path>
                      <path d="m7 16 2 2 6-6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Data Validation</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic validation ensures accuracy and flags potential errors for review.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">System Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly integrates with your existing ERP, WMS, or logistics systems via our API.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Track processing volumes, accuracy rates, and other key metrics through our intuitive dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Secure Cloud Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    All processed documents are securely stored and easily accessible when needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="scan" className="w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple and efficient document processing workflow
                </p>
              </div>
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="scan">Scan</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="integrate">Integrate</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="scan" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Capture Waybills</h3>
                  <p className="text-muted-foreground">Capture waybill data through multiple input methods:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Use your smartphone or tablet camera to scan waybills directly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Upload existing image files (JPG, PNG) or PDFs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Integrate with document scanners for high-volume processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Batch upload multiple documents simultaneously</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Scanning Waybills"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="process" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Automatic Processing</h3>
                  <p className="text-muted-foreground">Our advanced OCR engine processes the waybills:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Intelligent recognition of waybill formats from multiple carriers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>
                        Automatic extraction of key data fields including tracking numbers, addresses, weights, and
                        dates
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Real-time data validation to ensure accuracy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Machine learning algorithms that improve accuracy over time</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Processing Waybills"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="integrate" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Seamless Integration</h3>
                  <p className="text-muted-foreground">Extracted data is ready for use in your business systems:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>API integration with your existing ERP, WMS, or logistics systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Export data in multiple formats (CSV, Excel, JSON, XML)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Automated workflows to trigger actions based on extracted data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Secure cloud storage with easy access to processed documents</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Data Integration"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transform your document processing with these key advantages
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-orange-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Time Savings</h3>
                    <p className="text-muted-foreground mt-2">
                      Reduce document processing time by up to 90%, allowing your team to focus on higher-value tasks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-orange-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Cost Reduction</h3>
                    <p className="text-muted-foreground mt-2">
                      Significantly reduce labor costs associated with manual data entry and processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-orange-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Improved Accuracy</h3>
                    <p className="text-muted-foreground mt-2">
                      Eliminate human error in data entry, with our OCR technology achieving up to 99% accuracy rates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-orange-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-orange-500"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 18v-6"></path>
                      <path d="M8 18v-1"></path>
                      <path d="M16 18v-3"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Enhanced Data Management</h3>
                    <p className="text-muted-foreground mt-2">
                      Centralize your waybill data for better tracking, reporting, and analysis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Streamline Your Waybill Processing?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Join businesses that have already transformed their document processing with our OCR Waybill Scanner.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Easy setup and integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Flexible pricing plans for businesses of all sizes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Dedicated support team to ensure your success</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl bg-background p-6">
              <h3 className="text-xl font-bold">Get Started Today</h3>
              <p className="text-muted-foreground">Sign up for a free trial or schedule a demo with our team.</p>
              <Link href="/auth/signup">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Start Free Trial</Button>
              </Link>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <Link href="/contact?inquiry=demo">
                <Button className="w-full" variant="outline">
                  Schedule a Demo
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center">
                No credit card required for trial. 14-day free access to all features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
