import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateContact } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateContact(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const supabase = getSupabase();

    const { error } = await supabase.from("site_contact_inquiries").insert({
      name: result.data.name,
      email: result.data.email,
      category: result.data.category,
      message: result.data.message,
      source: "rewynd.tech",
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
