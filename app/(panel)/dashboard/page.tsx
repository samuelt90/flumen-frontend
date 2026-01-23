"use client";
import { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import SalesChart from "../../components/SalesChart";
import FuelVsTransfersChart from "@/app/components/FuelVsTransfersChart";

type DashboardData = {
  station: { id: number; name: string };
  open_day: {
    date: string;
    status: "OPEN" | "CLOSED";
    total_sold: number;
    vouchers: number;
    transfers: number;
    cash_expected: number;
    prepago: number;
    cupones: number;
    fuel_breakdown: Record<string, number>;
  };
  history: Array<{ date: string; status: string; total_sold: number }>;
};

type ManualType = "vouchers" | "transfers" | "cupones" | "prepago";

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // === Valores editables (solo demo, sin DB) ===
  const [vouchers, setVouchers] = useState(0);
  const [transfers, setTransfers] = useState(0);
  const [cupones, setCupones] = useState(0);
  const [prepago, setPrepago] = useState(0);

  // === Modal ingreso manual ===
  const [manualOpen, setManualOpen] = useState(false);
  const [manualType, setManualType] = useState<ManualType>("vouchers");
  const [manualMonto, setManualMonto] = useState<string>("");
  const [manualRef, setManualRef] = useState<string>("");
  const [manualNotas, setManualNotas] = useState<string>("");

  const API = process.env.NEXT_PUBLIC_API_URL;

  async function load() {
    const res = await fetch(`${API}/demo/dashboard`);
    const json = await res.json();
    setData(json);

    // Inicializar valores editables desde el demo backend
    setVouchers(json.open_day.vouchers);
    setTransfers(json.open_day.transfers);
    setCupones(json.open_day.cupones);
    setPrepago(json.open_day.prepago);
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
  const money = (n?: number) => `Q ${(n ?? 0).toLocaleString("es-GT")}`;

  function openManual(type: ManualType) {
    setManualType(type);
    setManualMonto("");
    setManualRef("");
    setManualNotas("");
    setManualOpen(true);
  }

  function saveManual() {
    const montoNum = Number(manualMonto);
    if (!manualMonto || isNaN(montoNum) || montoNum <= 0) return;

    // Sumar al KPI correspondiente (demo)
    if (manualType === "vouchers") setVouchers((prev) => prev + montoNum);
    if (manualType === "transfers") setTransfers((prev) => prev + montoNum);
    if (manualType === "cupones") setCupones((prev) => prev + montoNum);
    if (manualType === "prepago") setPrepago((prev) => prev + montoNum);

    // No mostramos toast ni mensajes
    setManualOpen(false);
  }

  const manualTitle =
    manualType === "vouchers"
      ? "Agregar vale"
      : manualType === "transfers"
      ? "Agregar transferencia"
      : manualType === "cupones"
      ? "Agregar cupón"
      : "Agregar prepago";

  return (
    <main className="p-4 sm:p-6 space-y-6">
      <TopNav />

      {/* HEADER */}
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Estación: {data.station.name} · Día: {d.date} · Estado: {d.status}
        </p>
        {msg && <p className="text-sm mt-2">{msg}</p>}
      </header>

      {/* ===================== */}
      {/* DESGLOSE DEL DÍA */}
      {/* ===================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Vales</p>
          <p className="text-xl font-semibold">{money(vouchers)}</p>
          <button
            className="mt-2 text-sm underline text-gray-500"
            onClick={() => openManual("vouchers")}
          >
            Agregar monto manual
          </button>
        </div>

        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Transferencias</p>
          <p className="text-xl font-semibold">{money(transfers)}</p>
          <button
            className="mt-2 text-sm underline text-gray-500"
            onClick={() => openManual("transfers")}
          >
            Agregar monto manual
          </button>
        </div>

        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Cupones</p>
          <p className="text-xl font-semibold">{money(cupones)}</p>
          <button
            className="mt-2 text-sm underline text-gray-500"
            onClick={() => openManual("cupones")}
          >
            Agregar monto manual
          </button>
        </div>

        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Prepago</p>
          <p className="text-xl font-semibold">{money(prepago)}</p>
          <button
            className="mt-2 text-sm underline text-gray-500"
            onClick={() => openManual("prepago")}
          >
            Agregar monto manual
          </button>
        </div>
      </section>

      {/* ===================== */}
      {/* GRÁFICOS */}
      {/* ===================== */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-semibold mb-3">Ventas por combustible</h2>
        <ul className="space-y-1 text-sm">
          <li>V-Power: {money(d.fuel_breakdown.VPOWER)}</li>
          <li>Súper: {money(d.fuel_breakdown.SUPER)}</li>
          <li>Regular: {money(d.fuel_breakdown.REGULAR)}</li>
          <li>Diésel: {money(d.fuel_breakdown.DIESEL)}</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-4">
        <h2 className="font-semibold mb-3">Ventas por día</h2>
        <SalesChart
          data={data.history.map((h) => ({
            date: h.date,
            total_sold: h.total_sold,
          }))}
        />
      </section>

      {/* ===================== */}
      {/* CIERRE DEL DÍA */}
      {/* ===================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border p-5">
          <p className="text-sm text-gray-500">Ventas totales</p>
          <p className="text-3xl font-bold">{money(d.total_sold)}</p>
        </div>
        <div className="rounded-2xl border p-5">
          <p className="text-sm text-gray-500">Efectivo esperado</p>
          <p className="text-3xl font-bold">{money(d.cash_expected)}</p>
        </div>
        <FuelVsTransfersChart />
      </section>



      {/* ===================== */}
      {/* ACCIÓN */}
      {/* ===================== */}
      <section>
        <button
          disabled={loading}
          onClick={cutoff}
          className="w-full rounded-2xl bg-black text-white py-4 font-semibold disabled:opacity-50"
        >
          {loading ? "Cerrando..." : "Hacer corte del día"}
        </button>
      </section>

      {/* ===================== */}
      {/* HISTÓRICO */}
      {/* ===================== */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-semibold mb-3">Histórico</h2>
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

      {/* ===================== */}
      {/* MODAL INGRESO MANUAL */}
      {/* ===================== */}
      {manualOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setManualOpen(false)}
          />

          {/* panel */}
          <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl border p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{manualTitle}</h3>
              <button
                className="text-sm underline text-gray-500"
                onClick={() => setManualOpen(false)}
              >
                Cerrar
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-xs text-gray-500">Monto</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="Ej: 1500"
                  value={manualMonto}
                  onChange={(e) => setManualMonto(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Referencia de documento
                </label>
                <input
                  type="text"
                  placeholder="Ej: No. Vale / No. Transferencia"
                  value={manualRef}
                  onChange={(e) => setManualRef(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">Notas</label>
                <textarea
                  placeholder="Opcional"
                  value={manualNotas}
                  onChange={(e) => setManualNotas(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm min-h-[90px]"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  Adjuntar imagen de archivo
                </label>
                <button
                  type="button"
                  disabled
                  className="mt-1 w-full rounded-xl border px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
                >
                  Adjuntar imagen (no disponible en demo)
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                className="rounded-xl border py-2 text-sm"
                onClick={() => setManualOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="rounded-xl bg-black text-white py-2 text-sm font-semibold"
                onClick={saveManual}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
