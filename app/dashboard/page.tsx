import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faListCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";

const dashboardImages = [
  {
    title: "Ideas que toman forma",
    description: "Un buen proyecto empieza con una idea clara y un equipo preparado para convertirla en resultados.",
    image: "https://i.pinimg.com/736x/51/a3/de/51a3deb46fb02baa13690a1b52575b69.jpg",
    label: "Inspiración",
  },
  {
    title: "Trabajo en equipo",
    description: "Comparte avances, coordina tareas y mantén a todos alineados en cada etapa del proyecto.",
    image: "https://i.pinimg.com/736x/04/e0/67/04e067155cb4325ca6c770e6ca86f92b.jpg",
    label: "Colaboración",
  },
  {
    title: "Un avance a la vez",
    description: "Revisa el progreso semanal y celebra cada pequeño paso que acerca al equipo a sus objetivos.",
    image: "https://i.pinimg.com/736x/91/a6/ae/91a6ae9c72cf03ed031cffadcd87275e.jpg",
    label: "Progreso",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 pb-12 pt-28 text-slate-900 md:px-10">
      <Header />
      <main className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Resumen general</p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Buenos días, equipo</h1>
            <p className="mt-2 text-slate-500">Aquí tienes una vista rápida de lo que está pasando en TaskFlow.</p>
          </div>
          <p className="text-sm text-slate-500">Viernes, 22 de agosto de 2026</p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><p className="text-sm text-slate-500">Proyectos activos</p><FontAwesomeIcon icon={faArrowTrendUp} className="text-cyan-700" /></div>
            <p className="mt-3 text-3xl font-bold">8</p><p className="mt-1 text-xs text-slate-500">+2 desde el mes pasado</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><p className="text-sm text-slate-500">Tareas pendientes</p><FontAwesomeIcon icon={faListCheck} className="text-cyan-700" /></div>
            <p className="mt-3 text-3xl font-bold">21</p><p className="mt-1 text-xs text-slate-500">5 vencen esta semana</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><p className="text-sm text-slate-500">Tareas completadas</p><FontAwesomeIcon icon={faArrowTrendUp} className="text-cyan-700" /></div>
            <p className="mt-3 text-3xl font-bold">86</p><p className="mt-1 text-xs text-slate-500">+14,6% este mes</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"><p className="text-sm text-slate-500">Usuarios activos</p><FontAwesomeIcon icon={faUsers} className="text-cyan-700" /></div>
            <p className="mt-3 text-3xl font-bold">18</p><p className="mt-1 text-xs text-slate-500">De 21 registrados</p>
          </div>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          {dashboardImages.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-48 overflow-hidden bg-blue-light"><img src={item.image} alt={item.title} className="h-full w-full object-cover" /></div>
              <div className="p-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">{item.label}</p><h2 className="mt-2 text-lg font-bold text-slate-800">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p></div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
