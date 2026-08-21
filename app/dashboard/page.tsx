import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-slate-900 dark:bg-black dark:text-white">
      
      {/* 1. Navbar Simple */}
      <nav className="border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-black">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Taskflow
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Admin</span>
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
              Cerrar sesión
            </Link>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Mis Tareas</h1>
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            + Nueva Tarea
          </button>
        </div>
        {/* Lista de tareas*/}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-black">
          {/*Tarea 1*/}
          <div className="flex items-center gap-4 border-b border-slate-100 p-5 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/50">
            <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium text-slate-800 dark:text-slate-200">Implementar Login Page</p>
              <p className="text-sm text-slate-500">Vence hoy a las 11:59 PM</p>
            </div>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-800 dark:text-red-400">
              Urgente
            </span>
          </div>
          {/*Tarea 2*/}
          <div className="flex items-center gap-4 border-b border-slate-100 p-5 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/50">
            <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium text-slate-800 dark:text-slate-200">Implementar Registro de cuentas</p>
              <p className="text-sm text-slate-500">Mañana a las 10:00 AM</p>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Pendiente
            </span>
          </div>
          {/*Tarea 3*/}
          <div className="flex items-center gap-4 p-5 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/50">
            <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium text-slate-800 dark:text-slate-200">Actualizar dependencias del proyecto</p>
              <p className="text-sm text-slate-500">Sin fecha límite</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Pendiente
            </span>
          </div>
        </div>
      </main>

    </div>
  );
}