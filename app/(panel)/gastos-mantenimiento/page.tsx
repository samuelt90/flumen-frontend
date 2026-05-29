import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Download,
  FileCheck2,
  ReceiptText,
  ShieldCheck,
  UserCheck,
  WalletCards,
  Wrench,
  AlertTriangle,
} from "lucide-react";

const data = [
  {
    fecha: "2026-01-24",
    registros: [
      {
        factura: "FAC-88421",
        proveedor: "Servicios Técnicos Maya",
        descripcion: "Mantenimiento preventivo bomba #3",
        monto: 650,
        autoriza: "Administrador turno A",
      },
      {
        factura: "FAC-88422",
        proveedor: "ElectroDiesel",
        descripcion: "Cambio de filtro diésel",
        monto: 175,
        autoriza: "Jefe de estación",
      },
    ],
  },
  {
    fecha: "2026-01-23",
    registros: [
      {
        factura: "FAC-88390",
        proveedor: "Lubricantes del Sur",
        descripcion: "Aceite hidráulico bombas",
        monto: 600,
        autoriza: "Administrador turno B",
      },
      {
        factura: "FAC-88391",
        proveedor: "Ferretería Central",
        descripcion: "Repuesto manguera dispensador",
        monto: 1750,
        autoriza: "Jefe de estación",
      },
      {
        factura: "FAC-88392",
        proveedor: "Servicios Eléctricos López",
        descripcion: "Revisión tablero eléctrico",
        monto: 390,
        autoriza: "Administrador general",
      },
    ],
  },
];

const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

const allRecords = data.flatMap((dia) =>
  dia.registros.map((registro) => ({
    ...registro,
    fecha: dia.fecha,
  }))
);

const totalGastos = allRecords.reduce((total, registro) => total + registro.monto, 0);

const mayorGasto = allRecords.reduce((mayor, registro) =>
  registro.monto > mayor.monto ? registro : mayor
);

export default function GastosMantenimientoPage() {
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
                Control operativo autorizado
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Gastos de mantenimiento
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Registro visual de gastos operativos, facturas, proveedores,
                descripciones, montos autorizados y documentos de respaldo.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/45">Estado general</p>
                  <p className="font-semibold text-emerald-200">
                    Gastos autorizados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <WalletCards className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Total gastos</p>
            <p className="mt-2 text-4xl font-semibold">{money(totalGastos)}</p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <ReceiptText className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Registros</p>
            <p className="mt-2 text-4xl font-semibold">{allRecords.length}</p>
          </div>

          <div className="rounded-[1.7rem] border border-amber-300/25 bg-amber-300/[0.08] p-6 backdrop-blur-2xl">
            <AlertTriangle className="text-amber-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Mayor gasto</p>
            <p className="mt-2 text-4xl font-semibold text-amber-100">
              {money(mayorGasto.monto)}
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
                Los gastos están documentados por factura
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Cada gasto queda asociado a proveedor, factura, descripción,
                monto y persona que autoriza. Esto ayuda a separar gastos reales
                de mantenimiento frente a salidas de efectivo no documentadas.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
                <p className="text-sm font-semibold text-amber-100">
                  Gasto más alto
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {money(mayorGasto.monto)}
                </p>
                <p className="mt-1 text-sm text-white/55">
                  {mayorGasto.descripcion} · {mayorGasto.proveedor}
                </p>
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
                  Movimientos registrados
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Gastos por fecha
                </h2>
              </div>

              <Wrench className="text-white/35" size={30} />
            </div>

            <div className="mt-6 space-y-7">
              {data.map((dia) => {
                const totalDia = dia.registros.reduce(
                  (total, registro) => total + registro.monto,
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
                      {dia.registros.map((registro) => (
                        <article
                          key={registro.factura}
                          className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                        >
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div className="flex items-start gap-3">
                              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                                <ReceiptText size={20} />
                              </div>

                              <div>
                                <h3 className="font-semibold">
                                  Factura {registro.factura}
                                </h3>
                                <p className="mt-1 text-sm text-white/45">
                                  {registro.descripcion}
                                </p>
                              </div>
                            </div>

                            <div className="rounded-full bg-emerald-300/[0.12] px-4 py-2 text-sm font-semibold text-emerald-200">
                              {money(registro.monto)}
                            </div>
                          </div>

                          <div className="mt-5 grid gap-3 md:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <Wrench size={20} className="text-emerald-300" />
                              <p className="mt-3 text-xs text-white/40">
                                Proveedor
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                {registro.proveedor}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <UserCheck
                                size={20}
                                className="text-emerald-300"
                              />
                              <p className="mt-3 text-xs text-white/40">
                                Autoriza
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                {registro.autoriza}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <FileCheck2
                                size={20}
                                className="text-emerald-300"
                              />
                              <p className="mt-3 text-xs text-white/40">
                                Respaldo
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                Pendiente de adjuntar
                              </p>
                            </div>
                          </div>

                          <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-emerald-200">
                            <FileCheck2 size={16} />
                            Adjuntar documento de respaldo
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
