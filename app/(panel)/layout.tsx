"use client";

import { useState } from "react";
import SideNav from "../components/SideNav";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar desktop */}
      <aside className="hidden md:block w-64 border-r bg-white">
        <SideNav />
      </aside>

      {/* Sidebar mobile */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="relative z-50 w-64 h-full bg-white border-r">
            <SideNav />
          </aside>
        </div>
      )}

      {/* Contenido */}
      <main className="flex-1 p-4 md:p-6">
        {/* Header mobile */}
        <div className="md:hidden mb-4 flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md border"
          >
            ☰
          </button>
          <span className="text-sm font-semibold">Flumen</span>
        </div>

        {children}
      </main>
    </div>
  );
}
