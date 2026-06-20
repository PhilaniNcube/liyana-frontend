"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import type { Route } from "next";
import { trackCTA } from "@/lib/gtm";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { name: string; href: Route }[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Plans & Pricing", href: "/plans" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-background dark:bg-zinc-950 fixed top-0 w-full z-50 border-b border-border">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto">
        <Link href="/" className="font-bold text-lg text-foreground tracking-tight flex items-center gap-2">
          {/* Logo Mark */}
          <Image
            src="/images/Liyana Finance_Logo_Black.png"
            alt="Liyana Finance Logo"
            width={32}
            height={32}
            className="size-8 object-contain dark:hidden"
            priority
          />
          <Image
            src="/images/Liyana_Finance_Logo_White.png"
            alt="Liyana Finance Logo"
            width={32}
            height={32}
            className="size-8 object-contain hidden dark:block"
            priority
          />
          <span>Liyana Finance</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-200 pb-1 ${isActive
                    ? "text-secondary border-b-2 border-primary font-bold dark:text-primary"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-secondary dark:hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="#footer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-secondary dark:hover:text-primary font-medium text-sm transition-colors duration-200 pb-1"
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="https://apply.liyanafinance.co.za/insurance/funeral"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA({ text: "Apply Now", location: "header", url: "https://apply.liyanafinance.co.za/insurance/funeral" })}
            className={buttonVariants({
              variant: "default",
              className: "px-6 py-2.5 rounded-none font-semibold uppercase tracking-wider text-xs inline-flex items-center justify-center",
            })}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background py-4 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 block ${isActive
                    ? "text-secondary font-bold dark:text-primary border-l-2 border-primary pl-2"
                    : "text-zinc-600 dark:text-zinc-400"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-600 dark:text-zinc-400 text-sm py-2 block"
          >
            Contact
          </a>
          <a
            href="https://apply.liyanafinance.co.za/insurance/funeral"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMobileMenuOpen(false);
              trackCTA({ text: "Apply Now", location: "header", url: "https://apply.liyanafinance.co.za/insurance/funeral" });
            }}
            className={buttonVariants({
              variant: "default",
              className: "w-full py-3 rounded-none font-semibold uppercase tracking-wider text-xs text-center mt-2 inline-flex items-center justify-center",
            })}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
