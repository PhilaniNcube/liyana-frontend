"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function PremiumCalculator() {
  // Calculator state
  const [coverAmount, setCoverAmount] = useState(45000);
  const [dependents, setDependents] = useState(3);

  // Dynamic premium calculator formula:
  // Base cost = R80
  // R5.50 premium per R1000 cover above R10,000
  // R50 premium per dependent
  const baseRate = 80;
  const coverRate = (coverAmount - 10000) * 0.0055;
  const dependentRate = dependents * 50;
  const estimatedMonthly = Math.round(baseRate + coverRate + dependentRate);

  return (
    <section className="px-6 py-16 md:py-24 max-w-[1280px] mx-auto border-t border-border">
      <div className="bg-secondary dark:bg-zinc-950 text-white p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Premium Calculator
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Adjust the sliders to instantly see your estimated monthly premium. Simple, transparent, and exact.
          </p>
          <div className="space-y-8 pt-4">
            {/* Slider 1: Cover Amount */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
                <label htmlFor="cover-slider">Cover Amount</label>
                <span className="text-primary text-base">R {coverAmount.toLocaleString()}</span>
              </div>
              <input
                id="cover-slider"
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={coverAmount}
                onChange={(e) => setCoverAmount(Number(e.target.value))}
                className="w-full accent-primary bg-zinc-800 h-1 cursor-pointer outline-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>R 10,000</span>
                <span>R 100,000</span>
              </div>
            </div>

            {/* Slider 2: Dependents */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
                <label htmlFor="dependents-slider">Number of Dependents</label>
                <span className="text-primary text-base">{dependents}</span>
              </div>
              <input
                id="dependents-slider"
                type="range"
                min="0"
                max="10"
                step="1"
                value={dependents}
                onChange={(e) => setDependents(Number(e.target.value))}
                className="w-full accent-primary bg-zinc-800 h-1 cursor-pointer outline-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>0 DEPENDENTS</span>
                <span>10 DEPENDENTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Readout */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="border-2 border-primary p-8 text-center bg-zinc-900 min-w-[280px] w-full max-w-sm flex flex-col gap-6">
            <div>
              <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Estimated Monthly Premium
              </span>
              <div className="text-5xl font-black text-primary tracking-tight">
                R {estimatedMonthly}
              </div>
            </div>
            <div className="text-zinc-500 text-[10px] flex items-center gap-1.5 justify-center">
              <Info className="size-3.5 shrink-0" />
              <span>Base rate includes main member, subject to final quote.</span>
            </div>
            <a
              href="https://apply.liyanafinance.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                className: "w-full h-12 uppercase font-bold tracking-wider inline-flex items-center justify-center",
              })}
            >
              Apply Online Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
