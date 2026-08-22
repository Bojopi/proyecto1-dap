import Header from "../../Components/Header";

const profiles = [
	{
		name: "Shaquille O'Neal",
		role: "Administrador",
		email: "shaquille.oneal@taskflow.com",
		image: "https://i.pinimg.com/736x/87/05/19/87051939c904c85d4244237993cedb13.jpg",
		description: "Coordina la estrategia del equipo y supervisa los proyectos prioritarios de TaskFlow, tambien es un multicampeon en baloncesto.",
		accent: "bg-pink-light",
	},
	{
		name: "María García",
		role: "Gestora de proyectos",
		email: "maria.garcia@taskflow.com",
		image: "https://i.pinimg.com/736x/46/84/41/4684416198ced2edb1ab535024148764.jpg",
		description: "Organiza los calendarios, distribuye tareas y mantiene alineados a todos los colaboradores.",
		accent: "bg-blue-light",
	},
	{
		name: "Carlos Rodríguez",
		role: "Colaborador",
		email: "carlos.rodriguez@taskflow.com",
		image: "https://i.pinimg.com/736x/d9/cf/ad/d9cfadf8032ff57bb7958ff9fe3d394a.jpg",
		description: "Apoya el desarrollo de la plataforma web y participa en la revisión de documentación técnica.",
		accent: "bg-lavender",
	},
	{
		name: "Lucía Fernández",
		role: "Colaboradora",
		email: "lucia.fernandez@taskflow.com",
		description: "Se encarga de validar las interfaces y aportar una mirada centrada en la experiencia de usuario.",
		accent: "bg-pink-light",
	},
];

export default function ProfilePage() {
	return (
		<div className="min-h-screen bg-slate-50 px-6 pb-12 pt-28 text-slate-900 md:px-10">
			<Header />
			<main className="mx-auto max-w-6xl">
				<div className="mb-8">
					<p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Equipo</p>
					<h1 className="text-3xl font-bold tracking-tight md:text-4xl">Perfiles del equipo</h1>
					<p className="mt-2 max-w-2xl text-slate-500">Conoce a las personas que hacen posible cada proyecto y descubre sus responsabilidades dentro del equipo.</p>
				</div>

				<section className="grid gap-5 sm:grid-cols-2">
					{profiles.map((profile) => (
						<article key={profile.email} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
							<div className={`h-2 ${profile.accent}`} />
							<div className="p-6">
								<div className="flex items-center gap-4">
									{profile.image ? (
										<img src={profile.image} alt={`Foto de perfil de ${profile.name}`} className="h-20 w-20 rounded-full object-cover ring-4 ring-pink-light" />
									) : (
										<div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-light text-2xl font-bold text-ink ring-4 ring-blue-light">{profile.name.charAt(0)}</div>
									)}
									<div>
										<h2 className="text-xl font-bold text-slate-800">{profile.name}</h2>
										<p className="mt-1 text-sm font-medium text-cyan-700">{profile.role}</p>
									</div>
								</div>
								<p className="mt-5 leading-7 text-slate-600">{profile.description}</p>
								<div className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-500">{profile.email}</div>
							</div>
						</article>
					))}
				</section>
			</main>
		</div>
	);
}
