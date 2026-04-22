"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions/auth";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-6 relative noise-bg">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <span className="text-4xl font-serif font-semibold tracking-tight text-white mb-2 block">
            Grace Aluminum
          </span>
          <p className="text-[10px] tracking-[0.2em] text-copper uppercase font-medium">
            Admin Portal Access
          </p>
        </div>

        <form
          action={formAction}
          className="bg-white/5 p-8 backdrop-blur-md rounded-sm border border-white/10 shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-semibold tracking-[0.15em] text-white/50 uppercase mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-copper text-white outline-none transition-colors duration-300 placeholder:text-white/20"
                placeholder="admin@grace-aluminum.com"
                defaultValue="admin@grace-aluminum.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[10px] font-semibold tracking-[0.15em] text-white/50 uppercase mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-copper text-white outline-none transition-colors duration-300 placeholder:text-white/20"
                placeholder="••••••••"
                defaultValue="password123"
              />
            </div>

            {state?.error && (
              <p className="text-red-400 text-xs text-center">{state.error}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="group w-full flex items-center justify-center gap-3 py-4 mt-8 bg-copper text-white text-sm font-semibold tracking-[0.1em] uppercase hover:bg-copper-light transition-all duration-300 rounded-sm disabled:opacity-50"
            >
              {isPending ? "Authenticating..." : "Sign In"}
              {!isPending && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
