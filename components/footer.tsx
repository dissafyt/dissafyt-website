import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Dissafyt</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses with innovative software solutions and expert consultation.
            </p>
            <div className="flex items-center mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">info@dissafyt.com</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Business City, BC</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Business Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Systems Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Systems Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Internal Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h4 className="font-semibold mb-4">Software</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/software/ocr-waybill-scanner"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  OCR Waybill Scanner
                </Link>
              </li>
              <li>
                <Link
                  href="/software/nwata-ethical-productivity"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Nwata - Ethical Productivity
                </Link>
              </li>
              <li>
                <Link href="/software" className="text-gray-300 hover:text-orange-500 transition-colors">
                  View All Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/documentation" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Dissafyt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
