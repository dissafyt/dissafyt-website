import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="#top" className="flex items-center">
              <Image
                src="/images/dissafyt-logo.png"
                alt="Dissafyt"
                width={160}
                height={62}
                className="h-10 w-auto invert"
              />
              <span className="sr-only">Dissafyt Cuts</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Monthly haircut subscriptions that keep you sharp. No contracts, no queues, no surprises.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#plans" className="hover:text-foreground transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-foreground transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Get in touch
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:letstalk@dissafyt.com" className="hover:text-foreground transition-colors">
                  letstalk@dissafyt.com
                </a>
              </li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dissafyt Cuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
