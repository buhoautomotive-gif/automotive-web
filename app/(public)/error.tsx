"use client";
import { Button, Container } from "@/components/ui";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="loading-state">
      <p className="eyebrow">UN IMPREVISTO EN EL CAMINO</p>
      <h1 className="text-3xl mt-5 mb-5">
        No hemos podido cargar esta página.
      </h1>
      <p className="muted mb-7">
        Puedes volver a intentarlo. No se ha enviado ninguna solicitud.
      </p>
      <Button onClick={reset}>Volver a intentar</Button>
    </Container>
  );
}
