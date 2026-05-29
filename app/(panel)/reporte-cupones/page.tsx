import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Camera,
  Download,
  FileCheck2,
  ReceiptText,
  ShieldAlert,
  Ticket,
  TrendingUp,
} from "lucide-react";
import CuponesBarChart from "../../components/CuponesBarChart";

const data = [
  {
    fecha: "2026-01-24",
    cupones: [
      { numero: "CP-88421", valor: 500 },
      { numero: "CP-88422", valor: 300 },
    ],
  },
  {
    fecha: "2026-01-23",
    cupones: [
      { numero: "CP-88410", valor: 200 },
      { numero: "CP-88411", valor: 450 },
      { numero: "CP-88412", valor: 150 },
    ],
  },
  {
    fecha: "2026-01-22",
    cupones: [{ numero: "CP-88390", valor: 600 }],
  },
];

const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

const totalCupones = data.reduce(
  (acc, d) => acc + d.cupones.reduce((s, c) => s + c.valor, 0),
  0
);

const totalRegistros = data.reduce((acc, d) => acc + d.cupones.length, 0);

const dias = data.length;
const promedioDiario = totalCupones / dias;
const promedioSemanal = promedioDiario * 7;

export default function ReporteCuponesPage() {
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
                Control de valores pendientes
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Reporte de cupones
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Consolidado de cupones registrados por fecha, valor pendiente,
                promedios operativos y respaldo documental para cobro posterior.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-amber-300/25 bg-amber-300/[0.08] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300 text-slate-950">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/45">Estado general</p>
                  <p className="font-semibold text-amber-100">
                    Pendiente de cobro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Ticket className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Total cupones</p>
            <p className="mt-2 text-4xl font-semibold">{money(totalCupones)}</p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <ReceiptText className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Registros</p>
            <p className="mt-2 text-4xl font-semibold">{totalRegistros}</p>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-6 backdrop-blur-2xl">
            <TrendingUp className="text-emerald-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Promedio diario</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-100">
              {money(promedioDiario)}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-amber-300/25 bg-amber-300/[0.08] p-6 backdrop-blur-2xl">
            <BarChart3 className="text-amber-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Promedio semanal</p>
            <p className="mt-2 text-4xl font-semibold text-amber-100">
              {money(promedioSemanal)}
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="flex flex-col gap-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Lectura ejecutiva
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Hay cupones pendientes de documentar
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/55">
                El reporte concentra cupones por fecha para facilitar el cobro
                posterior. Cada cupón debería tener respaldo visual o documento
                asociado para evitar diferencias al cierre.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
                <p className="text-sm font-semibold text-amber-100">
                  Acción recomendada
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Adjuntar imagen de los cupones y descargar el reporte mensual
                  para conciliación.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Comparativo
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">
                    Comportamiento de cupones
                  </h2>
                </div>

                <BarChart3 className="text-white/35" size={28} />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <CuponesBarChart
                  total={totalCupones}
                  diario={promedioDiario}
                  semanal={promedioSemanal}
                />
              </div>
            </section>

            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950">
              <Download size={17} />
              Descargar reporte mensual
            </button>
          </aside>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Cupones registrados
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Detalle por fecha
                </h2>
              </div>

              <Ticket className="text-white/35" size={30} />
            </div>

            <div className="mt-6 space-y-7">
              {data.map((dia) => {
                const totalDia = dia.cupones.reduce(
                  (acc, cupon) => acc + cupon.valor,
                  0
                );

                return (
                  <section key={dia.fecha}>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-px flex-1 bg-white/10" />
                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs text-white/50">
                        <CalendarDays size={13} />
                        {dia.fecha} · {money(totalDia)}
                      </div>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="space-y-4">
                      {dia.cupones.map((cupon) => (
                        <article
                          key={cupon.numero}
                          className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                        >
                          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-3">
                              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                                <Ticket size={20} />
                              </div>

                              <div>
                                <h3 className="font-semibold">
                                  Cupón {cupon.numero}
                                </h3>
                                <p className="text-sm text-white/45">
                                  Valor registrado: {money(cupon.valor)}
                                </p>
                              </div>
                            </div>

                            <div className="rounded-full bg-amber-300/[0.12] px-4 py-2 text-sm font-semibold text-amber-100">
                              Pendiente respaldo
                            </div>
                          </div>

                          <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <FileCheck2
                                size={20}
                                className="text-emerald-300"
                              />
                              <p className="mt-3 text-xs text-white/40">
                                Estado documental
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                En espera de imagen
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <Camera size={20} className="text-emerald-300" />
                              <p className="mt-3 text-xs text-white/40">
                                Acción
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                Adjuntar cupón
                              </p>
                            </div>
                          </div>

                          <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-emerald-200">
                            <Camera size={16} />
                            Adjuntar imagen del cupón
                          </button>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
