import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileSearch, Code, FileText, HelpCircle, ArrowRight } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Documentation</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive guides and resources to help you get the most out of our software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="ocr-scanner" className="w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="ocr-scanner">OCR Scanner</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ocr-scanner" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-12">
                {/* Sidebar Navigation */}
                <div className="hidden lg:block">
                  <div className="sticky top-20">
                    <h3 className="font-semibold mb-4">On this page</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#getting-started" className="text-muted-foreground hover:text-orange-500">
                          Getting Started
                        </a>
                      </li>
                      <li>
                        <a href="#installation" className="text-muted-foreground hover:text-orange-500">
                          Installation
                        </a>
                      </li>
                      <li>
                        <a href="#usage" className="text-muted-foreground hover:text-orange-500">
                          Basic Usage
                        </a>
                      </li>
                      <li>
                        <a href="#advanced" className="text-muted-foreground hover:text-orange-500">
                          Advanced Features
                        </a>
                      </li>
                      <li>
                        <a href="#troubleshooting" className="text-muted-foreground hover:text-orange-500">
                          Troubleshooting
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                  <div id="getting-started" className="space-y-4">
                    <h2 className="text-2xl font-bold">Getting Started with OCR Waybill Scanner</h2>
                    <p className="text-muted-foreground">
                      The OCR Waybill Scanner is a powerful tool designed to automate the processing of waybills and
                      other shipping documents. This guide will help you get started with the software and make the most
                      of its features.
                    </p>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <FileSearch className="mr-2 h-5 w-5 text-orange-500" />
                          System Requirements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                          <li>• Internet connection</li>
                          <li>• Active Dissafyt account with OCR Waybill Scanner subscription</li>
                          <li>• For mobile scanning: iOS 12+ or Android 8+</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="installation" className="space-y-4">
                    <h2 className="text-2xl font-bold">Installation</h2>
                    <p className="text-muted-foreground">
                      As a cloud-based solution, the OCR Waybill Scanner doesn't require traditional installation.
                      Follow these steps to set up your account and access the software.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-lg">
                          1
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">Create an account</h3>
                          <p className="text-sm text-muted-foreground">
                            Sign up for a Dissafyt account at{" "}
                            <Link href="/auth/signup" className="text-orange-500 hover:underline">
                              dissafyt.com/auth/signup
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-lg">
                          2
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">Select a plan</h3>
                          <p className="text-sm text-muted-foreground">
                            Choose the OCR Waybill Scanner plan that best fits your business needs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-lg">
                          3
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">Access the dashboard</h3>
                          <p className="text-sm text-muted-foreground">
                            Log in to your account to access the OCR Waybill Scanner dashboard
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-lg">
                          4
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">Optional: Install mobile app</h3>
                          <p className="text-sm text-muted-foreground">
                            For mobile scanning, download our app from the App Store or Google Play
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="usage" className="space-y-4">
                    <h2 className="text-2xl font-bold">Basic Usage</h2>
                    <p className="text-muted-foreground">
                      Learn how to use the core features of the OCR Waybill Scanner to process your documents.
                    </p>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-orange-500" />
                          Uploading Documents
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          There are multiple ways to upload documents for processing:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li>
                            • <span className="font-medium">Drag and drop:</span> Simply drag files into the upload area
                            on the dashboard
                          </li>
                          <li>
                            • <span className="font-medium">File browser:</span> Click "Select Files" to browse your
                            computer
                          </li>
                          <li>
                            • <span className="font-medium">Mobile camera:</span> Use our mobile app to scan documents
                            directly
                          </li>
                          <li>
                            • <span className="font-medium">Batch upload:</span> Upload multiple files simultaneously
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground">Supported file formats: PDF, JPG, PNG, TIFF</p>
                      </CardContent>
                    </Card>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Code className="mr-2 h-5 w-5 text-orange-500" />
                          Processing Documents
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          After uploading, documents are automatically processed:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li>1. The OCR engine analyzes the document</li>
                          <li>2. Key data fields are extracted (tracking numbers, addresses, dates, etc.)</li>
                          <li>3. Data is validated for accuracy</li>
                          <li>4. Results are displayed in the dashboard</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">
                          Processing time depends on document complexity and system load, but typically takes 5-30
                          seconds per document.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-5 w-5 text-orange-500"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" x2="12" y1="15" y2="3"></line>
                          </svg>
                          Exporting Data
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Extracted data can be exported in various formats:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li>• CSV (for spreadsheet applications)</li>
                          <li>• Excel (formatted tables and sheets)</li>
                          <li>• JSON (for developers and API integration)</li>
                          <li>• PDF reports (comprehensive data with visualizations)</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">
                          To export data, navigate to the Export tab in the dashboard and select your preferred format.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="advanced" className="space-y-4">
                    <h2 className="text-2xl font-bold">Advanced Features</h2>
                    <p className="text-muted-foreground">
                      Explore the advanced capabilities of the OCR Waybill Scanner to maximize efficiency.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Custom Templates</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Create custom templates for specific document types or carriers to improve recognition
                            accuracy.
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">API Integration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Integrate the OCR Waybill Scanner with your existing systems using our comprehensive API.
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Automated Workflows</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Set up automated workflows to trigger actions based on extracted data or document types.
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Batch Processing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Process large volumes of documents in batches with scheduling and notification options.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div id="troubleshooting" className="space-y-4">
                    <h2 className="text-2xl font-bold">Troubleshooting</h2>
                    <p className="text-muted-foreground">
                      Solutions to common issues you might encounter when using the OCR Waybill Scanner.
                    </p>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <HelpCircle className="mr-2 h-5 w-5 text-orange-500" />
                          Common Issues
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-md font-semibold">Poor Recognition Accuracy</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              If you're experiencing low accuracy, try these solutions:
                            </p>
                            <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                              <li>• Ensure the document is well-lit and clearly visible</li>
                              <li>• Use higher resolution scans (minimum 300 DPI recommended)</li>
                              <li>• Create a custom template for the specific document type</li>
                              <li>• Adjust contrast settings for better text visibility</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-md font-semibold">Upload Failures</h3>
                            <p className="text-sm text-muted-foreground mt-1">If documents fail to upload:</p>
                            <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                              <li>• Check your internet connection</li>
                              <li>• Ensure the file is in a supported format (PDF, JPG, PNG, TIFF)</li>
                              <li>• Verify the file size is under the 20MB limit</li>
                              <li>• Try uploading in smaller batches</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-md font-semibold">Processing Delays</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              If processing takes longer than expected:
                            </p>
                            <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                              <li>• Large or complex documents may take longer to process</li>
                              <li>• Check system status for any reported issues</li>
                              <li>• Try processing during off-peak hours</li>
                              <li>• Contact support if delays persist</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="border-t pt-8">
                    <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Link href="/contact">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contact Support</Button>
                      </Link>
                      <Link href="/faq">
                        <Button variant="outline" className="w-full">
                          View FAQ
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="api" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-12">
                {/* Sidebar Navigation */}
                <div className="hidden lg:block">
                  <div className="sticky top-20">
                    <h3 className="font-semibold mb-4">API Documentation</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#api-overview" className="text-muted-foreground hover:text-orange-500">
                          Overview
                        </a>
                      </li>
                      <li>
                        <a href="#authentication" className="text-muted-foreground hover:text-orange-500">
                          Authentication
                        </a>
                      </li>
                      <li>
                        <a href="#endpoints" className="text-muted-foreground hover:text-orange-500">
                          Endpoints
                        </a>
                      </li>
                      <li>
                        <a href="#examples" className="text-muted-foreground hover:text-orange-500">
                          Code Examples
                        </a>
                      </li>
                      <li>
                        <a href="#rate-limits" className="text-muted-foreground hover:text-orange-500">
                          Rate Limits
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                  <div id="api-overview" className="space-y-4">
                    <h2 className="text-2xl font-bold">API Overview</h2>
                    <p className="text-muted-foreground">
                      The Dissafyt OCR Waybill Scanner API allows you to integrate our powerful document processing
                      capabilities directly into your applications. This RESTful API provides endpoints for document
                      upload, processing, and data retrieval.
                    </p>
                    <Card>
                      <CardHeader>
                        <CardTitle>Base URL</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <code className="bg-muted p-2 rounded block">https://api.dissafyt.com/v1</code>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="authentication" className="space-y-4">
                    <h2 className="text-2xl font-bold">Authentication</h2>
                    <p className="text-muted-foreground">
                      All API requests require authentication using API keys. You can generate API keys in your account
                      dashboard.
                    </p>
                    <Card>
                      <CardHeader>
                        <CardTitle>API Key Authentication</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">Include your API key in the request header:</p>
                        <code className="bg-muted p-2 rounded block">Authorization: Bearer YOUR_API_KEY</code>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="endpoints" className="space-y-4">
                    <h2 className="text-2xl font-bold">API Endpoints</h2>
                    <p className="text-muted-foreground">The API provides the following main endpoints:</p>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>Document Upload</CardTitle>
                        <CardDescription>POST /documents/upload</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">Upload a document for OCR processing.</p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Request Parameters</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>
                              • <code>file</code> (required): The document file to process
                            </li>
                            <li>
                              • <code>template_id</code> (optional): ID of a custom template to use
                            </li>
                            <li>
                              • <code>options</code> (optional): JSON object with processing options
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>Document Status</CardTitle>
                        <CardDescription>GET /documents/{"{document_id}"}/status</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">Check the processing status of a document.</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Response</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>
                              • <code>status</code>: Current status (queued, processing, completed, failed)
                            </li>
                            <li>
                              • <code>progress</code>: Processing progress percentage
                            </li>
                            <li>
                              • <code>estimated_completion_time</code>: Estimated time to completion
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Document Results</CardTitle>
                        <CardDescription>GET /documents/{"{document_id}"}/results</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Retrieve the extracted data from a processed document.
                        </p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Response</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>
                              • <code>document_id</code>: Unique identifier for the document
                            </li>
                            <li>
                              • <code>extracted_data</code>: JSON object containing all extracted fields
                            </li>
                            <li>
                              • <code>confidence_scores</code>: Confidence scores for each extracted field
                            </li>
                            <li>
                              • <code>processing_time</code>: Time taken to process the document
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="examples" className="space-y-4">
                    <h2 className="text-2xl font-bold">Code Examples</h2>
                    <p className="text-muted-foreground">
                      Here are some examples of how to use the API in different programming languages:
                    </p>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>JavaScript</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded overflow-x-auto">
                          <code>
                            {`// Upload a document
async function uploadDocument(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('https://api.dissafyt.com/v1/documents/upload', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: formData
  });
  
  return await response.json();
}

// Check document status
async function checkStatus(documentId) {
  const response = await fetch(\`https://api.dissafyt.com/v1/documents/\${documentId}/status\`, {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  return await response.json();
}

// Get document results
async function getResults(documentId) {
  const response = await fetch(\`https://api.dissafyt.com/v1/documents/\${documentId}/results\`, {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  return await response.json();
}`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Python</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-muted p-4 rounded overflow-x-auto">
                          <code>
                            {`import requests

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.dissafyt.com/v1'

# Upload a document
def upload_document(file_path):
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }
    
    with open(file_path, 'rb') as file:
        files = {'file': file}
        response = requests.post(f'{BASE_URL}/documents/upload', 
                                headers=headers, 
                                files=files)
    
    return response.json()

# Check document status
def check_status(document_id):
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }
    
    response = requests.get(f'{BASE_URL}/documents/{document_id}/status', 
                           headers=headers)
    
    return response.json()

# Get document results
def get_results(document_id):
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }
    
    response = requests.get(f'{BASE_URL}/documents/{document_id}/results', 
                           headers=headers)
    
    return response.json()`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="rate-limits" className="space-y-4">
                    <h2 className="text-2xl font-bold">Rate Limits</h2>
                    <p className="text-muted-foreground">
                      API requests are subject to rate limiting based on your subscription plan:
                    </p>

                    <Card>
                      <CardHeader>
                        <CardTitle>Rate Limit Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 px-4">Plan</th>
                                <th className="text-left py-2 px-4">Requests per minute</th>
                                <th className="text-left py-2 px-4">Requests per day</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 px-4">Starter</td>
                                <td className="py-2 px-4">30</td>
                                <td className="py-2 px-4">5,000</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">Professional</td>
                                <td className="py-2 px-4">60</td>
                                <td className="py-2 px-4">20,000</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">Enterprise</td>
                                <td className="py-2 px-4">Custom</td>
                                <td className="py-2 px-4">Custom</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          If you exceed your rate limit, requests will return a 429 Too Many Requests response.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="border-t pt-8">
                    <h2 className="text-2xl font-bold mb-4">Need Technical Support?</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Link href="/contact">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          Contact Developer Support <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="https://github.com/dissafyt/api-examples" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          View Sample Code on GitHub
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="mt-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Integration Options</h2>
                  <p className="text-muted-foreground">
                    The OCR Waybill Scanner can be integrated with various systems and platforms to streamline your
                    workflow.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>ERP Systems</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Integrate with popular ERP systems including SAP, Oracle, Microsoft Dynamics, and more.
                        </p>
                        <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-4">
                          View integration guide <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Warehouse Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Connect with WMS solutions like Manhattan Associates, HighJump, and custom systems.
                        </p>
                        <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-4">
                          View integration guide <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Shipping Platforms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Integrate with shipping platforms like ShipStation, ShipWorks, and carrier-specific systems.
                        </p>
                        <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-4">
                          View integration guide <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Accounting Software</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Connect with QuickBooks, Xero, Sage, and other accounting platforms.
                        </p>
                        <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-4">
                          View integration guide <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Custom Applications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Integrate with your custom-built applications using our comprehensive API.
                        </p>
                        <Link
                          href="#api"
                          className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-4"
                        >
                          View API documentation <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Cloud Storage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Connect with Google Drive, Dropbox, OneDrive, and other cloud storage services.
                        </p>
                        <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-4">
                          View integration guide <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Integration Methods</h2>
                  <p className="text-muted-foreground">
                    Choose the integration method that best fits your technical requirements and resources:
                  </p>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>API Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Our RESTful API provides the most flexible integration option, allowing you to:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Upload documents programmatically</li>
                        <li>• Monitor processing status</li>
                        <li>• Retrieve extracted data</li>
                        <li>• Manage templates and settings</li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        Ideal for custom applications and systems with API capabilities.
                      </p>
                      <Link
                        href="#api"
                        className="text-orange-500 hover:text-orange-600 text-sm flex items-center mt-2"
                      >
                        View API documentation <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Pre-built Connectors</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        We offer pre-built connectors for popular platforms:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• SAP Connector</li>
                        <li>• Salesforce Connector</li>
                        <li>• Microsoft Dynamics Connector</li>
                        <li>• QuickBooks Connector</li>
                        <li>• Zapier Integration</li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        These connectors provide a simplified integration process with minimal development effort.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Webhook Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Set up webhooks to receive real-time notifications when:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Documents are uploaded</li>
                        <li>• Processing is completed</li>
                        <li>• Errors occur</li>
                        <li>• Custom events are triggered</li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        Webhooks allow your systems to react to events in real-time without polling the API.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-4">Integration Support</h2>
                  <p className="text-muted-foreground mb-6">
                    Our integration specialists are available to help you connect the OCR Waybill Scanner with your
                    existing systems.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Link href="/contact?inquiry=integration">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Request Integration Support
                      </Button>
                    </Link>
                    <Link href="/services#consultation">
                      <Button variant="outline" className="w-full">
                        Schedule Integration Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
