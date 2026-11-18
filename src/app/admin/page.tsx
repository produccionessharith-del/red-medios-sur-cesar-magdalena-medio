"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, LockKeyhole, LogOut, ShieldCheck, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setUserEmail(data.session?.user.email ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user.email ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true); setError(""); setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message === "Invalid login credentials" ? "Correo o contraseña incorrectos." : error.message);
    else setMessage("Inicio de sesión correcto. La cuenta ya está autenticada.");
    setBusy(false);
  }

  async function handleLogout() {
    if (!supabase) return;
    await supabase.auth.signOut(); setMessage("Sesión cerrada.");
  }

  return <main className="admin-page"><section className="admin-box">
    <Link href="/" className="back"><ArrowLeft size={16}/> Volver al portal</Link>
    <div className="admin-symbol"><LockKeyhole size={25}/></div>
    <div className="section-kicker">PANEL DE CONTROL</div>
    <h1>Administración</h1>
    <p>Acceso privado para el equipo administrador de la Red Regional de Medios.</p>
    {!supabase ? <div className="notice">Faltan las variables de conexión de Supabase. Configura NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en el entorno de Vercel.</div> : userEmail ? <div className="auth-state">
      <div className="auth-heading"><ShieldCheck size={22}/> Sesión iniciada</div>
      <p>Cuenta: <strong>{userEmail}</strong></p>
      <div className="notice">La autenticación está conectada. Antes de habilitar la gestión de noticias, medios y eventos, debemos asignar el rol administrativo a esta cuenta y aplicar las políticas de seguridad de la base de datos.</div>
      <button className="admin-submit secondary" onClick={handleLogout}><LogOut size={16}/> Cerrar sesión</button>
    </div> : <form onSubmit={handleLogin} className="admin-form">
      <label htmlFor="admin-email">Correo electrónico</label>
      <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin@tudominio.com" />
      <label htmlFor="admin-password">Contraseña</label>
      <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Tu contraseña" />
      <button className="admin-submit" type="submit" disabled={busy}>{busy ? "Ingresando…" : "Iniciar sesión"}</button>
      <p className="muted">Las cuentas se crean desde Supabase Authentication. El registro público está deshabilitado.</p>
    </form>}
    {error && <p className="form-error"><AlertCircle size={15}/>{error}</p>}
    {message && <p className="form-message">{message}</p>}
  </section></main>;
}
