import Link from "next/link";

export default function Dashboard() {
	return (
		<main className="min-h-screen bg-zinc-50 px-6 py-10 text-slate-900">
			<div className="mx-auto max-w-5xl">
				<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-sm text-slate-500">Panel Administrativo</p>
						<h1 className="text-3xl font-bold">Dashboard</h1>
					</div>
					<Link
						href="/"
						className="w-fit rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
					>
						Volver al inicio
					</Link>
				</div>

			</div>
		</main>
	);
}
