"use client";

import React from "react";
import Button from "../../components/Button";
import StatusBadge from "../../components/StatusBadge";

export default function UsersPage() {
  const teamMembers = [
    {
      id: "1",
      name: "Eduardo Ribera Coimbra",
      role: "Frontend Developer & Estudiante",
      email: "eduardo@taskflow.dev",
      initials: "ER",
      bg: "bg-indigo-600",
      status: "en_progreso",
      projectsCount: 4,
      tasksCount: 14,
    },
    {
      id: "2",
      name: "Ana Paredes",
      role: "UI/UX Designer",
      email: "ana.paredes@taskflow.dev",
      initials: "AP",
      bg: "bg-pink-600",
      status: "completado",
      projectsCount: 2,
      tasksCount: 8,
    },
    {
      id: "3",
      name: "Carlos Morales",
      role: "Backend Developer",
      email: "carlos.morales@taskflow.dev",
      initials: "CM",
      bg: "bg-blue-600",
      status: "en_progreso",
      projectsCount: 3,
      tasksCount: 11,
    },
    {
      id: "4",
      name: "Sofía Lara",
      role: "QA Engineer & Tester",
      email: "sofia.lara@taskflow.dev",
      initials: "SL",
      bg: "bg-emerald-600",
      status: "en_revision",
      projectsCount: 2,
      tasksCount: 6,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Equipo de Trabajo</h1>
          <p className="text-xs text-slate-500 mt-1">
            Miembros del proyecto, roles y asignación de tareas.
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          }
        >
          Invitar Miembro
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full text-white font-bold text-lg flex items-center justify-center shadow-md ${member.bg}`}
              >
                {member.initials}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-3">{member.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{member.email}</p>

              <div className="mt-3">
                <StatusBadge status={member.status} />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 text-center text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Proyectos</span>
                <span className="font-bold text-slate-800">{member.projectsCount}</span>
              </div>
              <div className="border-l border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Tareas</span>
                <span className="font-bold text-slate-800">{member.tasksCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
