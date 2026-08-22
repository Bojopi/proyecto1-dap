"use client";

import React, { useState } from "react";
import StatCard from "../components/StatCard";
import Button from "../components/Button";

export default function ReportesPage() {
  const [period, setPeriod] = useState<"semana" | "mes" | "anio">("mes");

  return (
    <div className="space-y-8">
      {/* 1. Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Métricas & Reportes</h1>
          <p className="text-xs text-slate-500 mt-1">
            Análisis de rendimiento, avance de proyectos y productividad del equipo.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Period selector */}
          <div className="bg-slate-200/80 p-1 rounded-lg flex items-center text-xs font-semibold">
            <button
              onClick={() => setPeriod("semana")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                period === "semana"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semana
            </button>
            <button
              onClick={() => setPeriod("mes")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                period === "mes"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Mes
            </button>
            <button
              onClick={() => setPeriod("anio")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                period === "anio"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Año
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            }
          >
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* 2. Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Tasa de Finalización"
          value="88.5%"
          subtitle="Proyectos entregados a tiempo"
          trend={{ value: "+4.2%", positive: true }}
          color="emerald"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Horas Dedicadas"
          value="342 hrs"
          subtitle="Promedio: 6.8h por día"
          trend={{ value: "+12 hrs", positive: true }}
          color="blue"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Velocidad del Sprint"
          value="48 pts"
          subtitle="Meta de 50 puntos"
          trend={{ value: "96% objetivo", positive: true }}
          color="purple"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
        <StatCard
          title="Tareas con Retraso"
          value="2"
          subtitle="Requieren atención"
          trend={{ value: "-3 vs mes pasado", positive: true }}
          color="rose"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
        />
      </div>

      {/* 3. Breakdown by Project & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Avance por proyecto */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
          <h2 className="text-base font-bold text-slate-900 mb-1">Rendimiento por Proyecto</h2>
          <p className="text-xs text-slate-500 mb-6">Porcentaje de avance y estado de entregas.</p>

          <div className="space-y-5">
            {[
              { name: "Rediseño de Plataforma Web", progress: 75, color: "bg-blue-600", tasks: "18/24 tareas" },
              { name: "Sistema de Autenticación & Roles", progress: 90, color: "bg-emerald-600", tasks: "9/10 tareas" },
              { name: "Módulo de Reportes & Analytics", progress: 40, color: "bg-purple-600", tasks: "6/15 tareas" },
              { name: "Optimización de Base de Datos", progress: 100, color: "bg-teal-600", tasks: "12/12 tareas" },
            ].map((p, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-800">{p.name}</span>
                  <span className="text-slate-500">{p.progress}% ({p.tasks})</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${p.color} rounded-full transition-all duration-500`}
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribución de estados */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
          <h2 className="text-base font-bold text-slate-900 mb-1">Distribución de Tareas</h2>
          <p className="text-xs text-slate-500 mb-6">Desglose según el estado actual del flujo.</p>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-emerald-950">Completadas</span>
              </div>
              <span className="text-xs font-extrabold text-emerald-700">42 tareas (62%)</span>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-950">En Progreso</span>
              </div>
              <span className="text-xs font-extrabold text-blue-700">18 tareas (26%)</span>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-xs font-bold text-purple-950">En Revisión</span>
              </div>
              <span className="text-xs font-extrabold text-purple-700">5 tareas (8%)</span>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs font-bold text-amber-950">Pendientes</span>
              </div>
              <span className="text-xs font-extrabold text-amber-700">3 tareas (4%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
