"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-600 font-sans dark:bg-black">
      <nav className="flex w-full items-center justify-between px-8 py-6">
        <Link 
          href="/" 
          className="text-2xl font-bold text-white transition hover:text-slate-300"
        >
          Taskflow
        </Link>
        {/*volver al inicio */}
        <Link 
          href="/" 
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-200"
        >
          Volver al Inicio
        </Link>
      </nav>
      <main className="flex w-full flex-1 items-center justify-center px-4 pb-12">
        {/*Cuadro de login*/}
        <div className="flex w-full max-w-2xl flex-col items-center justify-around gap-8 rounded-2xl bg-white p-8 text-slate-900 shadow-lg sm:flex-row">
          <div className="flex w-full flex-col items-start justify-start sm:w-1/2">
            <h1 className="mb-6 text-xl font-bold tracking-wide text-slate-800">INICIO DE SESIÓN</h1>
            <form action="" className="flex w-full flex-col gap-4">
              {/* Inputs usuario y contraseña */}
              <input 
                type="text" 
                placeholder="Usuario"
                className="rounded-lg border border-slate-300 p-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
              <input 
                type="password" 
                placeholder="Contraseña"
                className="rounded-lg border border-slate-300 p-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
              <button className="mt-2 rounded-lg bg-[#313638] p-2.5 font-medium text-white transition hover:bg-slate-700">
                Ingresar
              </button>
              <Link 
                href="/register" 
                className="mt-2 text-center text-sm font-medium text-slate-500 transition hover:text-slate-800"
              >
                ¿No tienes cuenta? Regístrate aquí
              </Link>
            </form>
          </div>
          <div className="flex w-full flex-col items-center justify-center text-center sm:w-1/2">
            <h1 className="text-lg font-medium text-slate-500">
              Esta es la página de login
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}