import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEO Financial Intelligence | NexDeal Advisory",
  description: "Réponses aux défis critiques des dirigeants : rapport de force, timing et asymétrie d'information."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
