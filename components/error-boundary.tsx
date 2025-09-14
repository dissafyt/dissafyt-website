"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo })

    // Log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo)

    // In production, you would send this to your error tracking service
    // Example: Sentry.captureException(error)
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <div className="max-w-md">
              <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
              <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
              <div className="bg-gray-100 p-4 rounded-md mb-4 overflow-auto text-left">
                <p className="font-mono text-sm text-red-600 whitespace-pre-wrap">{this.state.error?.toString()}</p>
              </div>
              <Button onClick={this.handleReset} className="flex items-center">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try again
              </Button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
