"use client";

import React, { useState } from "react";
import Link from "next/link";
import StatCard from "../components/StatCard";
import ProjectCard, { ProjectItem } from "../components/ProjectCard";
import TaskRow, { TaskItem } from "../components/TaskRow";
import Button from "../components/Button";

export default function DashboardPage() {
  // Tareas específicas de desarrollo de videojuegos
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: "1",
      title: "Corregir hitbox y colisión en el jefe final del Nivel 1",
      project: "Chronicles of Eldoria",
      dueDate: "Hoy, 18:00",
      priority: "alta",
      completed: false,
    },
    {
      id: "2",
      title: "Diseñar sprites de ataque y salto para el protagonista",
      project: "Pixel Dungeon",
      dueDate: "Hoy, 20:00",
      priority: "alta",
      completed: false,
    },
    {
      id: "3",
      title: "Optimizar shader de partículas para ganar 15 FPS",
      project: "Cyber Neon 3D",
      dueDate: "Mañana",
      priority: "media",
      completed: true,
    },
    {
      id: "4",
      title: "Implementar sistema de guardado de partida con JSON",
      project: "Chronicles of Eldoria",
      dueDate: "24 Ago",
      priority: "media",
      completed: false,
    },
    {
      id: "5",
      title: "Añadir efectos de sonido (SFX) para impactos de espada",
      project: "Pixel Dungeon",
      dueDate: "25 Ago",
      priority: "baja",
      completed: true,
    },
  ]);

  // Proyectos de videojuegos
  const projects: ProjectItem[] = [
    {
      id: "1",
      title: "Chronicles of Eldoria (Action RPG 2D)",
      description: "Juego de rol y aventura pixel art desarrollado en Godot Engine con combate en tiempo real.",
      progress: 70,
      status: "en_progreso",
      dueDate: "15 Sep",
      category: "Godot 4",
      members: [
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
        { name: "Ana (Artista)", initials: "AA", bg: "bg-pink-600" },
        { name: "Carlos (Música)", initials: "CM", bg: "bg-blue-600" },
      ],
      tasksCount: { completed: 18, total: 24 },
    },
    {
      id: "2",
      title: "Cyber Neon Overdrive (Shooter 3D)",
      description: "Shooter cyberpunk en Unreal Engine 5 con gráficos de alta fidelidad e iluminación Lumen.",
      progress: 88,
      status: "en_revision",
      dueDate: "30 Ago",
      category: "Unreal 5",
      members: [
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
        { name: "Sofía (Gameplay)", initials: "SL", bg: "bg-emerald-600" },
      ],
      tasksCount: { completed: 9, total: 10 },
    },
    {
      id: "3",
      title: "Pixel Dungeon Crawler (Roguelike)",
      description: "Mazmorras procedurales en Unity C# con generación aleatoria de salas y enemigos.",
      progress: 45,
      status: "en_progreso",
      dueDate: "20 Sep",
      category: "Unity C#",
      members: [
        { name: "Eduardo", initials: "ER", bg: "bg-indigo-600" },
        { name: "Mateo (Diseño Nivel)", initials: "MR", bg: "bg-purple-600" },
      ],
      tasksCount: { completed: 6, total: 14 },
    },
  ];

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const pendingTasksCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="space-y-8">
      {/* 1. Header Hero para Game Dev */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl border border-indigo-900/40">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mb-3">
            🕹️ Game Studio Dashboard
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            ¡Hola, Eduardo! 👾
          </h1>
          <p className="text-slate-300 text-sm mt-1 max-w-xl">
            Tienes <span className="text-indigo-300 font-semibold">{pendingTasksCount} tareas y bugs pendientes</span> para la build de hoy.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/profile">
            <Button variant="outline" size="md" className="bg-slate-800/90 text-white border-slate-700 hover:bg-slate-800">
              Mi Perfil de Dev
            </Button>
          </Link>
          <Link href="/dashboard/profile">
            <Button
              variant="primary"
              size="md"
              className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            >
              Configurar Perfil
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. KPIs Orientados a Videojuegos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Juegos en Desarrollo"
          value="3 Títulos"
          subtitle="Godot, Unreal, Unity"
          trend={{ value: "+1 este mes", positive: true }}
          color="indigo"
          icon={
            <span className="text-xl">🎮</span>
          }
        />

        <StatCard
          title="Bugs & Tareas"
          value="7 Pendientes"
          subtitle="2 con prioridad alta"
          trend={{ value: "-5 resueltos", positive: true }}
          color="amber"
          icon={
            <span className="text-xl">👾</span>
          }
        />

        <StatCard
          title="Assets & Modelos"
          value="48 Listos"
          subtitle="Sprites 2D y mallas 3D"
          trend={{ value: "+12 listos", positive: true }}
          color="emerald"
          icon={
            <span className="text-xl">🎨</span>
          }
        />

        <StatCard
          title="Build de Playtest"
          value="v0.5.2"
          subtitle="60 FPS estables"
          trend={{ value: "+8% optimizado", positive: true }}
          color="purple"
          icon={
            <span className="text-xl">⚡</span>
          }
        />
      </div>

      {/* 3. Contenido Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Proyectos de Juegos */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Proyectos de Videojuegos</h2>
                <p className="text-xs text-slate-500">Estado de producción y avance por motor de juego</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Registro de Avance Semanal de Desarrollo */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Horas de Game Dev & Playtesting</h3>
                <p className="text-xs text-slate-500">Tiempo invertido en programación y diseño de niveles</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                Semana Actual
              </span>
            </div>

            {/* Gráfico de Barras con Tailwind */}
            <div className="grid grid-cols-6 gap-3 items-end h-40 pt-4 border-b border-slate-100">
              {[
                { day: "Lun", hours: "4h", height: "50%", color: "bg-indigo-400" },
                { day: "Mar", hours: "6h", height: "70%", color: "bg-indigo-500" },
                { day: "Mié", hours: "8h", height: "90%", color: "bg-indigo-600" },
                { day: "Jue", hours: "5h", height: "60%", color: "bg-indigo-500" },
                { day: "Vie", hours: "9h", height: "95%", color: "bg-purple-600" },
                { day: "Sáb", hours: "4h", height: "45%", color: "bg-indigo-400" },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="text-[11px] font-semibold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {bar.hours}
                  </div>
                  <div className="w-full max-w-[36px] bg-slate-100 rounded-t-lg h-full flex items-end overflow-hidden">
                    <div
                      className={`w-full ${bar.color} rounded-t-lg transition-all duration-500 group-hover:brightness-110`}
                      style={{ height: bar.height }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-500">{bar.day}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                Día más intenso: <strong>Viernes (Sprint final y Playtest)</strong>
              </span>
              <span>Total: <strong>36 horas de desarrollo</strong></span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tareas & Hitos */}
        <div className="space-y-6">
          {/* Tareas de Game Dev */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Misiones & Tareas de Hoy</h3>
                <p className="text-xs text-slate-500">
                  {tasks.filter((t) => t.completed).length} de {tasks.length} resueltas
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {tasks.map((task) => (
                <TaskRow key={task.id} task={task} onToggle={handleToggleTask} />
              ))}
            </div>
          </div>

          {/* Próximos Lanzamientos y Game Jams */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Entregas y Demos
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-indigo-50/80 border border-indigo-100 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-indigo-950">Alpha Demo de Eldoria</p>
                  <p className="text-[11px] text-indigo-700 mt-0.5">Nivel 1 jugable para la clase</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-200 text-indigo-800 rounded-md">
                  En 2 días
                </span>
              </div>

              <div className="p-3 rounded-lg bg-purple-50/80 border border-purple-100 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-purple-950">Participación en Game Jam</p>
                  <p className="text-[11px] text-purple-700 mt-0.5">Tema sorpresa en 48 horas</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-200 text-purple-800 rounded-md">
                  30 Ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}