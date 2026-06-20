import { sendGTMEvent } from "@next/third-parties/google";

interface CTAEventParams {
  text: string;
  location: string;
  url?: string;
}

/**
 * Tracks generic Call-To-Action (CTA) clicks.
 */
export const trackCTA = ({ text, location, url }: CTAEventParams) => {
  sendGTMEvent({
    event: "cta_click",
    cta_text: text,
    cta_location: location,
    cta_url: url || "",
  });
};

interface NewsletterSubscribeParams {
  location: string;
}

/**
 * Tracks newsletter subscriptions.
 */
export const trackNewsletterSubscribe = ({ location }: NewsletterSubscribeParams) => {
  sendGTMEvent({
    event: "newsletter_subscribe",
    form_location: location,
  });
};

interface CalculatorParams {
  coverAmount: number;
  dependents: number;
  estimatedPremium: number;
}

/**
 * Tracks premium calculator calculations/interaction.
 */
export const trackCalculatorEstimate = ({ coverAmount, dependents, estimatedPremium }: CalculatorParams) => {
  sendGTMEvent({
    event: "calculator_estimate",
    cover_amount: coverAmount,
    dependents_count: dependents,
    estimated_premium: estimatedPremium,
  });
};

interface PageViewParams {
  url: string;
}

/**
 * Tracks page views (e.g. for client-side routing).
 */
export const trackPageView = ({ url }: PageViewParams) => {
  sendGTMEvent({
    event: "page_view",
    page_path: url,
  });
};

