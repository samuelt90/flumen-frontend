"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  Droplets,
  Fuel,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Ticket,
  TrendingUp,
  Truck,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";


type SummaryTone = "neutral" | "success" | "warning" | "danger";

type SummaryCard = {
  label: string;
  value: string;
  tone: SummaryTone;
};

type Highlight = {
  title: string;
  value: string;
  note: string;
  tone: SummaryTone;
};

type ModuleItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  href: string;
  status: string;
  metric: string;
  detail: string;
  ctaLabel?: string;
  summaryCards?: SummaryCard[];
  alertTitle?: string;
  alertText?: string;
  highlights?: Highlight[];
};

const modules: ModuleItem[]= [
  {
    title: "Corte diario",
    subtitle: "Ventas, efectivo esperado y cierre del día.",
    icon: ClipboardCheck,
    href: "/operacion-diaria",
    status: "Día abierto",
    metric: "Q 128,017",
    detail: "Operación activa con montos manuales y ventas por combustible.",
  },
  {
  title: "Créditos",
  subtitle: "Clientes con línea activa y saldos pendientes.",
  icon: WalletCards,
  href: "/creditos",
  status: "Requiere atención",
  metric: "6 clientes",
  detail: "Control de clientes con crédito activo, alertas por consumo y líneas excedidas.",
  ctaLabel: "Ver créditos",
  summaryCards: [
    {
      label: "Clientes activos",
      value: "6",
      tone: "neutral",
    },
    {
      label: "En alerta",
      value: "2",
      tone: "warning",
    },
    {
      label: "Excedidos",
      value: "1",
      tone: "danger",
    },
  ],
  alertTitle: "Atención requerida",
  alertText: "Transportes Morales superó su línea de crédito y requiere seguimiento.",
  highlights: [
    {
      title: "Transportes Rivera",
      value: "Q 3,200 / Q 6,000",
      note: "53% usado · Dentro de línea",
      tone: "success",
    },
    {
      title: "Distribuidora López",
      value: "Q 5,000 / Q 6,000",
      note: "83% usado · Alerta enviada",
      tone: "warning",
    },
    {
      title: "Transportes Morales",
      value: "Q 6,450 / Q 6,000",
      note: "Límite excedido · Requiere atención",
      tone: "danger",
    },
  ],
},

{
  title: "Prepago",
  subtitle: "Clientes con saldo anticipado y consumo aplicado.",
  icon: Banknote,
  href: "/prepago",
  status: "Requiere monitoreo",
  metric: "5 clientes",
  detail:
    "Control de clientes con saldo prepago, consumo mensual y alertas de recarga.",
  ctaLabel: "Ver prepago",
  summaryCards: [
    {
      label: "Clientes activos",
      value: "5",
      tone: "neutral",
    },
    {
      label: "Saldo bajo",
      value: "2",
      tone: "warning",
    },
    {
      label: "Sin saldo",
      value: "1",
      tone: "danger",
    },
  ],
  alertTitle: "Recarga requerida",
  alertText:
    "Transportes Morales no tiene saldo disponible. Distribuidora López debe monitorearse por saldo bajo.",
  highlights: [
    {
      title: "Transportes Rivera",
      value: "Q 4,800 disponibles",
      note: "Saldo suficiente · Consumo mensual Q 1,200",
      tone: "success",
    },
    {
      title: "Distribuidora López",
      value: "Q 1,200 disponibles",
      note: "Saldo bajo · Monitorear recarga",
      tone: "warning",
    },
    {
      title: "Transportes Morales",
      value: "Q 0 disponibles",
      note: "Sin saldo · Requiere recarga",
      tone: "danger",
    },
  ],
},

{
  title: "Cupones",
  subtitle: "Control de cupones pendientes de cobro.",
  icon: Ticket,
  href: "/reporte-cupones",
  status: "Pendiente de cobro",
  metric: "Q 2,200",
  detail:
    "Reporte de cupones registrados por fecha, valor acumulado, promedio diario y respaldo pendiente.",
  ctaLabel: "Ver reporte de cupones",
  summaryCards: [
    {
      label: "Total cupones",
      value: "Q 2,200",
      tone: "neutral",
    },
    {
      label: "Promedio diario",
      value: "Q 733",
      tone: "success",
    },
    {
      label: "Promedio semanal",
      value: "Q 5,133",
      tone: "warning",
    },
  ],
  alertTitle: "Pendiente de respaldo",
  alertText:
    "Los cupones deben quedar documentados con imagen o comprobante para facilitar el cobro posterior.",
  highlights: [
    {
      title: "2026-01-24",
      value: "Q 800",
      note: "2 cupones registrados · CP-88421 y CP-88422",
      tone: "success",
    },
    {
      title: "2026-01-23",
      value: "Q 800",
      note: "3 cupones registrados",
      tone: "neutral",
    },
    {
      title: "2026-01-22",
      value: "Q 600",
      note: "1 cupón registrado",
      tone: "neutral",
    },
  ],
},

{
  title: "Proval",
  subtitle: "Efectivo enviado, vouchers y depósitos bancarios.",
  icon: Truck,
  href: "/bitacora-proval",
  status: "Cuadrado",
  metric: "Q 54,800",
  detail:
    "Bitácora de envíos de efectivo, voucher Proval, boleta bancaria y valor confirmado.",
  ctaLabel: "Ver bitácora Proval",
  summaryCards: [
    {
      label: "Enviado hoy",
      value: "Q 27,700",
      tone: "neutral",
    },
    {
      label: "Registros",
      value: "2",
      tone: "success",
    },
    {
      label: "Diferencia",
      value: "Q 0",
      tone: "success",
    },
  ],
  alertTitle: "Control confirmado",
  alertText:
    "Los envíos registrados hoy coinciden con voucher Proval y boleta bancaria.",
  highlights: [
    {
      title: "ENV-45892",
      value: "Q 18,500",
      note: "Voucher PRV-88210 · Banco DEP-99321",
      tone: "success",
    },
    {
      title: "ENV-45893",
      value: "Q 9,200",
      note: "Voucher PRV-88211 · Banco DEP-99322",
      tone: "success",
    },
    {
      title: "Reporte mensual",
      value: "Disponible",
      note: "5 registros consolidados en la bitácora",
      tone: "neutral",
    },
  ],
},

{
  title: "Descargas",
  subtitle: "Combustible recibido, facturas y cisternas.",
  icon: Droplets,
  href: "/bitacora-descargas",
  status: "Registrado",
  metric: "34,500 gal",
  detail:
    "Bitácora de descargas de combustible por proveedor, factura, unidad transportista y volumen recibido.",
  ctaLabel: "Ver bitácora de descargas",
  summaryCards: [
    {
      label: "Galones registrados",
      value: "34,500",
      tone: "neutral",
    },
    {
      label: "Monto compra",
      value: "Q 1.05M",
      tone: "success",
    },
    {
      label: "Descargas",
      value: "3",
      tone: "success",
    },
  ],
  alertTitle: "Última descarga registrada",
  alertText:
    "El 24 de enero se registró una descarga de 13,000 galones con factura FAC-992341.",
  highlights: [
    {
      title: "FAC-992341",
      value: "13,000 gal",
      note: "Súper 5,200 gal · Regular 7,800 gal · Cisterna SH-21",
      tone: "success",
    },
    {
      title: "FAC-992110",
      value: "6,400 gal",
      note: "Diésel · Cisterna SH-18",
      tone: "neutral",
    },
    {
      title: "FAC-992111",
      value: "15,100 gal",
      note: "Súper, Regular y Diésel · Cisterna SH-19",
      tone: "success",
    },
  ],
},

 {
  title: "Gastos",
  subtitle: "Mantenimiento, proveedores y gastos autorizados.",
  icon: Wrench,
  href: "/gastos-mantenimiento",
  status: "Autorizado",
  metric: "Q 3,565",
  detail:
    "Registro de gastos operativos autorizados, facturas, proveedores y documentos de respaldo.",
  ctaLabel: "Ver gastos de mantenimiento",
  summaryCards: [
    {
      label: "Total gastos",
      value: "Q 3,565",
      tone: "neutral",
    },
    {
      label: "Registros",
      value: "5",
      tone: "success",
    },
    {
      label: "Mayor gasto",
      value: "Q 1,750",
      tone: "warning",
    },
  ],
  alertTitle: "Gasto relevante",
  alertText:
    "Ferretería Central registra el gasto más alto por repuesto de manguera de dispensador.",
  highlights: [
    {
      title: "Mantenimiento bomba #3",
      value: "Q 650",
      note: "Servicios Técnicos Maya · Autorizó turno A",
      tone: "success",
    },
    {
      title: "Repuesto manguera dispensador",
      value: "Q 1,750",
      note: "Ferretería Central · Autorizó jefe de estación",
      tone: "warning",
    },
    {
      title: "Revisión tablero eléctrico",
      value: "Q 390",
      note: "Servicios Eléctricos López · Autorizó administrador general",
      tone: "neutral",
    },
  ],
},

{
  title: "Reportes",
  subtitle: "Consulta histórica y reportes descargables.",
  icon: BarChart3,
  href: "/reportes-operativos",
  status: "Disponible",
  metric: "7 reportes",
  detail:
    "Consulta reportes de meses anteriores, descarga información operativa y prueba una experiencia de consulta asistida.",
  ctaLabel: "Ver reportes",
  summaryCards: [
    {
      label: "Reportes rápidos",
      value: "7",
      tone: "neutral",
    },
    {
      label: "Consulta asistida",
      value: "Demo",
      tone: "success",
    },
    {
      label: "Descargas",
      value: "PDF / Excel",
      tone: "warning",
    },
  ],
  alertTitle: "Consulta histórica asistida",
  alertText:
    "En sistema real, el administrador podrá preguntar por totales, promedios y movimientos históricos sin buscar manualmente entre archivos.",
  highlights: [
    {
      title: "Cupones por mes",
      value: "Ejemplo: julio",
      note: "Total mensual, promedio diario y pendientes de respaldo",
      tone: "success",
    },
    {
      title: "Proval por mes",
      value: "Ejemplo: marzo",
      note: "Efectivo enviado, vouchers y depósitos registrados",
      tone: "neutral",
    },
    {
      title: "Gastos mantenimiento",
      value: "Por proveedor",
      note: "Totales autorizados y documentos de respaldo",
      tone: "warning",
    },
  ],
},

];

const positions = [
  "left-[50%] top-[0%] -translate-x-1/2",
  "left-[78%] top-[14%] -translate-x-1/2",
  "left-[92%] top-[46%] -translate-x-1/2",
  "left-[74%] top-[78%] -translate-x-1/2",
  "left-[50%] top-[90%] -translate-x-1/2",
  "left-[26%] top-[78%] -translate-x-1/2",
  "left-[8%] top-[46%] -translate-x-1/2",
  "left-[22%] top-[14%] -translate-x-1/2",
];

export default function DashboardPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const activeModule = modules[activeIndex];
  const ActiveIcon = activeModule.icon;

  const arrangedModules = useMemo(() => {
    return modules.map((module, index) => {
      const visualPosition =
        (index - activeIndex + modules.length) % modules.length;

      return {
        ...module,
        originalIndex: index,
        positionClass: positions[visualPosition],
        isActive: index === activeIndex,
      };
    });
  }, [activeIndex]);

  const previousModule = () => {
    setActiveIndex((current) =>
      current === 0 ? modules.length - 1 : current - 1
    );
  };

  const nextModule = () => {
    setActiveIndex((current) =>
      current === modules.length - 1 ? 0 : current + 1
    );
  };

  const getToneClass = (tone?: SummaryTone) => {
  if (tone === "success") return "border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200";
  if (tone === "warning") return "border-amber-300/25 bg-amber-300/[0.08] text-amber-200";
  if (tone === "danger") return "border-red-300/30 bg-red-400/[0.09] text-red-200";
  return "border-white/10 bg-white/[0.06] text-white";
};


  return (
    <main className="min-h-screen overflow-hidden bg-[#080f0d] text-white">
      <section className="relative min-h-screen px-5 py-5 md:px-10 md:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.14),_transparent_34%)]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] px-5 py-5 shadow-2xl shadow-black/20 backdrop-blur-2xl md:flex-row md:items-center md:justify-between md:px-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                Flumen
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Panel diario de estación
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/60">
                Control visual del corte, efectivo esperado, movimientos y
                pendientes operativos.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/75 md:items-end">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2">
                <Fuel size={16} className="text-emerald-300" />
                <span>Estación Demo Central</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2">
                <CalendarDays size={16} className="text-emerald-300" />
                <span>Operación de hoy</span>
              </div>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-4">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-2xl">
              <p className="text-sm text-white/50">Ventas de hoy</p>
              <p className="mt-3 text-3xl font-semibold">Q 128,017</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
                <TrendingUp size={16} />
                <span>Combustible + manuales</span>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-2xl">
              <p className="text-sm text-white/50">Efectivo esperado</p>
              <p className="mt-3 text-3xl font-semibold">Q 104,693</p>
              <p className="mt-4 text-sm text-white/45">
                Según corte operativo actual
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-2xl">
              <p className="text-sm text-white/50">Crédito pendiente</p>
              <p className="mt-3 text-3xl font-semibold">Q 3,200</p>
              <p className="mt-4 text-sm text-amber-200">
                Requiere seguimiento
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-2xl">
              <p className="text-sm text-white/50">Estado del día</p>
              <p className="mt-3 text-3xl font-semibold">Abierto</p>
              <p className="mt-4 text-sm text-white/45">
                Corte pendiente de cierre
              </p>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[560px] rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Operación diaria
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Rueda operativa
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    Gira los módulos y abre la pantalla que necesites revisar.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={previousModule}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white transition hover:bg-white hover:text-slate-950"
                    aria-label="Módulo anterior"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={nextModule}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white transition hover:bg-white hover:text-slate-950"
                    aria-label="Siguiente módulo"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="relative mx-auto h-[410px] max-w-[640px]">
                <div className="absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.03]" />
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/20" />

                <div className="absolute left-1/2 top-1/2 z-20 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-emerald-300/30 bg-[#0d1b17] p-5 text-center shadow-2xl shadow-emerald-950/40">
                  <div className="grid h-13 w-13 place-items-center rounded-full bg-emerald-300 text-slate-950">
                    <ActiveIcon size={26} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {activeModule.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    {activeModule.subtitle}
                  </p>
                </div>

                {arrangedModules.map((module) => {
                  const Icon = module.icon;

                  return (
                    <button
                      key={module.title}
                      onClick={() => setActiveIndex(module.originalIndex)}
                      className={`absolute z-10 flex -translate-y-1/2 flex-col items-center gap-2 transition-all duration-500 ${module.positionClass}`}
                    >
                      <span
                        className={`grid place-items-center rounded-full border backdrop-blur-xl transition ${
                          module.isActive
                            ? "h-20 w-20 border-emerald-300 bg-emerald-300 text-slate-950 shadow-2xl shadow-emerald-500/20"
                            : "h-16 w-16 border-white/10 bg-white/[0.08] text-white/70 hover:border-emerald-300/60 hover:text-emerald-200"
                        }`}
                      >
                        <Icon size={module.isActive ? 28 : 22} />
                      </span>
                      <span
                        className={`max-w-24 text-center text-xs ${
                          module.isActive ? "text-white" : "text-white/45"
                        }`}
                      >
                        {module.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                      Módulo activo
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold">
                      {activeModule.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {activeModule.detail}
                    </p>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                    <ActiveIcon size={24} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-white/40">Estado</p>
                    <p className="mt-2 text-sm font-semibold">
                      {activeModule.status}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-white/40">Dato clave</p>
                    <p className="mt-2 text-sm font-semibold">
                      {activeModule.metric}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpenModal(true)}
                  className="mt-6 w-full rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                >
                  Ver más
                </button>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
                <h3 className="text-lg font-semibold">Pendientes</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                    1 corte pendiente de cierre
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                    2 vouchers Proval por confirmar
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                    Crédito pendiente por Q 3,200
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-2xl">
                <h3 className="text-lg font-semibold">Actividad reciente</h3>
                <div className="mt-4 space-y-3 text-sm text-white/55">
                  <p>Corte de turno mañana cerrado.</p>
                  <p>Descarga de combustible registrada.</p>
                  <p>Pago de crédito aplicado.</p>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </section>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/70 px-4 py-4 backdrop-blur-sm sm:items-center">
          <div className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1512] p-6 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Pantalla del módulo
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  {activeModule.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
                  {activeModule.detail}
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:bg-white hover:text-slate-950"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

         {activeModule.summaryCards ? (
  <div className="mt-7 space-y-6">
    <div className="grid gap-4 md:grid-cols-3">
      {activeModule.summaryCards.map((card) => (
        <div
          key={card.label}
          className={`rounded-2xl border p-5 ${getToneClass(card.tone)}`}
        >
          <p className="text-sm opacity-70">{card.label}</p>
          <p className="mt-3 text-3xl font-semibold">{card.value}</p>
        </div>
      ))}
    </div>

    {activeModule.alertTitle && activeModule.alertText && (
      <div className="rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-5">
        <p className="text-sm font-semibold text-amber-200">
          {activeModule.alertTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          {activeModule.alertText}
        </p>
      </div>
    )}

    {activeModule.highlights && (
      <div>
        <p className="mb-3 text-sm font-semibold text-white/70">
          Clientes destacados
        </p>

        <div className="space-y-3">
          {activeModule.highlights.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border p-4 ${getToneClass(item.tone)}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm opacity-80">{item.value}</p>
              </div>
              <p className="mt-2 text-sm opacity-70">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
) : (
  <div className="mt-7 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      <ShieldCheck className="text-emerald-300" size={24} />
      <p className="mt-4 text-sm text-white/45">Estado</p>
      <p className="mt-1 font-semibold">{activeModule.status}</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      <ReceiptText className="text-emerald-300" size={24} />
      <p className="mt-4 text-sm text-white/45">Dato clave</p>
      <p className="mt-1 font-semibold">{activeModule.metric}</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      <Landmark className="text-emerald-300" size={24} />
      <p className="mt-4 text-sm text-white/45">Acción</p>
      <p className="mt-1 font-semibold">Revisar módulo</p>
    </div>
  </div>
)}


            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-slate-950"
              >
                Cerrar
              </button>

             <Link
              href={activeModule.href}
              className="rounded-full bg-emerald-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              {activeModule.ctaLabel ?? "Abrir módulo completo"}
            </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
