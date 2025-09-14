import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Dissafyt</h1>
              <p className="text-muted-foreground md:text-xl">
                Dissafyt Business Solutions Hub is a leading provider of innovative business applications and solutions
                designed to transform operations and drive growth for organizations of all sizes.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Dissafyt Office"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Target className="h-6 w-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground">
                    To empower businesses with innovative technology solutions that optimize operations, enhance
                    productivity, and drive sustainable growth. We are committed to delivering exceptional value through
                    our expertise, reliability, and customer-centric approach.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Lightbulb className="h-6 w-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground">
                    To be the global leader in business technology solutions, recognized for our innovation, excellence,
                    and the transformative impact we create for our clients. We envision a world where businesses of all
                    sizes can leverage cutting-edge technology to achieve their full potential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at Dissafyt
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Award className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for excellence in everything we do, from product development to customer service.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of teamwork and partnership to achieve extraordinary results.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Lightbulb className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We constantly push the boundaries of what's possible, embracing new ideas and technologies to solve
                    complex business challenges.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Target className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    We conduct our business with the highest ethical standards, honesty, and transparency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals behind Dissafyt's success
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Team Member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Curtis-Lee Waterboer</h3>
                  <p className="text-sm text-orange-500">Founder</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Seedling spawned from Business incubator, The Daily Grind.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
            <p className="text-muted-foreground md:text-xl">
              Join the hundreds of businesses that trust Dissafyt for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contact Us</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">Explore Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
