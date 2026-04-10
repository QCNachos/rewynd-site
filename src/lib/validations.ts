export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export interface WaitlistInput {
  name: string;
  email: string;
  role: string;
  company?: string;
  notes?: string;
}

export interface ContactInput {
  name: string;
  email: string;
  category: string;
  message: string;
}

export function validateWaitlist(
  data: Record<string, unknown>
): { valid: true; data: WaitlistInput } | { valid: false; error: string } {
  const { name, email, role } = data;

  if (!name || typeof name !== "string" || !name.trim()) {
    return { valid: false, error: "Name is required" };
  }
  if (!email || typeof email !== "string" || !validateEmail(email)) {
    return { valid: false, error: "Valid email is required" };
  }
  if (!role || typeof role !== "string") {
    return { valid: false, error: "Role is required" };
  }

  return {
    valid: true,
    data: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      role: role as string,
      company:
        typeof data.company === "string" ? data.company.trim() : undefined,
      notes: typeof data.notes === "string" ? data.notes.trim() : undefined,
    },
  };
}

export function validateContact(
  data: Record<string, unknown>
): { valid: true; data: ContactInput } | { valid: false; error: string } {
  const { name, email, category, message } = data;

  if (!name || typeof name !== "string" || !name.trim()) {
    return { valid: false, error: "Name is required" };
  }
  if (!email || typeof email !== "string" || !validateEmail(email)) {
    return { valid: false, error: "Valid email is required" };
  }
  if (!category || typeof category !== "string") {
    return { valid: false, error: "Category is required" };
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return { valid: false, error: "Message is required" };
  }

  return {
    valid: true,
    data: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      category: category as string,
      message: (message as string).trim(),
    },
  };
}
