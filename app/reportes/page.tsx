import Header from "../Components/Header";

export default function Reportes() {
  return (
    <main className="min-h-screen w-full bg-slate-100 px-6 pb-12 pt-32 text-slate-900 md:px-12">
      <Header />
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Resumen general</p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Reportes</h1>
            <p className="mt-2 text-slate-500">Consulta el estado actual de tus proyectos y tareas.</p>
          </div>
          <p className="text-sm text-slate-500">Periodo: Agosto 2026</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Proyectos activos</p>
            <p className="mt-3 text-3xl font-bold">12</p>
            <p className="mt-2 text-sm text-emerald-600">+8,3% este mes</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Tareas completadas</p>
            <p className="mt-3 text-3xl font-bold">86</p>
            <p className="mt-2 text-sm text-emerald-600">+14,6% este mes</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Tareas pendientes</p>
            <p className="mt-3 text-3xl font-bold">24</p>
            <p className="mt-2 text-sm text-amber-600">8 requieren atención</p>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Usuarios activos</p>
            <p className="mt-3 text-3xl font-bold">18</p>
            <p className="mt-2 text-sm text-slate-500">De 21 registrados</p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Actividad semanal</h2>
                <p className="mt-1 text-sm text-slate-500">Tareas completadas durante los últimos días</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">72%</span>
            </div>
            <div className="mt-8 flex h-48 items-end justify-between gap-3 border-b border-slate-200 px-2">
              {[
                ["Lun", "58%"],
                ["Mar", "76%"],
                ["Mie", "44%"],
                ["Jue", "88%"],
                ["Vie", "68%"],
                ["Sab", "35%"],
                ["Dom", "52%"],
              ].map(([day, height]) => (
                <div key={day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <div className="w-full max-w-10 rounded-t-md bg-blue-500" style={{ height }} />
                  <span className="mb-2 text-xs text-slate-500">{day}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold">Estado de proyectos</h2>
            <p className="mt-1 text-sm text-slate-500">Distribución de los proyectos actuales</p>
            <div className="mt-7 space-y-5">
              {[
                ["Completados", "6 proyectos", "bg-emerald-500", "50%"],
                ["En progreso", "4 proyectos", "bg-blue-500", "33%"],
                ["Pendientes", "2 proyectos", "bg-amber-500", "17%"],
              ].map(([label, count, color, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{label}</span>
                    <span className="text-slate-500">{count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className={`h-2 rounded-full ${color}`} style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}