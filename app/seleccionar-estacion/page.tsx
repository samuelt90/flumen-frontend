"use client";

import { useRouter } from "next/navigation";

export default function SeleccionarEstacionPage() {
  const router = useRouter();

  const estaciones = [
    "Estación Central",
    "Estación Norte",
    "Estación Sur",
    "Estación Oriente",
  ];

  return (
    <main className="p-6 space-y-8 max-w-5xl mx-auto">
      {/* HEADER */}
      <header>
        <h1 className="text-2xl font-bold">Flumen</h1>
        <p className="text-sm text-gray-600">
          Selecciona una estación para continuar
        </p>
      </header>

      {/* ===================== */}
      {/* SELECCIÓN DE ESTACIÓN */}
      {/* ===================== */}
      <section>
        <h2 className="font-semibold mb-3">Estaciones disponibles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {estaciones.map((e) => (
            <button
              key={e}
              onClick={() => router.push("/dashboard")}
              className="rounded-2xl border p-4 text-left hover:border-black transition"
            >
              <p className="font-medium">{e}</p>
              <p className="text-xs text-gray-500">
                Acceder al panel operativo
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/* HISTÓRICO / DESCARGAS */}
      {/* ===================== */}
      <section className="rounded-2xl border p-5 space-y-4">
        <header>
          <h2 className="text-lg font-semibold">Histórico / Descargas</h2>
          <p className="text-sm text-gray-600">
            Consulta y descarga reportes por estación
          </p>
        </header>

        <div className="space-y-3">
          {/* Estación */}
          <div>
            <label className="text-xs text-gray-500">Estación</label>
            <select className="w-full border rounded-xl p-2">
              <option>Estación Central</option>
              <option>Estación Norte</option>
              <option>Estación Sur</option>
              <option>Estación Oriente</option>
              <option>Consolidado total</option>
            </select>
          </div>

          {/* Fecha */}
          <div>
            <label className="text-xs text-gray-500">Fecha</label>
            <input
              type="date"
              className="w-full border rounded-xl p-2"
            />
          </div>

          {/* Tipo de reporte */}
          <div>
            <label className="text-xs text-gray-500">Tipo de reporte</label>
            <select className="w-full border rounded-xl p-2">
              <option>Ventas (corte del día)</option>
              <option>Bitácora Proval</option>
              <option>Reporte de cupones</option>
              <option>Bitácora de descargas</option>
              <option>Gastos de mantenimiento</option>
              <option>Reporte consolidado de estaciones</option>
            </select>
          </div>

          {/* Acciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button className="rounded-xl border py-3">
              Ver reporte
            </button>
            <button className="rounded-xl border py-3">
              Descargar reporte consolidado
            </button>
          </div>

          {/* Vista previa */}
          <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
            <p>• Estación seleccionada</p>
            <p>• Fecha aplicada</p>
            <p>• Datos consolidados</p>
            <p>• Listo para visualización o descarga</p>
          </div>
        </div>
      </section>
    </main>
  );
}
