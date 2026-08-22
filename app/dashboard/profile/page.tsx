"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

type Student = {
	id: string;
	name: string;
	email: string;
	degree: string;
	semester: string;
	status: "Activo" | "Pendiente";
	phone: string;
};

const initialStudents: Student[] = [
	{ id: "maria-lopez", name: "María López", email: "maria.lopez@estudiantes.test", degree: "Ingeniería Informática", semester: "6º semestre", status: "Activo", phone: "+591 60502476" },
	{ id: "diego-sanchez", name: "Diego Sánchez", email: "diego.sanchez@estudiantes.test", degree: "Diseño Digital", semester: "4º semestre", status: "Activo", phone: "+591 68845247" },
	{ id: "sofia-navarro", name: "Sofía Navarro", email: "sofia.navarro@estudiantes.test", degree: "Administración de empresas", semester: "2º semestre", status: "Pendiente", phone: "+591 75030304" },
];

export default function ProfilePage() {
	const [students, setStudents] = useState(initialStudents);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [viewingId, setViewingId] = useState<string | null>(null);
	const [draft, setDraft] = useState<Pick<Student, "name" | "email" | "degree" | "status"> | null>(null);

	function startEditing(student: Student) {
		setViewingId(null);
		setEditingId(student.id);
		setDraft({ name: student.name, email: student.email, degree: student.degree, status: student.status });
	}

	function saveStudent(id: string) {
		if (!draft?.name.trim() || !draft.email.trim() || !draft.degree.trim()) return;
		setStudents((current) => current.map((student) => student.id === id ? { ...student, ...draft } : student));
		setEditingId(null);
		setDraft(null);
	}

	function deleteStudent(id: string) {
		if (window.confirm("¿Quieres borrar este perfil de estudiante?")) setStudents((current) => current.filter((student) => student.id !== id));
	}

	return (
		<section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
			<div className="mb-8"><p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Estudiantes</p><h1 className="mt-2 text-3xl font-bold text-slate-950">Perfiles</h1><p className="mt-2 text-slate-500">Consulta y administra la información de los estudiantes.</p></div>
			<div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
				<div className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><h2 className="font-semibold text-slate-900">Estudiantes registrados</h2><span className="text-sm text-slate-500">{students.length} perfiles</span></div>
				<div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3 font-semibold">Estudiante</th><th className="px-5 py-3 font-semibold">Formación</th><th className="px-5 py-3 font-semibold">Estado</th><th className="px-5 py-3 font-semibold">Semestre</th><th className="px-5 py-3 text-right font-semibold">Acciones</th></tr></thead>
					<tbody className="divide-y divide-slate-100">{students.map((student) => <tr key={student.id} className="align-top hover:bg-slate-50/70"><td className="px-5 py-4">{editingId === student.id && draft ? <div className="space-y-2"><input aria-label="Nombre del estudiante" value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} className="w-full rounded border border-slate-300 px-2 py-1 font-semibold outline-blue-500" /><input aria-label="Email del estudiante" type="email" value={draft.email} onChange={(event) => setDraft({ ...draft, email: event.target.value })} className="w-full rounded border border-slate-300 px-2 py-1 text-xs outline-blue-500" /></div> : <><p className="font-semibold text-slate-900">{student.name}</p><p className="mt-1 text-xs text-slate-500">{student.email}</p></>}</td><td className="px-5 py-4">{editingId === student.id && draft ? <input aria-label="Formación del estudiante" value={draft.degree} onChange={(event) => setDraft({ ...draft, degree: event.target.value })} className="w-full rounded border border-slate-300 px-2 py-1 outline-blue-500" /> : <span className="text-slate-600">{student.degree}</span>}</td><td className="px-5 py-4">{editingId === student.id && draft ? <select aria-label="Estado del estudiante" value={draft.status} onChange={(event) => setDraft({ ...draft, status: event.target.value as Student["status"] })} className="rounded border border-slate-300 px-2 py-1 outline-blue-500"><option>Activo</option><option>Pendiente</option></select> : <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${student.status === "Activo" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>{student.status}</span>}</td><td className="px-5 py-4 text-slate-600">{student.semester}</td><td className="px-5 py-4"><div className="flex justify-end gap-2">{editingId === student.id ? <><button type="button" onClick={() => saveStudent(student.id)} className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">Guardar</button><button type="button" onClick={() => { setEditingId(null); setDraft(null); }} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">Cancelar</button></> : <><button type="button" onClick={() => setViewingId(viewingId === student.id ? null : student.id)} title="Ver perfil" aria-label={`Ver perfil de ${student.name}`} className="rounded-md p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-700"><FontAwesomeIcon icon={faEye} className="h-4 w-4" /></button><button type="button" onClick={() => startEditing(student)} title="Editar perfil" aria-label={`Editar perfil de ${student.name}`} className="rounded-md p-2 text-slate-500 hover:bg-amber-50 hover:text-amber-700"><FontAwesomeIcon icon={faPen} className="h-4 w-4" /></button><button type="button" onClick={() => deleteStudent(student.id)} title="Borrar perfil" aria-label={`Borrar perfil de ${student.name}`} className="rounded-md p-2 text-slate-500 hover:bg-red-50 hover:text-red-700"><FontAwesomeIcon icon={faTrash} className="h-4 w-4" /></button></>}</div></td></tr>)}
						{students.map((student) => viewingId === student.id && <tr key={`${student.id}-details`} className="bg-blue-50/50"><td colSpan={5} className="px-5 py-4"><div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2"><p><span className="font-semibold">Teléfono:</span> {student.phone}</p><p><span className="font-semibold">Email:</span> {student.email}</p></div></td></tr>)}</tbody></table></div>
			</div>
		</section>
	);
}
