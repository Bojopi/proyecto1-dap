"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ReportesPage() {
    const router = useRouter();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        router.push("/dashboard");
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-4">
            <main className="flex flex-col items-center justify-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Reportes</h1>
                    <p className="text-gray-500">Esto son los reportes :D</p>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="date"
                        placeholder="Fecha inicio"
                        required
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        placeholder="Fecha fin"
                        required
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
                    >
                        Generar reporte
                    </button>
                </form>
            </main>
        </div>
    );
}