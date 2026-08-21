import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        {/* Navbar (Ahora usado como contenedor vertical sin bordes) */}
        <nav className="flex flex-col items-center gap-4 bg-transparent">  
          {/*Taskflow */}
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <div>Taskflow</div>
            </Link>
          </div>
          {/*Iniciar Sesion */}
          <div className="flex items-center justify-center">
            <Link href="/login" className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-medium text-slate-700 dark:bg-blue-600 dark:text-slate-300 transition hover:bg-slate-200 hover:text-black">
              Iniciar Sesion
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/register" className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 transition hover:bg-slate-200 hover:text-black">
              Registrarse
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/dashboard" className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 transition hover:bg-slate-200 hover:text-black">
              Dashboard
            </Link>
          </div>

        </nav>
        <h1 className="text-xl text-slate-600 dark:text-slate-400">Gestión de Proyectos</h1>
        
      </main>
    </div>
  );
}