"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "Inicio" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/projects", label: "Proyectos" },
        { href: "/dashboard/tasks", label: "Tareas" },
        { href: "/dashboard/users", label: "Usuarios" },
        { href: "/dashboard/profile", label: "Perfil" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#596044] bg-[#20251f] text-[#f1ead7] shadow-[0_5px_24px_rgba(18,21,17,0.3)]">
            <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="War Thunder Command, inicio">
                    <span className="flex h-11 w-11 items-center justify-center border border-[#d5b45b] bg-[#343b2d] text-[#e1bd5f] shadow-inner">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
                    </span>
                    <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.28em] text-[#d5b45b]">War Thunder</span>
                        <span className="block text-lg font-black uppercase tracking-[0.08em] text-white">Command</span>
                    </span>
                </Link>

                <nav aria-label="Navegación principal" className="order-3 flex min-w-0 items-center gap-1 overflow-x-auto pb-1 lg:order-2 lg:justify-center lg:pb-0">
                    {links.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`whitespace-nowrap border-b-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
                                    isActive
                                        ? "border-[#d5b45b] text-[#f5ce68]"
                                        : "border-transparent text-[#b7b9a9] hover:border-[#8d956f] hover:text-white"
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="order-2 flex items-center justify-between gap-4 border-t border-[#596044] pt-3 lg:order-3 lg:border-t-0 lg:pt-0">
                    <span className="hidden text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9fa58f] sm:block">Centro de operaciones</span>
                    <Link
                        href="/login"
                        aria-label="Cerrar sesión"
                        title="Cerrar sesión"
                        className="flex h-10 w-10 items-center justify-center border border-[#777e62] text-[#d5b45b] transition-colors hover:border-[#d5b45b] hover:bg-[#d5b45b] hover:text-[#20251f] focus:outline-none focus:ring-2 focus:ring-[#d5b45b] focus:ring-offset-2 focus:ring-offset-[#20251f]"
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Link>
                </div>
            </div>
        </header>
    )
}