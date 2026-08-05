import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Where submissions are delivered
const TO_EMAIL = "letstalk@dissafyt.com"
// Until dissafyt.com is verified in Resend, use the shared onboarding sender.
// Once verified, change this to something like "Dissafyt Website <letstalk@dissafyt.com>".
const FROM_EMAIL = "Dissafyt Website <onboarding@resend.dev>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log("[v0] RESEND_API_KEY is not set")
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
    }

    const body = await request.json()
    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const phone = String(body.phone ?? "").trim()
    const plan = String(body.plan ?? "").trim()
    const message = String(body.message ?? "").trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }

    const rows: Array<[string, string]> = [
      ["Name", name],
      ["Email", email],
    ]
    if (phone) rows.push(["Phone", phone])
    if (plan) rows.push(["Plan of interest", plan])

    const detailsHtml = rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:6px 16px 6px 0;font-weight:600;color:#0f172a;vertical-align:top;">${escapeHtml(
            label,
          )}</td><td style="padding:6px 0;color:#334155;">${escapeHtml(value)}</td></tr>`,
      )
      .join("")

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
        <div style="background:#f97316;color:#ffffff;padding:20px 24px;border-radius:8px 8px 0 0;">
          <h1 style="margin:0;font-size:18px;">New contact form submission</h1>
        </div>
        <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">${detailsHtml}</table>
          <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0;">
            <p style="font-weight:600;color:#0f172a;margin:0 0 8px;">Message</p>
            <p style="color:#334155;white-space:pre-wrap;line-height:1.6;margin:0;">${escapeHtml(message)}</p>
          </div>
        </div>
      </div>
    `

    const text = [
      `New contact form submission`,
      ``,
      ...rows.map(([label, value]) => `${label}: ${value}`),
      ``,
      `Message:`,
      message,
    ].join("\n")

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${name}${plan ? ` — ${plan}` : ""}`,
      html,
      text,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.log("[v0] Contact route error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
