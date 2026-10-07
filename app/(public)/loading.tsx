import { Container } from "@/components/ui";
export default function Loading() {
  return (
    <Container className="loading-state">
      <div role="status">
        <p className="eyebrow">Preparando el siguiente paso</p>
        <p className="muted">Cargando contenido…</p>
        <div className="loading-bar" />
      </div>
    </Container>
  );
}
