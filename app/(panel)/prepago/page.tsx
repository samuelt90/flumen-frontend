import TopNav from "../../components/TopNav";

export default function PrepagoPage() {
  return (
    <main className="p-6 space-y-6">
      <TopNav />

      <header>
        <h1 className="text-2xl font-bold">Prepago</h1>
        <p className="text-sm text-gray-600">
          Estación: Demo Central
        </p>
      </header>

      {/* Resumen */}
      <section className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border p-3">
          <p className="text-xs text-gray-500">Clientes</p>
          <p className="text-xl font-bold">5</p>
        </div>
        <div className="rounded-2xl border p-3">
          <p className="text-xs text-gray-500">Saldo bajo</p>
          <p className="text-xl font-bold text-yellow-600">2</p>
        </div>
        <div className="rounded-2xl border p-3">
          <p className="text-xs text-gray-500">Sin saldo</p>
          <p className="text-xl font-bold text-red-600">1</p>
        </div>
      </section>

      {/* Clientes */}
      <section className="space-y-4">
        {/* Cliente OK */}
        <div className="rounded-2xl border p-4">
          <p className="font-semibold">Transportes Rivera</p>
          <p className="text-sm text-gray-600">
            Saldo: Q 4,800 · Consumo del mes: Q 1,200
          </p>
          <div className="mt-2 h-2 rounded-full bg-gray-200">
            <div className="h-2 w-[75%] rounded-full bg-green-500" />
          </div>
          <p className="mt-1 text-xs text-green-600">
            Saldo suficiente
          </p>
        </div>

        {/* Cliente con saldo bajo */}
        <div className="rounded-2xl border p-4">
          <p className="font-semibold">Distribuidora López</p>
          <p className="text-sm text-gray-600">
            Saldo: Q 1,200 · Consumo del mes: Q 2,900
          </p>
          <div className="mt-2 h-2 rounded-full bg-gray-200">
            <div className="h-2 w-[35%] rounded-full bg-yellow-500" />
          </div>
          <p className="mt-1 text-xs text-yellow-600">
            Saldo bajo · Monitorear
          </p>
        </div>

        {/* Cliente sin saldo */}
        <div className="rounded-2xl border p-4 border-red-400">
          <p className="font-semibold">Transportes Morales</p>
          <p className="text-sm text-gray-600">
            Saldo: Q 0 · Consumo del mes: Q 3,100
          </p>
          <div className="mt-2 h-2 rounded-full bg-gray-200">
            <div className="h-2 w-full rounded-full bg-red-500" />
          </div>
          <p className="mt-1 text-xs text-red-600">
            Sin saldo · Requiere recarga
          </p>
        </div>
      </section>
    </main>
  );
}