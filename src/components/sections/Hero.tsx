import { Sparkles, Calendar, ShieldCheck, Star, ArrowRight, Smile } from "lucide-react";

const heroStats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "5000+", label: "Pacientes atendidos" },
  { value: "98%", label: "Satisfacción" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-surface to-surface"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        {/* Texto */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm ring-1 ring-primary/20">
            <Sparkles className="h-4 w-4 text-accent" />
            Salud bucal para toda la familia
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-darkText sm:text-5xl lg:text-6xl">
            Cuida tu sonrisa con{" "}
            <span className="text-primary">atención profesional</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Capacitaciones, inspecciones normativas y jornadas de higiene oral
            con un enfoque clínico limpio, seguro y accesible.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
            >
              <Calendar className="h-4 w-4" />
              Agenda tu valoración
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-darkText transition-colors hover:border-primary/40 hover:text-primary"
            >
              Conoce nuestros servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold text-primary sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual clínico */}
        <div className="relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#2f7d7b] p-8 text-white shadow-2xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative flex h-40 items-center justify-center rounded-2xl bg-white/15">
              <Smile className="h-20 w-20 text-white" />
            </div>

            <div className="relative mt-6">
              <h2 className="text-xl font-bold">Sonrisas saludables</h2>
              <p className="mt-1 text-sm text-white/80">
                Atención integral y prevención para cada etapa de la vida.
              </p>
            </div>

            <ul className="relative mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Protocolos clínicos de bioseguridad
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Star className="h-4 w-4" />
                </span>
                Equipo profesional certificado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
