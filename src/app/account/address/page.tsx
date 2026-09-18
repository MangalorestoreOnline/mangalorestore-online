"use client";

import React, { useState } from "react";
import { Plus, MapPin, Trash2, Edit2, Check } from "lucide-react";

export default function AddressBookPage() {
  const [addresses, setAddresses] = useState([
    {
      id: "a1",
      name: "Home",
      fullName: "Priya Kulal",
      phone: "+91 9820123456",
      line1: "Flat 402, Sea Breeze Apts",
      line2: "Near Bandra Fort",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400050",
      isDefault: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAddr, setNewAddr] = useState({
    name: "Work",
    fullName: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "Karnataka",
    pincode: "",
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setAddresses([
      ...addresses,
      {
        id: `a${Date.now()}`,
        ...newAddr,
        isDefault: false,
      },
    ]);
    setShowForm(false);
  };

  return (
    <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-brand-cream-200">
        <h1 className="text-xl font-heading font-bold text-brand-dark">
          Saved Delivery Addresses
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-3.5 py-2 bg-brand-saffron hover:bg-brand-saffron-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" /> Add New Address
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="p-5 bg-brand-cream-50 border border-brand-cream-300 rounded-xl space-y-3 text-xs">
          <h3 className="font-bold text-sm text-brand-dark">New Address Details</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                required
                value={newAddr.fullName}
                onChange={(e) => setNewAddr({ ...newAddr, fullName: e.target.value })}
                className="w-full p-2 border border-brand-cream-300 rounded bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={newAddr.phone}
                onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                className="w-full p-2 border border-brand-cream-300 rounded bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Address Line 1</label>
            <input
              type="text"
              required
              value={newAddr.line1}
              onChange={(e) => setNewAddr({ ...newAddr, line1: e.target.value })}
              className="w-full p-2 border border-brand-cream-300 rounded bg-white"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                required
                value={newAddr.city}
                onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                className="w-full p-2 border border-brand-cream-300 rounded bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">State</label>
              <input
                type="text"
                required
                value={newAddr.state}
                onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                className="w-full p-2 border border-brand-cream-300 rounded bg-white"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Pincode</label>
              <input
                type="text"
                required
                value={newAddr.pincode}
                onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                className="w-full p-2 border border-brand-cream-300 rounded bg-white"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-3 py-1.5 border border-brand-cream-300 rounded bg-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-brand-saffron text-white rounded font-bold"
            >
              Save Address
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-4 rounded-xl border relative text-xs space-y-1.5 ${
              addr.isDefault
                ? "border-brand-saffron bg-brand-cream-50"
                : "border-brand-cream-300 bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-brand-dark flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-saffron" /> {addr.name}
              </span>
              {addr.isDefault && (
                <span className="bg-brand-saffron text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Default
                </span>
              )}
            </div>
            <p className="font-semibold text-brand-dark">{addr.fullName}</p>
            <p className="text-muted-foreground">{addr.line1}, {addr.line2}</p>
            <p className="text-muted-foreground">{addr.city}, {addr.state} - {addr.pincode}</p>
            <p className="text-muted-foreground">Mobile: {addr.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
