import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | NexDeal Advisory",
  description: "Informations légales et politique de confidentialité de NexDeal Advisory."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
