import { IProduct } from "@/types";

// ---------------------------------------------------------------------------
// Tipos de datos simulados (Fase 1 - sin backend)
// ---------------------------------------------------------------------------

export interface IService {
  _id: string;
  title: string;
  category: "Capacitaciones" | "Inspección Normativa";
  description: string;
  details: string[];
  icon: string;
  location?: string;
  duration?: string;
}

export interface IJornada {
  _id: string;
  audience:
    | "Niños"
    | "Jóvenes"
    | "Adultos"
    | "Adultos Mayores"
    | "Promoción y Prevención";
  title: string;
  description: string;
  benefits: string[];
  schedule?: string;
  icon: string;
}

// ---------------------------------------------------------------------------
// Servicios: Capacitaciones + Inspección Normativa Mun/Dept
// ---------------------------------------------------------------------------

export const mockServices: IService[] = [
  {
    _id: "cap-1",
    title: "Capacitación en Higiene Bucal",
    category: "Capacitaciones",
    description:
      "Formación teórico-práctica en técnicas de cepillado, uso de hilo dental y prevención de caries para equipos de salud y comunidad.",
    details: [
      "Técnicas de cepillado",
      "Uso de hilo y enjuague",
      "Alimentación saludable",
      "Certificación digital",
    ],
    icon: "graduation",
    location: "A domicilio o en nuestra sede",
    duration: "2 horas",
  },
  {
    _id: "cap-2",
    title: "Capacitación en Salud Bucal Escolar",
    category: "Capacitaciones",
    description:
      "Programa educativo dirigido a docentes y estudiantes para fomentar hábitos de higiene oral dentro del aula.",
    details: [
      "Charlas interactivas",
      "Material didáctico",
      "Guía para docentes",
      "Actividades lúdicas",
    ],
    icon: "school",
    location: "Instituciones educativas",
    duration: "3 horas",
  },
  {
    _id: "ins-1",
    title: "Inspección Normativa Municipal",
    category: "Inspección Normativa",
    description:
      "Auditoría y verificación del cumplimiento de la normativa municipal vigente en materia de salud bucal para instituciones públicas.",
    details: [
      "Verificación de cumplimiento",
      "Informe técnico detallado",
      "Plan de mejora",
      "Soporte legal",
    ],
    icon: "landmark",
    location: "Alcaldías y entes municipales",
    duration: "1 a 3 días",
  },
  {
    _id: "ins-2",
    title: "Inspección Normativa Departamental",
    category: "Inspección Normativa",
    description:
      "Evaluación integral del cumplimiento de los lineamientos departamentales de salud bucal en centros de salud y establecimientos educativos.",
    details: [
      "Levantamiento de información",
      "Diagnóstico institucional",
      "Recomendaciones normativas",
      "Acompañamiento técnico",
    ],
    icon: "building",
    location: "Gobernaciones y sedes departamentales",
    duration: "Según alcance",
  },
];

// ---------------------------------------------------------------------------
// Jornadas de Higiene Oral por público objetivo
// ---------------------------------------------------------------------------

export const mockJornadas: IJornada[] = [
  {
    _id: "jor-1",
    audience: "Niños",
    title: "Jornada de Higiene Oral Infantil",
    description:
      "Actividades lúdicas para que los más pequeños aprendan a cepillarse correctamente y pierdan el miedo al odontólogo.",
    benefits: [
      "Cepillado supervisado",
      "Detección temprana de caries",
      "Kit dental de regalo",
      "Ambiente lúdico",
    ],
    schedule: "Cada 15 días",
    icon: "baby",
  },
  {
    _id: "jor-2",
    audience: "Jóvenes",
    title: "Jornada de Higiene Oral para Jóvenes",
    description:
      "Enfoque en ortodoncia, cepillado con brackets y prevención de enfermedades gingivales para la población juvenil.",
    benefits: [
      "Cuidado con brackets",
      "Prevención de gingivitis",
      "Charlas motivacionales",
      "Evaluación gratuita",
    ],
    schedule: "Mensual",
    icon: "youth",
  },
  {
    _id: "jor-3",
    audience: "Adultos",
    title: "Jornada de Higiene Oral para Adultos",
    description:
      "Revisión completa y educación sobre el cuidado bucal diario, prevención de caries y salud periodontal en la edad adulta.",
    benefits: [
      "Revisión periodontal",
      "Detección de caries",
      "Plan de cuidado personalizado",
      "Consejos de alimentación",
    ],
    schedule: "Mensual",
    icon: "adult",
  },
  {
    _id: "jor-4",
    audience: "Adultos Mayores",
    title: "Jornada de Higiene Oral para Adultos Mayores",
    description:
      "Atención especializada en salud bucal del adulto mayor: prótesis, encías y prevención de enfermedades orales.",
    benefits: [
      "Cuidado de prótesis",
      "Salud de encías",
      "Atención prioritaria",
      "Acompañamiento familiar",
    ],
    schedule: "Quincenal",
    icon: "senior",
  },
  {
    _id: "jor-5",
    audience: "Promoción y Prevención",
    title: "Jornadas de Promoción y Prevención",
    description:
      "Campañas comunitarias de sensibilización, tamizajes y educación en salud bucal para toda la comunidad.",
    benefits: [
      "Tamizajes gratuitos",
      "Ferias de salud",
      "Material educativo",
      "Cobertura comunitaria",
    ],
    schedule: "Trimestral",
    icon: "prevention",
  },
];

// ---------------------------------------------------------------------------
// Productos de ejemplo
// ---------------------------------------------------------------------------

export const mockProducts: IProduct[] = [
  {
    _id: "prod-1",
    name: "Kit de Higiene Oral Infantil",
    slug: "kit-higiene-oral-infantil",
    category: "Niños",
    description:
      "Cepillo suave, pasta con flúor sabor fresa y vaso didáctico para incentivar el cepillado diario.",
    image: { asset: { url: "/images/placeholder.jpg" } },
    price: 25,
  },
  {
    _id: "prod-2",
    name: "Cepillo Dental Profesional",
    slug: "cepillo-dental-profesional",
    category: "Adultos",
    description:
      "Cerdas suaves de punta redondeada y mango ergonómico diseñados para un cepillado eficaz.",
    image: { asset: { url: "/images/placeholder.jpg" } },
    price: 15,
  },
  {
    _id: "prod-3",
    name: "Enjuague Bucal con Flúor",
    slug: "enjuague-bucal-fluor",
    category: "Cuidado Oral",
    description:
      "Enjuague antiséptico sin alcohol que protege contra caries y refuerza el esmalte dental.",
    image: { asset: { url: "/images/placeholder.jpg" } },
    price: 12,
  },
  {
    _id: "prod-4",
    name: "Hilo Dental Premium",
    slug: "hilo-dental-premium",
    category: "Cuidado Oral",
    description:
      "Hilo dental encerado de alta resistencia para una limpieza interdental profunda y cómoda.",
    image: { asset: { url: "/images/placeholder.jpg" } },
    price: 8,
  },
];
