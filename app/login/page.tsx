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
    <main className="flex flex-1 w-full flex-col items-center justify-center bg-slate-100">
      <div 
      className="text-slate-900 flex flex-row w-full items-center 
      justify-around max-w-2xl bg-white h-96 shadow-lg">
        <div className="flex flex-col items-start justify-start">
          <h1 className="mb-15">INICIO DE SESION</h1>
          <form 
          action=""
          className="flex flex-col w-full gap-2.5"
          >
            {/* entradas del usuario */}
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            {/* boton de inicio de sesion */}
            <button
            className="bg-[#313638] text-white">
              Ingresar</button>
          </form>
        </div>
        <div>
          <h1>Este es el login de la pagina</h1>
        </div>
      </div>
    </main>
  );
}
