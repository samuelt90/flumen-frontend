"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-2xl border p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Flumen</h1>
        <p className="text-sm text-gray-600 mt-1">Acceso para dueño</p>

        <form className="mt-6 space-y-3">
          <div>
            <label className="text-sm font-medium">Correo</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="dueno@empresa.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Contraseña</label>
            <input
              type="password"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-black text-white py-2 font-medium"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}