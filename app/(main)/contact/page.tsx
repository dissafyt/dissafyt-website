"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Have questions or ready to get started? Reach out to our team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
                    <div className="rounded-full bg-green-100 p-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Our Location</h3>
                      <p className="text-muted-foreground">
                        Scottsdene Kraaifontein
                        <br />
                        Cape Town, WC South Africa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Phone</h3>
                      <p className="text-muted-foreground">081 808 2570</p>
                      <p className="text-muted-foreground">Monday - Friday, 9am - 5pm SAST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email</h3>
                      <p className="text-muted-foreground">info@dissafyt.com</p>
                      <p className="text-muted-foreground">support@dissafyt.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Find answers to common questions about our services and solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>How quickly can you implement your solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on the complexity of your needs and the specific solutions being
                  deployed. Typically, our basic solutions can be implemented within 2-4 weeks, while more complex
                  enterprise solutions may take 2-3 months. We'll provide a detailed timeline during our initial
                  consultation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer customized solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we specialize in creating customized solutions tailored to your specific business needs. Our team
                  works closely with you to understand your requirements and develop solutions that address your unique
                  challenges and goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What kind of support do you provide after implementation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer comprehensive post-implementation support, including 24/7 technical assistance, regular
                  maintenance updates, and ongoing optimization services. Our support packages can be tailored to your
                  specific needs and budget.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do you ensure data security?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data security is our top priority. We implement industry-leading security measures, including
                  encryption, secure access controls, regular security audits, and compliance with relevant regulations.
                  Our security protocols are continuously updated to address emerging threats.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
