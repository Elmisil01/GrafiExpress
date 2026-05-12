import React from 'react';

const cards = [
  {
    icon: "⚙",
    color: "orange",
    titulo: "Empresa familiar con trayectoria",
    texto:
      "Más de una década en el rubro gráfico. El oficio pasó de generación en generación, y eso se nota en cada trabajo.",
  },
  {
    icon: "◈",
    color: "blue",
    titulo: "Materiales certificados",
    texto:
      "Vinilos Arlon, tintas UV y materiales para exteriores. Trabajamos con lo que realmente dura, no con lo más barato del mercado.",
  },
  {
    icon: "✓",
    color: "orange",
    titulo: "Habilitación Res. 5-E/2018",
    texto:
      "Empresa verificada y habilitada. Podés pedirnos documentación sin problema — todo en regla.",
  },
  {
    icon: "⬡",
    color: "blue",
    titulo: "Zona sur GBA — con traslado",
    texto:
      "San Vicente, Cañuelas, Brandsen, La Plata y alrededores. Coordinamos instalación en el lugar que necesitás.",
  },
];

const servicios = [
  { label: "Ploteo vehicular", color: "orange" },
  { label: "Cartelería LED", color: "blue" },
  { label: "Letras Corpóreas", color: "orange" },
  { label: "Vinilos Arlon", color: "orange" },
  { label: "Vidrieras", color: "blue" },
  { label: "Banners", color: "orange" },
  { label: "Microperforados", color: "blue" },
];

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="bg-fondo py-20 px-6 relative overflow-hidden"
    >
      {/* Decoración geométrica de placas (Estilo unificado) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <div className="absolute top-0 left-0 w-[70%] h-full bg-azul-oscuro/20 skew-x-12 border-r border-azul-neon/20 shadow-[15px_0_40px_rgba(0,195,255,0.05)]"></div>
        <div className="absolute top-[10%] right-[-5%] w-[50%] h-[120%] bg-fondo -rotate-6 border-l border-azul-neon/10 shadow-[-15px_0_30px_rgba(0,195,255,0.05)]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[80%] h-[40%] bg-azul-oscuro/10 -skew-y-3 border-t border-azul-neon/20 shadow-[0_-15px_30px_rgba(0,195,255,0.05)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Encabezado */}
        <div className="mb-12">
          <p className="text-naranja text-xs font-bold tracking-[3px] uppercase mb-2">
            Quiénes somos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            MÁS DE UNA DÉCADA <br />
            <span className="text-azul-neon uppercase">EN LA GRÁFICA</span>
          </h2>

          {/* Divisor — ajustar si el resto del sitio usa otro estilo */}
          <div className="flex items-center gap-2 mt-5">
            <div className="w-12 h-0.5 bg-naranja" />
            <div className="w-2 h-2 rounded-full bg-azul-neon" />
            <div className="w-12 h-0.5 bg-azul-neon" />
          </div>
        </div>

        {/* Grid principal: texto izq, cards der */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Columna izquierda — texto */}
          <div className="space-y-5">
            <p className="text-slate-400 text-base leading-relaxed">
              GrafiExpress nació como un proyecto familiar en{" "}
              <span className="text-white font-semibold">Empalme San Vicente</span>{" "}
              y creció de la misma manera: trabajo a trabajo, cliente a cliente.
              Lo que empezó con el padre en la gráfica se convirtió en un oficio
              que hoy maneja toda la familia, con el mismo nivel de exigencia
              desde el primer día.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Con años en el rubro sabemos lo que dura y lo que no. Por eso
              trabajamos solo con{" "}
              <span className="text-white font-semibold">
                materiales de primera línea
              </span>{" "}
              —{" "}
              <span className="text-azul-neon">vinilos Arlon</span>, tintas de
              exteriores, estructuras que aguantan sol, lluvia y tiempo. No hay
              atajos en lo que hacemos.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Hoy atendemos empresas, flotas comerciales y locales en toda la{" "}
              <span className="text-white font-semibold">
                zona sur del Gran Buenos Aires
              </span>
              . Desde el calco de una moto hasta la identidad gráfica completa
              de una flota de camiones. Cada trabajo tiene el mismo cuidado.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Trabajamos con{" "}
              <span className="text-white font-semibold">
                presupuesto cerrado
              </span>
              . Lo que acordamos es lo que se cobra. Sin costos ocultos, sin
              sorpresas al final.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-azul-neon bg-azul-oscuro/40 rounded-r-xl px-6 py-5">
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "La gráfica es un oficio. Se aprende con tiempo, con errores y
                con muchas horas de trabajo. Nosotros tenemos eso.{" "}
                <span className="text-white not-italic font-semibold">
                  Y se nota en el resultado.
                </span>
                "
              </p>
            </blockquote>
          </div>

          {/* Columna derecha — cards + pills */}
          <div className="flex flex-col gap-4">
            {cards.map((card) => (
              <div
                key={card.titulo}
                className="bg-azul-oscuro/60 border border-azul-oscuro rounded-2xl p-5 flex items-start gap-4 hover:border-azul-neon/40 transition-colors duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                    card.color === "orange"
                      ? "bg-naranja/10 text-naranja"
                      : "bg-azul-neon/10 text-azul-neon"
                  }`}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {card.titulo}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.texto}
                  </p>
                </div>
              </div>
            ))}

            {/* Pills de servicios */}
            <div className="flex flex-wrap gap-2 pt-2">
              {servicios.map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-2 bg-azul-oscuro/60 border border-azul-oscuro rounded-full px-4 py-1.5 text-xs text-slate-500"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      s.color === "orange"
                        ? "bg-naranja"
                        : "bg-azul-neon"
                    }`}
                  />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Nosotros;
