"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";

export default function MarketplacePage() {
  const [category, setCategory] = useState<"all" | "raw" | "creamed" | "infused" | "comb">("all");
  const [sort, setSort] = useState<"name" | "price-low" | "price-high">("name");
  const [search, setSearch] = useState("");
  const { addItem, totalItems } = useCart();

  let filtered = category === "all" ? products : products.filter((p) => p.category === category);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(q) || p.origin.toLowerCase().includes(q) || p.farmerName.toLowerCase().includes(q)
    );
  }
  if (sort === "price-low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  const categories = [
    { key: "all", label: "All Products", icon: "grid_view" },
    { key: "raw", label: "Raw Honey", icon: "water_drop" },
    { key: "creamed", label: "Creamed", icon: "icecream" },
    { key: "infused", label: "Infused", icon: "local_florist" },
    { key: "comb", label: "Comb", icon: "hexagon" },
  ];

  return (
    <div className="bg-background-light text-[#181611] hex-bg min-h-screen relative overflow-x-hidden">
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <main className="relative z-10 pt-24 pb-16 px-4 flex flex-col gap-8 max-w-6xl mx-auto w-full">
        {/* Header */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <span className="material-symbols-outlined text-[16px] text-amber-700">storefront</span>
              <span className="text-xs font-medium text-amber-800 tracking-wide uppercase">Marketplace</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Honey Marketplace</h1>
            <p className="text-sm text-gray-500 mt-1">Pure, traceable honey from verified Zimbabwean beekeepers</p>
          </div>
          <Link
            href="/marketplace/cart"
            className="flex items-center gap-2 h-12 px-5 bg-primary hover:bg-[#dca615] text-[#181611] font-bold rounded-full transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            Cart {totalItems > 0 && <span className="bg-[#181611] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{totalItems}</span>}
          </Link>
        </section>

        {/* Search & Filters */}
        <section className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, origin, or farmer..."
              className="w-full h-12 pl-10 pr-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="h-12 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/50"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </section>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key as typeof category)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                category === cat.key
                  ? "bg-primary text-[#181611]"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:border-primary/20 transition-all">
              <Link href={`/marketplace/${product.id}`} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Link href={`/marketplace/${product.id}`}>
                    <h3 className="font-bold text-sm hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    product.qualityGrade === "A" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    Grade {product.qualityGrade}
                  </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-3">
                  <span className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                    {product.origin}
                  </span>
                  <span>·</span>
                  <span>{product.weight}</span>
                  <span>·</span>
                  <span>{product.farmerName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addItem(product)}
                    className="h-9 px-4 bg-primary hover:bg-[#dca615] text-[#181611] text-xs font-bold rounded-full transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    Add
                  </button>
                </div>
                {product.stock < 10 && (
                  <p className="text-[10px] text-orange-600 mt-2 font-medium">Only {product.stock} left in stock</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-[48px] text-gray-300">search_off</span>
            <p className="text-sm text-gray-500 mt-2">No products match your search</p>
          </div>
        )}
      </main>
    </div>
  );
}
