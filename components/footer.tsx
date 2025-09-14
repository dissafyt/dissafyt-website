import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Dissafyt</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through expert consulting and innovative software solutions.
            </p>
            <div className="text-gray-400">
              <p>📧 info@dissafyt.com</p>
              <p>📞 +27 (0) 11 123 4567</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Business Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Systems Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Systems Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Internal Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Software</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/software/ocr-waybill-scanner" className="hover:text-white transition-colors">
                  OCR Waybill Scanner
                </Link>
              </li>
              <li>
                <Link href="/software/nwata-ethical-productivity" className="hover:text-white transition-colors">
                  Nwata - Ethical Productivity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dissafyt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
