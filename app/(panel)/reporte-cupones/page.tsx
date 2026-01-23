import TopNav from "../../components/TopNav";
import CuponesBarChart from "../../components/CuponesBarChart";

export default function ReporteCuponesPage() {
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
      cupones: [
        { numero: "CP-88390", valor: 600 },
      ],
    },
  ];

  const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

  // métricas demo
  const totalCupones = data.reduce(
    (acc, d) => acc + d.cupones.reduce((s, c) => s + c.valor, 0),
    0
  );
  const dias = data.length;
  const promedioDiario = totalCupones / dias;
  const promedioSemanal = promedioDiario * 7;

  return (
    <main className="p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Reporte de cupones</h1>
        <p className="text-sm text-gray-600">
          Cupones pendientes de cobro
        </p>
      </header>

      {/* Resumen */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-2xl border p-3">
          <p className="text-xs text-gray-500">Total cupones</p>
          <p className="text-xl font-bold wrap-break-wordbreak-words">{money(totalCupones)}</p>
        </div>
        <div className="rounded-2xl border p-3">
          <p className="text-xs text-gray-500">Promedio diario</p>
          <p className="text-xl font-bold wrap-break-word">{money(promedioDiario)}</p>
        </div>
        <div className="rounded-2xl border p-3">
          <p className="text-xs text-gray-500">Promedio semanal</p>
          <p className="text-xl font-bold wrap-break-word">{money(promedioSemanal)}</p>
        </div>
      </section>

              {/* Gráfica resumen de cupones */}
        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="font-semibold text-sm">
            Comparativo de cupones
          </h2>

          <CuponesBarChart
            total={totalCupones}
            diario={promedioDiario}
            semanal={promedioSemanal}
          />
        </section>


      {/* Reporte */}
      {data.map((dia) => (
        <section key={dia.fecha} className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500">
            Fecha: {dia.fecha}
          </h2>

          {dia.cupones.map((c) => (
            <div
              key={c.numero}
              className="rounded-2xl border p-4 space-y-1"
            >
              <p className="font-semibold">
                Cupón: {c.numero}
              </p>

              <p className="text-sm text-gray-600">
                Valor del cupón: {money(c.valor)}
              </p>

              <button
                className="mt-2 text-sm underline text-gray-500 cursor-pointer"
              >
                Adjuntar imagen del cupón
              </button>
            </div>
          ))}
        </section>
      ))}

      {/* Descargar */}
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
