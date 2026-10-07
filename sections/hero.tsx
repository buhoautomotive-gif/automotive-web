import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { es } from "@/lib/i18n/es";
export function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/hero.png"
        alt="Deportivo de color grafito en una carretera de los Alpes al anochecer"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="hero-image"
      />
      <div className="hero-overlay" />
      <Container className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span />
          {es.hero.eyebrow}
        </p>
        <h1>
          Tu próximo coche
          <br />
          no tiene por qué
          <br />
          estar en <span>España.</span>
        </h1>
        <p className="hero-description">{es.hero.description}</p>
        <div className="hero-buttons">
          <ButtonLink href="/buscar">{es.cta.search}</ButtonLink>
          <ButtonLink href="/calculadora" secondary>
            {es.cta.calculate}
          </ButtonLink>
        </div>
        <p className="hero-trust">
          Búsqueda <span>·</span> Análisis <span>·</span> Importación{" "}
          <span>·</span> Entrega
        </p>
      </Container>
      <Container className="hero-bottom">
        <a href="#nuestro-enfoque">
          <ArrowDown size={15} /> DESCUBRE OTRA FORMA DE COMPRAR
        </a>
        <span>
          DEL LADO DEL COMPRADOR. <ArrowUpRight size={15} />
        </span>
      </Container>
    </section>
  );
}
