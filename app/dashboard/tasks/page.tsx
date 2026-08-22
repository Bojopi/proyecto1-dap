"use client";

import React, { useState } from "react";
import TaskRow, { TaskItem } from "../../components/TaskRow";
import Button from "../../components/Button";

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: "1",
      title: "Maquetar la página de Perfil de usuario",
      project: "Rediseño Web",
      dueDate: "Hoy, 18:00",
      priority: "alta",
      completed: true,
    },
    {
      id: "2",
      title: "Diseñar gráficos para la sección de Reportes",
      project: "Módulo de Reportes",
      dueDate: "Hoy, 20:00",
      priority: "alta",
      completed: false,
    },
    {
      id: "3",
      title: "Revisar validaciones en formulario de login",
      project: "Sistema de Auth",
      dueDate: "Mañana",
      priority: "media",
      completed: true,
    },
    {
      id: "4",
      title: "Actualizar estilos en Tailwind CSS v4",
      project: "Rediseño Web",
      dueDate: "24 Ago",
      priority: "baja",
      completed: true,
    },
    {
      id: "5",
      title: "Preparar presentación de la Tarea 1 para la profesora",
      project: "Entrega Tarea 1",
      dueDate: "25 Ago",
      priority: "alta",
      completed: false,
    },
    {
      id: "6",
      title: "Configurar rutas protegidas y middlewares",
      project: "Sistema de Auth",
      dueDate: "28 Ago",
      priority: "media",
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState<"todas" | "pendientes" | "completadas">("todas");

  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "pendientes") return !t.completed;
    if (filter === "completadas") return t.completed;
    return true;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Lista de Tareas</h1>
          <p className="text-xs text-slate-500 mt-1">
            Administra tus tareas asignadas, pendientes y completadas.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="md"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            }
          >
            Nueva Tarea
          </Button>
        </div>
      </div>

      {/* Tabs de filtro */}
      <div className="flex gap-2 border-b border-slate-200 pb-3 text-xs font-semibold">
        <button
          onClick={() => setFilter("todas")}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            filter === "todas" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Todas ({tasks.length})
        </button>
        <button
          onClick={() => setFilter("pendientes")}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            filter === "pendientes" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Pendientes ({tasks.filter((t) => !t.completed).length})
        </button>
        <button
          onClick={() => setFilter("completadas")}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            filter === "completadas" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Completadas ({tasks.filter((t) => t.completed).length})
        </button>
      </div>

      {/* Listado de tareas */}
      <div className="space-y-2.5">
        {filteredTasks.map((task) => (
          <TaskRow key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}
