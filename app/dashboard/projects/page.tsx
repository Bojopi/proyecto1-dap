"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard, { ProjectItem } from "../../components/ProjectCard";
import Button from "../../components/Button";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("todos");

  const allProjects: ProjectItem[] = [
    {
      id: "1",
      title: "Rediseño de Plataforma Web",
      description: "Modernización integral de la interfaz de usuario con Next.js y Tailwind CSS.",
      progress: 75,
      status: "en_progreso",
      dueDate: "15 Sep",
      category: "Frontend",
      members: [
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
        { name: "Ana", initials: "AP", bg: "bg-pink-600" },
        { name: "Carlos", initials: "CM", bg: "bg-blue-600" },
      ],
      tasksCount: { completed: 18, total: 24 },
    },
    {
      id: "2",
      title: "Sistema de Autenticación & Roles",
      description: "Implementación de login, registro, sesiones seguras y control de acceso.",
      progress: 90,
      status: "en_revision",
      dueDate: "30 Ago",
      category: "Seguridad",
      members: [
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
        { name: "Sofía", initials: "SL", bg: "bg-emerald-600" },
      ],
      tasksCount: { completed: 9, total: 10 },
    },
    {
      id: "3",
      title: "Módulo de Reportes & Métricas",
      description: "Generación de dashboards de productividad y exportación en formato PDF.",
      progress: 40,
      status: "en_progreso",
      dueDate: "20 Sep",
      category: "Analytics",
      members: [
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
        { name: "Mateo", initials: "MR", bg: "bg-purple-600" },
      ],
      tasksCount: { completed: 6, total: 15 },
    },
    {
      id: "4",
      title: "Optimización de Base de Datos",
      description: "Migración de esquemas, indexación y consultas para mejorar tiempos de carga.",
      progress: 100,
      status: "completado",
      dueDate: "10 Ago",
      category: "Backend",
      members: [
        { name: "Carlos", initials: "CM", bg: "bg-blue-600" },
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
      ],
      tasksCount: { completed: 12, total: 12 },
    },
  ];

  const filteredProjects =
    filter === "todos"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Proyectos</h1>
          <p className="text-xs text-slate-500 mt-1">
            Gestiona todos los proyectos y equipos asignados.
          </p>
        </div>
        <Link href="/dashboard/projects/new">
          <Button
            variant="primary"
            size="md"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            }
          >
            Nuevo Proyecto
          </Button>
        </Link>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 border-b border-slate-200 pb-3 text-xs font-semibold text-slate-500">
        {[
          { id: "todos", label: "Todos los proyectos" },
          { id: "en_progreso", label: "En Progreso" },
          { id: "en_revision", label: "En Revisión" },
          { id: "completado", label: "Completados" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              filter === tab.id
                ? "bg-slate-900 text-white"
                : "hover:bg-slate-100 text-slate-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
