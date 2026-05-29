"use client";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-slate-950">
      {children}
    </div>
  );
}