import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { Wordmark } from "@/components/header";
export const metadata: Metadata = {
  title: "Operations — Vista previa",
  robots: { index: false, follow: false },
};
// TODO: Proteger todas las rutas y operaciones con Supabase Auth y autorización de administrador antes de producción. Este shell público no contiene datos ni acciones privadas.
export default function AdminPage() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <Wordmark />
        <p className="eyebrow">OPERATIONS</p>
        <nav
          className="admin-nav"
          aria-label="Módulos previstos, todavía no disponibles"
        >
          {[
            "Dashboard",
            "Leads",
            "Oportunidades",
            "Operaciones",
            "Tareas",
            "Configuración",
          ].map((label) => (
            <span key={label} aria-disabled="true">
              {label}
              <small>PRÓXIMAMENTE</small>
            </span>
          ))}
        </nav>
      </aside>
      <main id="main-content" className="admin-main">
        <p className="eyebrow">ESPACIO DE OPERACIONES · SHELL PÚBLICO</p>
        <h1>Todo empieza con una buena base.</h1>
        <div className="notice-panel">
          <LockKeyhole size={23} className="text-accent mb-5" />
          <h2>Sin acceso a datos ni operaciones reales</h2>
          <p className="muted">
            Este es únicamente el shell visual del futuro panel de Búho
            Automotive. Los módulos están deshabilitados: no hay CRM,
            autenticación ni base de datos conectada.
          </p>
          <p className="muted">
            Antes de incorporar información privada, se implementarán Supabase
            Auth, autorización de administrador y las políticas de acceso
            correspondientes. Esta página no debe utilizarse para gestionar
            información real.
          </p>
        </div>
        <Link href="/" className="text-link">
          Volver a la web <ArrowUpRight size={16} />
        </Link>
      </main>
    </div>
  );
}
