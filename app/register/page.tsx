"use client";

export default function Register() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center bg-slate-100">
      <div className="text-slate-900 flex flex-row w-full items-center justify-around max-w-2xl bg-white h-96 shadow-lg">
        <div className="flex flex-col items-start justify-start">
          <h1 className="mb-15">REGISTRO</h1>
          <form action="" className="flex flex-col w-full gap-2.5">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button className="bg-[#313638] text-white">Registrarse</button>
          </form>
        </div>
        <div>
          <h1>Este es el register de la pagina</h1>
        </div>
      </div>
    </main>
  );
}