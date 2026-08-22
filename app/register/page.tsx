
"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const inputClassName = "border border-[#b6b29f] bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#20251f] outline-none transition-colors placeholder:text-[#9b9d91] focus:border-[#b98d29] focus:ring-2 focus:ring-[#d5b45b]/30";

export default function Register() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#e8e4d8] px-5 py-10 text-[#20251f] sm:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden border border-[#596044] bg-[#f5f1e6] shadow-2xl lg:grid-cols-[0.8fr_1.2fr]">
        <section className="flex min-h-64 flex-col justify-between bg-[#596044] p-7 text-[#f1ead7] sm:p-10 lg:min-h-[620px]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-lg font-black uppercase tracking-[0.1em] text-white">
              <span className="flex h-11 w-11 items-center justify-center border border-[#d5b45b] bg-[#20251f] text-[#e1bd5f]"><FontAwesomeIcon icon={faShieldHalved} /></span>
              <span><span className="block text-[10px] tracking-[0.25em] text-[#d5b45b]">War Thunder</span> Command</span>
            </Link>
            <p className="mt-14 text-xs font-black uppercase tracking-[0.25em] text-[#d5b45b]">Nuevo recluta</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">Únete al frente</h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#d9d8c8]">Crea tu ficha de comandante y empieza a seguir las noticias, eventos y operaciones de la comunidad.</p>
          </div>
          <div className="mt-10 border-t border-[#89906f] pt-4 text-xs uppercase tracking-wider text-[#d9d8c8]">Registro de personal / Sector 07</div>
        </section>

        <section className="flex items-center p-7 sm:p-10 lg:p-12">
          <div className="w-full">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a6b25]">Alta de comandante</p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-[#20251f]">Crear cuenta</h2>
            <p className="mt-2 text-sm text-[#68705f]">Completa tus datos para abrir tu expediente.</p>

            <form action="" className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748]">Nombre<input className={inputClassName} type="text" placeholder="Nombre" /></label>
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748]">Apellido<input className={inputClassName} type="text" placeholder="Apellido" /></label>
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748] sm:col-span-2">Correo electrónico<input className={inputClassName} type="email" placeholder="correo@ejemplo.com" /></label>
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748] sm:col-span-2">Usuario<input className={inputClassName} type="text" placeholder="Nombre de usuario" /></label>
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748]">Contraseña<input className={inputClassName} type="password" placeholder="Contraseña" /></label>
              <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider text-[#4f5748]">Confirmar contraseña<input className={inputClassName} type="password" placeholder="Repite la contraseña" /></label>
              <button className="mt-3 flex items-center justify-center gap-3 bg-[#20251f] px-4 py-3 text-sm font-black uppercase tracking-wider text-[#f5ce68] transition-colors hover:bg-[#596044] sm:col-span-2" type="submit">Crear expediente <FontAwesomeIcon icon={faArrowRight} className="text-xs" /></button>
            </form>

            <p className="mt-6 text-center text-sm text-[#68705f]">¿Ya tienes cuenta? <Link href="/login" className="font-black text-[#8a6b25] hover:text-[#596044]">Inicia sesión</Link></p>
            <Link href="/" className="mt-4 block text-center text-xs font-bold uppercase tracking-wider text-[#858778] hover:text-[#8a6b25]">Volver a la portada</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
