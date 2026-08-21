import { Bubblegum_Sans, Butterfly_Kids } from "next/font/google";

export default function Register() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
            <div>
                <form action="">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="text" placeholder="Correo" />
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Confirma tu Contraseña" />
                <button>Registrarse</button>
        </form>
            </div>
        </div>
        <div>
            <h1>Este es el registro de la pagina</h1>
        </div>
      </main>
    </div>
  );
}
