import { useState } from "react";
import { trabajos, categorias } from "../data/trabajos";

const Galeria = () => {
  const [filtro, setFiltro] = useState("todos");
  const [seleccionado, setSeleccionado] = useState(null);

  const filtrados =
    filtro === "todos"
      ? trabajos
      : trabajos.filter((t) => t.tag === filtro);

  return (
    <section
      id="trabajos"
      aria-label="Portfolio de trabajos realizados"
      className="bg-[FONDO] py-20 px-6 relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[AZUL-OSCURO]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[NARANJA] text-xs font-bold tracking-[3px] uppercase mb-2">
            Nuestro trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            TRABAJOS
          </h2>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-0">
            <span className="text-[AZUL]">REALIZADOS</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5 mb-8">
            <div className="w-12 h-0.5 bg-[NARANJA]" />
            <div className="w-2 h-2 rounded-full bg-[AZUL]" />
            <div className="w-12 h-0.5 bg-[AZUL]" />
          </div>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Cada trabajo refleja el mismo nivel de exigencia, sin importar el tamaño del proyecto.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFiltro(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filtro === cat.value
                  ? "bg-[AZUL] text-white"
                  : "bg-[AZUL-OSCURO]/60 text-slate-400 border border-[AZUL-OSCURO] hover:border-[AZUL]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de trabajos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((trabajo) => (
            <div
              key={trabajo.id}
              onClick={() => setSeleccionado(trabajo)}
              className="group relative bg-[AZUL-OSCURO]/60 border border-[AZUL-OSCURO] rounded-2xl overflow-hidden cursor-pointer hover:border-[AZUL]/40 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="aspect-square overflow-hidden bg-[AZUL-OSCURO]">
                <img
                  src={trabajo.imagen}
                  alt={`${trabajo.titulo} — GrafiExpress`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-[NARANJA] text-xs font-bold uppercase tracking-wider">
                  {trabajo.categoria}
                </span>
                <h3 className="text-white font-semibold text-sm mt-1 mb-1">
                  {trabajo.titulo}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {trabajo.descripcion}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[AZUL]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20">
                  Ver detalle
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5491154582487?text=Hola%20GrafiExpress%2C%20quiero%20ver%20m%C3%A1s%20trabajos%20realizados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[AZUL] hover:bg-[AZUL]/80 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            Ver más trabajos por WhatsApp
          </a>
        </div>
      </div>

      {/* Modal lightbox */}
      {seleccionado && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSeleccionado(null)}
        >
          <div
            className="bg-[FONDO] border border-[AZUL-OSCURO] rounded-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={seleccionado.imagen}
              alt={seleccionado.titulo}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <span className="text-[NARANJA] text-xs font-bold uppercase tracking-wider">
                {seleccionado.categoria}
              </span>
              <h3 className="text-white font-bold text-lg mt-1 mb-2">
                {seleccionado.titulo}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {seleccionado.descripcion}
              </p>
              <a
                href="https://wa.me/5491154582487?text=Hola%2C%20quiero%20un%20trabajo%20como%20este."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Quiero algo así — Contactar
              </a>
            </div>
            <button
              onClick={() => setSeleccionado(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
