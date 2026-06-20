import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-zinc-400 dark:bg-zinc-950 py-12 border-t border-zinc-800 text-xs mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            {/* Logo Mark */}
            <div className="size-6 bg-primary flex items-center justify-center font-bold text-secondary text-sm">
              L
            </div>
            <span className="font-bold text-white text-base tracking-tight">Liyana Finance</span>
          </div>
          <div className="max-w-xl text-zinc-500 space-y-2">
            <p className="font-semibold text-zinc-300 text-sm">Trust & Transparency</p>
            <p className="leading-relaxed">
              Liyana Finance is an Authorized Financial Services Provider. All our funeral policies are underwritten by recognized industry leaders, ensuring your claims are secure and paid promptly when you need them most.
            </p>
            <p className="text-zinc-600">
              © 2026 Liyana Finance (Pty) Ltd. All rights reserved. Registered Credit Provider.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 font-semibold md:justify-end text-sm shrink-0">
          <Link href="/privacy-policy" className="text-zinc-500 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/compliance" className="text-zinc-500 hover:text-white transition-colors">
            Compliance
          </Link>
          <Link href="/claims" className="text-zinc-500 hover:text-white transition-colors">
            Claims Process
          </Link>
        </div>
      </div>
    </footer>
  );
}
