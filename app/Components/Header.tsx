"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faChevronDown, faGear, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    return (
        <header className="w-full bg-gray-900 text-white absolute inset-x-0 top-0 z-50 flex justify-between px-10 py-5">
            <div><h2>Panel de Administracion</h2></div>
            <div className="flex gap-10">
                <Link href="/">Home</Link><Link href="/dashboard">Dashboard</Link><Link href="/dashboard/profile">Perfil</Link><Link href="/dashboard/projects">Proyectos</Link><Link href="/dashboard/tasks">Tareas</Link><Link href="/dashboard/users">Usuarios</Link>
            </div>
            <div className="relative">
                <button
                    type="button"
                    aria-label="Abrir menú de cuenta"
                    aria-expanded={isAccountMenuOpen}
                    onClick={() => setIsAccountMenuOpen((isOpen) => !isOpen)}
                    className="flex items-center gap-2 rounded-md px-2 py-1 text-white transition hover:bg-white/10"
                >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4 w-4" />
                    <FontAwesomeIcon icon={faChevronDown} className={`h-3 w-3 transition ${isAccountMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {isAccountMenuOpen && (
                    <div className="absolute right-0 top-11 w-52 rounded-lg border border-slate-200 bg-white p-2 text-slate-800 shadow-xl">
                        <Link href="/login" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-slate-100">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4 w-4 text-slate-500" />
                            Cerrar sesión
                        </Link>
                        <Link href="/login" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-slate-100">
                            <FontAwesomeIcon icon={faRightLeft} className="h-4 w-4 text-slate-500" />
                            Cambiar de cuenta
                        </Link>
                        <Link href="/dashboard/profile" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-slate-100">
                            <FontAwesomeIcon icon={faGear} className="h-4 w-4 text-slate-500" />
                            Opciones
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}