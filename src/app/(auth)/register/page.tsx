"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { UserPlus, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            phone: formData.phone,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        router.push("/account/profile");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-xl font-heading font-bold text-brand-dark">
          Create an Account
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          Join the MangaloreStore family for fast checkout and rewards
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Anand Shenoy"
            className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="10-digit mobile"
            className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-brand-dark mb-1">
              Password *
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-dark mb-1">
              Confirm *
            </label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            required
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            className="text-brand-saffron focus:ring-brand-saffron rounded"
          />
          <span className="text-[11px] text-muted-foreground">
            I agree to the{" "}
            <Link href="/terms" className="text-brand-saffron hover:underline">
              Terms & Conditions
            </Link>
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm mt-2"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <UserPlus className="w-4 h-4" /> Register
            </>
          )}
        </button>
      </form>

      <div className="text-center text-xs text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-brand-saffron font-bold hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
