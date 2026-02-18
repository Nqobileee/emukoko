"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
        <main className="relative z-10 pt-24 pb-16 px-4 max-w-4xl mx-auto w-full text-center">
          <span className="material-symbols-outlined text-[64px] text-gray-300">shopping_cart</span>
          <h1 className="text-2xl font-bold mt-4">Your Cart is Empty</h1>
          <p className="text-sm text-gray-500 mt-2">Browse our marketplace to find pure, traceable Zimbabwean honey.</p>
          <Link href="/marketplace" className="inline-flex h-12 px-6 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full transition-all items-center gap-2 mt-6">
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            Browse Marketplace
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <main className="relative z-10 pt-24 pb-16 px-4 max-w-4xl mx-auto w-full space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p className="text-sm text-gray-500 mt-1">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
          </div>
          <button onClick={clearCart} className="text-xs text-red-500 hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">delete</span> Clear cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <Link href={`/marketplace/${item.product.id}`} className="font-bold text-sm hover:text-primary">{item.product.name}</Link>
                  <p className="text-xs text-gray-400">{item.product.origin} · {item.product.weight}</p>
                  <p className="text-base font-bold mt-1 sm:hidden">${item.product.price.toFixed(2)}</p>
                </div>
                <p className="hidden sm:block font-bold text-base">${item.product.price.toFixed(2)}</p>
                <button onClick={() => removeItem(item.product.id)} className="text-gray-400 hover:text-red-500 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-50">
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center text-xs font-bold border-x border-gray-200">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-50">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
                <p className="font-bold text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-base mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal ({totalItems} items)</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
            <div className="border-t border-gray-100 pt-2 flex justify-between">
              <span className="font-bold text-base">Total</span>
              <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link
            href="/marketplace/checkout"
            className="mt-4 w-full h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Proceed to Checkout
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link href="/marketplace" className="block text-center mt-3 text-xs text-primary hover:underline">
            ← Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}
