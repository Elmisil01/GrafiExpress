import React from 'react';

const testimonios = [
  {
    nombre: "Martín G.",
    empresa: "Transporte MG, San Vicente",
    texto: "Plotearon toda mi flota de camionetas. El vinilo Arlon aguantó un año de uso intensivo sin despegarse. Muy prolijamente trabajado.",
    estrellas: 5,
    servicio: "Ploteo Vehicular",
  },
  {
    nombre: "Carla R.",
    empresa: "Local de ropa, Cañuelas",
    texto: "Las letras corpóreas quedaron espectaculares. De noche con el LED se ve desde lejos. Cumplieron en tiempo y forma, presupuesto cerrado como prometieron.",
    estrellas: 5,
    servicio: "Cartelería LED",
  },
  {
    nombre: "Diego P.",
    empresa: "Ferretería, La Plata",
    texto: "Necesitaba la vidriera decorada para una promoción y la entregaron en 48hs. Muy buena atención y el resultado fue mejor de lo que esperaba.",
    estrellas: 5,
    servicio: "Vidrieras y Locales",
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios" aria-label="Testimonios de clientes" className="bg-[FONDO] py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[NARANJA] text-xs font-bold tracking-[3px] uppercase mb-2">Clientes</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Lo que dicen <span className="text-[AZUL]">nuestros clientes</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-[AZUL-OSCURO]/60 border border-[AZUL-OSCURO] rounded-2xl p-6 hover:border-[AZUL]/40 transition-colors duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.estrellas }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">"{t.texto}"</p>
              <div className="border-t border-[AZUL-OSCURO] pt-4">
                <p className="text-white font-semibold text-sm">{t.nombre}</p>
                <p className="text-slate-500 text-xs">{t.empresa}</p>
                <span className="inline-block mt-2 text-[NARANJA] text-xs font-semibold bg-[NARANJA]/10 px-3 py-1 rounded-full">{t.servicio}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://g.page/r/grafiexpress/review" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-[AZUL] transition-colors">
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
