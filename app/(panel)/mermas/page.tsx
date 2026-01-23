"use client";

import TopNav from "../../components/TopNav";
import { useState } from "react";

type Merma = {
  fecha: string;
  monto: number;
  tipo: "Técnica" | "Operativa" | "Ajuste manual";
  nota: string;
};

export default function MermasPage() {
  const [mermas, setMermas] = useState<Merma[]>([]);
  const [form, setForm] = useState<Merma>({
    fecha: "",
    monto: 0,
    tipo: "Operativa",
    nota: "",
  });

  const money = (n: number) => `Q ${n.toLocaleString("es-GT")}`;

  function agregarMerma() {
    if (!form.fecha || !form.monto) return;
    setMermas([...mermas, form]);
    setForm({ fecha: "", monto: 0, tipo: "Operativa", nota: "" });
  }

  const totalMerma = mermas.reduce((acc, m) => acc + m.monto, 0);

  return (
    <main className="p-4 md:p-6 space-y-6">
      <TopNav />

      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold">Mermas</h1>
        <p className="text-sm text-gray-600">
          Registro y control manual de diferencias operativas
        </p>
      </header>

      {/* Resumen */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Total de mermas</p>
          <p className="text-xl font-semibold">{money(totalMerma)}</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Registros</p>
          <p className="text-xl font-semibold">{mermas.length}</p>
        </div>
        <div className="rounded-2xl border p-4">
          <p className="text-sm text-gray-500">Tipo principal</p>
          <p className="text-xl font-semibold">Operativa</p>
        </div>
      </section>

      {/* Formulario */}
      <section className="rounded-2xl border p-4 space-y-4">
        <h2 className="font-semibold">Registrar merma</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Fecha</label>
            <input
              type="date"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              value={form.fecha}
              onChange={(e) => setForm({ ...form, fecha: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Monto (Q)</label>
            <input
              type="number"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              value={form.monto}
              onChange={(e) =>
                setForm({ ...form, monto: Number(e.target.value) })
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tipo de merma</label>
            <select
              className="mt-1 w-full rounded-xl border px-3 py-2"
              value={form.tipo}
              onChange={(e) =>
                setForm({
                  ...form,
                  tipo: e.target.value as Merma["tipo"],
                })
              }
            >
              <option>Técnica</option>
              <option>Operativa</option>
              <option>Ajuste manual</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Notas</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Observación o explicación"
              value={form.nota}
              onChange={(e) => setForm({ ...form, nota: e.target.value })}
            />
          </div>
        </div>

        <button
          onClick={agregarMerma}
          className="rounded-xl bg-black text-white px-4 py-2 text-sm"
        >
          Agregar merma
        </button>
      </section>

      {/* Tabla */}
      <section className="rounded-2xl border p-4">
        <h2 className="font-semibold mb-3">Histórico de mermas</h2>

        {mermas.length === 0 ? (
          <p className="text-sm text-gray-500">Sin registros</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="py-2">Fecha</th>
                  <th>Monto</th>
                  <th>Tipo</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>
                {mermas.map((m, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{m.fecha}</td>
                    <td>{money(m.monto)}</td>
                    <td>{m.tipo}</td>
                    <td>{m.nota || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Descargar */}
      <section>
        <button
          className="w-full rounded-2xl border py-3 text-sm font-medium"
        >
          Descargar reporte de mermas
        </button>
      </section>
    </main>
  );
}
