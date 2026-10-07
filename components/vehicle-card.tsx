import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Opportunity } from "@/types/domain";
import { BuhoScore } from "@/components/buho-score";
import { formatEuro } from "@/lib/calculator";
export function VehicleCard({ opportunity }: { opportunity: Opportunity }) {
  const { vehicle, slug, landedPrice, score } = opportunity;
  return (
    <article className="vehicle-card">
      <Link
        href={`/oportunidades/${slug}`}
        className="vehicle-image"
        aria-label={`Ver ${vehicle.brand} ${vehicle.model}, oportunidad demo`}
      >
        <Image
          src={vehicle.image}
          alt={`Imagen ilustrativa de ${vehicle.brand} ${vehicle.model}`}
          fill
          sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 30vw"
        />
        <span className="image-label">SELECCIÓN EUROPEA · DEMO</span>
        <span className="image-arrow">
          <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="vehicle-info">
        <p className="eyebrow">{vehicle.brand}</p>
        <h3>
          <Link href={`/oportunidades/${slug}`}>{vehicle.model}</Link>
        </h3>
        <p className="vehicle-version muted">{vehicle.version}</p>
        <p className="vehicle-specs">
          {vehicle.year}
          <span>·</span>
          {vehicle.mileage.toLocaleString("es-ES")} km<span>·</span>
          {vehicle.country}
        </p>
        <div className="vehicle-pricing">
          <div>
            <span className="muted">Precio en origen</span>
            <strong>{formatEuro(vehicle.price)}</strong>
          </div>
          <div>
            <span className="muted">Est. en España</span>
            <strong>{formatEuro(landedPrice)}</strong>
          </div>
        </div>
        <div className="vehicle-bottom">
          <BuhoScore value={score.value} compact />
          <Link
            href={`/oportunidades/${slug}`}
            aria-label={`Ver oportunidad ${vehicle.model}`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <p className="micro muted">
          Unidad ficticia · No disponible para compra
        </p>
      </div>
    </article>
  );
}
