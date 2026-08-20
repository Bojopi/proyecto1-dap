export default function ReportesPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
        <main className="flex flex-col items-center justify-center gap-4">
            <div>
                <h1 className="text-2xl font-bold">Nuevo reporte</h1>
                <p className="text-gray-500">Completa los datos del reporte</p>
            </div>
            <form className="flex w-80 flex-col gap-4">
                <input
                    type="text"
                    placeholder="Título del reporte"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    defaultValue=""
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Selecciona una categoría</option>
                    <option value="ventas">Ventas</option>
                    <option value="inventario">Inventario</option>
                    <option value="usuarios">Usuarios</option>
                    <option value="otro">Otro</option>
                </select>
                <input
                    type="date"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    defaultValue="pendiente"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="en-revision">En revisión</option>
                    <option value="completado">Completado</option>
                </select>
                <textarea
                    placeholder="Descripción del reporte"
                    rows={5}
                    required
                    className="resize-none border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
                >
                    Guardar reporte
                </button>
            </form>
        </main>
    </div>
    );
}