import { Landmark, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { mockServices } from "@/components/mock/data";
import type { LucideIcon } from "lucide-react";

const inspectionIcons: Record<string, LucideIcon> = {
  landmark: Landmark,
  building: Building2,
};

export default function InspeccionSection() {
  const inspecciones = mockServices.filter(
    (service) => service.category === "Inspección Normativa"
  );

  return (
    <section id="inspeccion" className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Inspección Normativa
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-darkText sm:text-4xl">
            Cumplimiento y control en salud bucal
          </h2>
          <p className="mt-4 text-gray-600">
            Acompañamos a entes municipales y departamentales en la verificación
            del cumplimiento normativo en salud bucal.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {inspecciones.map((ins) => {
            const Icon = inspectionIcons[ins.icon] ?? Landmark;
            return (
              <article
                key={ins._id}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-darkText">
                      {ins.title}
                    </h3>
                    <p className="text-xs text-gray-400">{ins.location}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{ins.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {ins.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-5">
                  <span className="text-sm font-medium text-gray-500">
                    Duración: {ins.duration}
                  </span>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Solicitar cotización <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
