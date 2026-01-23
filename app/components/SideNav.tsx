"use client";
import Link from "next/link";

export default function SideNav() {
  return (
    <aside className="h-full w-64 bg-white border-r p-4 space-y-6">
      <div className="font-bold text-lg">Flumen</div>

      <nav className="space-y-4 text-sm">
        <div>
          <p className="text-gray-400 mb-1">VENTAS</p>
          <Link href="/dashboard" className="block py-1">Dashboard</Link>
        </div>

        <div>
          <p className="text-gray-400 mb-1">COBRANZA</p>
          <Link href="/creditos" className="block py-1">Créditos</Link>
          <Link href="/prepago" className="block py-1">Prepago</Link>
          <Link href="/reporte-cupones" className="block py-1">
            Reporte de cupones
          </Link>
        </div>

        <div>
          <p className="text-gray-400 mb-1">CONTROL</p>
          <Link href="/bitacora-proval" className="block py-1">
            Bitácora Proval
          </Link>
          <Link href="/gastos-mantenimiento" className="block py-1">
            Gastos mantenimiento
          </Link>
          <Link href="/bitacora-descargas" className="block py-1">
            Bitácora descargas
          </Link>
          <Link href="/mermas" className="block py-1">
            Mermas
          </Link>
           <Link href="/lubricantes" className="block py-1">
            Lubricantes
          </Link>
        </div>

        <div>
          <p className="text-gray-400 mb-1">REPORTES</p>
          <Link href="/historico-descargas" className="block py-1">
            Histórico / Descargas
          </Link>
        </div>
      </nav>
    </aside>
  );
}
