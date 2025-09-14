// This is a mock service for license management
// In a real app, this would connect to your backend/database

interface License {
  id: string
  name: string
  expiryDate: string
  isActive: boolean
  productId: string
}

// Mock database of licenses
const mockLicenses: Record<string, License[]> = {
  // User ID -> Licenses
}

export async function getUserLicenses(userId: string): Promise<License[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // If this user doesn't have any licenses yet, create some mock data
  if (!mockLicenses[userId]) {
    // 50% chance of having a license
    if (Math.random() > 0.5) {
      const expiryDate = new Date()
      expiryDate.setFullYear(expiryDate.getFullYear() + 1)

      mockLicenses[userId] = [
        {
          id: `license-${Math.random().toString(36).substring(2, 9)}`,
          name: "OCR Waybill Scanner Professional",
          expiryDate: expiryDate.toISOString().split("T")[0],
          isActive: true,
          productId: "ocr-waybill-scanner",
        },
      ]
    } else {
      mockLicenses[userId] = []
    }
  }

  return mockLicenses[userId] || []
}

export async function addLicense(userId: string, productId: string): Promise<License> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const expiryDate = new Date()
  expiryDate.setFullYear(expiryDate.getFullYear() + 1)

  const newLicense: License = {
    id: `license-${Math.random().toString(36).substring(2, 9)}`,
    name: productId === "ocr-waybill-scanner" ? "OCR Waybill Scanner Professional" : "Unknown Product",
    expiryDate: expiryDate.toISOString().split("T")[0],
    isActive: true,
    productId,
  }

  if (!mockLicenses[userId]) {
    mockLicenses[userId] = []
  }

  mockLicenses[userId].push(newLicense)
  return newLicense
}
