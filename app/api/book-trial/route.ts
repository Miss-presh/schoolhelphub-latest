import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { parentName, email, phone, childAge, subject, country, message } = body;

    if (!parentName || !email || !phone || !childAge || !subject || !country) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes("PASTE_YOUR")) {
      console.warn("[book-trial] GOOGLE_SHEETS_WEBHOOK_URL not configured — logging locally.");
      console.log("[book-trial] Submission:", { parentName, email, phone, childAge, subject, country, message });
      return NextResponse.json({ success: true, note: "Logged locally" });
    }

    const payload = {
      parentName,
      email,
      phone,
      childAge,
      subject,
      country,
      message: message || "",
      submittedAt: new Date().toISOString(),
      source: "schoolhelphub-website",
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("[book-trial] Webhook HTTP error:", response.status, text.slice(0, 200));
      return NextResponse.json(
        { error: "Failed to save booking. Please try WhatsApp: +234 704 352 3556" },
        { status: 502 }
      );
    }

    // Parse the Apps Script response body — a Google login redirect returns HTML, not JSON
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json") && !contentType.includes("text/plain")) {
      console.error("[book-trial] Unexpected content-type from webhook:", contentType);
      return NextResponse.json(
        { error: "Booking service misconfigured. Please contact us on WhatsApp: +234 704 352 3556" },
        { status: 502 }
      );
    }

    const data = await response.json().catch(() => null);
    if (!data || data.success === false) {
      const scriptErr = data?.error ?? "no error field";
      console.error("[book-trial] Script error:", scriptErr);
      return NextResponse.json(
        { error: "Failed to save booking. Please try WhatsApp: +234 704 352 3556", scriptError: scriptErr },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[book-trial] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please contact us on WhatsApp: +234 704 352 3556" },
      { status: 500 }
    );
  }
}
