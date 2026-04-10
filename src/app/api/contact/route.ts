import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { validateContact } from "@/lib/validations";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = "1 hour";

async function getClientIp(): Promise<string> {
  const h = await headers();
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateContact(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const supabase = getSupabase();
    const ip = await getClientIp();

    const { data: allowed } = await supabase.rpc("check_rate_limit", {
      p_table: "site_contact_inquiries",
      p_ip: ip,
      p_max: RATE_LIMIT_MAX,
      p_window: RATE_LIMIT_WINDOW,
    });

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { error } = await supabase.from("site_contact_inquiries").insert({
      name: result.data.name,
      email: result.data.email,
      category: result.data.category,
      message: result.data.message,
      source: "rewynd.tech",
      ip_address: ip,
    });

    if (error) {
      console.error("Supabase contact error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
