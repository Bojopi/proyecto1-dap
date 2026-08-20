import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Navbar */}
        <nav className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">         
            <Link
              href="/login"
              className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <div>TaskFlow</div>
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700">
              Iniciar sesion
            </Link>
          </div>
        </nav>
        <h1>Gestion de proyectos</h1>
      </main>
    </div>
  );
}