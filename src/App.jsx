import React from 'react'
import Nosotros from './components/Nosotros'


const PlusCircle = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
);
const MapPin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Phone = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const Mail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Facebook = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-negro-profundo/50 backdrop-blur-xl border-b border-white/10 py-4 px-6 fixed w-full top-0 z-50 transition-all duration-500 hover:bg-negro-profundo/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-black tracking-tighter uppercase italic"><span className="text-rojo">GRAFI</span><span className="text-azul-express">EXPRESS</span></span>
          </div>
          <nav className="hidden md:flex gap-6 font-semibold">
            <a href="#inicio" className="text-azul-neon">Inicio</a>
            <a href="#nosotros" className="hover:text-azul-neon transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-azul-neon transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-azul-neon transition-colors">Contacto</a>
          </nav>
          <a
            href="https://wa.me/5491154582487"
            target="_blank"
            rel="noreferrer"
            className="bg-azul-express hover:bg-azul-neon text-white px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(0,195,255,0.3)]"
          >
            Presupuestar
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section id="inicio" className="relative w-full h-[35vh] landscape:h-[70vh] md:h-screen overflow-visible md:overflow-hidden flex flex-col justify-center items-center">
          {/* Fondo de Video 100% Natural */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover video-background hidden md:block"
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
              <track kind="captions" src="/videos/video2.vtt" srcLang="es" label="Español" default />
            </video>
            {/* Solo un degradado sutil por abajo para que los botones sigan siendo legibles */}
            <div className="absolute inset-0 bg-gradient-to-t from-negro-profundo/40 to-transparent"></div>
            <h1 className="sr-only">GrafiExpress — Ploteos &amp; Cartelería Profesional en San Vicente</h1>
          </div>

          <div className="absolute bottom-[-45px] landscape:bottom-4 md:bottom-[100px] left-1/2 -translate-x-1/2 z-10 w-full px-6 flex justify-center gap-3 max-w-[260px] landscape:max-w-none md:max-w-none flex-col landscape:flex-row md:flex-row">
            <a href="https://wa.me/5491154582487" className="group relative bg-azul-express text-white text-center px-3 py-1.5 md:px-10 md:py-4 rounded-lg md:rounded-2xl font-black text-xs md:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,195,255,0.6)]">
              <span className="absolute inset-0 bg-gradient-to-r from-azul-neon to-azul-express opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 tracking-wide">Contactar Ahora</span>
            </a>
            <a href="#servicios" className="group text-white text-center px-3 py-1.5 md:px-10 md:py-4 rounded-lg md:rounded-2xl font-bold text-xs md:text-lg transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 hover:scale-[1.03]">
              <span className="opacity-80 group-hover:opacity-100 tracking-wide">Ver Trabajos</span>
            </a>
          </div>
        </section>

        <Nosotros />

        {/* Services Grid */}
        <section id="servicios" className="py-24 bg-negro-profundo px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center relative">
              {/* Resplandor ambiental trasero */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-azul-neon/10 blur-[80px] rounded-full pointer-events-none"></div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter relative z-10 leading-none">
                NUESTROS
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-azul-neon via-azul-express to-rojo drop-shadow-[0_0_15px_rgba(0,195,255,0.3)]">
                  SERVICIOS
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gris-claro/60 max-w-2xl mx-auto relative z-10 font-medium tracking-wide">
                Soluciones premium con la mejor durabilidad gráfica.
              </p>

              {/* Línea moderna decorativa */}
              <div className="mt-10 flex justify-center items-center gap-4 relative z-10">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-azul-neon/50 rounded-full"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-azul-neon shadow-[0_0_12px_#00C3FF]"></div>
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-azul-neon/50 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Ploteo Vehicular', border: 'border-azul-neon', imgBase: 'ploteo', alt: 'Ploteo vehicular - transformación de flotas comerciales', desc: 'Transformación y rotulación de flotas comerciales completas.' },
                { title: 'Letras Corpóreas', border: 'border-azul-neon', imgBase: 'letras-corporeas', alt: 'Letras corpóreas en chapa, acrílico y polifan', desc: 'Letras en chapa, acrílico y polifan con acabados premium y alta durabilidad.' },
                { title: 'Vidrieras y Locales', border: 'border-azul-express', imgBase: 'vidrieras', alt: 'Vidrieras y locales - decoración de fachadas con vinilo', desc: 'Decoración de fachadas con cortes de vinilo de alta visibilidad.' },
                { title: 'Cartelería LED', border: 'border-rojo', imgBase: 'carteleria', alt: 'Cartelería LED - letras corpóreas 3D con iluminación', desc: 'Letras corpóreas 3D con iluminación para máxima exposición nocturna.' },
                { title: 'Vinilos Arlon', border: 'border-azul-neon', imgBase: 'vinilos', alt: 'Vinilos Arlon - material premium para ploteos', desc: 'Materiales Arlon líderes mundiales por su durabilidad y adherencia.' },
                { title: 'Banners frontlight', border: 'border-azul-express', imgBase: 'banners', alt: 'Banners frontlight - iluminación para máxima visibilidad', desc: 'Impresiones en gran formato y alta definición para tus ofertas.' },
                { title: 'Microperforados', border: 'border-rojo', imgBase: 'microperforados', alt: 'Microperforados - vinilo para vidrieras con visión exterior', desc: 'Señalética industrial y vidrios decorados sin perder visión exterior.' },
              ].map((svc, i) => (
                <div key={i} className={`bg-fondo/80 backdrop-blur-xl rounded-none md:rounded-3xl overflow-hidden border-t-2 ${svc.border} hover:-translate-y-3 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,195,255,0.15)] group relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="relative h-56 overflow-hidden">
                    <picture>
                      <source
                        srcSet={`/images/${svc.imgBase}-mobile.webp 332w, /images/${svc.imgBase}.webp 411w`}
                        sizes="(max-width: 768px) 332px, 411px"
                        type="image/webp"
                      />
                      <img
                        src={`/images/${svc.imgBase}.webp`}
                        alt={svc.alt}
                        width={411}
                        height={411}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale blur-[2px] opacity-40 group-hover:grayscale-[0.2] group-hover:blur-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-fondo via-fondo/40 to-transparent"></div>
                  </div>
                  <div className="p-8 pt-0 relative z-10 -mt-12">
                    <h3 className="text-2xl font-black mb-3 text-white drop-shadow-md">{svc.title}</h3>
                    <p className="text-gris-claro/50 mb-8 text-sm leading-relaxed group-hover:text-gris-claro/80 transition-colors duration-500">{svc.desc}</p>
                    <a href="https://wa.me/5491154582487" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-azul-neon font-bold text-sm tracking-wide group-hover:bg-azul-neon/10 group-hover:border-azul-neon/30 transition-all duration-300">
                      <PlusCircle size={16} /> Cotizar Proyecto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-fondo border-t border-azul-oscuro py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rojo rounded-full blur-[150px] opacity-5"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div>
            <div className="mb-6">
              <span className="text-xl font-black tracking-tighter uppercase italic"><span className="text-rojo">GRAFI</span><span className="text-azul-express">EXPRESS</span></span>
            </div>
            <p className="text-gris-claro/60 mb-6">Calcos, Ploteos y Cartelería Profesional.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/grafiexpresscalcos" target="_blank" rel="noopener noreferrer" aria-label="Seguinos en Instagram" className="bg-azul-oscuro p-3 rounded-full hover:bg-azul-neon transition-colors text-white">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="https://facebook.com/GRAFIEXPRESS" target="_blank" rel="noopener noreferrer" aria-label="Seguinos en Facebook" className="bg-azul-oscuro p-3 rounded-full hover:bg-azul-express transition-colors text-white">
                <Facebook size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto Directo</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-azul-neon" />
                <a href="https://wa.me/5491154582487" className="hover:text-azul-neon transition-colors">011 15-5458-2487 (Principal)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-azul-express" />
                <a href="mailto:Grafi_express@hotmail.com" className="hover:text-azul-express transition-colors">Grafi_express@hotmail.com</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xl font-bold mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={24} className="text-rojo shrink-0 mt-1" />
              <p>Empalme San Vicente <br /><span className="text-gris-claro/60">San Vicente, Zona Sur del Gran Buenos Aires</span></p>
            </div>
            {/* Google Maps Cuadradito */}
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-azul-oscuro mt-auto">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Empalme%20San%20Vicente,%20Buenos%20Aires&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Google Maps Ubicación"
                loading="lazy"
                className="opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-azul-oscuro text-center text-gris-claro/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#inicio" className="hover:text-azul-neon transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-azul-neon transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-azul-neon transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-azul-neon transition-colors">Contacto</a>
          </div>
          <span>&copy; {new Date().getFullYear()} Grafiexpress. Todos los derechos reservados.</span>
          <span className="text-xs">
            echo por <a href="https://pablochamarez.com.ar" target="_blank" rel="noreferrer" className="hover:text-azul-neon transition-colors font-bold">pablochamarez.com.ar</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
