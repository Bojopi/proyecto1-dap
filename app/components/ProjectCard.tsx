import React from "react";
import Link from "next/link";
import StatusBadge from "./StatusBadge";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: "en_progreso" | "completado" | "pendiente" | "en_revision";
  dueDate: string;
  category: string;
  members: Array<{ name: string; initials: string; bg: string }>;
  tasksCount: { completed: number; total: number };
}

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Color progress bar depending on percentage
  const getProgressColor = (val: number) => {
    if (val >= 100) return "bg-emerald-500";
    if (val >= 60) return "bg-blue-500";
    if (val >= 30) return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <Link href={`/dashboard/projects/${project.id}`} className="block">
          <h4 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {project.title}
          </h4>
        </Link>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
            <span className="text-slate-500">Progreso</span>
            <span className="text-slate-800 font-semibold">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getProgressColor(
                project.progress
              )}`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Members & Details */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div className="flex -space-x-2 overflow-hidden">
            {project.members.map((member, idx) => (
              <div
                key={idx}
                title={member.name}
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold text-white ring-2 ring-white ${member.bg}`}
              >
                {member.initials}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-500 font-medium">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {project.tasksCount.completed}/{project.tasksCount.total}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{project.dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
