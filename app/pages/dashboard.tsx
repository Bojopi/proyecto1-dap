import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faGaugeHigh, faLock } from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
        <main className="flex flex-col items-center justify-center gap-4">
            <div>
                <h1 className="flex items-center gap-2 text-2xl font-bold"><FontAwesomeIcon icon={faGaugeHigh} className="h-5 w-5 text-blue-500" />Bienvenido al dashboard</h1>
                <p className="text-gray-500">Dashboard Principal</p>
            </div>
            <form className="flex flex-col gap-4">
                <label className="relative"><FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 h-4 w-4 text-gray-400" /><input type="email" placeholder="Correo electrónico" className="border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /></label>
                <label className="relative"><FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 h-4 w-4 text-gray-400" /><input type="password" placeholder="Contraseña" className="border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /></label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
                >
                    <span className="inline-flex items-center gap-2">dashboard <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" /></span>
                </button>
            </form>         
                
            
        </main> 
    </div>
    );  
}