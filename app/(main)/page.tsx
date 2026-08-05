import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plans } from "@/components/plans"
import { ContactForm } from "@/components/contact-form"
import { Scissors, CalendarCheck, CreditCard, Sparkles, MapPin, Clock, Phone } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    title: "Choose a plan",
    description: "Pick the subscription that fits your routine and check out securely through PayFast.",
  },
  {
    icon: CalendarCheck,
    title: "Book your cut",
    description: "Reserve your slot online whenever it suits you — members skip the queue.",
  },
  {
    icon: Sparkles,
    title: "Stay fresh",
    description: "Walk in, sit back, and leave looking sharp. Your cuts renew automatically each month.",
  },
]

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no lock-in contracts — cancel your PayFast subscription whenever you like and your plan runs until the end of the paid month.",
  },
  {
    q: "Do unused cuts roll over?",
    a: "Cuts are allocated per month and don't roll over, so book them in while they're fresh.",
  },
  {
    q: "Who is the Father & Son plan for?",
    a: "It covers one combo appointment a month for a dad and his son together — perfect for keeping both of you looking sharp and getting some bonding time.",
  },
  {
    q: "How do payments work?",
    a: "All subscriptions are billed monthly through PayFast, South Africa's trusted payment gateway. Your card details never touch our site.",
  },
]

export default function HomePage() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/barber-hero.png"
            alt="Barber giving a sharp haircut in an upscale barbershop"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        <div className="container relative mx-auto px-4 py-24 md:py-36">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Scissors className="h-4 w-4" />
              Haircut subscriptions
            </p>
            <h1 className="mt-6 text-5xl md:text-6xl font-heading font-bold uppercase leading-[1.05] text-foreground text-balance">
              Fresh cuts, <span className="text-primary">every month.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Skip the walk-in wait and the surprise prices. Subscribe once and stay sharp all year — from
              <span className="text-foreground font-medium"> R100 a month</span>, including father-and-son combo cuts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#plans">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                  View plans
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border bg-transparent text-foreground hover:bg-secondary px-8"
                >
                  How it works
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Priority booking
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" /> Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> South Africa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-secondary/30 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Simple as</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground text-balance">
              How it works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative rounded-2xl border border-border bg-card p-8">
                  <span className="absolute right-6 top-6 font-heading text-4xl font-bold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl font-heading font-bold uppercase text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-pretty">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <Plans />

      {/* Father & Son feature strip */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/father-son.png"
                alt="A father and son getting haircuts together"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Father &amp; Son</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-foreground text-balance">
                Two chairs. One tradition.
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Make the barbershop a monthly ritual with your boy. The Father &amp; Son plan gives you a combo cut for
                just <span className="text-foreground font-medium">R180 a month</span> — sharp looks and quality time,
                sorted.
              </p>
              <Link href="#plans" className="mt-6 inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Get the combo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Good to know</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground text-balance">
              Questions
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 bg-secondary/30 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground text-balance">
                Book or ask us anything
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Not sure which plan is right, or want to book your first cut? Drop us a message and we&apos;ll get right
                back to you.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a
                  href="mailto:letstalk@dissafyt.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </span>
                  letstalk@dissafyt.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </span>
                  South Africa
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
