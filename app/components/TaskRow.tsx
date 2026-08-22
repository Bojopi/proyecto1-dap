import React from "react";
import StatusBadge from "./StatusBadge";

export interface TaskItem {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  priority: "alta" | "media" | "baja";
  completed: boolean;
}

interface TaskRowProps {
  task: TaskItem;
  onToggle: (id: string) => void;
}

export default function TaskRow({ task, onToggle }: TaskRowProps) {
  return (
    <div
      className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
        task.completed
          ? "bg-slate-50/80 border-slate-200/80 opacity-70"
          : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
            task.completed
              ? "bg-emerald-500 border-emerald-500 text-white"
              : "border-slate-300 hover:border-blue-500 bg-white"
          }`}
        >
          {task.completed && (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="min-w-0">
          <p
            className={`text-sm font-medium truncate ${
              task.completed ? "line-through text-slate-400" : "text-slate-800 group-hover:text-blue-600"
            }`}
          >
            {task.title}
          </p>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
            <span className="font-medium text-slate-500 truncate">{task.project}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {task.dueDate}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-3 flex-shrink-0">
        <StatusBadge status={task.priority} />
      </div>
    </div>
  );
}
