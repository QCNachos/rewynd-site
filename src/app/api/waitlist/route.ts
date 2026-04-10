import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { validateWaitlist } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateWaitlist(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const supabase = getSupabase();

    const { data: existing } = await supabase
      .from("site_waitlist_signups")
      .select("id")
      .eq("email", result.data.email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    const { error } = await supabase.from("site_waitlist_signups").insert({
      name: result.data.name,
      email: result.data.email,
      role: result.data.role,
      company: result.data.company || null,
      notes: result.data.notes || null,
      source: "rewynd.tech",
    });

    if (error) {
      console.error("Supabase waitlist error:", error);
      return NextResponse.json(
        { error: "Failed to save. Please try again." },
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
