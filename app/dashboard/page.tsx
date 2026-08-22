"use client";

import Image from 'next/image';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f4efe3] pt-20 text-[#173b35]">
      <Header></Header>
      <main>
        <aside className="border-b border-[#d8cfbd] bg-[#fff9ec] px-6 py-4 text-center text-xs leading-5 text-[#53635c] sm:px-10">
          <strong className="font-bold uppercase tracking-[0.14em] text-[#c34b32]">Disclaimer:</strong> esta es únicamente una página meme y no representa apoyo a la izquierda ni al socialismo de Lula. Creada con humor para molestar amistosamente a Vinicius Montibeller Barboza.
        </aside>
        <section className="relative isolate overflow-hidden bg-[#0d493d] px-6 pb-16 pt-12 text-[#fff9ec] sm:px-10 lg:px-16 lg:pb-24 lg:pt-20">
          <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(135deg,transparent_0_45%,#f4c542_45%_56%,transparent_56%)]" />
          <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl animate-[fade-up_700ms_ease-out_both]">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#f4c542]">Tributo a un pueblo que no desiste</p>
              <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">Luiz Inácio Lula da Silva</h1>
              <p className="mt-8 max-w-lg text-lg leading-8 text-[#d7e5d7]">Una vida pública marcada por la defensa de la democracia, la dignidad y la esperanza de Brasil.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <span className="border border-[#f4c542] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f4c542]">Brasil presente</span>
                <span className="text-sm text-[#b8d0bd]">1945 · Pernambuco</span>
              </div>
            </div>
            <figure className="relative mx-auto aspect-[4/5] w-full max-w-md animate-[fade-up_900ms_ease-out_150ms_both]">
              <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b-2 border-l-2 border-[#f4c542]" />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29.jpg"
                alt="Lula da Silva saludando al público"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-top grayscale-[15%]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[#0d493d]/90 px-5 py-4 text-sm">“La esperanza venció al miedo.”</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c34b32]">Raíces y futuro</p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight text-[#173b35] sm:text-5xl">Brasil se cuenta desde su gente.</h2>
            <p className="mt-6 max-w-md leading-7 text-[#53635c]">Del sertão de Pernambuco a la presidencia, la historia de Lula está unida a la de millones de brasileños que buscan un país más justo.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="group relative h-72 overflow-hidden bg-[#173b35] sm:translate-y-8">
              <Image src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85" alt="Vista aérea de Río de Janeiro, Brasil" fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[#173b35]/85 p-4 text-sm text-[#fff9ec]">Territorio, cultura y diversidad</figcaption>
            </figure>
            <figure className="group relative h-72 overflow-hidden bg-[#173b35]">
              <Image src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=85" alt="Paisaje de Río de Janeiro, Brasil" fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[#173b35]/85 p-4 text-sm text-[#fff9ec]">Una nación que vuelve a soñar</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-[#d8cfbd] bg-[#e7dfce] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="font-serif text-2xl text-[#173b35]">“La democracia es la única posibilidad de construir un país mejor.”</p>
            <div className="flex gap-2" aria-label="Colores de la bandera de Brasil"><span className="h-3 w-3 rounded-full bg-[#209869]" /><span className="h-3 w-3 rounded-full bg-[#f4c542]" /><span className="h-3 w-3 rounded-full bg-[#2459a6]" /></div>
          </div>
        </section>

        <section className="bg-[#0d493d] px-6 py-16 text-[#fff9ec] sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4c542]">Archivo secreto</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">Se reencuentra con Vinicius Da Silva, su hijo perdido</h2>
              <p className="mt-5 max-w-sm leading-7 text-[#c9ddca]">Una coincidencia familiar completamente inventada para este homenaje de humor.</p>
            </div>
            <figure className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden border-4 border-[#f4c542] bg-[#173b35] md:max-w-xl">
              <Image
                src="/vinicius.jpeg"
                alt="Vinicius junto a Lula"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                onError={(event) => { event.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29.jpg'; }}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[#0d493d]/90 px-5 py-4 text-center font-serif text-2xl text-[#fff9ec]">El hijo perdido de lula</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
}
