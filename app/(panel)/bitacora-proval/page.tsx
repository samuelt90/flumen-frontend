import TopNav from "../../components/TopNav";

export default function BitacoraProvalPage() {
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

  return (
    <main className="p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Bitácora Proval</h1>
        <p className="text-sm text-gray-600">
          Registro de envíos de efectivo y comprobantes
        </p>
      </header>

      {data.map((dia) => (
        <section key={dia.fecha} className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500">
            Fecha: {dia.fecha}
          </h2>

          {dia.registros.map((r) => (
            <div
              key={r.boleta}
              className="rounded-2xl border p-4 space-y-1"
            >
              <p className="font-semibold">
                Boleta de envío: {r.boleta}
              </p>

              <p className="text-sm text-gray-600">
                Monto enviado: {money(r.montoEnviado)}
              </p>

              <p className="text-sm text-gray-600">
                Boleta banco: {r.boletaBanco}
              </p>

              <p className="text-sm text-gray-600">
                Voucher Proval: {r.voucherProval}
              </p>

              <p className="text-sm font-medium">
                Valor del envío: {money(r.valorEnvio)}
              </p>

              <button
                className="mt-2 text-sm underline text-gray-500 cursor-pointer"
              >
                Descargar comprobantes
              </button>
            </div>
          ))}
        </section>
      ))}

      {/* Descargar reporte mensual */}
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
