export default function MyProfilePage() {
	return (
		<section className="mx-auto max-w-4xl px-6 py-8 md:px-10">
			<div className="mb-8">
				<p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Cuenta personal</p>
				<h1 className="mt-2 text-3xl font-bold text-slate-950">Mi usuario</h1>
				<p className="mt-2 text-slate-500">Información del docente que administra este panel.</p>
			</div>
			<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
				<div className="flex flex-col gap-5 sm:flex-row sm:items-center">
					<div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f2ddd2] text-2xl font-bold text-[#8f4938]">PL</div>
					<div><h2 className="text-2xl font-bold text-slate-950">Pedro Luis Lanza</h2><p className="mt-1 text-sm font-semibold text-[#8f4938]">Docente</p></div>
				</div>
				<div className="mt-8 grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-2">
					<div><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Nombre completo</p><p className="mt-1 text-slate-800">Pedro Luis Lanza</p></div>
					<div><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Rol</p><p className="mt-1 text-slate-800">Docente</p></div>
					<div><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Área</p><p className="mt-1 text-slate-800">Ingeniería en Sistemas</p></div>
					<div><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Estado</p><span className="mt-1 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">Activo</span></div>
				</div>
			</div>
		</section>
	);
}
