import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  Download,
  Droplets,
  FileSpreadsheet,
  Fuel,
  MessageSquareText,
  ReceiptText,
  Sparkles,
  Ticket,
  Truck,
  WalletCards,
  Wrench,
} from "lucide-react";

const quickReports = [
  {
    title: "Cupones por mes",
    description: "Totales, promedios y cupones pendientes de respaldo.",
    icon: Ticket,
    href: "/reporte-cupones",
    period: "Julio 2026",
  },
  {
    title: "Proval por mes",
    description: "Efectivo enviado, vouchers y boletas bancarias.",
    icon: Truck,
    href: "/bitacora-proval",
    period: "Marzo 2026",
  },
  {
    title: "Gastos mantenimiento",
    description: "Gastos autorizados por proveedor, factura y responsable.",
    icon: Wrench,
    href: "/gastos-mantenimiento",
    period: "Mensual",
  },
  {
    title: "Descargas combustible",
    description: "Galones recibidos, facturas, proveedor y cisterna.",
    icon: Droplets,
    href: "/bitacora-descargas",
    period: "Mensual",
  },
  {
    title: "Créditos",
    description: "Clientes activos, alertas y líneas excedidas.",
    icon: CreditCard,
    href: "/creditos",
    period: "Actual / histórico",
  },
  {
    title: "Prepago",
    description: "Saldos disponibles, saldo bajo y clientes sin saldo.",
    icon: WalletCards,
    href: "/prepago",
    period: "Actual / histórico",
  },
  {
    title: "Operación diaria",
    description: "Ventas, efectivo esperado, montos manuales y corte.",
    icon: ClipboardCheck,
    href: "/operacion-diaria",
    period: "Por fecha",
  },
];

const assistedExamples = [
  "Total de cupones en julio",
  "Efectivo enviado por Proval en marzo",
  "Gastos de mantenimiento por proveedor",
  "Clientes con crédito excedido",
  "Prepago sin saldo este mes",
];

export default function ReportesOperativosPage() {
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
                Consulta histórica
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Reportes operativos
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Consulta reportes de meses anteriores, descarga información por
                módulo y visualiza una experiencia conceptual de consulta
                asistida para encontrar datos históricos sin buscar manualmente.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/45">Estado general</p>
                  <p className="font-semibold text-emerald-200">
                    Reportes disponibles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <FileSpreadsheet className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Reportes rápidos</p>
            <p className="mt-2 text-4xl font-semibold">7</p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <CalendarDays className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Periodos históricos</p>
            <p className="mt-2 text-4xl font-semibold">12</p>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-6 backdrop-blur-2xl">
            <Bot className="text-emerald-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Consulta asistida</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-100">
              Demo
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-amber-300/25 bg-amber-300/[0.08] p-6 backdrop-blur-2xl">
            <Download className="text-amber-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Formatos</p>
            <p className="mt-2 text-4xl font-semibold text-amber-100">
              PDF
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Reportes rápidos
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Descarga o revisa información por módulo
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/50">
                Accesos directos para consultar datos de meses anteriores por
                área operativa.
              </p>
            </div>

            <button className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950 md:mt-0">
              <Download size={17} />
              Descargar consolidado mensual
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickReports.map((report) => {
              const Icon = report.icon;

              return (
                <article
                  key={report.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 transition hover:border-emerald-300/35 hover:bg-emerald-300/[0.05]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold">{report.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {report.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/50">
                      {report.period}
                    </span>

                    <div className="flex gap-2">
                      <Link
                        href={report.href}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/65 transition hover:bg-white hover:text-slate-950"
                      >
                        Ver
                      </Link>

                      <button className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-white">
                        Descargar
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                <Sparkles size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Consulta asistida
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Pregúntale a Flumen
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Esta sección representa la UX futura con API GPT: el administrador
              escribe una consulta operativa y Flumen interpreta el periodo,
              módulo y métrica para devolver una respuesta clara.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
              <label className="text-sm text-white/45">
                ¿Qué dato histórico necesitas?
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <MessageSquareText size={20} className="text-emerald-300" />
                <p className="text-sm text-white/80">
                  Total de cupones en julio
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {assistedExamples.map((example) => (
                <button
                  key={example}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/60 transition hover:border-emerald-300/40 hover:text-emerald-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </aside>

          <section className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                <Bot size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">
                  Respuesta de Flumen
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Total de cupones en julio
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              En julio se registraron <strong>Q 18,450</strong> en cupones,
              distribuidos en <strong>42 registros</strong>. El promedio diario
              fue de <strong>Q 595</strong> y se detectaron{" "}
              <strong>3 cupones pendientes de respaldo</strong>.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/45">Total</p>
                <p className="mt-2 text-2xl font-semibold">Q 18,450</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-white/45">Registros</p>
                <p className="mt-2 text-2xl font-semibold">42</p>
              </div>

              <div className="rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
                <p className="text-sm text-white/45">Pendientes</p>
                <p className="mt-2 text-2xl font-semibold text-amber-100">3</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">
                <Download size={17} />
                Descargar PDF
              </button>

              <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950">
                <FileSpreadsheet size={17} />
                Descargar Excel
              </button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}