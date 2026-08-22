const users = [
	{ name: "Ana García", email: "ana.garcia@empresa.test", role: "Administradora", status: "Activo", lastAccess: "Hoy, 09:24" },
	{ name: "Carlos Ruiz", email: "carlos.ruiz@empresa.test", role: "Editor", status: "Activo", lastAccess: "Ayer, 16:40" },
	{ name: "Laura Martín", email: "laura.martin@empresa.test", role: "Colaboradora", status: "Pendiente", lastAccess: "Sin acceso" },
];

export default function UsersPage() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
			<div className="mb-8"><p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Equipo</p><h1 className="mt-2 text-3xl font-bold text-slate-950">Usuarios</h1><p className="mt-2 text-slate-500">Consulta las personas con acceso al panel.</p></div>
			<div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><h2 className="font-semibold text-slate-900">Usuarios registrados</h2><span className="text-sm text-slate-500">{users.length} usuarios</span></div><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3 font-semibold">Usuario</th><th className="px-5 py-3 font-semibold">Rol</th><th className="px-5 py-3 font-semibold">Estado</th><th className="px-5 py-3 font-semibold">Último acceso</th></tr></thead><tbody className="divide-y divide-slate-100">{users.map((user) => <tr key={user.email} className="hover:bg-slate-50/70"><td className="px-5 py-4"><p className="font-semibold text-slate-900">{user.name}</p><p className="mt-1 text-xs text-slate-500">{user.email}</p></td><td className="px-5 py-4 text-slate-600">{user.role}</td><td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${user.status === "Activo" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>{user.status}</span></td><td className="px-5 py-4 text-slate-500">{user.lastAccess}</td></tr>)}</tbody></table></div></div>
		</section>
	);
}
