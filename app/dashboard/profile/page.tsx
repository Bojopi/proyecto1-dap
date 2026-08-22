"use client";

import React, { useState } from "react";
import Button from "../../components/Button";
import StatusBadge from "../../components/StatusBadge";

export default function ProfilePage() {
  // Form State para Game Developer
  const [profileData, setProfileData] = useState({
    firstName: "Eduardo",
    lastName: "Ribera Coimbra",
    username: "eduardogamedev",
    email: "eduardo.ribera@gamestudio.dev",
    phone: "+591 70000000",
    role: "Gameplay Programmer & Game Designer",
    department: "Desarrollo de Videojuegos & Medios Interactivos",
    bio: "Desarrollador de videojuegos enfocado en programación de mecánicas, inteligencia artificial de enemigos y diseño de niveles en Godot, Unity y Unreal Engine. Apasionado por la optimización y el pixel art.",
    location: "Santa Cruz, Bolivia",
  });

  // Habilidades y herramientas de Game Dev
  const [skills, setSkills] = useState([
    "Godot 4",
    "Unity (C#)",
    "Unreal Engine 5",
    "Blender 3D",
    "Pixel Art & Aseprite",
    "HLSL / Shaders",
    "Git & GitHub",
    "Diseño de Niveles",
  ]);
  const [newSkill, setNewSkill] = useState("");

  // Preferencias de Notificaciones
  const [notifications, setNotifications] = useState({
    emailBugAssigned: true,
    emailBuildReady: true,
    emailPlaytestReport: false,
    appSound: true,
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Clases estandarizadas para inputs con alto contraste
  const inputClass =
    "w-full px-3.5 py-2 text-sm font-medium text-slate-900 bg-slate-50 border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white focus:border-indigo-600 transition-all";

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12 text-slate-900">
      {/* 1. Header Banner de Perfil Game Dev */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Banner Temático Gaming */}
        <div className="h-36 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/30" />
          <div className="absolute top-3 right-4 text-xs font-bold text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
            🎮 Nivel de Dev: Senior Student
          </div>
        </div>

        {/* Profile Card Header */}
        <div className="px-6 md:px-8 pb-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 gap-4 mb-4">
            <div className="flex items-end gap-4">
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-indigo-800 to-purple-600 text-white font-black text-3xl flex items-center justify-center ring-4 ring-white shadow-xl">
                  👾
                </div>
                <span
                  className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-white"
                  title="Disponible para desarrollo"
                />
              </div>
              <div className="mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-bold text-slate-900">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <StatusBadge status="en_progreso" />
                </div>
                <p className="text-sm font-semibold text-slate-600">@{profileData.username} • {profileData.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={handleSave}
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                }
              >
                Actualizar Datos
              </Button>
            </div>
          </div>

          {/* Quick Info bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profileData.email}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profileData.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profileData.department}
            </span>
          </div>

          {isSaved && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-bold flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              ¡Perfil de desarrollador actualizado correctamente!
            </div>
          )}
        </div>
      </div>

      {/* 2. Estadísticas de Desarrollo & Gaming */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Juegos / Demos</p>
          <p className="text-2xl font-extrabold text-indigo-600 mt-1">4 Títulos</p>
          <span className="text-[11px] font-bold text-slate-600">2 lanzados en Itch.io</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Game Jams</p>
          <p className="text-2xl font-extrabold text-purple-600 mt-1">3 Jams</p>
          <span className="text-[11px] font-bold text-emerald-600">Top 10 en puntuación</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bugs Resueltos</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">95%</p>
          <span className="text-[11px] font-bold text-slate-600">Física y colisiones</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Horas de Game Dev</p>
          <p className="text-2xl font-extrabold text-pink-600 mt-1">240 hrs</p>
          <span className="text-[11px] font-bold text-slate-600">Este semestre</span>
        </div>
      </div>

      {/* 3. Formulario de Datos & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-1">Información del Desarrollador</h2>
            <p className="text-xs font-medium text-slate-500 mb-6">Actualiza tu ficha de presentación y contacto.</p>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Apellidos</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Rol Principal</label>
                  <input
                    type="text"
                    name="role"
                    value={profileData.role}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Departamento / Carrera</label>
                  <input
                    type="text"
                    name="department"
                    value={profileData.department}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">Biografía & Intereses de Desarrollo</label>
                <textarea
                  rows={4}
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className={`${inputClass} leading-relaxed`}
                />
              </div>

              <div className="pt-2 flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
                >
                  Actualizar Datos
                </Button>
              </div>
            </form>
          </div>

          {/* Seguridad */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-1">Seguridad & Contraseña</h2>
            <p className="text-xs font-medium text-slate-500 mb-4">Gestiona las credenciales de acceso a tu cuenta.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">Contraseña Actual</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">Nueva Contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">Confirmar</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" className="font-semibold text-slate-800 border-slate-300">
                Guardar Contraseña
              </Button>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Stack & Notificaciones */}
        <div className="space-y-6">
          {/* Motores & Herramientas */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-1">Motores & Stack de Juego</h3>
            <p className="text-xs font-medium text-slate-500 mb-4">Herramientas que utilizas en tus proyectos.</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-950 rounded-lg text-xs font-bold transition-colors"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-indigo-400 hover:text-rose-600 cursor-pointer font-black ml-1 text-sm"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <form onSubmit={handleAddSkill} className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Ej: FMOD Studio"
                className="flex-1 px-3 py-1.5 text-xs font-medium text-slate-900 bg-slate-50 border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <Button type="submit" variant="secondary" size="sm" className="font-semibold">
                Añadir
              </Button>
            </form>
          </div>

          {/* Notificaciones */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-1">Notificaciones de Dev</h3>
            <p className="text-xs font-medium text-slate-500 mb-4">Configura tus alertas de producción.</p>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.emailBugAssigned}
                  onChange={(e) =>
                    setNotifications({ ...notifications, emailBugAssigned: e.target.checked })
                  }
                  className="w-4 h-4 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900">Bugs Asignados</p>
                  <p className="text-[11px] font-medium text-slate-500">Avisar cuando se reporte un bug en tu mecánica</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.emailBuildReady}
                  onChange={(e) =>
                    setNotifications({ ...notifications, emailBuildReady: e.target.checked })
                  }
                  className="w-4 h-4 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900">Nuevas Builds Compiladas</p>
                  <p className="text-[11px] font-medium text-slate-500">Notificar cuando la build de prueba esté lista</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.emailPlaytestReport}
                  onChange={(e) =>
                    setNotifications({ ...notifications, emailPlaytestReport: e.target.checked })
                  }
                  className="w-4 h-4 mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                />
                <div>
                  <p className="text-xs font-bold text-slate-900">Feedback de Playtesting</p>
                  <p className="text-[11px] font-medium text-slate-500">Reporte de impresiones de jugadores</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
