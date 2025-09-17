"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-800">
      <h1 className="text-white text-xl font-bold">Glitche</h1>
      <nav className="flex items-center space-x-8">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/resume" className="text-orange-500">
          Resume
        </Link>
        <Link href="/portfolio" className="hover:text-gray-400">
          Portfolio
        </Link>
        <Link href="/blog" className="hover:text-gray-400">
          Blogeducation
        </Link>
        <Link
          href="/contacts"
          className="border px-4 py-1 rounded hover:bg-white hover:text-black transition"
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}
