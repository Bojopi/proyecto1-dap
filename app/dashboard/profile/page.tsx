"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowTrendUp,
	faBriefcase,
	faCalendarDays,
	faCheck,
	faEnvelope,
	faLocationDot,
	faPen,
	faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";

const activity = [
	{ title: "Completaste la operación Tormenta de Acero", time: "Hace 2 horas", color: "bg-[#d5b45b]" },
	{ title: "Te uniste al escuadrón Panzer Wolves", time: "Ayer, 16:20", color: "bg-[#89906f]" },
	{ title: "Desbloqueaste una mejora para tu vehículo", time: "12 de mayo, 09:45", color: "bg-[#b98d29]" },
];

export default function Profile() {
	return (
		<div className="min-h-screen bg-[#e8e4d8] text-[#20251f]">
			<Header />

			<main className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:pt-12">
				<div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#b6b29f] pb-6 sm:flex-row sm:items-end">
					<div>
						<p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#8a6b25]">Centro de operaciones / Expediente</p>
						<h1 className="text-3xl font-black uppercase tracking-tight text-[#20251f] sm:text-4xl">Ficha del comandante</h1>
						<p className="mt-2 text-[#68705f]">Administra tu perfil de piloto y revisa tu historial de operaciones.</p>
					</div>
					<button className="inline-flex w-fit items-center gap-2 border border-[#596044] bg-[#20251f] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-[#f5ce68] transition-colors hover:bg-[#596044]">
						<FontAwesomeIcon icon={faPen} className="text-xs" />
						Editar ficha
					</button>
				</div>

				<section className="overflow-hidden border border-[#596044] bg-[#20251f] shadow-xl">
					<div className="h-28 bg-[#596044] sm:h-36" />
					<div className="relative px-5 pb-6 sm:px-8 sm:pb-8">
						<div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-end">
								<div
									className="flex h-28 w-28 shrink-0 items-center justify-center border-4 border-[#20251f] bg-[#d5b45b] text-4xl font-black text-[#20251f] shadow-lg sm:h-32 sm:w-32"
									role="img"
									aria-label="Insignia de Carlos Mendoza"
								>C M</div>
								<div className="pb-1">
									<h2 className="text-2xl font-black text-white">Carlos Mendoza</h2>
									<p className="mt-1 text-[#bfc3aa]">Comandante de escuadrón / Rango IV</p>
								</div>
							</div>
							<div className="flex items-center gap-2 self-start border border-[#89906f] bg-[#596044] px-3 py-1.5 text-sm font-bold text-[#f5ce68] sm:self-end">
								<span className="h-2 w-2 bg-[#d5b45b]" />
								En servicio
							</div>
						</div>

						<div className="mt-7 grid gap-4 border-t border-[#596044] pt-5 text-sm text-[#d9d8c8] md:grid-cols-3">
							<span className="flex min-w-0 items-start gap-2"><FontAwesomeIcon icon={faEnvelope} className="mt-0.5 w-4 shrink-0 text-[#d5b45b]" /><span className="break-all">carlos.mendoza@command.com</span></span>
							<span className="flex min-w-0 items-start gap-2"><FontAwesomeIcon icon={faLocationDot} className="mt-0.5 w-4 shrink-0 text-[#d5b45b]" /><span>Base Sierra, Sector 7</span></span>
							<span className="flex min-w-0 items-start gap-2"><FontAwesomeIcon icon={faCalendarDays} className="mt-0.5 w-4 shrink-0 text-[#d5b45b]" /><span>En servicio desde mayo de 2024</span></span>
						</div>
					</div>
				</section>

				<div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
					<section className="border border-[#c2bfae] bg-[#f5f1e6] p-6 shadow-sm sm:p-7">
						<div className="flex items-start justify-between">
							<div>
								<p className="text-sm font-black uppercase tracking-wider text-[#8a6b25]">Registro de combate</p>
								<h2 className="mt-1 text-xl font-black uppercase text-[#20251f]">Rendimiento del piloto</h2>
							</div>
							<FontAwesomeIcon icon={faArrowTrendUp} className="border border-[#c2bfae] bg-[#e8e4d8] p-3 text-[#8a6b25]" />
						</div>
						<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
							{[
								["124", "Batallas ganadas"],
								["08", "Vehículos operativos"],
								["92%", "Precisión media"],
								["18", "Días en servicio"],
							].map(([value, label]) => (
								<div key={label} className="border border-[#dedacd] bg-[#e8e4d8] p-4">
									<p className="text-2xl font-black text-[#20251f]">{value}</p>
									<p className="mt-1 text-xs leading-4 text-[#68705f]">{label}</p>
								</div>
							))}
						</div>
						<div className="mt-7">
								<div className="mb-2 flex justify-between text-sm"><span className="font-medium text-[#4f5748]">Progreso de campaña</span><span className="font-black text-[#8a6b25]">78%</span></div>
								<div className="h-2 overflow-hidden bg-[#d7d4c5]"><div className="h-full w-[78%] bg-[#b98d29]" /></div>
						</div>
					</section>

					<section className="border border-[#c2bfae] bg-[#f5f1e6] p-6 shadow-sm sm:p-7">
						<div className="flex items-start justify-between">
							<div>
								<p className="text-sm font-black uppercase tracking-wider text-[#8a6b25]">Seguridad</p>
								<h2 className="mt-1 text-xl font-black uppercase text-[#20251f]">Cuenta protegida</h2>
							</div>
							<FontAwesomeIcon icon={faShieldHalved} className="border border-[#c2bfae] bg-[#e8e4d8] p-3 text-[#596044]" />
						</div>
						<div className="mt-6 space-y-4">
							<div className="flex items-center justify-between border-b border-[#dedacd] pb-4"><span className="text-sm text-[#68705f]">Correo verificado</span><span className="flex items-center gap-1.5 text-sm font-black text-[#596044]"><FontAwesomeIcon icon={faCheck} /> Sí</span></div>
							<div className="flex items-center justify-between border-b border-[#dedacd] pb-4"><span className="text-sm text-[#68705f]">Autenticación de dos pasos</span><span className="text-sm font-black text-[#b98d29]">Pendiente</span></div>
							<div className="flex items-center justify-between"><span className="text-sm text-[#68705f]">Último acceso</span><span className="text-sm font-medium text-[#4f5748]">Hoy, 08:42</span></div>
						</div>
					</section>
				</div>

				<section className="mt-6 border border-[#c2bfae] bg-[#f5f1e6] p-6 shadow-sm sm:p-7">
					<div className="flex items-center justify-between">
						<div><p className="text-sm font-black uppercase tracking-wider text-[#8a6b25]">Bitácora</p><h2 className="mt-1 text-xl font-black uppercase text-[#20251f]">Actividad reciente</h2></div>
						<FontAwesomeIcon icon={faBriefcase} className="text-[#b6b29f]" />
					</div>
					<div className="mt-5 divide-y divide-[#dedacd]">
						{activity.map((item) => (
							<div key={item.title} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
								<span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
								<p className="flex-1 text-sm font-medium text-[#4f5748]">{item.title}</p>
								<span className="text-xs text-[#858778]">{item.time}</span>
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
