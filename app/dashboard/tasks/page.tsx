"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

type Task = { id: string; title: string; project: string; assignedTo: string; priority: "Alta" | "Media" | "Baja"; status: "Pendiente" | "En progreso" | "Completada" };

const initialTasks: Task[] = [
	{ id: "brief", title: "Revisar brief inicial", project: "Portal de clientes", assignedTo: "María López", priority: "Alta", status: "En progreso" },
	{ id: "wireframes", title: "Preparar wireframes", project: "Web corporativa", assignedTo: "Diego Sánchez", priority: "Media", status: "Pendiente" },
	{ id: "testing", title: "Probar módulo de stock", project: "App de inventario", assignedTo: "Sofía Navarro", priority: "Baja", status: "Completada" },
];

export default function TasksPage() {
	const [tasks, setTasks] = useState(initialTasks);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [draft, setDraft] = useState<Pick<Task, "title" | "assignedTo" | "status"> | null>(null);

	function startEditing(task: Task) { setEditingId(task.id); setDraft({ title: task.title, assignedTo: task.assignedTo, status: task.status }); }
	function saveTask(id: string) {
		if (!draft?.title.trim()) return;
		setTasks((current) => current.map((task) => task.id === id ? { ...task, ...draft, title: draft.title.trim() } : task));
		setEditingId(null);
		setDraft(null);
	}
	function deleteTask(id: string) {
		if (window.confirm("¿Quieres borrar esta tarea?")) setTasks((current) => current.filter((task) => task.id !== id));
	}

	return (
		<section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
			<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Seguimiento</p><h1 className="mt-2 text-3xl font-bold text-slate-950">Tareas</h1><p className="mt-2 text-slate-500">Asigna y controla las tareas de los usuarios.</p></div><Link href="/dashboard/tasks/new" className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"><FontAwesomeIcon icon={faPlus} className="h-3.5 w-3.5" />Nueva tarea</Link></div>
			<div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><h2 className="font-semibold text-slate-900">Tareas registradas</h2><span className="text-sm text-slate-500">{tasks.length} tareas</span></div><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3 font-semibold">Tarea</th><th className="px-5 py-3 font-semibold">Proyecto</th><th className="px-5 py-3 font-semibold">Asignada a</th><th className="px-5 py-3 font-semibold">Prioridad</th><th className="px-5 py-3 font-semibold">Estado</th><th className="px-5 py-3 text-right font-semibold">Acciones</th></tr></thead><tbody className="divide-y divide-slate-100">{tasks.map((task) => <tr key={task.id} className="align-top hover:bg-slate-50/70"><td className="px-5 py-4">{editingId === task.id && draft ? <input aria-label="Título de la tarea" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} className="w-full rounded border border-slate-300 px-2 py-1 font-semibold outline-blue-500" /> : <span className="font-semibold text-slate-900">{task.title}</span>}</td><td className="px-5 py-4 text-slate-600">{task.project}</td><td className="px-5 py-4">{editingId === task.id && draft ? <select aria-label="Usuario asignado" value={draft.assignedTo} onChange={(event) => setDraft({ ...draft, assignedTo: event.target.value })} className="rounded border border-slate-300 px-2 py-1 outline-blue-500"><option>María López</option><option>Diego Sánchez</option><option>Sofía Navarro</option></select> : <span className="text-slate-600">{task.assignedTo}</span>}</td><td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${task.priority === "Alta" ? "bg-red-100 text-red-800" : task.priority === "Media" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`}>{task.priority}</span></td><td className="px-5 py-4">{editingId === task.id && draft ? <select aria-label="Estado de la tarea" value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value as Task["status"] })} className="rounded border border-slate-300 px-2 py-1 outline-blue-500"><option>Pendiente</option><option>En progreso</option><option>Completada</option></select> : <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${task.status === "Completada" ? "bg-emerald-100 text-emerald-800" : task.status === "En progreso" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-700"}`}>{task.status}</span>}</td><td className="px-5 py-4"><div className="flex justify-end gap-2">{editingId === task.id ? <><button type="button" onClick={() => saveTask(task.id)} className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">Guardar</button><button type="button" onClick={() => { setEditingId(null); setDraft(null); }} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">Cancelar</button></> : <><button type="button" title="Ver tarea" aria-label={`Ver ${task.title}`} className="rounded-md p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-700"><FontAwesomeIcon icon={faEye} className="h-4 w-4" /></button><button type="button" onClick={() => startEditing(task)} title="Editar tarea" aria-label={`Editar ${task.title}`} className="rounded-md p-2 text-slate-500 hover:bg-amber-50 hover:text-amber-700"><FontAwesomeIcon icon={faPen} className="h-4 w-4" /></button><button type="button" onClick={() => deleteTask(task.id)} title="Borrar tarea" aria-label={`Borrar ${task.title}`} className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-700"><FontAwesomeIcon icon={faTrash} className="h-4 w-4" /></button></>}</div></td></tr>)}</tbody></table></div></div>
		</section>
	);
}
