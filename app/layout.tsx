import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNav from "@/components/side-nav";
import TopBar from "@/components/top-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindsDB | Workbench",
  description: "Workbench for AI models",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collapsedMargin = "sm:ml-12";
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <SideNav />
        {/* main container */}
        <div className={`p-4 ${collapsedMargin}`}>
          <div className="p-4 mt-14">{children}</div>
        </div>
        {/* end main container */}
      </body>
    </html>
  );
}
