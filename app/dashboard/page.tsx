"use client";

import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#e8e4d8] text-[#20251f]">
      <Header />

      <main className="mx-auto max-w-[1500px] px-5 pb-14 pt-8 sm:px-8 lg:pt-12">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#b6b29f] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-[#8a6b25]">War Thunder Command / Briefing</p>
            <h1 className="text-3xl font-black uppercase tracking-tight text-[#20251f] sm:text-5xl">Noticias del frente</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#68705f]">Las novedades de la comunidad, los hangares y el campo de batalla.</p>
          </div>
          <span className="w-fit border border-[#b6b29f] bg-[#f5f1e6] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#68705f]">22 AGO 2026</span>
        </div>

        <div className="mb-8 border-l-4 border-[#b98d29] bg-[#f8f0d8] px-4 py-3 text-sm text-[#5c4b22] shadow-sm">
          <strong className="font-black uppercase tracking-wide">Aviso de parodia:</strong> esta sección es ficción y busca únicamente el humor; los personajes, hechos y acusaciones son inventados y no describen a personas reales.
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.45fr_0.8fr]" aria-label="Noticias destacadas">
          <article className="relative min-h-[420px] overflow-hidden border border-[#596044] bg-[#20251f] shadow-xl">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(26,31,25,0.98)_8%,rgba(32,37,31,0.7)_55%,rgba(32,37,31,0.25)),linear-gradient(25deg,#596044,#20251f)]" />
            <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
              <span className="mb-5 w-fit bg-[#d5b45b] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#20251f]">Investigación ficticia</span>
              <h2 className="max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">El misterio del hangar 404 sacude a la comunidad</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#d9d8c8]">Un escuadrón imaginario busca al legendario Comandante Pixel, acusado dentro de esta historia inventada de alterar los planos digitales para conseguir vehículos imposibles.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#bfc3aa]">
                <span>Por Redacción Command</span>
                <span className="h-1 w-1 bg-[#d5b45b]" />
                <span>Lectura: 4 min</span>
              </div>
            </div>
          </article>

          <aside className="border border-[#c2bfae] bg-[#f5f1e6] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[#c2bfae] pb-4">
              <h2 className="text-lg font-black uppercase tracking-wide">Últimas noticias</h2>
              <span className="h-2 w-2 bg-[#b98d29]" />
            </div>
            <div className="divide-y divide-[#d4d0c0]">
              {[
                ["Actualización", "Nuevos vehículos llegan al árbol tecnológico", "Hace 32 min"],
                ["Comunidad", "El torneo de escuadrones abre sus inscripciones", "Hace 1 h"],
                ["Estrategia", "Cinco rutas para dominar el mapa del desierto", "Hace 3 h"],
              ].map(([category, title, time]) => (
                <article key={title} className="py-5 first:pt-1 last:pb-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8a6b25]">{category}</p>
                  <h3 className="mt-2 text-base font-bold leading-6 text-[#30352b]">{title}</h3>
                  <p className="mt-2 text-xs text-[#858778]">{time}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-3" aria-label="Secciones de la comunidad">
          {[
            ["Hangares", "Revisa vehículos, mejoras y configuraciones recomendadas."],
            ["Eventos", "Consulta los próximos desafíos y recompensas de temporada."],
            ["Comunidad", "Comparte estrategias y encuentra nuevos escuadrones."],
          ].map(([title, description]) => (
            <div key={title} className="border-t-4 border-[#596044] bg-[#f5f1e6] p-5 shadow-sm">
              <h2 className="text-lg font-black uppercase tracking-wide">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#68705f]">{description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
