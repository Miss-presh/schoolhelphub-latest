import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes("PASTE_YOUR")) {
      console.warn("[contact] GOOGLE_SHEETS_WEBHOOK_URL not configured — logging locally.");
      console.log("[contact] Submission:", { name, email, subject, message });
      return NextResponse.json({ success: true, note: "Logged locally" });
    }

    const payload = {
      submittedAt: new Date().toISOString(),
      parentName: name,
      email,
      phone: "",
      childAge: "",
      subject,
      message,
      source: "contact-form",
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("[contact] Webhook HTTP error:", response.status, text.slice(0, 200));
      return NextResponse.json(
        { error: "Failed to send message. Please try WhatsApp: +234 704 352 3556" },
        { status: 502 }
      );
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json") && !contentType.includes("text/plain")) {
      console.error("[contact] Unexpected content-type from webhook:", contentType);
      return NextResponse.json(
        { error: "Message service misconfigured. Please contact us on WhatsApp: +234 704 352 3556" },
        { status: 502 }
      );
    }

    const data = await response.json().catch(() => null);
    if (!data || data.success === false) {
      console.error("[contact] Script error:", data?.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try WhatsApp: +234 704 352 3556" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please contact us on WhatsApp: +234 704 352 3556" },
      { status: 500 }
    );
  }
}
