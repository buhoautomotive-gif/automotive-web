import Link from "next/link";
import { navigation } from "@/config/site";
import { ButtonLink, Container } from "@/components/ui";
import { MobileNavigation } from "@/components/mobile-navigation";
export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Búho Automotive, inicio">
      <span>
        BÚHO<span className="brand-dot">.</span>
      </span>
      <small>AUTOMOTIVE</small>
    </Link>
  );
}
export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <span className="language" title="Versión inglesa próximamente">
            ES <span>/ EN</span>
          </span>
          <Link className="contact-link" href="/contacto">
            Contacto
          </Link>
          <ButtonLink href="/buscar">Encuentra tu coche</ButtonLink>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}
