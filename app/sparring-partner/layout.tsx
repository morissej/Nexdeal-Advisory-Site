import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparring Partner | NexDeal Advisory",
  description: "Bénéficiez d'un effet miroir neutre et confidentiel pour challenger votre vision stratégique."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
