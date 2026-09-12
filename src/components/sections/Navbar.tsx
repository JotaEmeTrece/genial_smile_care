"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Jornadas", href: "#jornadas" },
  { label: "Productos", href: "#productos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-genial-smile-care.png"
            alt="Logo de Genial Smile Care"
            width={400}
            height={460}
            priority
            className="h-10 w-auto logo-accent"
          />
          <span className="text-lg font-bold text-darkText">
            Genial Smile Care
          </span>
        </a>

        {/* Menú desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón de contacto desktop */}
        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Contáctanos
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-darkText hover:bg-surface md:hidden"
          aria-label="Abrir menú de navegación"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Panel móvil */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-surface hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Contáctanos
          </a>
        </div>
      )}
    </header>
  );
}
