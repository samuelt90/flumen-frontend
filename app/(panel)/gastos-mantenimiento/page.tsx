import TopNav from "../../components/TopNav";

export default function GastosMantenimientoPage() {
  const data = [
    {
      fecha: "2026-01-24",
      registros: [
        {
          factura: "FAC-88421",
          proveedor: "Servicios Técnicos Maya",
          descripcion: "Mantenimiento preventivo bomba #3",
          monto: "Q650",
          autoriza: "Administrador turno A",
        },
        {
          factura: "FAC-88422",
          proveedor: "ElectroDiesel",
          descripcion: "Cambio de filtro diésel",
          monto: "Q175",
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
          monto: "Q600",
          autoriza: "Administrador turno B",
        },
        {
          factura: "FAC-88391",
          proveedor: "Ferretería Central",
          descripcion: "Repuesto manguera dispensador",
          monto: "Q1750",
          autoriza: "Jefe de estación",
        },
        {
          factura: "FAC-88392",
          proveedor: "Servicios Eléctricos López",
          descripcion: "Revisión tablero eléctrico",
          monto: "Q390",
          autoriza: "Administrador general",
        },
      ],
    },
  ];

  return (
    <main className="p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Gastos de mantenimiento</h1>
        <p className="text-sm text-gray-600">
          Registro de gastos operativos autorizados
        </p>
      </header>

      {data.map((dia) => (
        <section key={dia.fecha} className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500">
            Fecha: {dia.fecha}
          </h2>

          {dia.registros.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl border p-4 space-y-1"
            >
              <p className="font-semibold">
                Factura: {r.factura}
              </p>

              <p className="text-sm text-gray-600">
                Proveedor: {r.proveedor}
              </p>

              <p className="text-sm text-gray-600">
                Descripción: {r.descripcion}
              </p>

              <p className="text-sm text-gray-600">
                Autoriza: {r.monto}
              </p>

              <p className="text-sm text-gray-600">
                Autoriza: {r.autoriza}
              </p>

              <button
                className="mt-2 text-sm underline text-gray-500 cursor-pointer"
              >
                Adjuntar documento de respaldo
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
