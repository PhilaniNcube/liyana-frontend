import { cache } from "react";
import "server-only";

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl?: string;
  slug: string;
}

export const getFeaturedPost = cache(async (): Promise<BlogPost> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    title: "How to choose the right funeral cover for your family",
    category: "Planning",
    date: "Oct 12, 2024",
    description:
      "Navigating funeral policies can be complex. Learn the critical factors to consider to ensure your loved ones are protected without financial strain during difficult times.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmnv-Qq7HIoDcQ2Y73QtOsKWFJBxVN2b_FdXSSZU5gjQDc56xFD2w4MRTTLnznMIOOlEuVTHfHHZaxRz9zLcdZlwtPGsL7UfZrDKb5I_lXdJip7LW4SU6J9PZSlsNJmaU0AoBVejBDsNaNqc1VGbPr5rAcChJd6QM5AX9h_BAYgFolAVMp3q_RfhUjknvgO4-2KY_KVAdlDtEXsRX3xDfU-l0hOlFmu7qRNjSz0KzTgT6vkV_xWtd7iEaZij1DYEnp3l91Plv6W-0",
    slug: "choose-right-funeral-cover",
  };
});

export const getRecentPosts = cache(async (): Promise<BlogPost[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  return [
    {
      title: "Tips for managing finances during difficult times",
      category: "Financial Tips",
      date: "Oct 05, 2024",
      description:
        "Practical steps to safeguard your family's financial stability when faced with unexpected loss, focusing on immediate priorities and long-term security.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvrAFsQGFhLPJWiT8lRl98nuzT13SEA2FNOpuXq7gQl85q9gzfv_EqGFyJs8gYBCj2vxW-Q2mb4Q_oGesOG_YpcBXcla4SYDb50peSxHCxutg1lnxNbP3mRZrB2gxeIr5SK9HyHEOaqfXL554Yi7taKRZz7gUHGDWjrMk7nelaOoyzOREGXCx13hhX99N67Av9yxgtqQap6bqq8nADgSTIJRhWLbTlNjmrtAGi9_ez9gM8MhFmvwJyPAS2hu5BIEn-ia36fQBKQUg",
      slug: "managing-finances-difficult-times",
    },
    {
      title: "Understanding the importance of a dignified farewell",
      category: "Community",
      date: "Sep 28, 2024",
      description:
        "A respectful service is a crucial step in the grieving process. Explore how adequate preparation allows families to focus on honoring their loved ones.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBq4_HmvpQMg7RN9EvKCGe1Ls7nqp7vVDJt2zilkvmlWxHdHo4L-xM7QLP4YLREH6ysFnYnRriRAcFtLm8WFHJr-3z6XNuql1EeFo6q-aKvIs4Vl3x0eoBz36W4ukWNLH3XdE-FUsQP0HIx47h-o0Lio5J3Ln_jralxlYoP5vqvPzQC62eO3bZLcCQNZrPQxACGYtU4r2dwtAw7Q0ivFtct0ec_HkoaSLTNKHiWMI2xO2G9khVqtrUW5Q8p-NtMqcXJifcsvVNGlbw",
      slug: "importance-dignified-farewell",
    },
    {
      title: "What to expect during the application process",
      category: "Process",
      date: "Sep 15, 2024",
      description:
        "A transparent walkthrough of securing a policy with Liyana Finance. We break down the required documentation and timeline so you know exactly what to prepare.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQTNx3kIURkAYMyB4jmUmULvrcXYxjvou03aCCbf-X7FT0gZDsjpQ13Heyjxw98iRPWEtx8nROOb5yJhDn_ZCfrO8hmVp3xZynzy9UkZ797jB-YMVn1a81FJucRqL65QcqABhQV0zrY-Z2s_BgZv3SyoUjGAfVv96MfdiW2dZhMHYv12v1pGPEWbfkU8L8E3kgK7M1vGOFbtVV4UYJyZyzUwJ9HqoYIf4pWQnUVoMqvl3mQFZo_YDVIcSgCUkC8qhiEM5DcOMShFc",
      slug: "what-to-expect-application",
    },
    {
      title: "Common questions about payout timelines",
      category: "Planning",
      date: "Sep 02, 2024",
      description:
        "Speed is essential. We answer your most pressing questions regarding claim approvals and payout speeds when you need funds the most.",
      slug: "common-questions-payouts",
    },
  ];
});
export type { BlogPost as BlogType };
