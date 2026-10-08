"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/config/business";
import Image from "next/image";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="py-5 flex items-center justify-between">

         <Link href="/" className="flex items-center gap-3">
            <Image
              src={business.logoImage}
              alt={`${business.name} Logo`}
              width={40}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />

            <span
            className="
              text-2xl md:text-2xl
              font-heading font-semibold
              tracking-tight
              bg-gradient-to-r
              from-blue-950
              via-blue-700
              to-blue-600
              bg-clip-text
              text-transparent
            "
          > TECH
          </span>
          </Link>

          <div className="hidden md:flex gap-6">
            {business.navigation.map((item) => (
              <Link
                key={item?.href}
                href={item?.href ?? "#"}
                className="text-text-muted hover:text-text transition"
              >
                {item?.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="md:hidden text-2xl p-2 text-text"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-5">
            {business.navigation.map((item) => (
              <Link
                key={item?.href}
                href={item?.href ?? "#"}
                onClick={() => setMenuOpen(false)}
                className="text-text-muted hover:text-text transition"
              >
                {item?.label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}