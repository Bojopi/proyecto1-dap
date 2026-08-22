import React from "react";

export type StatusType =
  | "en_progreso"
  | "completado"
  | "pendiente"
  | "en_revision"
  | "alta"
  | "media"
  | "baja"
  | string;

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const normalized = status.toLowerCase().replace(/\s+/g, "_");

  const getBadgeConfig = () => {
    switch (normalized) {
      case "completado":
      case "completada":
      case "done":
        return {
          label: "Completado",
          classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
          dot: "bg-emerald-500",
        };
      case "en_progreso":
      case "en_curso":
      case "in_progress":
        return {
          label: "En Progreso",
          classes: "bg-blue-50 text-blue-700 border-blue-200",
          dot: "bg-blue-500",
        };
      case "en_revision":
      case "revision":
      case "in_review":
        return {
          label: "En Revisión",
          classes: "bg-purple-50 text-purple-700 border-purple-200",
          dot: "bg-purple-500",
        };
      case "pendiente":
      case "por_hacer":
      case "todo":
        return {
          label: "Pendiente",
          classes: "bg-amber-50 text-amber-700 border-amber-200",
          dot: "bg-amber-500",
        };
      case "alta":
      case "urgente":
      case "high":
        return {
          label: "Prioridad Alta",
          classes: "bg-rose-50 text-rose-700 border-rose-200",
          dot: "bg-rose-500",
        };
      case "media":
      case "medium":
        return {
          label: "Prioridad Media",
          classes: "bg-amber-50 text-amber-700 border-amber-200",
          dot: "bg-amber-500",
        };
      case "baja":
      case "low":
        return {
          label: "Prioridad Baja",
          classes: "bg-slate-100 text-slate-700 border-slate-200",
          dot: "bg-slate-400",
        };
      default:
        return {
          label: status,
          classes: "bg-gray-100 text-gray-700 border-gray-200",
          dot: "bg-gray-400",
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.classes} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
