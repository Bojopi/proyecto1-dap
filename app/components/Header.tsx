import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-blue-800 bg-black text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/dashboard" className="shrink-0 text-xl font-bold tracking-tight">
          Panel Administrativo
        </Link>

        <nav aria-label="Navegación principal" className="flex gap-1 overflow-x-auto">
          <Link href="/dashboard" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-600">
            Resumen
          </Link>
          <Link href="/dashboard/projects" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-600">
            Proyectos
          </Link>
          <Link href="/dashboard/tasks" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-600">
            Tareas
          </Link>
          <Link href="/dashboard/profile" className="flex whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-600">
            Perfil
          </Link>
        </nav>
      </div>
    </header>
  );
}