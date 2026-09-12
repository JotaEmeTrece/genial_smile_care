"use client";

import { useState } from "react";
import {
  Baby,
  GraduationCap,
  User,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";
import { mockJornadas } from "@/components/mock/data";
import type { LucideIcon } from "lucide-react";

const jornadaIcons: Record<string, LucideIcon> = {
  baby: Baby,
  youth: GraduationCap,
  adult: User,
  senior: HeartHandshake,
  prevention: Sparkles,
};

export default function JornadasSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = mockJornadas[activeIndex];
  const ActiveIcon = jornadaIcons[active.icon] ?? Sparkles;

  return (
    <section id="jornadas" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Jornadas
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-darkText sm:text-4xl">
            Jornadas de higiene oral por público objetivo
          </h2>
          <p className="mt-4 text-gray-600">
            Programas pensados para cada etapa de la vida, con atención
            cercana y especializada.
          </p>
        </div>

        {/* Pestañas por público objetivo */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          {mockJornadas.map((jornada, index) => {
            const TabIcon = jornadaIcons[jornada.icon] ?? Sparkles;
            const isActive = index === activeIndex;
            return (
              <button
                key={jornada._id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-surface text-gray-600 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                {jornada.audience}
              </button>
            );
          })}
        </div>

        {/* Panel activo + lista de todas las jornadas */}
        <div className="mt-10 grid gap-8 rounded-3xl bg-surface p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <ActiveIcon className="h-6 w-6" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                <CalendarDays className="h-3.5 w-3.5" />
                {active.schedule}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-darkText">
              {active.title}
            </h3>
            <p className="mt-3 text-gray-600">{active.description}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {active.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3">
            {mockJornadas.map((jornada, index) => {
              const CardIcon = jornadaIcons[jornada.icon] ?? Sparkles;
              return (
                <button
                  key={jornada._id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    index === activeIndex
                      ? "border-primary bg-white shadow-md"
                      : "border-transparent bg-white/60 hover:border-primary/30"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      index === activeIndex
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <CardIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-darkText">
                      {jornada.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {jornada.audience} · {jornada.schedule}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
