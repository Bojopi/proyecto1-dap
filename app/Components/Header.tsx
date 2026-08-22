"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faChartSimple, faListCheck, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-gray-900 text-white absolute inset-x-0 top-0 z-50 flex justify-between px-10 py-5">
            <div>
                <h2>Panel de Administracion</h2>
            </div>
            <div className="flex gap-10">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/profile" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} aria-hidden="true" />
                    <span>Perfil</span>
                </Link>
                <Link href="/dashboard/projects">Proyectos</Link>
                <Link href="/dashboard/tasks" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faListCheck} aria-hidden="true" />
                    <span>Tareas</span>
                </Link>
                <Link href="/dashboard/users" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                    <span>Usuarios</span>
                </Link>
                <Link href="/reportes" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faChartSimple} aria-hidden="true" />
                    <span>Reportes</span>
                </Link>
            </div>
            <div>
                <Link href={"/login"}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#FFF",}} />
                </Link>
            </div>
        </header>
    )
}