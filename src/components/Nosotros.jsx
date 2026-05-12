import React from 'react';

const Nosotros = () => {
  const stats = [
    {
      numero: "+20",
      sufijo: "",
      label: "Trabajos realizados",
      colorNum: "text-azul-neon",
    },
    {
      numero: "Zona",
      sufijo: "Sur GBA",
      label: "Cobertura principal",
      colorNum: "text-naranja",
    },
    {
      numero: "Res.",
      sufijo: "5-E/2018",
      label: "Empresa habilitada",
      colorNum: "text-white",
    },
    {
      numero: "100%",
      sufijo: "",
      label: "Presupuesto sin cargo",
      colorNum: "text-naranja",
    },
  ];

  const servicios = [
    "Ploteo vehicular",
    "Cartelería LED",
    "Vinilos Arlon",
    "Vidrieras y locales",
    "Banners frontlight",
    "Microperforados",
  ];

  return (
    <section id="nosotros" className="bg-fondo py-20 px-6 relative overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-azul-oscuro/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-naranja/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header de sección */}
        <div className="mb-12">
          <p className="text-naranja text-xs font-bold tracking-[3px] uppercase mb-2">
            Quiénes somos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            NOSOTROS
          </h2>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-0">
            <span className="text-azul-neon">SOMOS GRAFI</span>
            <span className="text-white">EXPRESS</span>
          </h2>

          {/* Divisor */}
          <div className="flex items-center gap-2 mt-5">
            <div className="w-12 h-0.5 bg-naranja" />
            <div className="w-2 h-2 rounded-full bg-azul-neon" />
            <div className="w-12 h-0.5 bg-azul-neon" />
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Columna izquierda — texto */}
          <div className="space-y-5">
            <p className="text-slate-400 text-base leading-relaxed">
              Arrancamos en San Vicente haciendo calcos. Cosas chicas. El vecino que
              quería el logo en la camioneta, el kiosco de la esquina que necesitaba
              un letrero. Sin grandes pretensiones.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Con el tiempo fuimos creciendo, sumando equipos, aprendiendo materiales.
              Hoy trabajamos con{" "}
              <span className="text-white font-semibold">vinilos Arlon</span>,
              hacemos cartelería LED, ploteo de flotas completas, vidrieras de locales
              en todo el conurbano sur.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              La verdad es que lo que más nos importa no es el tamaño del trabajo,
              sino que quede bien. Que dure. Que cuando el cliente lo vea, sienta que
              valió la plata.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-azul-neon bg-azul-oscuro/40 rounded-r-xl px-6 py-5 mt-2">
              <p className="text-slate-400 text-base leading-relaxed italic">
                "Presupuesto cerrado, sin sorpresas. Entregamos lo que acordamos, en
                el tiempo que acordamos.{" "}
                <span className="text-white not-italic font-semibold">
                  Eso es todo lo que prometemos
                </span>
                , y hasta ahora no fallamos."
              </p>
            </blockquote>

            {/* Pills de servicios */}
            <div className="flex flex-wrap gap-2 pt-2">
              {servicios.map((s, i) => (
                <span
                  key={s}
                  className="flex items-center gap-2 bg-azul-oscuro/60 border border-azul-oscuro rounded-full px-4 py-1.5 text-sm text-slate-400"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      i % 2 === 0 ? "bg-naranja" : "bg-azul-neon"
                    }`}
                  />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-azul-oscuro/60 border border-azul-oscuro rounded-2xl p-6 text-center hover:border-azul-neon/50 transition-colors duration-300 group"
              >
                <div className={`text-3xl font-black leading-none mb-1 ${stat.colorNum} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.numero}
                </div>
                {stat.sufijo && (
                  <div className="text-azul-neon text-lg font-bold leading-none mb-1">
                    {stat.sufijo}
                  </div>
                )}
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Nosotros;
