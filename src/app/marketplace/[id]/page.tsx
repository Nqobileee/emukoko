"use client";

import { use, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem, totalItems } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="bg-background-light min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-[48px] text-gray-300">error</span>
          <h2 className="text-xl font-bold mt-4">Product Not Found</h2>
          <Link href="/marketplace" className="text-primary text-sm mt-2 hover:underline">← Back to marketplace</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <main className="relative z-10 pt-24 pb-16 px-4 max-w-6xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/marketplace" className="hover:text-primary">Marketplace</Link>
          <span>›</span>
          <span className="font-medium text-gray-900 truncate">{product.name}</span>
          <Link href="/marketplace/cart" className="ml-auto flex items-center gap-1 text-primary font-medium">
            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
            Cart ({totalItems})
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                product.qualityGrade === "A" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                Grade {product.qualityGrade}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-700">
                {product.category}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {product.origin}
                </span>
                <span>·</span>
                <span>{product.weight}</span>
                <span>·</span>
                <span>Harvested {product.harvestDate}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="text-4xl font-bold">${product.price.toFixed(2)}</div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-bold border-x border-gray-200">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(product.stock, qty + 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 h-12 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check</span>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {product.stock < 10 && (
              <p className="text-xs text-orange-600 font-medium">⚡ Only {product.stock} left in stock</p>
            )}

            {/* QR Code Preview */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">qr_code_2</span>
                QR Traceability
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Every jar comes with a unique QR code for full traceability — scan to see the farmer, hive data, and quality records.
              </p>
              <div className="w-24 h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px] text-gray-300">qr_code_2</span>
              </div>
            </div>

            {/* Farmer Story */}
            <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
              <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-amber-700">person</span>
                Farmer Story
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>{product.farmerName}</strong> — {product.farmerStory}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/marketplace/${rp.id}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={rp.imageUrl} alt={rp.name} className="w-full h-36 object-cover" />
                  <div className="p-3">
                    <h3 className="font-bold text-sm">{rp.name}</h3>
                    <p className="text-xs text-gray-400">{rp.origin} · {rp.weight}</p>
                    <p className="text-base font-bold mt-1">${rp.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
