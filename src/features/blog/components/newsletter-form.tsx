"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-secondary dark:bg-zinc-950 text-white p-8 border border-border">
      <div className="flex items-center space-x-3 mb-4">
        <Mail className="text-primary size-7 shrink-0" />
        <h3 className="text-xl font-bold tracking-tight text-white">Stay Informed</h3>
      </div>
      {subscribed ? (
        <div className="p-4 bg-zinc-900 border border-zinc-800 text-center text-primary text-sm font-semibold">
          Thank you! You have successfully subscribed.
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-4">
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Subscribe to receive the latest insights on financial planning and funeral cover news directly to your inbox.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block" htmlFor="email-input">
              EMAIL ADDRESS
            </label>
            <input
              id="email-input"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white border-0 px-4 py-3 text-zinc-900 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-zinc-400 text-sm"
            />
          </div>
          <Button variant="default" type="submit" className="w-full h-12 text-xs font-bold uppercase tracking-wider">
            SUBSCRIBE NOW
          </Button>
        </form>
      )}
      <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed">
        By subscribing, you agree to our Privacy Policy.
      </p>
    </div>
  );
}
