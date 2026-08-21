"use client";

import { useState } from "react";

export default function Home() {
  const [materialSeleccionado, setMaterialSeleccionado] = useState<string | null>(
    null
  );

  const materiales = [
    {
      nombre: "Plástico",
      precio: "Bs 1,50/kg",
      descripcion: "Bolsas, envases y otros plásticos reciclables.",
    },
    {
      nombre: "Botellas PET",
      precio: "Bs 2,00/kg",
      descripcion: "Botellas de agua, gaseosa y otros envases PET.",
    },
    {
      nombre: "Cartón",
      precio: "Bs 0,80/kg",
      descripcion: "Cajas y cartón corrugado.",
    },
    {
      nombre: "Aluminio",
      precio: "Bs 7,00/kg",
      descripcion: "Latas y otros objetos de aluminio.",
    },
    {
      nombre: "Papel",
      precio: "Bs 1,50/kg",
      descripcion: "Hojas, periódicos, revistas y otros papeles.",
    },
    {
      nombre: "Vidrio",
      precio: "Bs 1,00/kg",
      descripcion: "Botellas y frascos de vidrio.",
    },
    {
      nombre: "Chatarra",
      precio: "Bs 1,00/kg",
      descripcion: "Hierro y otros metales reciclables.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F1E8] text-[#24342D]">

      {/* ENCABEZADO */}
      <header className="bg-[#2D302B] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <h1 className="text-2xl font-semibold">
            NUEVA VIDA
          </h1>

          <span className="text-sm">
            Página Principal
          </span>

        </div>
      </header>


      {/* CONTENIDO */}
      <section className="mx-auto max-w-5xl px-6 py-10">

        {/* TITULO */}
        <div className="mb-8 text-center">

          <h2 className="text-3xl font-semibold">
            Dale una nueva vida a tus materiales
          </h2>

          <p className="mt-2 text-[#52645A]">
            Conoce el precio de los materiales reciclables por kilo
          </p>

          <p className="mt-1 text-sm text-[#68766D]">
            Selecciona un material para conocer sus detalles.
          </p>

        </div>


        {/* TARJETAS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {materiales.map((material) => (

            <button
              key={material.nombre}
              onClick={() => setMaterialSeleccionado(material.nombre)}
              className={`rounded-xl bg-[#A8B39D] p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                materialSeleccionado === material.nombre
                  ? "ring-2 ring-[#52645A]"
                  : ""
              }`}
            >

              {/* NOMBRE */}
              <h3 className="text-lg font-semibold text-[#24342D]">
                {material.nombre}
              </h3>


              {/* ESPACIO PARA IMAGEN */}
              <div className="mx-auto mt-4 flex h-16 w-28 items-center justify-center rounded-lg bg-[#DFE3D8]">

                <span className="text-2xl">
                  ♻️
                </span>

              </div>


              {/* DESCRIPCION */}
              <p className="mt-4 text-sm text-[#405047]">
                {material.descripcion}
              </p>


              {/* PRECIO */}
              <p className="mt-3 text-lg font-semibold text-[#24342D]">
                {material.precio}
              </p>

            </button>

          ))}

        </div>


        {/* MATERIAL SELECCIONADO */}
        {materialSeleccionado && (
          <div className="mt-8 text-center">

            <p className="text-sm text-[#52645A]">
              Material seleccionado:
            </p>

            <p className="mt-1 text-lg font-semibold text-[#24342D]">
              {materialSeleccionado}
            </p>

          </div>
        )}

      </section>


      {/* PIE DE PAGINA */}
      <footer className="mt-8 bg-[#2D302B] px-6 py-5 text-center text-sm text-[#E7E6DC]">
        Nueva Vida · Recicla, vende y contribuye con una Santa Cruz más limpia
      </footer>

    </main>
  );
}