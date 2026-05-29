import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  CheckCircle2,
  ClipboardList,
  Download,
  FileCheck2,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Truck,
} from "lucide-react";

const data = [
  {
    fecha: "2026-01-24",
    registros: [
      {
        boleta: "ENV-45892",
        montoEnviado: 18500,
        voucherProval: "PRV-88210",
        boletaBanco: "DEP-99321",
        valorEnvio: 18500,
      },
      {
        boleta: "ENV-45893",
        montoEnviado: 9200,
        voucherProval: "PRV-88211",
        boletaBanco: "DEP-99322",
        valorEnvio: 9200,
      },
    ],
  },
  {
    fecha: "2026-01-23",
    registros: [
      {
        boleta: "ENV-45880",
        montoEnviado: 15200,
        voucherProval: "PRV-88190",
        boletaBanco: "DEP-99280",
        valorEnvio: 15200,
      },
      {
        boleta: "ENV-45881",
        montoEnviado: 7600,
        voucherProval: "PRV-88191",
        boletaBanco: "DEP-99281",
        valorEnvio: 7600,
      },
      {
        boleta: "ENV-45882",
        montoEnviado: 4300,
        voucherProval: "PRV-88192",
        boletaBanco: "DEP-99282",
        valorEnvio: 4300,
      },
    ],
  },
];

const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

const totalRegistros = data.reduce(
  (total, dia) => total + dia.registros.length,
  0
);

const totalEnviado = data.reduce(
  (total, dia) =>
    total +
    dia.registros.reduce((subtotal, registro) => subtotal + registro.montoEnviado, 0),
  0
);

const totalHoy = data[0].registros.reduce(
  (total, registro) => total + registro.montoEnviado,
  0
);

export default function BitacoraProvalPage() {
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
                Control de efectivo
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Bitácora Proval
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Registro visual de efectivo enviado, voucher Proval, boleta
                bancaria y valor confirmado por envío.
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
                    Envíos cuadrados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Banknote className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Enviado hoy</p>
            <p className="mt-2 text-4xl font-semibold">{money(totalHoy)}</p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <ClipboardList className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Registros</p>
            <p className="mt-2 text-4xl font-semibold">{totalRegistros}</p>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-6 backdrop-blur-2xl">
            <CheckCircle2 className="text-emerald-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Diferencia detectada</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-100">Q 0</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Lectura ejecutiva
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              El efectivo enviado está documentado
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Los registros muestran boleta de envío, voucher Proval, boleta
              bancaria y valor confirmado. La bitácora permite validar que el
              efectivo salió de estación y fue respaldado por comprobantes.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Total consolidado
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {money(totalEnviado)}
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Suma de los envíos registrados en la bitácora.
                </p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950">
                <Download size={17} />
                Descargar reporte mensual
              </button>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Movimientos registrados
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Envíos y comprobantes
                </h2>
              </div>

              <Truck className="text-white/35" size={30} />
            </div>

            <div className="mt-6 space-y-7">
              {data.map((dia) => (
                <section key={dia.fecha}>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />
                    <p className="rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs text-white/50">
                      {dia.fecha}
                    </p>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="space-y-4">
                    {dia.registros.map((r) => {
                      const cuadrado = r.montoEnviado === r.valorEnvio;

                      return (
                        <article
                          key={r.boleta}
                          className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                        >
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                              <div className="flex items-center gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                                  <ReceiptText size={20} />
                                </div>

                                <div>
                                  <h3 className="font-semibold">
                                    Boleta de envío {r.boleta}
                                  </h3>
                                  <p className="text-sm text-white/45">
                                    Monto enviado: {money(r.montoEnviado)}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                                cuadrado
                                  ? "bg-emerald-300/[0.12] text-emerald-200"
                                  : "bg-red-400/[0.12] text-red-200"
                              }`}
                            >
                              {cuadrado ? "Cuadrado" : "Diferencia"}
                            </div>
                          </div>

                          <div className="mt-5 grid gap-3 md:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <FileCheck2
                                size={20}
                                className="text-emerald-300"
                              />
                              <p className="mt-3 text-xs text-white/40">
                                Voucher Proval
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                {r.voucherProval}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <Landmark
                                size={20}
                                className="text-emerald-300"
                              />
                              <p className="mt-3 text-xs text-white/40">
                                Boleta banco
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                {r.boletaBanco}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                              <Banknote
                                size={20}
                                className="text-emerald-300"
                              />
                              <p className="mt-3 text-xs text-white/40">
                                Valor confirmado
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                {money(r.valorEnvio)}
                              </p>
                            </div>
                          </div>

                          <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-emerald-200">
                            <Download size={16} />
                            Descargar comprobantes
                          </button>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
