import type { Metadata } from "next";
import "../../styles/globals.css";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Cozy Nest-Real Estate Services",
  description: "Cozy Nest is a real estate company located in Myanmar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-screen flex flex-col">
        {children}
        <Footer/>
      </div>
  );
}