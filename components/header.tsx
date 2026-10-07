import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/buho-logo.png";
import { navigation } from "@/config/site";
import { ButtonLink, Container } from "@/components/ui";
import { MobileNavigation } from "@/components/mobile-navigation";
export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Búho Automotive, inicio">
      <Image src={logo} alt="" className="brand-logo" sizes="48px" />
      <span className="brand-text">
        <span>BÚHO</span>
        <small>AUTOMOTIVE</small>
      </span>
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
