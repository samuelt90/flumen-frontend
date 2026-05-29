import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  Gauge,
  ShieldAlert,
  TrendingDown,
  Wallet,
  WalletCards,
} from "lucide-react";

const clients = [
  {
    name: "Transportes Rivera",
    balance: "Q 4,800",
    consumption: "Q 1,200",
    percent: "75%",
    bar: "w-[75%]",
    status: "Saldo suficiente",
    description: "Cliente con saldo disponible para continuar consumo normal.",
    tone: "success",
  },
  {
    name: "Distribuidora López",
    balance: "Q 1,200",
    consumption: "Q 2,900",
    percent: "35%",
    bar: "w-[35%]",
    status: "Saldo bajo",
    description: "Conviene monitorear y solicitar recarga antes del próximo consumo.",
    tone: "warning",
  },
  {
    name: "Transportes Morales",
    balance: "Q 0",
    consumption: "Q 3,100",
    percent: "0%",
    bar: "w-full",
    status: "Sin saldo",
    description: "Requiere recarga antes de autorizar nuevos consumos.",
    tone: "danger",
  },
];

const getToneStyles = (tone: string) => {
  if (tone === "success") {
    return {
      card: "border-emerald-300/20 bg-emerald-300/[0.07]",
      text: "text-emerald-200",
      bar: "bg-emerald-300",
      icon: CheckCircle2,
    };
  }

  if (tone === "warning") {
    return {
      card: "border-amber-300/25 bg-amber-300/[0.08]",
      text: "text-amber-200",
      bar: "bg-amber-300",
      icon: AlertTriangle,
    };
  }

  return {
    card: "border-red-300/30 bg-red-400/[0.09]",
    text: "text-red-200",
    bar: "bg-red-300",
    icon: ShieldAlert,
  };
};

export default function PrepagoPage() {
  return (
    <main className="min-h-screen bg-[#080f0d] px-5 py-6 text-white md:px-10 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/65 transition hover:bg-white hover:text-slate-950"
              >
                <ArrowLeft size={16} />
                Volver a cabina
              </Link>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                Módulo de saldo anticipado
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Prepago
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                Control visual de clientes con saldo prepago, consumo mensual,
                alertas de saldo bajo y clientes que requieren recarga.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-amber-300/25 bg-amber-300/[0.08] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300 text-slate-950">
                  <WalletCards size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/45">Estado general</p>
                  <p className="font-semibold text-amber-100">
                    Requiere monitoreo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
            <Building2 className="text-emerald-300" size={26} />
            <p className="mt-5 text-sm text-white/45">Clientes activos</p>
            <p className="mt-2 text-4xl font-semibold">5</p>
          </div>

          <div className="rounded-[1.7rem] border border-amber-300/25 bg-amber-300/[0.08] p-6 backdrop-blur-2xl">
            <AlertTriangle className="text-amber-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Saldo bajo</p>
            <p className="mt-2 text-4xl font-semibold text-amber-100">2</p>
          </div>

          <div className="rounded-[1.7rem] border border-red-300/30 bg-red-400/[0.09] p-6 backdrop-blur-2xl">
            <ShieldAlert className="text-red-200" size={26} />
            <p className="mt-5 text-sm text-white/45">Sin saldo</p>
            <p className="mt-2 text-4xl font-semibold text-red-100">1</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Lectura ejecutiva
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Hay clientes que necesitan recarga
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Transportes Morales no tiene saldo disponible. Distribuidora
              López mantiene saldo bajo y conviene monitorearlo antes del
              siguiente consumo.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-red-300/30 bg-red-400/[0.09] p-4">
                <p className="text-sm font-semibold text-red-100">
                  Recarga prioritaria
                </p>
                <p className="mt-1 text-sm text-white/55">
                  No autorizar nuevos consumos sin confirmar saldo disponible.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-3">
                  <TrendingDown size={20} className="text-amber-200" />
                  <div>
                    <p className="text-sm font-semibold">Saldo monitoreado</p>
                    <p className="text-sm text-white/45">
                      El sistema separa saldo suficiente, saldo bajo y sin saldo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Clientes monitoreados
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Estado de saldo prepago
                </h2>
              </div>

              <Gauge className="text-white/35" size={28} />
            </div>

            <div className="mt-6 space-y-4">
              {clients.map((client) => {
                const tone = getToneStyles(client.tone);
                const Icon = tone.icon;

                return (
                  <article
                    key={client.name}
                    className={`rounded-[1.5rem] border p-5 ${tone.card}`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/25">
                            <Icon size={20} className={tone.text} />
                          </div>

                          <div>
                            <h3 className="font-semibold">{client.name}</h3>
                            <p className={`text-sm ${tone.text}`}>
                              {client.status}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                          {client.description}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
                        <p className="text-white/40">Saldo disponible</p>
                        <p className="mt-1 font-semibold">{client.balance}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-xs text-white/45">
                        <span>Consumo del mes: {client.consumption}</span>
                        <span>{client.percent}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${client.bar} ${tone.bar}`}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
