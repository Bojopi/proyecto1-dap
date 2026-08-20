"use client";

export default function Login() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <form action="">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">INICIO DE SESION</h2>
            <input type="text" placeholder="Usuario" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
            <input type="password" placeholder="Contraseña" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Ingresar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}