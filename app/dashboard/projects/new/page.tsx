"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../../../components/Button";

export default function NewProjectPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Frontend");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/dashboard/projects" className="hover:text-blue-600">
          Proyectos
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Crear Nuevo Proyecto</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <h1 className="text-xl font-bold text-slate-900 mb-1">Crear Proyecto</h1>
        <p className="text-xs text-slate-500 mb-6">
          Ingresa los detalles para iniciar un nuevo proyecto en Taskflow.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nombre del Proyecto
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Rediseño Móvil"
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Categoría</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Diseño UI/UX">Diseño UI/UX</option>
              <option value="Seguridad">Seguridad</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Descripción</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Objetivos y alcance del proyecto..."
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Link href="/dashboard/projects">
              <Button variant="outline" size="md">
                Cancelar
              </Button>
            </Link>
            <Button variant="primary" size="md">
              Crear Proyecto
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
