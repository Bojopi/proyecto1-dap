import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";

const tasks = [
	{ title: "Definir objetivos del nuevo proyecto", user: "Shaquille O'Neal", project: "Lanzamiento Q3", priority: "Alta", status: "En progreso", dueDate: "18 ago, 2026" },
	{ title: "Preparar informe semanal", user: "María García", project: "Operaciones", priority: "Media", status: "Pendiente", dueDate: "20 ago, 2026" },
	{ title: "Revisar documentación técnica", user: "Carlos Rodríguez", project: "Plataforma web", priority: "Baja", status: "Pendiente", dueDate: "22 ago, 2026" },
	{ title: "Validar diseño de la interfaz", user: "Lucía Fernández", project: "Aplicación móvil", priority: "Alta", status: "Completada", dueDate: "15 ago, 2026" },
	{ title: "Actualizar calendario del equipo", user: "María García", project: "Operaciones", priority: "Media", status: "En progreso", dueDate: "24 ago, 2026" },
];

const priorityStyles = {
	Alta: "bg-pink-light text-ink",
	Media: "bg-lavender text-ink",
	Baja: "bg-blue-light text-ink",
};

const statusStyles = {
	"En progreso": "bg-blue-light text-ink",
	Pendiente: "bg-pink-light text-ink",
	Completada: "bg-lavender text-ink",
};

export default function TasksPage() {
	return (
		<div className="min-h-screen bg-slate-50 px-6 pb-12 pt-28 text-slate-900 md:px-10">
			<Header />
			<main className="mx-auto max-w-6xl">
				<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Productividad</p>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">Tareas</h1>
						<p className="mt-2 text-slate-500">Consulta las tareas asignadas a cada miembro del equipo.</p>
					</div>
					<div className="flex gap-2">
						<button type="button" title="Agregar tarea" aria-label="Agregar tarea" className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-ink shadow-sm transition hover:bg-pink" >
							<FontAwesomeIcon icon={faPlus} />
						</button>
						<button type="button" title="Quitar tarea" aria-label="Quitar tarea" className="flex h-10 w-10 items-center justify-center rounded-lg bg-lavender text-ink shadow-sm transition hover:bg-pink">
							<FontAwesomeIcon icon={faMinus} />
						</button>
						<button type="button" title="Eliminar todas las tareas" aria-label="Eliminar todas las tareas" className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink text-ink shadow-sm transition hover:bg-pink-light">
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>

				<section className="mb-6 grid gap-4 sm:grid-cols-3">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Tareas totales</p>
						<p className="mt-2 text-3xl font-bold">42</p>
						<p className="mt-1 text-xs font-medium text-slate-500">Asignadas al equipo</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">En progreso</p>
						<p className="mt-2 text-3xl font-bold">16</p>
						<p className="mt-1 text-xs font-medium text-slate-500">38% del total</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Completadas</p>
						<p className="mt-2 text-3xl font-bold">21</p>
						<p className="mt-1 text-xs font-medium text-slate-500">50% del total</p>
					</div>
				</section>

				<section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
					<div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="font-semibold">Todas las tareas</h2>
							<p className="mt-1 text-sm text-slate-500">5 tareas mostradas de 42</p>
						</div>
						<select className="rounded-lg border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 outline-none" defaultValue="Todas">
							<option>Todas</option>
							<option>En progreso</option>
							<option>Pendientes</option>
							<option>Completadas</option>
						</select>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full min-w-[800px] text-left text-sm">
							<thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
								<tr>
									<th className="px-5 py-3 font-semibold">Tarea</th>
									<th className="px-5 py-3 font-semibold">Responsable</th>
									<th className="px-5 py-3 font-semibold">Prioridad</th>
									<th className="px-5 py-3 font-semibold">Estado</th>
									<th className="px-5 py-3 font-semibold">Vencimiento</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-slate-100">
								{tasks.map((task) => (
									<tr key={task.title} className="transition hover:bg-slate-50">
										<td className="px-5 py-4">
											<p className="font-semibold text-slate-800">{task.title}</p>
											<p className="mt-1 text-xs text-slate-500">{task.project}</p>
										</td>
										<td className="px-5 py-4 text-slate-600">{task.user}</td>
										<td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[task.priority as keyof typeof priorityStyles]}`}>{task.priority}</span></td>
										<td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[task.status as keyof typeof statusStyles]}`}>{task.status}</span></td>
										<td className="px-5 py-4 text-slate-600">{task.dueDate}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			</main>
		</div>
	);
}
