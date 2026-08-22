import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow focus:ring-blue-500 border border-transparent",
    secondary:
      "bg-slate-800 hover:bg-slate-900 text-white shadow-sm hover:shadow focus:ring-slate-700 border border-transparent",
    outline:
      "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm focus:ring-blue-500",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent",
    danger:
      "bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow focus:ring-rose-500 border border-transparent",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
