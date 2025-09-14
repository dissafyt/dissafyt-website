import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, FileSearch, Code, ClipboardCheck, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive business solutions tailored to optimize your operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="services-tabs">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="consultation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="consultation" id="consultation">
                Business Consultation
              </TabsTrigger>
              <TabsTrigger value="analysis" id="analysis">
                Systems Analysis
              </TabsTrigger>
              <TabsTrigger value="design" id="design">
                Systems Design
              </TabsTrigger>
              <TabsTrigger value="audit" id="audit">
                Internal Audit
              </TabsTrigger>
            </TabsList>
            <TabsContent value="consultation" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2">
                    <Laptop className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-bold">Business Consultation</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Our expert consultants help you navigate complex business challenges and identify opportunities for
                    optimization. We provide strategic guidance tailored to your specific needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Strategic planning and business process optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Workflow assessment and improvement recommendations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Technology integration and digital transformation guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Change management and implementation support</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                      Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Business Consultation"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analysis" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2">
                    <FileSearch className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-bold">Systems Analysis</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Our comprehensive systems analysis identifies inefficiencies and bottlenecks in your current
                    processes and technology infrastructure, providing a clear roadmap for optimization.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Detailed assessment of current systems and processes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Identification of inefficiencies and optimization opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Data flow analysis and information architecture review</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Detailed recommendations for system improvements</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                      Request Analysis <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Systems Analysis"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="design" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2">
                    <Code className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-bold">Systems Design</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Our expert team designs custom software solutions and system architectures tailored to your specific
                    business needs, ensuring optimal performance and scalability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Custom software architecture and system design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Database design and optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>User interface and experience design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Integration planning with existing systems</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                      Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Systems Design"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="audit" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2">
                    <ClipboardCheck className="h-6 w-6 text-orange-500" />
                    <h2 className="text-2xl font-bold">Internal Audit</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Our thorough internal audit services assess your processes, controls, and compliance to identify
                    risks and opportunities for improvement, ensuring operational excellence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Comprehensive review of internal processes and controls</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Risk assessment and mitigation strategies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Compliance evaluation and recommendations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span>Detailed audit reports with actionable insights</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                      Schedule an Audit <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Internal Audit"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How We Work */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proven process ensures successful implementation and measurable results
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Discovery</h3>
                  <p className="text-sm text-muted-foreground">
                    We begin by understanding your business needs, challenges, and goals through in-depth consultation.
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
                  <h3 className="text-xl font-bold">Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    We analyze your current systems and processes to identify optimization opportunities.
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
                  <h3 className="text-xl font-bold">Solution Design</h3>
                  <p className="text-sm text-muted-foreground">
                    We design tailored solutions that address your specific needs and integrate with your existing
                    systems.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Implementation</h3>
                  <p className="text-sm text-muted-foreground">
                    We implement the solution with minimal disruption to your operations, ensuring a smooth transition
                    and proper training.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Optimize Your Business?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Contact us today to discuss how our services can help you achieve your business goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Customized solutions for your specific business needs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Expert consultation from industry professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Seamless integration with your existing systems</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl bg-muted p-6">
              <h3 className="text-xl font-bold">Book a Consultation</h3>
              <p className="text-muted-foreground">Schedule a free consultation with one of our solution experts.</p>
              <Link href="/contact">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contact Us</Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center">
                No commitment required. Find out how we can help your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
