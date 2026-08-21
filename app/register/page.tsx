"use client";
import Link from "next/link";

export default function Registro() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-600 font-sans dark:bg-black">
      
      {/* Navbar */}
      <nav className="flex w-full items-center justify-between px-8 py-6">
        <Link 
          href="/" 
          className="text-2xl font-bold text-white transition hover:text-slate-300"
        >
          Taskflow
        </Link>
        <Link 
          href="/" 
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-200"
        >
          Volver al Inicio
        </Link>
      </nav>

      <main className="flex w-full flex-1 items-center justify-center px-4 pb-12">
        <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 text-slate-900 shadow-lg">   
          <div className="flex w-full flex-col items-start justify-start">
            <h1 className="mb-6 w-full text-center text-xl font-bold tracking-wide text-slate-800">
              CREAR CUENTA
            </h1>
            <form action="" className="flex w-full flex-col gap-4">
              <input 
                type="text" 
                placeholder="Nombre completo"
                className="rounded-lg border border-slate-300 p-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
              <input 
                type="email" 
                placeholder="Correo electrónico"
                className="rounded-lg border border-slate-300 p-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
              <input 
                type="password" 
                placeholder="Contraseña"
                className="rounded-lg border border-slate-300 p-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
              <button className="mt-2 rounded-lg bg-[#313638] p-2.5 font-medium text-white transition hover:bg-slate-700">
                Registrarse
              </button>
              <Link 
                href="/login" 
                className="mt-2 text-center text-sm font-medium text-slate-500 transition hover:text-slate-800"
              >
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}