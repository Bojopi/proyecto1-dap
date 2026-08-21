"use client";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center bg-slate-100">
      <div className="text-slate-900 flex flex-row w-full items-center justify-around max-w-2xl bg-white h-96 shadow-lg">
        <div className="flex flex-col items-start justify-start">
          <h1 className="mb-15">INICIO DE SESION</h1>

          <form className="flex flex-col w-full gap-2.5">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard" className="rounded-lg px-4 py-2 text-sm font-medium bg-[#313638] text-white">
                Ingresar
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        <h1>Este es el login de la pagina</h1>
      </div>
    </main>
  );
}