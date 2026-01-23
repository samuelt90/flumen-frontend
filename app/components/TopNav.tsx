"use client";

export default function TopNav() {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Contexto izquierdo */}
      <div className="text-sm text-gray-600">
        Estación: <span className="font-medium">Demo Central</span>
      </div>

      {/* Contexto derecho (opcional, listo para crecer) */}
      <div className="text-sm text-gray-500">
        Panel Administrativo.
      </div>
    </div>
  );
}