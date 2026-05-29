import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  ClipboardList,
  Download,
  Droplets,
  FileCheck2,
  Fuel,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Truck,
} from "lucide-react";

const data = [
  {
    fecha: "2026-01-24",
    descargas: [
      {
        proveedor: "Shell Guatemala",
        factura: "FAC-992341",
        unidad: "Cisterna SH-21",
        combustibles: [
          { tipo: "Súper", galones: 5200 },
          { tipo: "Regular", galones: 7800 },
        ],
        totalGalones: 13000,
        montoCompra: 412000,
      },
    ],
  },
  {
    fecha: "2026-01-22",
    descargas: [
      {
        proveedor: "Shell Guatemala",
        factura: "FAC-992110",
        unidad: "Cisterna SH-18",
        combustibles: [{ tipo: "Diésel", galones: 6400 }],
        totalGalones: 6400,
        montoCompra: 186500,
      },
      {
        proveedor: "Shell Guatemala",
        factura: "FAC-992111",
        unidad: "Cisterna SH-19",
        combustibles: [
          { tipo: "Súper", galones: 4800 },
          { tipo: "Regular", galones: 7200 },
          { tipo: "Diésel", galones: 3100 },
        ],
        totalGalones: 15100,
        montoCompra: 458900,
      },
    ],
  },
];

const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;
const gallons = (n: number) => `${n.toLocaleString("es-GT")} gal`;

const totalDescargas = data.reduce(
  (total, dia) => total + dia.descargas.length,
  0
);

const totalGalones = data.reduce(
  (total, dia) =>
    total +
    dia.descargas.reduce(
      (subtotal, descarga) => subtotal + descarga.totalGalones,
      0
    ),
  0
);

const totalCompra = data.reduce(
  (total, dia) =>
    total +
    dia.descargas.reduce(
      (subtotal, descarga) => subtotal + descarga.montoCompra,
      0
    ),
  0
);

const ultimaDescarga = data[0].descargas[0];

export default function BitacoraDescargasPage() {
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
                Control de inventario recibido
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Bitácora de descargas
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Registro visual de combustible recibido, proveedor, factura,
                unidad transportista, volumen y monto de compra.
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
                    Descargas documentadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Droplets className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Galones registrados</p>
            <p className="mt-2 text-4xl font-semibold">
              {totalGalones.toLocaleString("es-GT")}
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <ClipboardList className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Descargas</p>
            <p className="mt-2 text-4xl font-semibold">{totalDescargas}</p>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/[0.08] p-6 backdrop-blur-2xl">
            <Landmark className="text-emerald-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Monto de compra</p>
            <p className="mt-2 text-4xl font-semibold text-emerald-100">
              {money(totalCompra)}
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Lectura ejecutiva
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Combustible recibido y respaldado
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/55">
              La bitácora concentra las descargas por fecha, factura,
              proveedor, unidad transportista y tipo de combustible. Esto ayuda
              a verificar qué entró físicamente a la estación y con qué
              documento quedó respaldado.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4">
                <p className="text-sm font-semibold text-emerald-100">
                  Última descarga
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {gallons(ultimaDescarga.totalGalones)}
                </p>
                <p className="mt-1 text-sm text-white/50">
                  {ultimaDescarga.factura} · {ultimaDescarga.unidad}
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
                  Descargas por fecha
                </h2>
              </div>

              <Truck className="text-white/35" size={30} />
            </div>

            <div className="mt-6 space-y-7">
              {data.map((dia) => (
                <section key={dia.fecha}>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs text-white/50">
                      <CalendarDays size={13} />
                      {dia.fecha}
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="space-y-4">
                    {dia.descargas.map((d) => (
                      <article
                        key={d.factura}
                        className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex items-center gap-3">
                              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                                <Fuel size={20} />
                              </div>

                              <div>
                                <h3 className="font-semibold">
                                  Factura {d.factura}
                                </h3>
                                <p className="text-sm text-white/45">
                                  {d.proveedor} · {d.unidad}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-full bg-emerald-300/[0.12] px-4 py-2 text-sm font-semibold text-emerald-200">
                            {gallons(d.totalGalones)}
                          </div>
                        </div>

                        <div className="mt-5 grid gap-3 md:grid-cols-3">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                            <ReceiptText
                              size={20}
                              className="text-emerald-300"
                            />
                            <p className="mt-3 text-xs text-white/40">
                              Monto de compra
                            </p>
                            <p className="mt-1 text-sm font-semibold">
                              {money(d.montoCompra)}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                            <Truck size={20} className="text-emerald-300" />
                            <p className="mt-3 text-xs text-white/40">
                              Unidad transportista
                            </p>
                            <p className="mt-1 text-sm font-semibold">
                              {d.unidad}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                            <FileCheck2
                              size={20}
                              className="text-emerald-300"
                            />
                            <p className="mt-3 text-xs text-white/40">
                              Documento
                            </p>
                            <p className="mt-1 text-sm font-semibold">
                              Respaldado
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                          <p className="mb-3 text-sm font-semibold text-white/70">
                            Combustibles descargados
                          </p>

                          <div className="grid gap-3 md:grid-cols-3">
                            {d.combustibles.map((combustible) => (
                              <div
                                key={combustible.tipo}
                                className="rounded-xl bg-black/20 px-4 py-3"
                              >
                                <p className="text-sm font-semibold">
                                  {combustible.tipo}
                                </p>
                                <p className="mt-1 text-sm text-emerald-200">
                                  {gallons(combustible.galones)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-emerald-200">
                          <Download size={16} />
                          Ver documento de respaldo
                        </button>
                      </article>
                    ))}
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
