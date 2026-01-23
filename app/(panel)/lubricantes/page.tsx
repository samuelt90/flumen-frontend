"use client";
import TopNav from "../../components/TopNav";

export default function LubricantesPage() {
  const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

  const data = [
    {
      fecha: "2026-01-24",
      resumen: {
        totalVentas: 1250,
        unidades: 18,
        stockFinal: 42,
      },
      items: [
        {
          producto: "Aceite 20W-50",
          stockInicial: 30,
          vendidos: 8,
          precio: 85,
        },
        {
          producto: "Aceite 10W-30",
          stockInicial: 20,
          vendidos: 6,
          precio: 95,
        },
        {
          producto: "ATF",
          stockInicial: 10,
          vendidos: 4,
          precio: 110,
        },
      ],
    },
    {
      fecha: "2026-01-23",
      resumen: {
        totalVentas: 980,
        unidades: 14,
        stockFinal: 60,
      },
      items: [
        {
          producto: "Aceite 20W-50",
          stockInicial: 25,
          vendidos: 5,
          precio: 85,
        },
        {
          producto: "Aceite 10W-30",
          stockInicial: 22,
          vendidos: 4,
          precio: 95,
        },
        {
          producto: "ATF",
          stockInicial: 12,
          vendidos: 5,
          precio: 110,
        },
      ],
    },
  ];

  return (
    <main className="p-4 sm:p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Reporte de lubricantes</h1>
        <p className="text-sm text-gray-600">
          Control de venta y stock por fecha
        </p>
      </header>

      {data.map((dia) => (
        <section
          key={dia.fecha}
          className="rounded-2xl border p-4 space-y-4"
        >
          {/* Fecha */}
          <div>
            <h2 className="font-semibold text-lg">{dia.fecha}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 text-sm">
              <div className="rounded-xl border p-3">
                <p className="text-gray-500">Total vendido</p>
                <p className="font-semibold">
                  {money(dia.resumen.totalVentas)}
                </p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-gray-500">Unidades vendidas</p>
                <p className="font-semibold">{dia.resumen.unidades}</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-gray-500">Stock final</p>
                <p className="font-semibold">{dia.resumen.stockFinal}</p>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 border text-left">Producto</th>
                  <th className="p-2 border text-right">Stock inicial</th>
                  <th className="p-2 border text-right">Vendidos</th>
                  <th className="p-2 border text-right">Precio</th>
                  <th className="p-2 border text-right">Total</th>
                  <th className="p-2 border text-right">Stock final</th>
                </tr>
              </thead>
              <tbody>
                {dia.items.map((i, idx) => {
                  const total = i.vendidos * i.precio;
                  const stockFinal = i.stockInicial - i.vendidos;

                  return (
                    <tr key={idx}>
                      <td className="p-2 border">{i.producto}</td>
                      <td className="p-2 border text-right">
                        {i.stockInicial}
                      </td>
                      <td className="p-2 border text-right">
                        {i.vendidos}
                      </td>
                      <td className="p-2 border text-right">
                        {money(i.precio)}
                      </td>
                      <td className="p-2 border text-right">
                        {money(total)}
                      </td>
                      <td className="p-2 border text-right">
                        {stockFinal}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Descargar */}
      <section>
        <button className="w-full rounded-2xl border py-3 font-medium">
          Descargar reporte de lubricantes
        </button>
      </section>
    </main>
  );
}
