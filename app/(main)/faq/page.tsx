import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  // In a real application, this data would come from a CMS or API
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Dissafyt Business Solutions Hub?",
          answer:
            "Dissafyt Business Solutions Hub is a leading provider of innovative business applications and solutions designed to transform operations and drive growth for organizations of all sizes. We offer a comprehensive suite of services including business analytics, HR management, security solutions, business consulting, and cloud services.",
        },
        {
          question: "How can Dissafyt help my business?",
          answer:
            "Dissafyt can help your business by providing tailored solutions that address your specific challenges and goals. Whether you need to optimize your operations, enhance your data analytics capabilities, streamline your HR processes, strengthen your security infrastructure, or migrate to the cloud, our expert team can develop and implement solutions that drive efficiency, productivity, and growth.",
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer:
            "Yes, we work with businesses of all sizes, from small startups to large enterprises. Our solutions are scalable and can be customized to meet the specific needs and budget constraints of any organization, regardless of size or industry.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          question: "What services does Dissafyt offer?",
          answer:
            "Dissafyt offers a wide range of services including business analytics, HR management solutions, security solutions, business consulting, and cloud services. Each service category includes various specific offerings tailored to address different business needs and challenges.",
        },
        {
          question: "How are your services priced?",
          answer:
            "Our services are priced based on the specific solutions you need, the complexity of implementation, and the level of ongoing support required. We offer flexible pricing models including one-time fees, subscription-based pricing, and custom packages. We provide detailed pricing information during our initial consultation after understanding your specific requirements.",
        },
        {
          question: "Do you offer customized solutions?",
          answer:
            "Yes, we specialize in creating customized solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop solutions that address your unique challenges and goals.",
        },
      ],
    },
    {
      category: "Implementation",
      questions: [
        {
          question: "How long does implementation typically take?",
          answer:
            "Implementation timelines vary based on the complexity of your needs and the specific solutions being deployed. Typically, our basic solutions can be implemented within 2-4 weeks, while more complex enterprise solutions may take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
        },
        {
          question: "What is your implementation process?",
          answer:
            "Our implementation process follows a structured approach: 1) Discovery - understanding your business needs and goals, 2) Strategy - developing a tailored solution strategy, 3) Implementation - deploying the solution with minimal disruption, and 4) Support - providing ongoing assistance and optimization. Throughout this process, we maintain clear communication and collaborate closely with your team.",
        },
        {
          question: "Will implementation disrupt my business operations?",
          answer:
            "We design our implementation process to minimize disruption to your business operations. This includes careful planning, phased implementation where appropriate, and scheduling critical activities during off-hours when possible. Our goal is to ensure a smooth transition with minimal impact on your day-to-day operations.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          question: "What kind of support do you provide after implementation?",
          answer:
            "We offer comprehensive post-implementation support, including 24/7 technical assistance, regular maintenance updates, and ongoing optimization services. Our support packages can be tailored to your specific needs and budget.",
        },
        {
          question: "How do I contact support if I have an issue?",
          answer:
            "You can contact our support team through multiple channels: phone, email, or our dedicated client portal. For urgent issues, we provide a 24/7 emergency support line. All clients are assigned a dedicated account manager who serves as your primary point of contact for any questions or concerns.",
        },
        {
          question: "Do you offer training for my team?",
          answer:
            "Yes, we provide comprehensive training for your team as part of our implementation process. This includes both general system training and role-specific training tailored to different user groups. We also offer additional training sessions as needed when new features are released or when you onboard new team members.",
        },
      ],
    },
    {
      category: "Security",
      questions: [
        {
          question: "How do you ensure data security?",
          answer:
            "Data security is our top priority. We implement industry-leading security measures, including encryption, secure access controls, regular security audits, and compliance with relevant regulations. Our security protocols are continuously updated to address emerging threats.",
        },
        {
          question: "Are your solutions compliant with industry regulations?",
          answer:
            "Yes, our solutions are designed to comply with relevant industry regulations and standards, including GDPR, HIPAA, SOC 2, and others depending on your industry and location. We stay current with regulatory changes and update our solutions accordingly to ensure ongoing compliance.",
        },
        {
          question: "What happens to my data if I decide to switch providers?",
          answer:
            "If you decide to switch providers, we ensure a smooth transition by providing you with all your data in standard, portable formats. We have clear data migration and exit procedures that protect your information and facilitate a seamless transfer to your new provider.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Find answers to common questions about our services and solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[200px_1fr] lg:gap-12">
            {/* Category Navigation */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Categories</h2>
              <div className="flex flex-col space-y-2">
                {faqs.map((category) => (
                  <Link
                    key={category.category}
                    href={`#${category.category.toLowerCase()}`}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {category.category}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="space-y-8">
              {faqs.map((category) => (
                <div key={category.category} id={category.category.toLowerCase()}>
                  <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.category}-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 p-8 bg-muted rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, our team is here to help. Contact us for personalized
              assistance.
            </p>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
