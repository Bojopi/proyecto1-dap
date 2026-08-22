import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e4d8] text-[#20251f]">
      <nav className="border-b border-[#596044] bg-[#20251f] text-[#f1ead7]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="text-xl font-black uppercase tracking-[0.12em] text-white">
            <span className="text-[#d5b45b]">War Thunder</span> Command
          </Link>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link href="/login" className="border border-transparent px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#c6c8b9] transition-colors hover:border-[#777e62] hover:text-white">
              Iniciar sesión
            </Link>
            <Link href="/register" className="border border-[#d5b45b] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#f5ce68] transition-colors hover:bg-[#d5b45b] hover:text-[#20251f]">
              Registrarse
            </Link>
            <Link href="/dashboard" className="bg-[#596044] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#727c55]">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1500px] px-5 pb-14 pt-8 sm:px-8 lg:pt-12">
        <div className="mb-7 flex flex-col justify-between gap-5 border-b-2 border-[#596044] pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#8a6b25]">War Thunder Command / Situación</p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">Parte del día</h1>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#68705f]">
            <span className="h-2.5 w-2.5 bg-emerald-600" /> Servidores operativos
          </div>
        </div>

        <div className="mb-8 border-l-4 border-[#b98d29] bg-[#f8f0d8] px-4 py-3 text-sm text-[#5c4b22] shadow-sm">
          <strong className="font-black uppercase tracking-wide">Aviso de parodia:</strong> las noticias de esta portada son ficción y buscan únicamente el humor. No representan hechos ni personas reales.
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr_0.75fr]">
          <aside className="border border-[#c2bfae] bg-[#f5f1e6] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[#c2bfae] pb-4">
              <h2 className="text-lg font-black uppercase tracking-wide">Titulares</h2>
              <span className="text-xs font-bold text-[#8a6b25]">03</span>
            </div>
            <div className="space-y-5">
              {[
                ["Economía", "El mercado de piezas experimenta una semana de intercambios récord"],
                ["Táctica", "La niebla cambia las reglas en las batallas nocturnas"],
                ["Diseño", "Artistas de la comunidad presentan sus camuflajes favoritos"],
              ].map(([category, title], index) => (
                <article key={title} className="border-l-2 border-[#b98d29] pl-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8a6b25]">0{index + 1} / {category}</p>
                  <h3 className="mt-2 text-sm font-bold leading-5 text-[#30352b]">{title}</h3>
                </article>
              ))}
            </div>
          </aside>

          <article className="flex min-h-[430px] flex-col justify-between border border-[#596044] bg-[#30382c] p-6 shadow-xl sm:p-9">
            <div className="flex items-start justify-between gap-4 text-[#d5b45b]">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Crónica de comunidad</span>
              <span className="border border-[#777e62] px-2 py-1 text-[10px] font-bold uppercase">22.08</span>
            </div>
            <div>
              <h2 className="max-w-2xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">La escuadra que convirtió el desierto en una pista de pruebas</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#d9d8c8]">Una historia ficticia sobre coordinación, vehículos imposibles y la búsqueda del mejor momento para atacar.</p>
              <Link href="/dashboard" className="mt-7 inline-flex border border-[#d5b45b] px-4 py-3 text-xs font-black uppercase tracking-wider text-[#f5ce68] transition-colors hover:bg-[#d5b45b] hover:text-[#20251f]">Abrir informe completo</Link>
            </div>
          </article>

          <aside className="bg-[#596044] p-5 text-[#f1ead7] sm:p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d5b45b]">Próximo evento</p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-white">Operación Tormenta de Acero</h2>
            <div className="mt-8 border-y border-[#89906f] py-4">
              <p className="text-3xl font-black text-[#f5ce68]">48:12:09</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#c6c8b9]">Tiempo restante</p>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#d9d8c8]">Reúne a tu escuadra y completa tres objetivos de reconocimiento.</p>
            <Link href="/register" className="mt-6 inline-flex border border-[#d5b45b] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#f5ce68] hover:bg-[#d5b45b] hover:text-[#20251f]">Unirse al evento</Link>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 border-t border-[#b6b29f] pt-6 sm:grid-cols-3">
          {[
            ["01", "Guía rápida", "Ajusta la munición según la distancia y el blindaje rival."],
            ["02", "Radar comunitario", "Nuevos escuadrones buscan pilotos para partidas competitivas."],
            ["03", "Diario del taller", "El vehículo de la semana: precisión, movilidad y paciencia."],
          ].map(([number, title, description]) => (
            <article key={number} className="flex gap-4 border-b border-[#c2bfae] pb-4">
              <span className="text-2xl font-black text-[#b98d29]">{number}</span>
              <div><h2 className="font-black uppercase tracking-wide">{title}</h2><p className="mt-1 text-sm leading-5 text-[#68705f]">{description}</p></div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
