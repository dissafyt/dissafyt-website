export interface ServiceCategory {
  id: string
  name: string
  description: string
  color: string
}

export interface SoftwareItem {
  id: string
  name: string
  description: string
  longDescription: string
  features: string[]
  categories: ServiceCategory[]
  demoUrl?: string
  icon: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "business-consultation",
    name: "Business Consultation",
    description: "Strategic guidance and optimization",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "systems-analysis",
    name: "Systems Analysis",
    description: "Comprehensive system evaluation",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "systems-design",
    name: "Systems Design",
    description: "Custom architecture solutions",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "internal-audit",
    name: "Internal Audit",
    description: "Process and compliance review",
    color: "bg-orange-100 text-orange-800",
  },
]

export const softwareItems: SoftwareItem[] = [
  {
    id: "ocr-waybill-scanner",
    name: "OCR Waybill Scanner",
    description: "Advanced document processing with AI-powered OCR technology",
    longDescription:
      "Revolutionize your document processing with our advanced OCR technology. Automatically extract and digitize information from waybills and shipping documents with unprecedented accuracy.",
    features: [
      "AI-powered text extraction with 99%+ accuracy",
      "Drag and drop or bulk upload documents",
      "Automatic data validation and formatting",
      "Multiple export formats: CSV, Excel, JSON",
      "Real-time processing and instant results",
      "Secure cloud storage and processing",
      "Integration with existing systems",
      "24/7 technical support",
    ],
    categories: [
      serviceCategories[1], // Systems Analysis
      serviceCategories[2], // Systems Design
      serviceCategories[0], // Business Consultation
    ],
    demoUrl: "https://ocr-waybill.vercel.app/",
    icon: "Scan",
  },
  {
    id: "nwata-ethical-productivity",
    name: "Nwata - Ethical Productivity",
    description: "Discreet productivity intelligence system measuring entropy of effort",
    longDescription:
      "A privacy-aware productivity tracking system that gamifies work activity while providing valuable organizational insights. Measures the entropy of effort rather than just time tracking.",
    features: [
      "Entropy of effort measurement",
      "Gamified employee experience with streaks and points",
      "Privacy-first design with local data storage",
      "Aggregated organizational insights",
      "Cross-platform support (Windows/macOS)",
      "White-label ready for HR platforms",
      "Real-time productivity analytics",
      "Seamless system integration",
    ],
    categories: [
      serviceCategories[1], // Systems Analysis
      serviceCategories[2], // Systems Design
      serviceCategories[0], // Business Consultation
    ],
    demoUrl: "https://nwata.vercel.app/",
    icon: "Activity",
  },
]

export function getSoftwareByCategory(categoryId: string): SoftwareItem[] {
  return softwareItems.filter((software) => software.categories.some((category) => category.id === categoryId))
}
