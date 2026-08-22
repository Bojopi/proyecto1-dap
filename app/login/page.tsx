"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#e8e4d8] px-5 py-10 text-[#20251f] sm:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden border border-[#596044] bg-[#f5f1e6] shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <section className="flex min-h-64 flex-col justify-between bg-[#20251f] p-7 text-[#f1ead7] sm:p-10 lg:min-h-[520px]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-lg font-black uppercase tracking-[0.1em] text-white">
              <span className="flex h-11 w-11 items-center justify-center border border-[#d5b45b] bg-[#343b2d] text-[#e1bd5f]"><FontAwesomeIcon icon={faShieldHalved} /></span>
              <span><span className="block text-[10px] tracking-[0.25em] text-[#d5b45b]">War Thunder</span> Command</span>
            </Link>
            <p className="mt-14 text-xs font-black uppercase tracking-[0.25em] text-[#d5b45b]">Acceso restringido</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">Vuelve al frente</h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#bfc3aa]">Entra al centro de operaciones para consultar noticias, eventos y tu actividad de comandante.</p>
          </div>
          <p className="mt-10 border-t border-[#596044] pt-4 text-xs uppercase tracking-wider text-[#89906f]">Sistema de mando / Sector 07</p>
        </section>

        <section className="flex items-center p-7 sm:p-12">
          <div className="w-full max-w-md">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a6b25]">Identificación de piloto</p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-[#20251f]">Iniciar sesión</h2>
            <p className="mt-2 text-sm text-[#68705f]">Introduce tus credenciales para continuar.</p>
            <form action="" className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748]">
                Usuario
                <input className="border border-[#b6b29f] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#20251f] outline-none transition-colors placeholder:text-[#9b9d91] focus:border-[#b98d29] focus:ring-2 focus:ring-[#d5b45b]/30" type="text" placeholder="Nombre de usuario" />
              </label>
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748]">
                Contraseña
                <input className="border border-[#b6b29f] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#20251f] outline-none transition-colors placeholder:text-[#9b9d91] focus:border-[#b98d29] focus:ring-2 focus:ring-[#d5b45b]/30" type="password" placeholder="Contraseña" />
              </label>
              <button className="mt-2 flex items-center justify-center gap-3 bg-[#20251f] px-4 py-3 text-sm font-black uppercase tracking-wider text-[#f5ce68] transition-colors hover:bg-[#596044]" type="submit">
                Ingresar al centro <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </form>
            <p className="mt-7 text-center text-sm text-[#68705f]">¿No tienes cuenta? <Link href="/register" className="font-black text-[#8a6b25] hover:text-[#596044]">Regístrate</Link></p>
            <Link href="/" className="mt-5 block text-center text-xs font-bold uppercase tracking-wider text-[#858778] hover:text-[#8a6b25]">Volver a la portada</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
