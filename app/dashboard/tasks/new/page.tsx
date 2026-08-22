"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function NewTaskPage() {
	const [created, setCreated] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setCreated(true);
	}

	return (
		<section className="mx-auto max-w-3xl px-6 py-8 md:px-10">
			<Link href="/dashboard/tasks" className="text-sm font-semibold text-blue-700 hover:underline">&larr; Volver a tareas</Link>
			<div className="mt-6"><p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Nuevo registro</p><h1 className="mt-2 text-3xl font-bold text-slate-950">Crear tarea</h1><p className="mt-2 text-slate-500">Añade una tarea al seguimiento del equipo.</p></div>
			<form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
				<label className="block text-sm font-semibold text-slate-700">Título<input required name="title" className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-blue-500" placeholder="Ej. Revisar propuesta" /></label>
				<label className="block text-sm font-semibold text-slate-700">Descripción<textarea name="description" rows={4} className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-blue-500" placeholder="Describe la tarea" /></label>
				<div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold text-slate-700">Proyecto<select name="project" className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-blue-500"><option>Portal de clientes</option><option>App de inventario</option><option>Web corporativa</option></select></label><label className="block text-sm font-semibold text-slate-700">Prioridad<select name="priority" className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-blue-500"><option>Media</option><option>Alta</option><option>Baja</option></select></label></div>
				<div className="flex flex-wrap items-center gap-3 pt-2"><button type="submit" className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Crear tarea</button><Link href="/dashboard/tasks" className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Cancelar</Link></div>
				{created && <p role="status" className="text-sm font-semibold text-emerald-700">Tarea creada correctamente. Los datos son estáticos y no se guardan en un servidor.</p>}
			</form>
		</section>
	);
}
