"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  Fuel,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const estaciones = [
  {
    name: "Estación Central",
    location: "Villa Nueva",
    status: "Operación abierta",
    sales: "Q 128,017",
    pending: "1 corte pendiente",
  },
  {
    name: "Estación Norte",
    location: "Ciudad de Guatemala",
    status: "Operación estable",
    sales: "Q 96,420",
    pending: "Sin alertas críticas",
  },
  {
    name: "Estación Sur",
    location: "Amatitlán",
    status: "Requiere revisión",
    sales: "Q 84,300",
    pending: "2 respaldos pendientes",
  },
  {
    name: "Estación Oriente",
    location: "Santa Catarina Pinula",
    status: "Operación abierta",
    sales: "Q 73,880",
    pending: "1 voucher Proval",
  },
];

const reportes = [
  "Ventas por estación",
  "Proval consolidado",
  "Cupones por mes",
  "Descargas combustible",
  "Gastos mantenimiento",
  "Reporte total del grupo",
];

export default function SeleccionarEstacionPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#080f0d] px-5 py-6 text-white md:px-10 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                Flumen
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Control de estaciones
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Selecciona una estación para revisar su operación diaria,
                ventas, efectivo esperado, movimientos y pendientes.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/45">Vista del dueño</p>
                  <p className="font-semibold text-emerald-200">
                    4 estaciones disponibles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Building2 className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Estaciones</p>
            <p className="mt-2 text-4xl font-semibold">4</p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Fuel className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Ventas consolidadas</p>
            <p className="mt-2 text-4xl font-semibold">Q 382K</p>
          </div>

          <div className="rounded-[1.7rem] border border-amber-300/25 bg-amber-300/[0.08] p-6 backdrop-blur-2xl">
            <CalendarDays className="text-amber-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Cortes pendientes</p>
            <p className="mt-2 text-4xl font-semibold text-amber-100">2</p>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-6 backdrop-blur-2xl">
            <CheckCircle2 className="text-emerald-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Sincronización</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-100">
              Activa
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Estaciones disponibles
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Accede al control operativo
                </h2>

                <p className="mt-2 max-w-2xl text-sm text-white/50">
                  Para la demo, cualquier estación abre la operación diaria con
                  datos simulados.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {estaciones.map((estacion) => (
                <button
                  key={estacion.name}
                  onClick={() => router.push("/operacion-diaria")}
                  className="group rounded-[1.6rem] border border-white/10 bg-black/20 p-5 text-left transition hover:border-emerald-300/40 hover:bg-emerald-300/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                        <Fuel size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold">{estacion.name}</h3>

                        <div className="mt-1 flex items-center gap-1 text-sm text-white/45">
                          <MapPin size={14} />
                          <span>{estacion.location}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-white/35 transition group-hover:translate-x-1 group-hover:text-emerald-200"
                    />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-white/40">Ventas de hoy</p>
                      <p className="mt-1 font-semibold">{estacion.sales}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-white/40">Pendiente</p>
                      <p className="mt-1 font-semibold">{estacion.pending}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 text-xs text-emerald-200">
                      {estacion.status}
                    </span>

                    <span className="text-xs font-semibold text-white/45 group-hover:text-emerald-200">
                      Entrar a operación
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <aside className="flex flex-col gap-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                  <Sparkles size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Lectura ejecutiva
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Vista multiestación
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Esta pantalla representa el punto de entrada del dueño. Desde
                aquí puede decidir qué estación revisar y posteriormente
                consultar reportes consolidados del grupo.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
                <p className="text-sm font-semibold text-amber-100">
                  Atención operativa
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Hay estaciones con cortes, respaldos o vouchers pendientes de
                  revisión.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Reportes consolidados
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">
                    Consulta por estación
                  </h2>
                </div>

                <BarChart3 className="text-white/35" size={28} />
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <label className="text-xs text-white/45">Estación</label>
                  <select className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm text-white outline-none focus:border-emerald-300/50">
                    <option>Estación Central</option>
                    <option>Estación Norte</option>
                    <option>Estación Sur</option>
                    <option>Estación Oriente</option>
                    <option>Consolidado total</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/45">Fecha</label>
                  <input
                    type="date"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm text-white outline-none focus:border-emerald-300/50"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/45">
                    Tipo de reporte
                  </label>
                  <select className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm text-white outline-none focus:border-emerald-300/50">
                    {reportes.map((reporte) => (
                      <option key={reporte}>{reporte}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  onClick={() => router.push("/reportes-operativos")}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950"
                >
                  Ver reporte
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">
                  <Download size={17} />
                  Descargar
                </button>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/55">
                <p>• Estación seleccionada</p>
                <p>• Fecha aplicada</p>
                <p>• Datos consolidados</p>
                <p>• Listo para visualización o descarga</p>
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
