export default function RegistroPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
        <main className="flex flex-col items-center justify-center gap-4">
            <div>
                <h1 className="text-2xl font-bold">Bienvenido a registro</h1>
                <p className="text-gray-500">Registra tu cuenta para continuar</p>
            </div>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Nombre De Usuario"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
                >
                    Crear Cuenta
                </button>
            </form>
        </main>
    </div>
    );
}