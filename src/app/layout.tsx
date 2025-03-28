import "./globals.css";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/navbar/page"), { ssr: true });

export const metadata = {
  title: "Civil Engineering Tools",
  description: "Professional construction calculation tools",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-50 text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>{" "}
        {/* Ensure children is rendered */}
        <footer className="bg-gray-200 text-center py-4">
          <p>
            &copy; {new Date().getFullYear()} Civil Engineering Tools. All
            rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
