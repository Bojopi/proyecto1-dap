import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faBriefcase, faCalendarDays, faCheck, faEnvelope, faFloppyDisk, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const activity = [
  ["Creaste el proyecto Portal de clientes", "Hace 2 horas"],
  ["Completaste la tarea Revisar propuesta visual", "Ayer"],
  ["Actualizaste tu información de perfil", "12 ago 2026"],
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-100 pt-20 text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">Cuenta</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Mi perfil</h1>
          <p className="mt-2 text-sm text-slate-500">Administra tus datos y preferencias del espacio de trabajo.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-xl bg-slate-900 p-6 text-white shadow-md">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-600 text-2xl font-bold">JR</div>
            <h2 className="mt-5 flex items-center gap-2 text-xl font-semibold"><FontAwesomeIcon icon={faUser} className="h-4 w-4 text-slate-400" />Jose Rios</h2>
            <p className="mt-1 text-sm text-slate-400">Administrador</p>
            <div className="mt-8 border-t border-slate-700 pt-5">
              <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500"><FontAwesomeIcon icon={faCalendarDays} className="h-3 w-3" />Miembro desde</p>
              <p className="mt-1 text-sm text-slate-200">Enero de 2026</p>
            </div>
            <div className="mt-5 border-t border-slate-700 pt-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">Actividad</p>
              <p className="mt-1 text-sm text-slate-200">24 acciones este mes</p>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="flex flex-col justify-between gap-2 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
                <div><h2 className="flex items-center gap-2 text-lg font-semibold"><FontAwesomeIcon icon={faUser} className="h-4 w-4 text-slate-400" />Información personal</h2><p className="mt-1 text-sm text-slate-500">Estos datos se muestran en tu espacio de trabajo.</p></div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"><FontAwesomeIcon icon={faCheck} className="h-3 w-3" />Perfil verificado</span>
              </div>
              <form className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700"><span className="flex items-center gap-2"><FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5 text-slate-400" />Nombre completo</span><input name="nombre" defaultValue="Jose Rios" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200" /></label>
                <label className="text-sm font-medium text-slate-700"><span className="flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-slate-400" />Correo electrónico</span><input name="correo" type="email" defaultValue="jose@taskflow.com" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200" /></label>
                <label className="text-sm font-medium text-slate-700"><span className="flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} className="h-3.5 w-3.5 text-slate-400" />Rol</span><input name="rol" defaultValue="Administrador" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200" /></label>
                <label className="text-sm font-medium text-slate-700"><span className="flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-slate-400" />Teléfono</span><input name="telefono" placeholder="Añadir teléfono" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200" /></label>
                <div className="flex justify-end sm:col-span-2"><button type="submit" className="flex items-center gap-2 rounded-md bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"><FontAwesomeIcon icon={faFloppyDisk} className="h-3.5 w-3.5" />Guardar cambios</button></div>
              </form>
            </section>

            <section className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-semibold"><FontAwesomeIcon icon={faAt} className="h-4 w-4 text-slate-400" />Actividad reciente</h2>
              <div className="mt-5 divide-y divide-slate-100">{activity.map(([description, date]) => <div key={description} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-400" /><div className="flex flex-1 flex-col justify-between gap-1 text-sm sm:flex-row"><span className="text-slate-700">{description}</span><span className="text-xs text-slate-400">{date}</span></div></div>)}</div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
