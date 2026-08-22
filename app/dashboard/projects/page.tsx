"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

type Project = {
	id: string;
	name: string;
	description: string;
	status: "En progreso" | "Completado" | "Pendiente";
	owner: string;
	updatedAt: string;
};

const initialProjects: Project[] = [
	{ id: "portal-clientes", name: "Portal de clientes", description: "Espacio centralizado para consultar servicios y documentos.", status: "En progreso", owner: "Ana García", updatedAt: "12 mayo 2025" },
	{ id: "app-inventario", name: "App de inventario", description: "Control de productos, stock y movimientos del almacén.", status: "Completado", owner: "Carlos Ruiz", updatedAt: "28 abril 2025" },
	{ id: "web-corporativa", name: "Web corporativa", description: "Nueva web pública para presentar la empresa y sus servicios.", status: "Pendiente", owner: "Laura Martín", updatedAt: "15 abril 2025" },
];

const statusStyles: Record<Project["status"], string> = {
	"En progreso": "bg-amber-100 text-amber-800",
	Completado: "bg-emerald-100 text-emerald-800",
	Pendiente: "bg-slate-100 text-slate-700",
};

export default function ProjectsPage() {
	const [projects, setProjects] = useState(initialProjects);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [draft, setDraft] = useState<Pick<Project, "name" | "description" | "status"> | null>(null);

	function startEditing(project: Project) {
		setEditingId(project.id);
		setDraft({ name: project.name, description: project.description, status: project.status });
	}

	function saveProject(id: string) {
		if (!draft?.name.trim()) return;
		setProjects((currentProjects) => currentProjects.map((project) => project.id === id ? { ...project, ...draft, name: draft.name.trim() } : project));
		setEditingId(null);
		setDraft(null);
	}

	function deleteProject(id: string) {
		if (window.confirm("¿Quieres borrar este proyecto?")) setProjects((currentProjects) => currentProjects.filter((project) => project.id !== id));
	}

	return (
		<section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
			<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div><p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Gestión</p><h1 className="mt-2 text-3xl font-bold text-slate-950">Proyectos</h1><p className="mt-2 text-slate-500">Consulta y administra los proyectos del equipo.</p></div>
				<Link href="/dashboard/projects/new" className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"><FontAwesomeIcon icon={faPlus} className="h-3.5 w-3.5" />Nuevo proyecto</Link>
			</div>
			<div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
				<div className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><h2 className="font-semibold text-slate-900">Todos los proyectos</h2><span className="text-sm text-slate-500">{projects.length} proyectos</span></div>
				<div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm">
					<thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3 font-semibold">Proyecto</th><th className="px-5 py-3 font-semibold">Estado</th><th className="px-5 py-3 font-semibold">Responsable</th><th className="px-5 py-3 font-semibold">Última actualización</th><th className="px-5 py-3 text-right font-semibold">Acciones</th></tr></thead>
					<tbody className="divide-y divide-slate-100">{projects.map((project) => (
						<tr key={project.id} className="align-top hover:bg-slate-50/70">
							<td className="px-5 py-4">{editingId === project.id && draft ? <div className="space-y-2"><input aria-label="Nombre del proyecto" value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} className="w-full rounded border border-slate-300 px-2 py-1 font-semibold outline-blue-500" /><textarea aria-label="Descripción del proyecto" value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} className="w-full rounded border border-slate-300 px-2 py-1 text-xs outline-blue-500" /></div> : <><Link href={`/dashboard/projects/${project.id}`} className="font-semibold text-blue-700 hover:underline">{project.name}</Link><p className="mt-1 max-w-sm text-xs text-slate-500">{project.description}</p></>}</td>
							<td className="px-5 py-4">{editingId === project.id && draft ? <select aria-label="Estado del proyecto" value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value as Project["status"] })} className="rounded border border-slate-300 px-2 py-1 outline-blue-500"><option>En progreso</option><option>Completado</option><option>Pendiente</option></select> : <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}>{project.status}</span>}</td>
							<td className="px-5 py-4 text-slate-600">{project.owner}</td><td className="px-5 py-4 text-slate-500">{project.updatedAt}</td>
							<td className="px-5 py-4"><div className="flex justify-end gap-2">{editingId === project.id ? <><button type="button" 
							onClick={() => saveProject(project.id)} className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">Guardar</button>
							<button type="button" onClick={() => { setEditingId(null); setDraft(null); }} 
							className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">Cancelar</button>
							</> : <><Link href={`/dashboard/projects/${project.id}`} title="Ver información" aria-label={`Ver información de ${project.name}`} 
							className="rounded-md p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-700"><FontAwesomeIcon icon={faEye} className="h-4 w-4" /></Link>
							<button type="button" onClick={() => startEditing(project)} title="Editar proyecto" aria-label={`Editar ${project.name}`} className="rounded-md p-2 text-slate-500 hover:bg-amber-50 hover:text-amber-700">
								<FontAwesomeIcon icon={faPen} className="h-4 w-4" /></button><button type="button" onClick={() => deleteProject(project.id)} title="Borrar proyecto" aria-label={`Borrar ${project.name}`} className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-700"><FontAwesomeIcon icon={faTrash} className="h-4 w-4" /></button></>}</div></td>
						</tr>
					))}</tbody>
				</table></div>
			</div>
		</section>
	);
}
