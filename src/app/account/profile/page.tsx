"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import { User, Award, Save, Check } from "lucide-react";

export default function ProfilePage() {
  const { user, profile } = useAuth();
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const supabase = createClient();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);

    try {
      await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          phone,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Loyalty Points Card */}
      <div className="bg-gradient-to-r from-brand-saffron to-brand-saffron-600 text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-cream-100">
            Loyalty Club Balance
          </span>
          <h2 className="text-3xl font-heading font-extrabold mt-1">
            {profile?.loyalty_points || 120} Points
          </h2>
          <p className="text-xs text-brand-cream-100 mt-1">
            Worth ₹{((profile?.loyalty_points || 120) * 0.5).toFixed(2)} in checkout discounts
          </p>
        </div>
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <Award className="w-8 h-8 text-yellow-300" />
        </div>
      </div>

      {/* Profile Form */}
      <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg font-heading font-bold text-brand-dark pb-2 border-b border-brand-cream-200">
          Personal Details
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-xs font-semibold text-brand-dark mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-dark mb-1">
              Email Address
            </label>
            <input
              type="email"
              disabled
              value={user?.email || ""}
              className="w-full px-3.5 py-2.5 text-xs bg-brand-cream-100 border border-brand-cream-300 rounded-lg text-muted-foreground cursor-not-allowed"
            />
            <span className="text-[10px] text-muted-foreground mt-0.5 block">
              Contact support to change your account email
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-dark mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile"
              className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-saffron"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 bg-brand-saffron hover:bg-brand-saffron-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-2 shadow-sm"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" /> Saved Successfully
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Changes"}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
