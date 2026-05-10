import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AndyAI Visual Studio",
  description: "Reusable AI visual templates, TAP editing, prompt export, and commercial visual production workflows."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
