"use client";
export default function Login() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <div>
            <form action="">
              //entradas del usuario
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
              //boton de inicio de sesion
              <button className="bg-[#313638] text">Ingresar</button>
              <button ></button>
            </form>
          </div>
          <div>
            <h1>Este es el login de la pagina</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
