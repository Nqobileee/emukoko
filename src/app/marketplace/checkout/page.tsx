"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "processing" | "complete">("form");
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("mobile-money");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    await new Promise((r) => setTimeout(r, 2000));
    clearCart();
    setStep("complete");
  };

  if (items.length === 0 && step !== "complete") {
    return (
      <div className="bg-background-light text-[#181611] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-[48px] text-gray-300">shopping_cart</span>
          <h2 className="text-xl font-bold mt-4">Cart is Empty</h2>
          <Link href="/marketplace" className="text-primary text-sm mt-2 hover:underline">← Back to marketplace</Link>
        </div>
      </div>
    );
  }

  if (step === "complete") {
    return (
      <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
        <main className="relative z-10 pt-24 pb-16 px-4 max-w-lg mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 shadow-xl shadow-primary/5 border border-primary/10">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[40px] text-green-600">check_circle</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Order Placed!</h1>
            <p className="text-sm text-gray-500 mb-2">
              Thank you for your order. You&apos;ll receive a confirmation email shortly.
            </p>
            <div className="text-xs text-gray-400 mb-6 p-3 bg-primary/5 rounded-xl border border-primary/10">
              <strong>Demo note:</strong> This is a simulated checkout. In production, your payment would be processed and the order fulfilled by the farmer.
            </div>
            <p className="text-xs text-gray-500 mb-4">Order #EMK-{Date.now().toString().slice(-6)}</p>
            <div className="flex flex-col gap-3">
              <Link href="/marketplace"
                className="h-12 px-6 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                Continue Shopping
              </Link>
              <Link href="/dashboard" className="text-xs text-primary hover:underline">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (step === "processing") {
    return (
      <div className="bg-background-light text-[#181611] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-[48px] text-primary animate-spin">progress_activity</span>
          <p className="text-sm text-gray-500 mt-4">Processing your order...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <main className="relative z-10 pt-24 pb-16 px-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/marketplace" className="hover:text-primary">Marketplace</Link>
          <span>›</span>
          <Link href="/marketplace/cart" className="hover:text-primary">Cart</Link>
          <span>›</span>
          <span className="font-medium text-gray-900">Checkout</span>
        </div>

        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <form onSubmit={handleOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Shipping + Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h2 className="font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">local_shipping</span>
                Shipping Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" name="name" required value={shipping.name} onChange={handleChange}
                    className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" id="email" name="email" required value={shipping.email} onChange={handleChange}
                    className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone *</label>
                  <input type="tel" id="phone" name="phone" required value={shipping.phone} onChange={handleChange}
                    className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-gray-700 mb-1">City *</label>
                  <input type="text" id="city" name="city" required value={shipping.city} onChange={handleChange}
                    className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">Delivery Address *</label>
                <input type="text" id="address" name="address" required value={shipping.address} onChange={handleChange}
                  className="w-full h-11 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="notes" className="block text-xs font-medium text-gray-700 mb-1">Delivery Notes</label>
                <textarea id="notes" name="notes" rows={2} value={shipping.notes} onChange={handleChange}
                  placeholder="Any special delivery instructions..."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 resize-none" />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h2 className="font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">payment</span>
                Payment Method
              </h2>
              <div className="space-y-2">
                {[
                  { key: "mobile-money", label: "EcoCash / Mobile Money", icon: "phone_android", desc: "Pay with your mobile wallet" },
                  { key: "card", label: "Credit / Debit Card", icon: "credit_card", desc: "Visa, Mastercard accepted" },
                  { key: "bank", label: "Bank Transfer", icon: "account_balance", desc: "Direct bank payment" },
                ].map((method) => (
                  <label
                    key={method.key}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === method.key
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.key}
                      checked={paymentMethod === method.key}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === method.key ? "border-primary" : "border-gray-300"
                    }`}>
                      {paymentMethod === method.key && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                    <span className="material-symbols-outlined text-[20px] text-gray-500">{method.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{method.label}</p>
                      <p className="text-[10px] text-gray-400">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl">
                <p className="text-[10px] text-gray-500">
                  <strong>Demo mode:</strong> No real payment will be processed. This UI demonstrates the checkout flow for Phase 2.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm sticky top-24">
              <h2 className="font-bold text-base mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{item.product.name}</p>
                      <p className="text-[10px] text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-3 border-t border-gray-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-100">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Place Order
                <span className="material-symbols-outlined text-[18px]">lock</span>
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-2">
                {totalItems} item{totalItems !== 1 ? "s" : ""} · Secure checkout
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
