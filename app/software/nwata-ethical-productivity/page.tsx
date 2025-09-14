import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ExternalLink, Activity, Shield, Users, BarChart3, Gamepad2, Database } from "lucide-react"

export default function NwataPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Activity className="h-12 w-12 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nwata - Ethical Productivity</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A discreet productivity intelligence system that measures the entropy of effort, turning raw work activity
              into actionable, gamified organizational insight.
            </p>

            {/* Service Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Systems Analysis
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Systems Design
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Business Consultation
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nwata.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Try Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="border border-gray-300 hover:border-blue-500 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* What Makes Nwata Different */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Nwata Different</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entropy of Effort</h3>
                <p className="text-gray-600">
                  Measures how dispersed or focused effort is, providing more truthful insights than raw hours.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Discreet by Design</h3>
                <p className="text-gray-600">
                  Workers don't feel stalked. They see gamification while managers get anonymized org-level stats.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Gamepad2 className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gamified Compliance</h3>
                <p className="text-gray-600">
                  Streaks, bonuses, and focus points make it engaging for workers to stay productive.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">White-Label Ready</h3>
                <p className="text-gray-600">
                  Perfect framework for HR platforms to embed as a productivity intelligence add-on.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Silent Agent Installation</h3>
                    <p className="text-gray-600">
                      Lightweight agent runs in background on Windows/macOS, capturing app usage, window focus, and
                      browser activity in local SQLite database.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gamification Layer</h3>
                    <p className="text-gray-600">
                      Employees see streaks, points, daily tasks, and progress bars in the system tray UI - showing
                      wins, not raw surveillance data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Privacy-Aware Sync</h3>
                    <p className="text-gray-600">
                      No raw keystrokes or screenshots. Only aggregated and anonymized stats (focus %, streaks,
                      productivity balance) sync to cloud.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Organizational Intelligence</h3>
                    <p className="text-gray-600">
                      Admin dashboards provide focus distribution, engagement streaks, and productivity balance insights
                      across teams and organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Database className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local-First Architecture</h3>
                <p className="text-gray-600">
                  Data stored locally in SQLite, syncs only when subscription is active. Full privacy control.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Activity className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Entropy Measurement</h3>
                <p className="text-gray-600">
                  Advanced algorithms measure effort distribution and focus patterns for accurate productivity insights.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Gamepad2 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gamified Experience</h3>
                <p className="text-gray-600">
                  Points, streaks, achievements, and progress tracking make productivity improvement engaging.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Org Support</h3>
                <p className="text-gray-600">
                  Enterprise-ready with organization management, team analytics, and scalable deployment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Shield className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privacy by Design</h3>
                <p className="text-gray-600">
                  No keylogging, no screenshots. Only anonymized productivity metrics are collected.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <BarChart3 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Comprehensive insights for managers with team productivity trends and focus analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Nwata</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-600">Ethical Tracking</h3>
                  <p className="text-gray-600">
                    Gamification instead of surveillance, building trust not resentment in your workforce.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">Entropy Intelligence</h3>
                  <p className="text-gray-600">
                    Measures focus distribution rather than raw hours for truthful productivity insights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Privacy First</h3>
                  <p className="text-gray-600">
                    Local SQLite storage with only aggregated stats synced to cloud. Complete data control.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">Employee Engagement</h3>
                  <p className="text-gray-600">
                    Workers see rewards and progress, not raw monitoring data. Increases buy-in and participation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Organizational Insight</h3>
                  <p className="text-gray-600">
                    Managers get anonymized team-level productivity intelligence without invading privacy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-600">White-Label Integration</h3>
                  <p className="text-gray-600">
                    Perfect for HR platforms to embed as productivity add-on with full customization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Productivity Intelligence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of ethical productivity tracking. Try Nwata today and see how entropy-based insights
              can revolutionize your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nwata.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Try Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="border border-gray-300 hover:border-blue-500 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
