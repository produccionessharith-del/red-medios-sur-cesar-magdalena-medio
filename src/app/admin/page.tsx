import Link from "next/link";
import { LockKeyhole, ArrowLeft } from "lucide-react";

export default function AdminPage() {
  return <main className="admin-page"><div className="admin-box"><Link href="/" className="back"><ArrowLeft size={16}/> Volver al portal</Link><div className="admin-symbol"><LockKeyhole size={25}/></div><div className="section-kicker">PANEL DE CONTROL</div><h1>Administración</h1><p>El acceso administrativo se habilitará al conectar el proyecto con Supabase y crear el primer usuario autorizado.</p><div className="notice">Configuración pendiente: crea el proyecto de Supabase y agrega las variables de entorno siguiendo el archivo README.</div></div></main>;
}
