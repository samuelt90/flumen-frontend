import TopNav from "../../components/TopNav";

export default function BitacoraDescargasPage() {
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
          combustibles: [
            { tipo: "Diésel", galones: 6400 },
          ],
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

  return (
    <main className="p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Bitácora de descargas</h1>
        <p className="text-sm text-gray-600">
          Registro de descargas de combustible (auditoría fiscal)
        </p>
      </header>

      {data.map((dia) => (
        <section key={dia.fecha} className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500">
            Fecha de descarga: {dia.fecha}
          </h2>

          {dia.descargas.map((d, idx) => (
            <div
              key={idx}
              className="rounded-2xl border p-4 space-y-1"
            >
              <p className="font-semibold">
                Proveedor: {d.proveedor}
              </p>

              <p className="text-sm text-gray-600">
                Factura No.: {d.factura}
              </p>

              <p className="text-sm text-gray-600">
                Unidad / Cisterna: {d.unidad}
              </p>

              <div className="text-sm text-gray-600">
                Combustibles descargados:
                <ul className="list-disc ml-5 mt-1">
                  {d.combustibles.map((c) => (
                    <li key={c.tipo}>
                      {c.tipo}: {c.galones.toLocaleString()} gal
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600">
                Volumen total: {d.totalGalones.toLocaleString()} gal
              </p>

              <p className="text-sm font-medium">
                Monto de compra: {money(d.montoCompra)}
              </p>

              <button
                className="mt-2 text-sm underline text-gray-500 cursor-pointer"
              >
                Ver documento de respaldo
              </button>
            </div>
          ))}
        </section>
      ))}

      {/* Descargar reporte */}
      <section className="pt-4">
        <button
          className="w-full rounded-2xl border py-3 font-semibold text-gray-600"
        >
          Descargar reporte mensual
        </button>
      </section>
    </main>
  );
}
