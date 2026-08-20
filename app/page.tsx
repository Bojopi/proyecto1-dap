"use client";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Navbar */}
        <nav className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-500">
              <div>Taskflow</div>
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full bg-blue-500 px-5 text-white transition-colors hover:bg-blue-600 md:w-[158px]"
              href="/login"
            >
              Iniciar sesión
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full bg-blue-500 px-5 text-white transition-colors hover:bg-blue-600 md:w-[158px]"
              href="/registro"
            >
              Crear cuenta
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full bg-blue-500 px-5 text-white transition-colors hover:bg-blue-600 md:w-[158px]"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </nav>
        <h1>Gestion De Proyectos</h1>
      </main>
    </div>
  );
}
