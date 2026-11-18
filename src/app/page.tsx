import Link from "next/link";
import { ArrowRight, Radio, Tv, Newspaper, MapPin, PlayCircle, Users, Menu } from "lucide-react";

const sections = [
  { icon: Newspaper, title: "Noticias", desc: "Actualidad, comunidad, cultura, deportes y las historias de nuestros municipios.", href: "/noticias" },
  { icon: Tv, title: "Televisión en vivo", desc: "Conéctate con las señales de televisión de nuestros medios asociados.", href: "/television" },
  { icon: Radio, title: "Radio en vivo", desc: "Escucha las emisoras que hacen parte de nuestra región.", href: "/radio" },
  { icon: PlayCircle, title: "Programas y videos", desc: "Entrevistas, reportajes, especiales y producciones regionales.", href: "/videos" },
  { icon: Users, title: "Medios asociados", desc: "Conoce los canales, emisoras, periódicos y medios digitales de la red.", href: "/medios" },
  { icon: MapPin, title: "Nuestra región", desc: "Información de los municipios del Sur del Cesar y Magdalena Medio.", href: "/municipios" }
];

export default function Home() {
  return (
    <main>
      <div className="topbar"><div className="container topbar-inner"><span>Una región conectada por la información</span><span>Sur del Cesar · Magdalena Medio</span></div></div>
      <header className="header"><div className="container nav">
        <Link href="/" className="brand"><img className="brand-logo" src="/logo-red-regional.png" alt="Logo de la Red Regional de Medios de Comunicación"/></Link>
        <nav><Link href="/noticias">Noticias</Link><Link href="/medios">Nuestros medios</Link><Link href="/television">TV en vivo</Link><Link href="/radio">Radio</Link><Link href="/nosotros">Quiénes somos</Link></nav>
        <Link className="admin-link" href="/admin">Administrar <ArrowRight size={15}/></Link>
        <button className="menu" aria-label="Abrir menú"><Menu/></button>
      </div></header>
      <section className="hero"><div className="hero-overlay"/><div className="container hero-content">
        <div className="eyebrow"><span/> INFORMACIÓN QUE NOS UNE</div>
        <h1>La voz de nuestra<br/><em>región.</em></h1>
        <p>Una red que conecta medios, comunidades e historias del Sur del Cesar y el Magdalena Medio.</p>
        <div className="hero-actions"><Link className="btn-primary" href="/noticias">Explorar noticias <ArrowRight size={17}/></Link><Link className="btn-outline" href="/medios">Conocer los medios</Link></div>
      </div><div className="hero-bottom"><div className="container hero-bottom-inner"><span>PERIODISMO REGIONAL</span><span>INDEPENDENCIA · COMUNIDAD · INFORMACIÓN</span></div></div></section>
      <section className="intro container"><div><div className="section-kicker">UNIDOS POR LA INFORMACIÓN</div><h2>Una región.<br/><em>Muchas voces.</em></h2></div><p>Somos un espacio de encuentro para los medios de comunicación del Sur del Cesar y el Magdalena Medio. Visibilizamos el trabajo periodístico local y acercamos a las comunidades a la información de su territorio.</p></section>
      <section className="section-wrap"><div className="container"><div className="section-heading"><div><div className="section-kicker">EXPLORA LA RED</div><h2>Todo lo que pasa, <em>en un solo lugar.</em></h2></div><Link href="/medios" className="text-link">Ver toda la red <ArrowRight size={16}/></Link></div>
        <div className="cards">{sections.map(({icon: Icon,title,desc,href},i)=><Link className="feature-card" href={href} key={title}><div className="card-number">0{i+1}</div><div className="feature-icon"><Icon size={24}/></div><h3>{title}</h3><p>{desc}</p><span className="card-arrow"><ArrowRight size={18}/></span></Link>)}</div>
      </div></section>
      <section className="join"><div className="container join-inner"><div><div className="section-kicker light">HAGAMOS PARTE DE ESTA HISTORIA</div><h2>Tu medio también<br/><em>tiene un lugar.</em></h2><p>Invitamos a canales, emisoras, periódicos y medios digitales a vincularse a esta red regional.</p></div><Link className="btn-light" href="/contacto">Vincular mi medio <ArrowRight size={17}/></Link></div></section>
      <footer><div className="container footer-inner"><div className="brand footer-brand"><img className="brand-logo" src="/logo-red-regional.png" alt="Logo de la Red Regional de Medios de Comunicación"/></div><p>Conectando medios. Acercando comunidades.</p><span>© {new Date().getFullYear()} Red de Medios. Todos los derechos reservados.</span></div></footer>
    </main>
  );
}
