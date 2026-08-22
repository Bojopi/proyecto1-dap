import Header from "../components/Header";

export const metadata = { title: "Dashboard" };

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="min-h-screen bg-zinc-50 text-slate-900">
			<Header />
			<main className="min-w-0">{children}</main>
		</div>
	);
import React from "react";
import "../globals.css"


export default function DashboardLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className="bg-slate-50 min-h-full">{children}</main>
  );
}
