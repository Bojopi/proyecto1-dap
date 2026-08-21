"use client";

export default function Login() {
  return (
      <main className="flex flex-1 w-full  flex-col items-center justify-ceter bg-white-100">
        <div className="flex flex-row w-full items-center justfy-aroud max-w-2xl bg-withe h-96 shadow-lg">
          <div className="flex flex-col items-start justify- start">
            <h1 className="mb-15">INICIO DE SESION</h1>
            <form action="" className="flex flex-col w-full gap-2.5">.
            //entradas del ususario 
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            //boton de inicio de sesion
            <button className="bg-[#3313638] text-white">Ingresar</button>
            </form>
          </div>
          <div>
            <h1>Este es el login de la pagina</h1>
          </div>
        </div>
        
      </main>
  );
}