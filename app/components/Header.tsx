import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[#8f4938] bg-[#332b26] text-[#fffdf9] shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/dashboard" className="shrink-0 text-xl font-bold tracking-tight">
          Panel Administrativo
        </Link>

        <nav aria-label="Navegación principal" className="flex gap-1 overflow-x-auto">
          <Link href="/dashboard" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-[#8f4938]">
            Resumen
          </Link>
          <Link href="/dashboard/projects" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-[#8f4938]">
            Proyectos
          </Link>
          <Link href="/dashboard/tasks" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-[#8f4938]">
            Tareas
          </Link>
          <Link href="/dashboard/profile" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-[#8f4938]">
            Perfiles
          </Link>
          <Link href="/dashboard/my-profile" className="flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-[#8f4938]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b9654b] text-[10px] font-bold text-white">PL</span>
            <span>Mi usuario</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}