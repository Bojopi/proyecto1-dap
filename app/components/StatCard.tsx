import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  icon: React.ReactNode;
  color?: "blue" | "indigo" | "emerald" | "amber" | "purple" | "rose";
}

export default function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  color = "blue",
}: StatCardProps) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50 text-blue-600 border-blue-100",
      accent: "bg-blue-600",
    },
    indigo: {
      bg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accent: "bg-indigo-600",
    },
    emerald: {
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "bg-emerald-600",
    },
    amber: {
      bg: "bg-amber-50 text-amber-600 border-amber-100",
      accent: "bg-amber-600",
    },
    purple: {
      bg: "bg-purple-50 text-purple-600 border-purple-100",
      accent: "bg-purple-600",
    },
    rose: {
      bg: "bg-rose-50 text-rose-600 border-rose-100",
      accent: "bg-rose-600",
    },
  };

  const scheme = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        </div>
        <div className={`p-2.5 rounded-lg border ${scheme.bg} flex items-center justify-center`}>
          {icon}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        {trend && (
          <span
            className={`inline-flex items-center gap-1 font-medium ${
              trend.positive ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            <svg
              className={`w-3.5 h-3.5 ${trend.positive ? "" : "rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {trend.value}
          </span>
        )}
        {subtitle && <span className="text-slate-400">{subtitle}</span>}
      </div>
    </div>
  );
}
