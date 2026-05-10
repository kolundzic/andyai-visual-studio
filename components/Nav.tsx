import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav shell">
      <Link href="/" className="brand">
        <span className="brand-mark">🅰️</span>
        <span>AndyAI Visual Studio</span>
      </Link>
      <div className="nav-links">
        <Link href="/gallery">Gallery</Link>
        <Link href="/tap-editor">TAP Editor</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
