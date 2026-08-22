import Header from "../../../components/Header";

export default function NewProject() {
	return (
		<div className="min-h-screen bg-[#e8e4d8] text-[#20251f]">
			<Header />
			<main className="mx-auto max-w-3xl px-5 pb-12 pt-10 sm:px-8">
				<p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a6b25]">Centro de operaciones / Hangares</p>
				<h1 className="mt-2 text-4xl font-black uppercase">Nueva operación</h1>
				<p className="mt-3 text-[#68705f]">Prepara una nueva misión para tu escuadrón.</p>
			</main>
		</div>
	);
}
