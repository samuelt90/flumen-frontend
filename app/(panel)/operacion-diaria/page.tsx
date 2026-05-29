"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SalesChart from "../../components/SalesChart";
import FuelVsTransfersChart from "@/app/components/FuelVsTransfersChart";
import {
  ArrowLeft,
  Banknote,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  Download,
  Fuel,
  Landmark,
  Loader2,
  ReceiptText,
  ShieldCheck,
  Ticket,
  WalletCards,
  X,
} from "lucide-react";

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

const manualLabels: Record<
  ManualType,
  {
    title: string;
    label: string;
    description: string;
  }
> = {
  vouchers: {
    title: "Agregar vale",
    label: "Vales",
    description: "Registra vales aplicados durante la operación.",
  },
  transfers: {
    title: "Agregar transferencia",
    label: "Transferencias",
    description: "Registra transferencias reportadas en el turno.",
  },
  cupones: {
    title: "Agregar cupón",
    label: "Cupones",
    description: "Registra cupones utilizados durante el día.",
  },
  prepago: {
    title: "Agregar prepago",
    label: "Prepago",
    description: "Registra consumos asociados a saldo prepago.",
  },
};

export default function OperacionDiariaPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const [vouchers, setVouchers] = useState(0);
  const [transfers, setTransfers] = useState(0);
  const [cupones, setCupones] = useState(0);
  const [prepago, setPrepago] = useState(0);

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

      setMsg(json.message ?? "Corte realizado correctamente");
      await load();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

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

    if (manualType === "vouchers") setVouchers((prev) => prev + montoNum);
    if (manualType === "transfers") setTransfers((prev) => prev + montoNum);
    if (manualType === "cupones") setCupones((prev) => prev + montoNum);
    if (manualType === "prepago") setPrepago((prev) => prev + montoNum);

    setManualOpen(false);
  }

  if (!data) {
    return (
      <main className="min-h-screen bg-[#080f0d] px-5 py-6 text-white md:px-10 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center gap-3 text-white/70">
              <Loader2 className="animate-spin text-emerald-300" size={22} />
              <span>Cargando operación diaria...</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const d = data.open_day;

  const manualMovements = [
    {
      type: "vouchers" as ManualType,
      label: "Vales",
      value: vouchers,
      icon: ReceiptText,
      description: "Vales aplicados al día operativo.",
    },
    {
      type: "transfers" as ManualType,
      label: "Transferencias",
      value: transfers,
      icon: Landmark,
      description: "Transferencias reportadas por turno.",
    },
    {
      type: "cupones" as ManualType,
      label: "Cupones",
      value: cupones,
      icon: Ticket,
      description: "Cupones registrados en operación.",
    },
    {
      type: "prepago" as ManualType,
      label: "Prepago",
      value: prepago,
      icon: WalletCards,
      description: "Consumos asociados a saldo prepago.",
    },
  ];

  const fuelItems = [
    {
      label: "V-Power",
      value: d.fuel_breakdown.VPOWER,
    },
    {
      label: "Súper",
      value: d.fuel_breakdown.SUPER,
    },
    {
      label: "Regular",
      value: d.fuel_breakdown.REGULAR,
    },
    {
      label: "Diésel",
      value: d.fuel_breakdown.DIESEL,
    },
  ];

  const manualTotal = vouchers + transfers + cupones + prepago;
  const manualTitle = manualLabels[manualType].title;

  return (
    <main className="min-h-screen bg-[#080f0d] px-5 py-6 text-white md:px-10 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/65 transition hover:bg-white hover:text-slate-950"
              >
                <ArrowLeft size={16} />
                Volver a cabina
              </Link>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                Control operativo del día
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Operación diaria
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Ventas, movimientos manuales, efectivo esperado y cierre
                operativo para la estación {data.station.name}.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/45">Estado del día</p>
                  <p className="font-semibold text-emerald-200">
                    {d.status === "OPEN" ? "Día abierto" : "Día cerrado"}
                  </p>
                  <p className="mt-1 text-xs text-white/40">{d.date}</p>
                </div>
              </div>
            </div>
          </div>

          {msg && (
            <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4 text-sm text-emerald-100">
              {msg}
            </div>
          )}
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Fuel className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Ventas totales</p>
            <p className="mt-2 text-4xl font-semibold">
              {money(d.total_sold)}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-6 backdrop-blur-2xl">
            <Banknote className="text-emerald-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Efectivo esperado</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-100">
              {money(d.cash_expected)}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <CreditCard className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Movimientos manuales</p>
            <p className="mt-2 text-4xl font-semibold">
              {money(manualTotal)}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-amber-300/25 bg-amber-300/[0.08] p-6 backdrop-blur-2xl">
            <ClipboardCheck className="text-amber-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Cierre</p>
            <p className="mt-2 text-4xl font-semibold text-amber-100">
              {d.status === "OPEN" ? "Pendiente" : "Cerrado"}
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="flex flex-col gap-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Lectura operativa
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                El día operativo sigue en control
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/55">
                El efectivo esperado se calcula con la operación actual y los
                movimientos manuales registrados. Antes de cerrar el día,
                conviene validar vales, transferencias, cupones y prepago.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
                <p className="text-sm font-semibold text-amber-100">
                  Acción principal
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Realiza el corte únicamente cuando los movimientos manuales
                  estén revisados.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Ventas por combustible
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Desglose del día
                  </h2>
                </div>

                <Fuel className="text-white/35" size={30} />
              </div>

              <div className="mt-6 space-y-3">
                {fuelItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-sm text-emerald-200">
                        {money(item.value)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <button
              disabled={loading}
              onClick={cutoff}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Cerrando día...
                </>
              ) : (
                <>
                  <ClipboardCheck size={18} />
                  Hacer corte del día
                </>
              )}
            </button>
          </aside>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Movimientos manuales
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Ajustes del día operativo
                </h2>
              </div>

              <ReceiptText className="text-white/35" size={30} />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {manualMovements.map((movement) => {
                const Icon = movement.icon;

                return (
                  <article
                    key={movement.type}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                            <Icon size={20} />
                          </div>

                          <div>
                            <h3 className="font-semibold">
                              {movement.label}
                            </h3>
                            <p className="text-sm text-white/45">
                              {movement.description}
                            </p>
                          </div>
                        </div>

                        <p className="mt-5 text-3xl font-semibold">
                          {money(movement.value)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => openManual(movement.type)}
                      className="mt-5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/65 transition hover:bg-white hover:text-slate-950"
                    >
                      Agregar monto manual
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Tendencia
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Ventas por día
                </h2>
              </div>

              <CalendarDays className="text-white/35" size={30} />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <SalesChart
                data={data.history.map((h) => ({
                  date: h.date,
                  total_sold: h.total_sold,
                }))}
              />
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Comparativo
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Combustible vs transferencias
                </h2>
              </div>

              <Landmark className="text-white/35" size={30} />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <FuelVsTransfersChart />
            </div>
          </section>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Histórico
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Cortes recientes
              </h2>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950">
              <Download size={17} />
              Descargar histórico
            </button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {data.history
              .slice()
              .reverse()
              .map((x) => (
                <article
                  key={x.date}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-sm text-white/45">{x.date}</p>
                  <p className="mt-2 text-xl font-semibold">
                    {money(x.total_sold)}
                  </p>
                  <p className="mt-2 text-xs text-emerald-200">
                    {x.status}
                  </p>
                </article>
              ))}
          </div>
        </section>
      </div>

      {manualOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md rounded-t-[2rem] border border-white/10 bg-[#0b1512] p-5 text-white shadow-2xl sm:rounded-[2rem]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  Ingreso manual
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{manualTitle}</h3>
                <p className="mt-2 text-sm text-white/50">
                  {manualLabels[manualType].description}
                </p>
              </div>

              <button
                onClick={() => setManualOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:bg-white hover:text-slate-950"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs text-white/45">Monto</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="Ej: 1500"
                  value={manualMonto}
                  onChange={(e) => setManualMonto(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-emerald-300/50"
                />
              </div>

              <div>
                <label className="text-xs text-white/45">
                  Referencia de documento
                </label>
                <input
                  type="text"
                  placeholder="Ej: No. Vale / No. Transferencia"
                  value={manualRef}
                  onChange={(e) => setManualRef(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-emerald-300/50"
                />
              </div>

              <div>
                <label className="text-xs text-white/45">Notas</label>
                <textarea
                  placeholder="Opcional"
                  value={manualNotas}
                  onChange={(e) => setManualNotas(e.target.value)}
                  className="mt-2 min-h-[90px] w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-emerald-300/50"
                />
              </div>

              <div>
                <label className="text-xs text-white/45">
                  Adjuntar imagen de archivo
                </label>
                <button
                  type="button"
                  disabled
                  className="mt-2 flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/30"
                >
                  Adjuntar imagen no disponible en demo
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/65 transition hover:bg-white hover:text-slate-950"
                onClick={() => setManualOpen(false)}
              >
                Cancelar
              </button>

              <button
                className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
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
