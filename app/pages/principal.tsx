import Link from "next/link";

const features = [
  {
    title: "Goles por partido",
    description: "Analiza la productividad ofensiva de cada equipo y jugador.",
  },
  {
    title: "Formación y rendimiento",
    description: "Sigue la forma reciente y la evolución táctica de cada club.",
  },
  {
    title: "Estadísticas clave",
    description: "Consulta posesión, tiros, pases clave y eficacia defensiva.",
  },
];

export default function PrincipalPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="bg-[#0d7a2f] text-white shadow-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold"></div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registro"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0d7a2f] transition hover:bg-green-100"
            >
              Registrarse
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Análisis del torneo
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Estadísticas que muestran el ritmo del fútbol moderno.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Consulta goles, posesión, xG, pases clave y rendimiento de cada equipo con datos actualizados en tiempo real.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/registro"
                className="rounded-full bg-[#009B3A] px-6 py-3 font-semibold text-white shadow-md shadow-green-200 transition hover:bg-[#007A2E]"
              >
                Ver partidos
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Ya tengo cuenta
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Resumen del partido</h2>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                  En vivo
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Barcelona</span>
                    <span className="text-sm text-green-700">2.4 xG</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[75%] rounded-full bg-[#009B3A]" />
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Real Madrid</span>
                    <span className="text-sm text-green-700">1.8 xG</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[52%] rounded-full bg-[#009B3A]" />
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">Posesión</span>
                    <span className="text-sm text-green-700">63%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[30%] rounded-full bg-[#009B3A]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl text-[#009B3A]">
                ✓
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}