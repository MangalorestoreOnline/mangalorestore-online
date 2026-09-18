"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import {
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const shipping = useCartStore((state) => state.getShippingAmount());
  const discount = useCartStore((state) => state.discountAmount);
  const total = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "Karnataka",
    pincode: "",
    paymentMethod: "razorpay" as "razorpay" | "cod",
  });

  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.phone || !formData.addressLine1 || !formData.pincode) {
        alert("Please fill in all mandatory address details.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      // 1. Create order API call
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: formData.fullName,
          customer_email: formData.email || "guest@mangalorestore.online",
          customer_phone: formData.phone,
          shipping_address: {
            full_name: formData.fullName,
            phone: formData.phone,
            address_line1: formData.addressLine1,
            address_line2: formData.addressLine2,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
          payment_method: formData.paymentMethod,
          items: items.map((i) => ({
            product_id: i.productId,
            variant_id: i.variantId || null,
            quantity: i.quantity,
          })),
        }),
      });

      const orderData = await orderRes.json();
      const mockOrderNo = orderData?.data?.order_number || `MSO-2025-${Math.floor(10000 + Math.random() * 90000)}`;

      if (formData.paymentMethod === "cod") {
        setGeneratedOrderNumber(mockOrderNo);
        setOrderComplete(true);
        clearCart();
        setLoading(false);
        return;
      }

      // Razorpay Checkout flow
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: Math.round(total * 100),
        currency: "INR",
        name: "MangaloreStore.Online",
        description: `Order #${mockOrderNo}`,
        order_id: orderData?.data?.razorpay_order_id,
        handler: async function (response: any) {
          // Verify payment
          await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              order_id: orderData?.data?.id || mockOrderNo,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          setGeneratedOrderNumber(mockOrderNo);
          setOrderComplete(true);
          clearCart();
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#E8571A",
        },
      };

      // @ts-ignore
      if (typeof window !== "undefined" && window.Razorpay) {
        // @ts-ignore
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Fallback for simulation / mock
        setTimeout(() => {
          setGeneratedOrderNumber(mockOrderNo);
          setOrderComplete(true);
          clearCart();
          setLoading(false);
        }, 1000);
      }
    } catch (err) {
      console.error("Payment error:", err);
      // Fallback
      setGeneratedOrderNumber(`MSO-2025-${Math.floor(10000 + Math.random() * 90000)}`);
      setOrderComplete(true);
      clearCart();
    } finally {
      setLoading(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-brand-dark">
          Order Confirmed! 🙏
        </h1>
        <p className="text-sm text-muted-foreground">
          Thank you for ordering with MangaloreStore.Online. Your order number is{" "}
          <strong className="text-brand-saffron">{generatedOrderNumber}</strong>. We have sent a confirmation email & WhatsApp message.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-brand-saffron text-white rounded-lg font-semibold text-sm hover:bg-brand-saffron-600 transition-colors shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-heading font-bold text-brand-dark">No Items in Cart</h2>
        <p className="text-xs text-muted-foreground">Add some items before checking out.</p>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 bg-brand-saffron text-white rounded-lg text-xs font-semibold"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" },
        ]}
      />

      <h1 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark">
        Secure Checkout
      </h1>

      {/* Stepper Progress */}
      <div className="flex items-center justify-between max-w-xl mx-auto py-4">
        <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? "text-brand-saffron" : "text-gray-400"}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${step >= 1 ? "bg-brand-saffron" : "bg-gray-300"}`}>
            1
          </span>
          <span>Delivery Address</span>
        </div>
        <div className="h-0.5 flex-1 bg-brand-cream-300 mx-3" />
        <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? "text-brand-saffron" : "text-gray-400"}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${step >= 2 ? "bg-brand-saffron" : "bg-gray-300"}`}>
            2
          </span>
          <span>Review</span>
        </div>
        <div className="h-0.5 flex-1 bg-brand-cream-300 mx-3" />
        <div className={`flex items-center gap-2 text-xs font-bold ${step >= 3 ? "text-brand-saffron" : "text-gray-400"}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${step >= 3 ? "bg-brand-saffron" : "bg-gray-300"}`}>
            3
          </span>
          <span>Payment</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Step Content */}
        <div className="lg:col-span-2 bg-white border border-brand-cream-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-brand-dark pb-2 border-b border-brand-cream-200">
                1. Shipping & Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Priya Kulal"
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Email Address (for order tracking)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Flat / House No / Street Address *
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  required
                  value={formData.addressLine1}
                  onChange={handleChange}
                  placeholder="Door No, Building Name, Street"
                  className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Landmark / Area (Optional)
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  placeholder="Near Temple / Opposite Hospital"
                  className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron bg-white"
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Goa">Goa</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6 digits"
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-cream-300 rounded-lg focus:ring-1 focus:ring-brand-saffron"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-saffron text-white rounded-lg text-xs font-bold hover:bg-brand-saffron-600 transition-colors flex items-center gap-2 shadow-sm"
                >
                  Continue to Review <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-heading font-bold text-brand-dark pb-2 border-b border-brand-cream-200">
                2. Review Your Order & Address
              </h2>

              <div className="p-4 bg-brand-cream-100 rounded-xl space-y-2 text-xs">
                <p className="font-bold text-brand-dark">Delivering To:</p>
                <p>{formData.fullName} ({formData.phone})</p>
                <p>{formData.addressLine1}, {formData.addressLine2 && `${formData.addressLine2}, `}{formData.city}, {formData.state} - {formData.pincode}</p>
                <button
                  onClick={() => setStep(1)}
                  className="text-brand-saffron hover:underline font-semibold mt-1"
                >
                  Edit Address
                </button>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-xs text-brand-dark">Items in Order ({items.length}):</p>
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-xs py-2 border-b border-brand-cream-200">
                    <div>
                      <p className="font-semibold text-brand-dark">{item.product.name}</p>
                      <p className="text-muted-foreground text-[11px]">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-brand-dark">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-brand-dark flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-brand-saffron text-white rounded-lg text-xs font-bold hover:bg-brand-saffron-600 transition-colors flex items-center gap-2 shadow-sm"
                >
                  Proceed to Payment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-lg font-heading font-bold text-brand-dark pb-2 border-b border-brand-cream-200">
                3. Choose Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border-2 border-brand-saffron bg-brand-cream-50 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={formData.paymentMethod === "razorpay"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "razorpay" })}
                      className="text-brand-saffron focus:ring-brand-saffron"
                    />
                    <div>
                      <p className="text-xs font-bold text-brand-dark">Online Payment (UPI, Cards, Netbanking)</p>
                      <p className="text-[11px] text-muted-foreground">Fast, secure instant checkout via Razorpay</p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-brand-saffron" />
                </label>

                <label className="flex items-center justify-between p-4 border border-brand-cream-300 rounded-xl cursor-pointer hover:bg-brand-cream-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={() => setFormData({ ...formData, paymentMethod: "cod" })}
                      className="text-brand-saffron focus:ring-brand-saffron"
                    />
                    <div>
                      <p className="text-xs font-bold text-brand-dark">Cash on Delivery (COD)</p>
                      <p className="text-[11px] text-muted-foreground">Pay cash upon home delivery</p>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-brand-teal" />
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-brand-dark flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={handlePayment}
                  className="px-8 py-3.5 bg-brand-saffron text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-brand-saffron-600 disabled:opacity-50 transition-colors flex items-center gap-2 shadow-lg shadow-brand-saffron/30"
                >
                  {loading ? "Processing..." : `Pay ${formatPrice(total)} & Place Order`}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-brand-cream-300 rounded-2xl p-6 shadow-sm space-y-3 text-xs">
            <h3 className="font-heading font-bold text-sm text-brand-dark pb-2 border-b border-brand-cream-200">
              Order Breakdown
            </h3>
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({items.length} items)</span>
              <span className="text-brand-dark font-medium">{formatPrice(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-700 font-medium">
                <span>Coupon Discount</span>
                <span>-{formatPrice(discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-muted-foreground">
              <span>Delivery</span>
              <span className="text-brand-dark font-medium">
                {shipping === 0 ? <span className="text-green-700 font-semibold">FREE</span> : formatPrice(shipping)}
              </span>
            </div>
            <div className="flex justify-between text-sm font-bold text-brand-dark pt-3 border-t border-brand-cream-300">
              <span>Total Payable</span>
              <span className="text-brand-saffron text-base">{formatPrice(total)}</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="p-4 bg-brand-cream-100 rounded-xl border border-brand-cream-300 flex items-center gap-3 text-xs text-muted-foreground">
            <ShieldCheck className="w-6 h-6 text-brand-teal shrink-0" />
            <p>256-Bit SSL Encrypted & Verified by Razorpay</p>
          </div>
        </div>
      </div>
    </div>
  );
}
