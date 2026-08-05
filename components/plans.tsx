import { Check, Scissors, Users } from "lucide-react"
import { PayfastButton } from "@/components/payfast-button"

type Plan = {
  id: string
  name: string
  price: string
  period: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    id: "solo",
    name: "The Solo",
    price: "R100",
    period: "/month",
    description: "One fresh cut every month to keep you looking sharp.",
    icon: Scissors,
    features: ["1 haircut per month", "Book anytime in the month", "Priority booking slots", "Cancel anytime"],
  },
  {
    id: "twice",
    name: "The Regular",
    price: "R180",
    period: "/month",
    description: "Two cuts a month for the guy who never lets it grow out.",
    icon: Scissors,
    features: [
      "2 haircuts per month",
      "Best value per cut",
      "Priority booking slots",
      "Skip the queue",
      "Cancel anytime",
    ],
    featured: true,
  },
  {
    id: "father-son",
    name: "Father & Son",
    price: "R180",
    period: "/month",
    description: "A combo cut for you and your boy — bonding time, sorted.",
    icon: Users,
    features: [
      "1 combo cut per month",
      "Father + son together",
      "Great for the little ones",
      "Priority booking slots",
      "Cancel anytime",
    ],
  },
]

export function Plans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Membership</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground text-balance">
            Pick your plan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Simple monthly subscriptions. No contracts, no surprises — just consistently fresh cuts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-primary bg-card shadow-lg shadow-primary/10 md:-translate-y-3"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold uppercase text-foreground">{plan.name}</h3>
                </div>

                <div className="mb-2 flex items-end gap-1">
                  <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
                  <span className="mb-1 text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground text-pretty">{plan.description}</p>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <PayfastButton planId={plan.id} featured={plan.featured} />
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Prices in ZAR. Secure recurring payments powered by PayFast.
        </p>
      </div>
    </section>
  )
}
