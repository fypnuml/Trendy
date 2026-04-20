"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/auth";

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // In-memory demo credentials for now:
  const DEMO_EMAIL = "admin@trendy.com";
  const DEMO_PASSWORD = "password123";

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    await createSession(email);
    redirect("/admin");
  } else {
    return { error: "Invalid credentials. Try admin@trendy.com / password123" };
  }
}

export async function logoutAction() {
  await deleteSession();
  redirect("/admin/login");
}
