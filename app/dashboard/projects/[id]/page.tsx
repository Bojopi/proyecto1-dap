import Link from "next/link";

const projects = {
	"portal-clientes": {
		name: "Portal de clientes",
		description: "Espacio centralizado para consultar servicios y documentos.",
		status: "En progreso",
		owner: "Ana García",
		updatedAt: "12 mayo 2025",
		progress: "65%",
		team: "4 personas",
	},
	"app-inventario": {
		name: "App de inventario",
		description: "Control de productos, stock y movimientos del almacén.",
		status: "Completado",
		owner: "Carlos Ruiz",
		updatedAt: "28 abril 2025",
		progress: "100%",
		team: "3 personas",
	},
	"web-corporativa": {
		name: "Web corporativa",
		description: "Nueva web pública para presentar la empresa y sus servicios.",
		status: "Pendiente",
		owner: "Laura Martín",
		updatedAt: "15 abril 2025",
		progress: "10%",
		team: "2 personas",
	},
} as const;

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const project = projects[id as keyof typeof projects];

	if (!project) {
		return (
			<section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
				<h1 className="text-2xl font-bold text-slate-950">Proyecto no encontrado</h1>
				<Link href="/dashboard/projects" className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">Volver a proyectos</Link>
			</section>
		);
	}

	return (
		<section className="mx-auto max-w-5xl px-6 py-8 md:px-10">
			<Link href="/dashboard/projects" className="text-sm font-semibold text-blue-700 hover:underline">&larr; Volver a proyectos</Link>
			<div className="mt-6 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
				<div><p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Detalle del proyecto</p><h1 className="mt-2 text-3xl font-bold text-slate-950">{project.name}</h1><p className="mt-2 text-slate-500">{project.description}</p></div>
				<Link href="/dashboard/projects" className="w-fit rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Editar desde la lista</Link>
			</div>
			<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-lg border border-slate-200 bg-white p-5"><p className="text-xs font-semibold uppercase text-slate-500">Estado</p><p className="mt-2 font-semibold text-slate-900">{project.status}</p></div>
				<div className="rounded-lg border border-slate-200 bg-white p-5"><p className="text-xs font-semibold uppercase text-slate-500">Responsable</p><p className="mt-2 font-semibold text-slate-900">{project.owner}</p></div>
				<div className="rounded-lg border border-slate-200 bg-white p-5"><p className="text-xs font-semibold uppercase text-slate-500">Progreso</p><p className="mt-2 font-semibold text-slate-900">{project.progress}</p></div>
				<div className="rounded-lg border border-slate-200 bg-white p-5"><p className="text-xs font-semibold uppercase text-slate-500">Equipo</p><p className="mt-2 font-semibold text-slate-900">{project.team}</p></div>
			</div>
			<div className="mt-6 rounded-lg border border-slate-200 bg-white p-5"><p className="text-sm text-slate-500">Última actualización</p><p className="mt-1 font-semibold text-slate-900">{project.updatedAt}</p></div>
		</section>
	);
}
