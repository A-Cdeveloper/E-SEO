import type { Metadata } from "next";

import Sidebar from "../_components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-SEO TEAM – Expert Website Creation & Optimization Solutions",
  description:
    "Professional website creation and optimization services by E-SEO TEAM. Enhance your online presence with custom-built, SEO-friendly websites designed to drive traffic and boost performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container max-w-6xl mx-auto flex justify-between flex-wrap h-screen">
          <Sidebar />

          <div className="flex-1 border-l border-white/10 px-4 lg:px-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
