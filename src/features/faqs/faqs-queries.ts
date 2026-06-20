import { cache } from "react";
import "server-only";

export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQs = cache(async (): Promise<FAQItem[]> => {
  // Simulate database/API delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  return [
    {
      question: "What types of loans does Liyana Finance offer?",
      answer:
        "We offer a range of personal loans designed for quick approval and flexible repayment. Our loans cover emergency expenses, home improvements, and debt consolidation, all structured with transparent terms and no hidden fees.",
    },
    {
      question: "How quickly are loan applications processed?",
      answer:
        "Our modern lending infrastructure allows for extremely fast processing times. In most cases, applicants receive a decision within 24 hours. If approved, funds are typically disbursed to your designated account within the next business day.",
    },
    {
      question: "What is included in a Liyana funeral policy?",
      answer:
        "Our funeral policies provide comprehensive coverage designed to ease the financial burden during difficult times. They typically include a lump-sum payout, repatriation services, and optional family member coverage. We prioritize empathetic and swift claims handling.",
    },
    {
      question: "Are there any age limits for funeral policy applicants?",
      answer:
        "Yes, our main member entry age is generally up to 65 years. However, we offer specific senior policies and extended family options that can cover individuals up to 85 years old, subject to terms and conditions.",
    },
    {
      question: "How do I submit a claim?",
      answer:
        "Claims can be initiated through our online portal, via email, or at any of our branches. You will need to provide standard documentation, such as the death certificate and policyholder ID. We aim to process valid claims within 48 hours.",
    },
    {
      question: "Can I manage my account online?",
      answer:
        "Absolutely. We provide a secure, modern online dashboard where you can view your loan balance, make payments, update beneficiaries on your funeral policy, and track any active claims.",
    },
  ];
});
