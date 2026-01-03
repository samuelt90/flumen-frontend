"use client";

import { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import SalesChart from "../components/SalesChart";
type DashboardData = {
  station: { id: number; name: string };
  open_day: {
    date: string;
    status: "OPEN" | "CLOSED";
    total_sold: number;
    vouchers: number;
    transfers: number;
    cash_expected: number;
    fuel_breakdown: Record<string, number>;
    pump_breakdown: Array<{
      pump: number;
      fuels: Record<string, number>;
      total: number;
    }>;
  };
  history: Array<{ date: string; status: string; total_sold: number }>;
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);


  const API = process.env.NEXT_PUBLIC_API_URL;
  async function load() {
    const res = await fetch(`${API}/demo/dashboard`);
    const json = await res.json();
    setData(json);
  }

 
  async function cutoff() {
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch(`${API}/demo/cutoff`, { method: "POST" });
      const json = await res.json();
      setMsg(json.message ?? "Listo");
      await load();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (!data) {
    return (
      <main className="p-6">
        <TopNav />
        <p className="mt-6">Cargando...</p>
      </main>
    );
  }

  const d = data.open_day;
  const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

  return (
    <main className="p-4 sm:p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Estación: {data.station.name} · Día: {d.date} · Estado: {d.status}
        </p>
        {msg && <p className="text-sm mt-2">{msg}</p>}
      </header>

      {/* KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Total vendido</p>
          <p className="text-2xl font-bold">{money(d.total_sold)}</p>
        </div>

        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Efectivo esperado</p>
          <p className="text-2xl font-bold">{money(d.cash_expected)}</p>
        </div>

        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Vales</p>
          <p className="text-xl font-semibold">{money(d.vouchers)}</p>
        </div>

        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Transferencias</p>
          <p className="text-xl font-semibold">{money(d.transfers)}</p>
        </div>
      </section>

      {/* Desglose por combustible */}
      <section className="rounded-2xl border bg-white p-4 shadow-sm">
        <h2 className="font-semibold mb-3">Ventas por combustible</h2>
        <ul className="space-y-1 text-sm">
          <li>V-Power: {money(d.fuel_breakdown.VPOWER ?? 0)}</li>
          <li>Súper: {money(d.fuel_breakdown.SUPER ?? 0)}</li>
          <li>Regular: {money(d.fuel_breakdown.REGULAR ?? 0)}</li>
          <li>Diésel: {money(d.fuel_breakdown.DIESEL ?? 0)}</li>
        </ul>
      </section>

                {/* Gráfica */}
            <section className="rounded-2xl border p-4">
            <h2 className="font-semibold mb-3">
                Ventas por día
            </h2>

            {data && (
            <SalesChart
                data={data.history.map((h) => ({
                date: h.date,
                total_sold: h.total_sold,
                }))}
            />
            )}
            </section>


      {/* Acción */}
      <section>
        <button
          disabled={loading}
          onClick={cutoff}
          className="w-full rounded-2xl bg-black text-white py-4 font-semibold active:scale-[0.99] disabled:opacity-50"
        >
          {loading ? "Cerrando..." : "Hacer corte del día"}
        </button>
      </section>

      {/* Histórico mini */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-semibold mb-3">Histórico (días cerrados)</h2>
        <ul className="text-sm space-y-1">
          {data.history
            .slice()
            .reverse()
            .map((x) => (
              <li key={x.date}>
                {x.date} — {money(x.total_sold)}
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}