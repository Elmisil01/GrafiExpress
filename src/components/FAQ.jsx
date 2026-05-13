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
    pregunta: "¿Cuánto dura un ploteo vehicular?",
    respuesta:
      "Con vinilos Arlon de primera línea, entre 5 y 7 años en condiciones normales de uso. Materiales de menor calidad pueden durar 2-3 años.",
  },
  {
    pregunta: "¿Qué es el vinilo Arlon y por qué es mejor?",
    respuesta:
      "Arlon es una marca líder mundial en vinilos para gráfica publicitaria. Sus materiales tienen mayor resistencia UV, mejor adhesión a largo plazo y menor riesgo de burbujas o desprendimientos.",
  },
  {
    pregunta: "¿Se puede sacar un ploteo vehicular sin dañar la pintura?",
    respuesta:
      "Sí. Los vinilos de calidad están diseñados para removerse sin dejar marca en la pintura original, siempre que se retiren correctamente con calor y técnica adecuada.",
  },
  {
    pregunta: "¿Cómo se limpia un vehículo ploteado?",
    respuesta:
      "Con agua y jabón neutro, sin presión alta de agua. Evitar el lavado a presión directamente sobre los bordes del vinilo. No usar disolventes ni alcohol.",
  },
  {
    pregunta: "¿Cuánto dura una cartelería LED?",
    respuesta:
      "Las letras corpóreas LED tienen una vida útil de entre 30.000 y 50.000 horas de encendido, lo que equivale a más de 10 años en uso normal.",
  },
  {
    pregunta: "¿Qué diferencia hay entre banner lona y frontlight?",
    respuesta:
      "La lona es un banner estándar sin iluminación. El frontlight es un material traslúcido para iluminarse desde el frente, con mayor impacto visual nocturno.",
  },
  {
    pregunta: "¿Hacen diseño o necesito llevar el arte terminado?",
    respuesta:
      "Podés traer el arte terminado o solo la idea. Si necesitás diseño lo coordinamos. Avisanos cuando pedís el presupuesto para incluirlo en la cotización.",
  },
  {
    pregunta: "¿Hacen instalación o solo fabricación?",
    respuesta:
      "Hacemos las dos cosas. Fabricamos e instalamos en la zona sur del GBA.",
  },
  {
    pregunta: "¿Tienen factura?",
    respuesta:
      "Sí. Somos una empresa habilitada bajo Resolución 5-E/2018. Trabajamos con factura sin problema.",
  },
  {
    pregunta: "¿Cuál es el mínimo de pedido?",
    respuesta:
      "No hay un mínimo formal. Trabajamos desde calcos simples hasta flotas completas.",
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
