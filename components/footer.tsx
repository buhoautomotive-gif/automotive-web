import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navigation, site } from "@/config/site";
import { Container } from "@/components/ui";
import { Wordmark } from "@/components/header";
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <Container>
          <div className="footer-main">
            <div>
              <Wordmark />
              <p className="muted">Tu criterio. Nuestro punto de partida.</p>
            </div>
            <nav aria-label="Navegación del pie">
              {[
                ...navigation,
                { label: "Sobre Búho", href: "/sobre-buho" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="footer-language">
              <span className="language">
                ES <span>/ EN · Próximamente</span>
              </span>
              {site.social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Búho Automotive</span>
            <div>
              <Link href="/aviso-legal">Aviso legal</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
            <span>Europa es el punto de partida.</span>
          </div>
        </Container>
      </footer>
      {site.whatsapp ? (
        <a
          className="floating-contact"
          href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar con Búho por WhatsApp"
        >
          <MessageCircle size={20} />
          <span>Hablemos</span>
        </a>
      ) : (
        <Link
          className="floating-contact"
          href="/contacto"
          aria-label="Contacto con Búho; WhatsApp pendiente de habilitar"
        >
          <MessageCircle size={20} />
          <span>Hablemos</span>
        </Link>
      )}
    </>
  );
}
