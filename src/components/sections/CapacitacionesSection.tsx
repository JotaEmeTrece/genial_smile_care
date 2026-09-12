import { GraduationCap, School, MapPin, Clock, ArrowRight } from "lucide-react";
import { mockServices } from "@/components/mock/data";
import type { LucideIcon } from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  school: School,
};

export default function CapacitacionesSection() {
  const capacitaciones = mockServices.filter(
    (service) => service.category === "Capacitaciones"
  );

  return (
    <section id="capacitaciones" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Capacitaciones
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-darkText sm:text-4xl">
            Formación profesional en salud bucal
          </h2>
          <p className="mt-4 text-gray-600">
            Programas diseñados para equipos de salud, instituciones educativas
            y la comunidad en general.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capacitaciones.map((cap) => {
            const Icon = serviceIcons[cap.icon] ?? GraduationCap;
            return (
              <article
                key={cap._id}
                className="group rounded-2xl border border-gray-100 bg-surface p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold text-darkText">{cap.title}</h3>
                </div>

                <p className="mt-4 text-gray-600">{cap.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cap.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {cap.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {cap.duration}
                  </span>
                </div>

                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Solicitar información <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
