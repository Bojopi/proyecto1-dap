"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          Taskflow
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-base font-medium">
            <Link href="/dashboard" className="text-purple-700 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-100 transition-colors">
              Dashboard
            </Link>
            <Link href="/reportes" className="text-purple-700 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-100 transition-colors">
              Reportes
            </Link>
            <Link href="/registro" className="text-purple-700 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-100 transition-colors">
              Registro
            </Link>
            <Link href="/login" className="text-purple-700 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-100 transition-colors">
              Login
            </Link>
          </nav>
          <Link
            href="/logout"
            className="text-purple-400 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-300 transition-colors"
            aria-label="Cerrar sesión"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}