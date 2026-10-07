"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, RotateCcw, SlidersHorizontal } from "lucide-react";
import { Button, ButtonLink, FormField, StatusBadge } from "@/components/ui";
import { carModels, calculateDemoEstimate, formatEuro } from "@/lib/calculator";
import { es } from "@/lib/i18n/es";
import type { Estimate } from "@/types/domain";
export function CalculatorPreview() {
  const [brand, setBrand] = useState("Porsche");
  const [result, setResult] = useState<Estimate | null>(null);
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      setResult(
        calculateDemoEstimate({
          brand,
          model: String(data.get("model")),
          year: String(data.get("year")),
          mileage: String(data.get("mileage")),
          budget: Number(data.get("budget")),
          province: String(data.get("province")),
        }),
      );
      setError("");
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "No se ha podido calcular. Revisa los datos.",
      );
    }
  }
  return (
    <div className="calculator-panel">
      <div className="calculator-top">
        <span>
          <SlidersHorizontal size={16} /> TU PUNTO DE PARTIDA
        </span>
        <StatusBadge>Demo interactiva</StatusBadge>
      </div>
      <form
        onSubmit={submit}
        onChange={() => {
          setResult(null);
          setError("");
        }}
      >
        <div className="form-grid">
          <FormField label="Marca" id="brand">
            <select
              id="brand"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              {Object.keys(carModels).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Modelo" id="model">
            <select key={brand} id="model" name="model">
              {carModels[brand].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Año desde" id="year">
            <select id="year" name="year" defaultValue="2021">
              {Array.from({ length: 12 }, (_, i) => 2026 - i).map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Kilometraje máximo" id="mileage">
            <select id="mileage" name="mileage" defaultValue="50000">
              {[20000, 50000, 80000, 100000, 150000].map((value) => (
                <option key={value} value={value}>
                  {value.toLocaleString("es-ES")} km
                </option>
              ))}
            </select>
          </FormField>
          <FormField label="Presupuesto total (€)" id="budget">
            <input
              id="budget"
              name="budget"
              type="number"
              min="15000"
              max="500000"
              step="500"
              defaultValue="90000"
              required
              inputMode="numeric"
            />
          </FormField>
          <FormField label="Provincia de entrega" id="province">
            <input
              id="province"
              name="province"
              placeholder="Ej. Madrid"
              maxLength={60}
              required
              autoComplete="address-level2"
            />
          </FormField>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" className="full-width">
          Calcular estimación <ArrowUpRight size={17} />
        </Button>
        <p className="calculator-note">
          Sin datos de contacto. Sin compromiso.
        </p>
      </form>
      <div aria-live="polite" aria-atomic="true">
        {result && (
          <div className="calculator-result">
            <StatusBadge>Resultado demo · No es una valoración</StatusBadge>
            <p className="muted micro">
              Ejemplo proporcional al presupuesto. No consulta el mercado ni
              calcula impuestos; marca, modelo y provincia no alteran este
              ejemplo.
            </p>
            <dl>
              {(["european", "landed", "spanish", "saving"] as const).map(
                (key, i) => (
                  <div key={key}>
                    <dt>
                      {
                        [
                          "Mercado europeo",
                          "Estimación puesto en España",
                          "Mercado español comparable",
                          "Ahorro potencial ilustrativo",
                        ][i]
                      }
                    </dt>
                    <dd>
                      {formatEuro(result[key][0])} –{" "}
                      {formatEuro(result[key][1])}
                    </dd>
                  </div>
                ),
              )}
            </dl>
            <p className="eyebrow">Oportunidad a estudiar · Ejemplo</p>
            <p className="micro muted">{es.calculator.disclaimer}</p>
            <ButtonLink href="/buscar">
              Ver opciones que encajan conmigo
            </ButtonLink>
            <button
              className="text-button"
              onClick={() => setResult(null)}
              type="button"
            >
              <RotateCcw size={14} /> Ocultar resultado
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
