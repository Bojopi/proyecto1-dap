import Header from "../../Components/Header";

const profileImage = "https://i.pinimg.com/736x/87/05/19/87051939c904c85d4244237993cedb13.jpg";
const mariaProfileImage = "https://i.pinimg.com/736x/46/84/41/4684416198ced2edb1ab535024148764.jpg";
const carlosProfileImage = "https://i.pinimg.com/736x/d9/cf/ad/d9cfadf8032ff57bb7958ff9fe3d394a.jpg";

const users = [
	{ name: "Shaquille O'Neal", email: "shaquille.oneal@taskflow.com", role: "Administrador", status: "Activo", lastAccess: "Hoy, 09:42", image: profileImage },
	{ name: "María García", email: "maria.garcia@taskflow.com", role: "Gestora de proyectos", status: "Activo", lastAccess: "Ayer, 16:20", image: mariaProfileImage },
	{ name: "Carlos Rodríguez", email: "carlos.rodriguez@taskflow.com", role: "Colaborador", status: "Pendiente", lastAccess: "Sin acceso", image: carlosProfileImage },
	{ name: "Lucía Fernández", email: "lucia.fernandez@taskflow.com", role: "Colaboradora", status: "Activo", lastAccess: "12 jun, 11:05" },
];

export default function UsersPage() {
	return (
		<div className="min-h-screen bg-slate-50 px-6 pb-12 pt-28 text-slate-900 md:px-10">
			<Header />
			<main className="mx-auto max-w-6xl">
				<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Workspace</p>
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl">Usuarios</h1>
						<p className="mt-2 text-slate-500">Gestiona las personas que forman parte de tu equipo.</p>
					</div>
					<button className="w-fit rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700">
						+ Invitar usuario
					</button>
				</div>

				<section className="mb-6 grid gap-4 sm:grid-cols-3">
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Usuarios totales</p>
						<p className="mt-2 text-3xl font-bold">24</p>
						<p className="mt-1 text-xs font-medium text-emerald-600">+12% este mes</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Usuarios activos</p>
						<p className="mt-2 text-3xl font-bold">19</p>
						<p className="mt-1 text-xs font-medium text-slate-400">79% del equipo</p>
					</div>
					<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Invitaciones pendientes</p>
						<p className="mt-2 text-3xl font-bold">5</p>
						<p className="mt-1 text-xs font-medium text-amber-600">Requieren seguimiento</p>
					</div>
				</section>

				<section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
					<div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="font-semibold">Directorio del equipo</h2>
							<p className="mt-1 text-sm text-slate-500">4 usuarios mostrados de 24</p>
						</div>
						<label className="flex items-center rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-400">
							<span className="mr-2">⌕</span>
							<input className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400" placeholder="Buscar usuario" aria-label="Buscar usuario" />
						</label>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full min-w-[700px] text-left text-sm">
							<thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
								<tr>
									<th className="px-5 py-3 font-semibold">Usuario</th>
									<th className="px-5 py-3 font-semibold">Rol</th>
									<th className="px-5 py-3 font-semibold">Estado</th>
									<th className="px-5 py-3 font-semibold">Último acceso</th>
									<th className="px-5 py-3" aria-label="Acciones" />
								</tr>
							</thead>
							<tbody className="divide-y divide-slate-100">
								{users.map((user) => (
									<tr key={user.email} className="transition hover:bg-slate-50">
										<td className="px-5 py-4">
											<div className="flex items-center gap-3">
												{user.image ? (
													<img src={user.image} alt={`Foto de perfil de ${user.name}`} className="h-10 w-10 rounded-full object-cover" />
												) : (
													<div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 font-semibold text-cyan-700">{user.name.charAt(0)}</div>
												)}
												<div>
													<p className="font-semibold text-slate-800">{user.name}</p>
													<p className="text-xs text-slate-500">{user.email}</p>
												</div>
											</div>
										</td>
										<td className="px-5 py-4 text-slate-600">{user.role}</td>
										<td className="px-5 py-4">
											<span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${user.status === "Activo" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
												{user.status}
											</span>
										</td>
										<td className="px-5 py-4 text-slate-600">{user.lastAccess}</td>
										<td className="px-5 py-4 text-right text-lg text-slate-400">•••</td>
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
