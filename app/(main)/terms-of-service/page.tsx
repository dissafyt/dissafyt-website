export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">Last updated: March 8, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Dissafyt Business Solutions Hub. These Terms of Service ("Terms") govern your access to and
                use of our website and services. By accessing or using our services, you agree to be bound by these
                Terms. If you disagree with any part of the Terms, you may not access our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Use of Services</h2>
              <h3 className="text-xl font-semibold">Eligibility</h3>
              <p className="text-muted-foreground">
                You must be at least 18 years old to use our services. By using our services, you represent and warrant
                that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>
              <h3 className="text-xl font-semibold">Account Registration</h3>
              <p className="text-muted-foreground">
                Some of our services may require you to create an account. You are responsible for maintaining the
                confidentiality of your account credentials and for all activities that occur under your account. You
                agree to notify us immediately of any unauthorized use of your account.
              </p>
              <h3 className="text-xl font-semibold">Acceptable Use</h3>
              <p className="text-muted-foreground">You agree not to use our services:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                  mail," "chain letter," "spam," or any other similar solicitation
                </li>
                <li>
                  To impersonate or attempt to impersonate Dissafyt, a Dissafyt employee, another user, or any other
                  person or entity
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the services,
                  or which may harm Dissafyt or users of the services
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
              <p className="text-muted-foreground">
                The content, features, and functionality of our services, including but not limited to text, graphics,
                logos, icons, images, audio clips, digital downloads, data compilations, and software, are owned by
                Dissafyt, its licensors, or other providers of such material and are protected by copyright, trademark,
                patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-muted-foreground">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our services, except as follows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                  viewing those materials
                </li>
                <li>
                  You may store files that are automatically cached by your Web browser for display enhancement purposes
                </li>
                <li>
                  You may print or download one copy of a reasonable number of pages of the website for your own
                  personal, non-commercial use and not for further reproduction, publication, or distribution
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">User Content</h2>
              <p className="text-muted-foreground">
                Our services may allow you to post, submit, publish, display, or transmit content. By providing any
                content on our services, you grant us and our affiliates and service providers a non-exclusive,
                royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt,
                publish, translate, create derivative works from, distribute, perform, and display such content.
              </p>
              <p className="text-muted-foreground">You represent and warrant that:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You own or control all rights in and to the content you provide</li>
                <li>All of your content is accurate and does not violate these Terms</li>
                <li>Your content does not infringe upon or violate the rights of any third party</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Payment Terms</h2>
              <p className="text-muted-foreground">
                Certain services may require payment. By using our paid services, you agree to pay all fees and charges
                associated with your account on a timely basis. All payments are non-refundable unless otherwise
                expressly stated.
              </p>
              <p className="text-muted-foreground">
                We may change our fees and payment policies at any time. Changes to the fees or payment policies will be
                posted on our website and will be effective upon posting.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your access to our services immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-muted-foreground">
                Upon termination, your right to use the services will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the services or contact us to request account deletion.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Dissafyt, its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your access to or use of or inability to access or use the services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Any content obtained from the services</li>
                <li>Unauthorized access, use or alteration of your transmissions or content</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Disclaimer</h2>
              <p className="text-muted-foreground">
                Our services are provided on an "AS IS" and "AS AVAILABLE" basis. Dissafyt makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties, including without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-muted-foreground">
                By continuing to access or use our services after those revisions become effective, you agree to be
                bound by the revised terms. If you do not agree to the new terms, please stop using the services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of the State of New York,
                without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Dissafyt Business Solutions Hub</p>
                <p>123 Business Avenue, Suite 500</p>
                <p>New York, NY 10001</p>
                <p>Email: legal@dissafyt.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
