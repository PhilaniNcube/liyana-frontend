"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type FAQItem } from "../faqs-queries";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className={`border transition-all duration-300 cursor-pointer ${
              isActive
                ? "border-primary bg-secondary text-white dark:bg-zinc-950"
                : "border-border bg-white text-foreground hover:border-primary dark:bg-zinc-900"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <h3 className="text-lg md:text-xl font-bold tracking-tight">
                {item.question}
              </h3>
              <ChevronDown
                className={`size-5 shrink-0 transition-transform duration-300 ${
                  isActive ? "rotate-180 text-primary" : "text-zinc-400"
                }`}
              />
            </div>
            {/* Expandable Content */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isActive ? "max-h-[500px] pb-6 px-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className={`text-sm md:text-base leading-relaxed ${isActive ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
