import TopNav from "../../components/TopNav";

export default function HistoricoDescargasPage() {
  return (
    <main className="p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Histórico / Descargas</h1>
        <p className="text-sm text-gray-600">
          Consulta y descarga reportes consolidados por fecha
        </p>
      </header>

      {/* Selección */}
      <section className="rounded-2xl border p-4 space-y-4">
        <div>
          <label className="block text-sm text-gray-500 mb-1">
            Fecha
          </label>
          <input
            type="date"
            className="w-full border rounded-xl p-2"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-1">
            Tipo de reporte
          </label>
          <select className="w-full border rounded-xl p-2">
            <option>Ventas (corte del día)</option>
            <option>Bitácora Proval</option>
            <option>Reporte de cupones</option>
            <option>Bitácora de descargas</option>
            <option>Gastos de mantenimiento</option>
            <option>Reporte Consolidado</option>
          </select>
        </div>
      </section>

      {/* Acciones */}
      <section className="grid grid-cols-2 gap-3">
        <button
          className="rounded-2xl border py-3 font-semibold text-gray-700"
        >
          Ver reporte
        </button>

        <button
          className="rounded-2xl border py-3 font-semibold text-gray-700"
        >
          Descargar reporte consolidado
        </button>
      </section>

      {/* Vista previa (conceptual) */}
      <section className="rounded-2xl border p-4">
        <p className="text-sm text-gray-500 mb-2">
          Vista previa
        </p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• Reporte seleccionado</p>
          <p>• Fecha aplicada</p>
          <p>• Datos consolidados</p>
          <p>• Listo para visualización o descarga</p>
        </div>
      </section>
    </main>
  );
}
