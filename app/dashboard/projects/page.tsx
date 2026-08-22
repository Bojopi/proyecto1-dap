import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";

const projects = [
	{
		name: "Proyecto impresionante",
		description: "Una experiencia digital creativa para presentar las nuevas ideas del equipo.",
		image: "https://i.pinimg.com/736x/cf/73/d4/cf73d40a9e9597b37d3153a9cf0eb103.jpg",
		owner: "Shaquille O'Neal",
		status: "En progreso",
		progress: 68,
		accent: "bg-pink-light",
	},
	{
		name: "Plataforma web",
		description: "Desarrollo de la nueva plataforma para centralizar las operaciones del equipo.",
		owner: "Carlos Rodríguez",
		status: "En progreso",
		progress: 42,
		accent: "bg-blue-light",
	},
	{
		name: "Aplicación móvil",
		description: "Diseño y validación de una aplicación móvil sencilla y accesible.",
		owner: "Lucía Fernández",
		status: "Planificación",
		progress: 18,
		accent: "bg-lavender",
	},
	{
		name: "Operaciones Q3",
		description: "Organización de procesos, calendario y objetivos del tercer trimestre.",
		owner: "María García",
		status: "Completado",
		progress: 100,
		accent: "bg-pink-light",
	},
];

const statusStyles = {
	"En progreso": "bg-blue-light",
	Planificación: "bg-pink-light",
	Completado: "bg-lavender",
};

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-slate-50 px-6 pb-12 pt-28 text-slate-900 md:px-10">
			<Header />
			<main className="mx-auto max-w-6xl">
				<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Workspace</p>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">Proyectos</h1>
						<p className="mt-2 text-slate-500">Organiza las iniciativas y objetivos que el equipo tiene por delante.</p>
					</div>
					<button type="button" title="Agregar proyecto" aria-label="Agregar proyecto" className="flex w-fit items-center gap-2 rounded-lg bg-lavender px-4 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-pink">
						<FontAwesomeIcon icon={faPlus} />
						<span>Nuevo proyecto</span>
					</button>
				</div>

				<section className="mb-6 grid gap-4 sm:grid-cols-3">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Proyectos activos</p>
						<p className="mt-2 text-3xl font-bold">8</p>
						<p className="mt-1 text-xs font-medium text-slate-500">En ejecución actualmente</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Proyectos completados</p>
						<p className="mt-2 text-3xl font-bold">14</p>
						<p className="mt-1 text-xs font-medium text-slate-500">Durante este año</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Miembros involucrados</p>
						<p className="mt-2 text-3xl font-bold">21</p>
						<p className="mt-1 text-xs font-medium text-slate-500">En todos los proyectos</p>
					</div>
				</section>

				<section className="grid gap-5 md:grid-cols-2">
					{projects.map((project) => (
						<article key={project.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
							<div className="relative h-40 overflow-hidden bg-blue-light">
								{project.image ? (
									<img src={project.image} alt={`Imagen de ${project.name}`} className="h-full w-full object-cover" />
								) : (
									<div className={`h-full w-full ${project.accent}`} />
								)}
								<span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-ink ${statusStyles[project.status as keyof typeof statusStyles]}`}>{project.status}</span>
							</div>
							<div className="p-6">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h2 className="text-xl font-bold text-slate-800">{project.name}</h2>
										<p className="mt-2 leading-6 text-slate-500">{project.description}</p>
									</div>
									<FontAwesomeIcon icon={faArrowRight} className="mt-1 text-cyan-700" aria-hidden="true" />
								</div>
								<div className="mt-6 flex items-center justify-between text-sm">
									<span className="text-slate-500">Responsable: <strong className="text-slate-700">{project.owner}</strong></span>
									<strong className="text-slate-700">{project.progress}%</strong>
								</div>
								<div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-blue-500" style={{ width: `${project.progress}%` }} /></div>
							</div>
						</article>
					))}
				</section>
			</main>
		</div>
	);
}
