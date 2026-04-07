import type { Metadata } from "next";
import "../styles/globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";


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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ReactQueryProvider>
          <Toaster position="top-center" richColors closeButton/>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}