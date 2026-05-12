const preguntas = [
  {
    pregunta: "¿En qué zona trabajan?",
    respuesta:
      "Trabajamos en San Vicente y toda la zona sur del Gran Buenos Aires: Cañuelas, Brandsen, La Plata y alrededores. Coordinamos la instalación en el lugar que necesitás.",
  },
  {
    pregunta: "¿El presupuesto tiene costo?",
    respuesta:
      "No. El presupuesto es sin cargo. Lo que acordamos es lo que se cobra — sin costos ocultos ni sorpresas al final del trabajo.",
  },
  {
    pregunta: "¿Qué materiales usan?",
    respuesta:
      "Trabajamos con vinilos Arlon, tintas UV y materiales certificados para exteriores. No usamos materiales de baja calidad — lo que instalamos tiene que durar.",
  },
  {
    pregunta: "¿Hacen ploteo de flotas completas?",
    respuesta:
      "Sí. Desde el calco de una moto hasta la rotulación completa de flotas de camiones. Cada trabajo tiene el mismo cuidado, sin importar el tamaño.",
  },
  {
    pregunta: "¿Cuánto tarda un ploteo vehicular?",
    respuesta:
      "Un ploteo parcial puede estar listo en 24-48 horas. Una flota completa puede llevar más tiempo dependiendo de la cantidad de vehículos. Siempre acordamos el plazo antes de empezar.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-label="Preguntas frecuentes"
      className="bg-fondo py-20 px-6 relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-azul-neon/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <p className="text-naranja text-xs font-bold tracking-[3px] uppercase mb-2">
            FAQ
          </p>
          <h2 className="text-4xl font-black text-white">
            Preguntas frecuentes
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-12 h-0.5 bg-naranja" />
            <div className="w-2 h-2 rounded-full bg-azul-neon" />
            <div className="w-12 h-0.5 bg-azul-neon" />
          </div>
        </div>

        <div className="space-y-4">
          {preguntas.map((item, i) => (
            <details
              key={i}
              className="group bg-azul-oscuro/60 border border-azul-oscuro rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-white font-semibold text-sm hover:text-azul-neon transition-colors">
                {item.pregunta}
                <span className="ml-4 text-naranja group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-gris-claro/70 text-sm leading-relaxed border-t border-azul-oscuro pt-4">
                {item.respuesta}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
