"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const Item = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={[
          "px-4 py-2 rounded-xl text-sm font-medium border",
          active ? "bg-black text-white border-black" : "bg-white text-black",
        ].join(" ")}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex gap-2">
      <Item href="/dashboard" label="Ventas" />
      <Item href="/creditos" label="Créditos" />
    </nav>
  );
}