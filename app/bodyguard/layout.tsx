import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bodyguard Stratégique | NexDeal Advisory",
  description: "Sécurisez vos décisions M&A complexes grâce à une interposition stratégique."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
