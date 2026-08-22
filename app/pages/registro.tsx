export default function RegistroPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
        <main className="flex flex-col items-center justify-center gap-4">
            <div>
                <h1 className="text-2xl font-bold">Registro</h1>
                <p className="text-gray-500">Crea una nueva cuenta</p>
            </div>
            <form className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                    type="submit"
                    className="bg-[#009B3A] text-white rounded-md px-4 py-2 hover:bg-[#007A2E] transition-colors shadow-md shadow-green-200"
                >
                    Registrarse
                </button>
            </form>
        </main>
    </div>
    );
}