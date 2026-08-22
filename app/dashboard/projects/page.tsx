"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faDownload, faFile, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";

type Project = { id: number; name: string; description: string; status: string; fileName?: string };

const initialProjects: Project[] = [
  { id: 1, name: "Portal de clientes", description: "Nueva experiencia para clientes", status: "En progreso" },
  { id: 2, name: "Campaña de lanzamiento", description: "Materiales y calendario de campaña", status: "Pendiente" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const openCreateForm = () => { setEditingProject(null); setSelectedFile(null); setIsFormOpen(true); };
  const openEditForm = (project: Project) => { setEditingProject(project); setSelectedFile(null); setIsFormOpen(true); };
  const deleteProject = (projectId: number) => {
    if (window.confirm("¿Quieres eliminar este proyecto?")) setProjects((currentProjects) => currentProjects.filter((project) => project.id !== projectId));
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => setSelectedFile(event.target.files?.[0] ?? null);
  const saveProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const projectData = { name: String(formData.get("name")), description: String(formData.get("description")), status: String(formData.get("status")) };
    if (editingProject) setProjects((currentProjects) => currentProjects.map((project) => project.id === editingProject.id ? { ...project, ...projectData, fileName: selectedFile?.name ?? project.fileName } : project));
    else setProjects((currentProjects) => [...currentProjects, { id: Date.now(), ...projectData, fileName: selectedFile?.name }]);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-20 text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-slate-500">Workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Proyectos</h1><p className="mt-2 text-sm text-slate-500">Organiza tus entregas y mantén cada iniciativa en movimiento.</p></div><div className="flex flex-wrap gap-3"><label className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"><FontAwesomeIcon icon={faCloudArrowUp} className="h-4 w-4" />Subir proyecto<input type="file" accept=".zip,.pdf,.doc,.docx" className="hidden" onChange={handleFileChange} /></label><button type="button" onClick={openCreateForm} className="flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"><FontAwesomeIcon icon={faPlus} className="h-4 w-4" />Crear proyecto</button></div></div>
        {selectedFile && !isFormOpen && <div className="mt-5 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"><FontAwesomeIcon icon={faFile} className="h-4 w-4" />Archivo seleccionado: <strong>{selectedFile.name}</strong><button type="button" onClick={() => setSelectedFile(null)} className="ml-auto text-xs font-semibold underline">Quitar</button></div>}
        <div className="mt-8 grid gap-5 md:grid-cols-2">{projects.map((project) => <article key={project.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-md"><div className="flex items-start justify-between gap-4"><div><span className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === "En progreso" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>{project.status}</span><h2 className="mt-4 text-xl font-semibold">{project.name}</h2><p className="mt-1 text-sm text-slate-500">{project.description}</p>{project.fileName && <p className="mt-4 flex items-center gap-2 text-xs text-slate-400"><FontAwesomeIcon icon={faFile} className="h-3 w-3" />{project.fileName}</p>}</div><div className="flex gap-2"><button type="button" aria-label={`Editar ${project.name}`} title="Editar proyecto" onClick={() => openEditForm(project)} className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100"><FontAwesomeIcon icon={faPen} className="h-3.5 w-3.5" /></button><button type="button" aria-label={`Eliminar ${project.name}`} title="Eliminar proyecto" onClick={() => deleteProject(project.id)} className="flex h-9 w-9 items-center justify-center rounded-md border border-rose-100 text-rose-500 hover:bg-rose-50"><FontAwesomeIcon icon={faTrash} className="h-3.5 w-3.5" /></button></div></div><div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400"><span>Última actualización</span><span>Hoy, 10:30</span></div></article>)}</div>
        {projects.length === 0 && <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center"><p className="font-semibold">No hay proyectos todavía</p><p className="mt-1 text-sm text-slate-500">Crea tu primer proyecto para comenzar.</p><button type="button" onClick={openCreateForm} className="mt-5 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white">Crear proyecto</button></div>}
      </main>
      {isFormOpen && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 px-4"><section className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl sm:p-8"><div className="flex items-start justify-between"><div><h2 className="text-xl font-bold">{editingProject ? "Editar proyecto" : "Crear proyecto"}</h2><p className="mt-1 text-sm text-slate-500">Completa los datos principales del proyecto.</p></div><button type="button" aria-label="Cerrar formulario" onClick={() => setIsFormOpen(false)} className="text-2xl leading-none text-slate-400 hover:text-slate-700">×</button></div><form onSubmit={saveProject} className="mt-6 grid gap-4"><label className="text-sm font-medium text-slate-700">Nombre<input name="name" required defaultValue={editingProject?.name} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-slate-500" /></label><label className="text-sm font-medium text-slate-700">Descripción<textarea name="description" required defaultValue={editingProject?.description} rows={3} className="mt-2 w-full resize-none rounded-md border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-slate-500" /></label><label className="text-sm font-medium text-slate-700">Estado<select name="status" defaultValue={editingProject?.status ?? "Pendiente"} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-slate-500"><option>En progreso</option><option>Pendiente</option><option>Completado</option></select></label><label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50"><FontAwesomeIcon icon={faDownload} className="h-4 w-4" />{selectedFile?.name ?? "Adjuntar archivo del proyecto"}<input type="file" accept=".zip,.pdf,.doc,.docx" className="hidden" onChange={handleFileChange} /></label><div className="mt-2 flex justify-end gap-3"><button type="button" onClick={() => setIsFormOpen(false)} className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700">Cancelar</button><button type="submit" className="rounded-md bg-slate-800 px-4 py-2.5 text-sm font-medium text-white">{editingProject ? "Guardar cambios" : "Crear proyecto"}</button></div></form></section></div>}
    </div>
  );
}
