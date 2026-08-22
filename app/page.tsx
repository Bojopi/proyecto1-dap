"use client";

import React from "react";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Navbar Superior */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              🎮
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                Taskflow GameDev
              </span>
              <span className="block text-[10px] text-indigo-400 font-bold uppercase tracking-widest -mt-1">
                Studio Workspace
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="primary"
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
              >
                Abrir Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 backdrop-blur-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Plataforma de Gestión para Creadores de Videojuegos
        </div>

        {/* Titular Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight sm:leading-tight">
          De la idea al lanzamiento: gestiona tus{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            videojuegos
          </span>{" "}
          en un solo lugar.
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
          Organiza tus sprints de desarrollo en Unity, Unreal Engine o Godot. Controla assets 3D, animaciones, mecánicas de juego, audio y playtests con fluidez.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-xl shadow-indigo-500/25 px-8"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            >
              Ir al Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/profile" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-slate-900/80 text-slate-200 border-slate-700 hover:bg-slate-800 hover:text-white"
            >
              Ver Perfil de Dev
            </Button>
          </Link>
        </div>

        {/* Tarjetas de Características Gaming */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-xs hover:border-indigo-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              👾
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Sprints & Motores Gráficos</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Monitorea el avance de tus proyectos en Unity, Godot o Unreal Engine organizados por niveles y fases.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-xs hover:border-purple-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Assets, Shaders & 3D</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Supervisa el modelado en Blender, texturizado, sprites 2D y diseño sonoro listos para producción.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-xs hover:border-pink-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-pink-950 border border-pink-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🐞
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Bugs & Playtesting</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Registra errores de física, colisiones y rendimiento para optimizar tus builds antes del demo o entrega.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Taskflow GameDev Studio — Proyecto de Desarrollo Web</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/dashboard/profile" className="hover:text-white transition-colors">
              Perfil
            </Link>
            <Link href="/login" className="hover:text-white transition-colors">
              Login
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
