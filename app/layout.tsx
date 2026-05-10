import "./globals.css";
export const metadata = { title: "AndyAI Visual Studio", description: "Professional AI visual templates" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
