import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-center gap-8 mb-5 ">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
