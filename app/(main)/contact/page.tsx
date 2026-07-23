"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react"

const SERVICES = [
  "Business Consultation",
  "Systems Analysis",
  "Systems Design",
  "Internal Audit",
  "Something else",
]

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send message. Please try again.")
      }

      setFormSubmitted(true)
      setFormData(initialForm)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-orange-50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              Get in touch
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                Let&apos;s talk about your next move
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed text-pretty">
                Tell us about your goals and challenges. Our team typically responds within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-5 lg:gap-12">
            <Card className="lg:col-span-3 border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
                    <div className="rounded-full bg-green-100 p-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Thank you!</h3>
                    <p className="text-muted-foreground max-w-md">
                      Your message has been sent successfully. We&apos;ll get back to you shortly at the email you
                      provided.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
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
                          placeholder="you@company.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us a little about what you need..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
                        <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            <div className="space-y-6 lg:col-span-2">
              <Card className="border-border/60 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Our location</h3>
                      <p className="text-muted-foreground">
                        Scottsdene, Kraaifontein
                        <br />
                        Cape Town, WC, South Africa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/60 shadow-sm">
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
              <Card className="border-border/60 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-orange-100 p-2">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email</h3>
                      <a href="mailto:letstalk@dissafyt.com" className="text-muted-foreground hover:text-orange-500">
                        letstalk@dissafyt.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Find answers to common questions about our services and solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you implement your solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on the complexity of your needs. Typically, our basic engagements
                  can be delivered within 2-4 weeks, while more complex enterprise work may take 2-3 months. We&apos;ll
                  provide a detailed timeline during our initial consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer customized solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we specialize in creating customized solutions tailored to your specific business needs. Our team
                  works closely with you to understand your requirements and develop solutions that address your unique
                  challenges and goals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer comprehensive post-engagement support, including technical assistance, regular reviews, and
                  ongoing optimization services. Our support packages can be tailored to your specific needs and budget.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">How do you ensure data security?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data security is our top priority. We implement industry-leading measures, including encryption,
                  secure access controls, regular audits, and compliance with relevant regulations. Our protocols are
                  continuously updated to address emerging threats.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
