"use client";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          ¡Bienvenido a TaskFlow!
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Este es el panel principal de gestión de proyectos.
        </p>
      </div>
    </div>
  );
}