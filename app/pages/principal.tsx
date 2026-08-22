import React from "react";
import Link from "next/link";
import Button from "../components/Button";

export default function PrincipalPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Bienvenido a Taskflow</h1>
      <p className="text-slate-500 max-w-md">
        Plataforma moderna para la gestión de proyectos, tareas y productividad en equipo.
      </p>
      <div className="pt-2">
        <Link href="/dashboard">
          <Button variant="primary" size="md">
            Ir al Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
