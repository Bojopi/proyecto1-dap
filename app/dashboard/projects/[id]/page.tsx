import React from "react";
import Link from "next/link";
import StatusBadge from "../../../components/StatusBadge";
import Button from "../../../components/Button";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/dashboard/projects" className="hover:text-blue-600">
          Proyectos
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Detalle del Proyecto #{id}</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                Rediseño de Plataforma Web (ID: {id})
              </h1>
              <StatusBadge status="en_progreso" />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Categoría: Frontend • Creado el 12 de Agosto
            </p>
          </div>

          <Link href="/dashboard/projects">
            <Button variant="outline" size="sm">
              Volver a Proyectos
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Descripción
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Modernización integral de la interfaz de usuario con Next.js y Tailwind CSS. Incluye la
            refactorización del panel de administración, integración de métricas y módulo de perfil.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>Progreso General</span>
            <span>75% Completado</span>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: "75%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
