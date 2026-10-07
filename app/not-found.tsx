import { Container, ButtonLink } from "@/components/ui";
import { Header } from "@/components/header";
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Container className="loading-state">
          <p className="eyebrow">404 · FUERA DE RUTA</p>
          <h1 className="text-4xl mt-5 mb-5">
            Este camino no lleva a ningún coche.
          </h1>
          <p className="muted mb-7">
            La página no existe o la oportunidad ya no está disponible.
          </p>
          <ButtonLink href="/">Volver al inicio</ButtonLink>
        </Container>
      </main>
    </>
  );
}
