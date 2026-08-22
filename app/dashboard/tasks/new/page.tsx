"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../../../components/Button";

export default function NewTaskPage() {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("Rediseño Web");
  const [priority, setPriority] = useState("media");
  const [dueDate, setDueDate] = useState("");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/dashboard/tasks" className="hover:text-blue-600">
          Tareas
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Crear Nueva Tarea</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <h1 className="text-xl font-bold text-slate-900 mb-1">Nueva Tarea</h1>
        <p className="text-xs text-slate-500 mb-6">
          Añade una nueva tarea a la lista y asígnala a un proyecto.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Título de la Tarea
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Implementar modo oscuro"
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Proyecto</label>
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Rediseño Web">Rediseño Web</option>
                <option value="Sistema de Auth">Sistema de Auth</option>
                <option value="Módulo de Reportes">Módulo de Reportes</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Prioridad</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Fecha de Vencimiento
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Link href="/dashboard/tasks">
              <Button variant="outline" size="md">
                Cancelar
              </Button>
            </Link>
            <Button variant="primary" size="md">
              Guardar Tarea
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
