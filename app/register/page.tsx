
export default function Register() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <div>
            <form action="">
              //esta es la pantalla para registrarse
              <input type="text" placeholder="Nombre" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
              <input type="text" placeholder="Apellido" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
              <input type="email" placeholder="Correo" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
              <input type="text" placeholder="Usuario" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
              <input type="password" placeholder="Contraseña" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
              <input type="password" placeholder="Confirma tu contraseña" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Registrarse
              </button>
            </form>
          </div>
          <div>
              {/* entradas del usuario */}
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellido" />
              <input type="email" placeholder="Correo" />
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
              <input type="password" placeholder="Confirma tu contraseña" />
              {/* boton de registro */}
              <button>Registrarse</button>
            </form>
          </div>
          <div>
            <h1>Este es el registrar de la pagina</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
