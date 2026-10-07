import { es } from "@/lib/i18n/es";
export function BuhoScore({
  value,
  compact = false,
}: {
  value: number;
  compact?: boolean;
}) {
  const score = Math.min(100, Math.max(0, value));
  if (compact)
    return (
      <span
        className="score-compact"
        aria-label={`Búho Score preliminar demo: ${score} de 100`}
      >
        <span className="score-dot" />
        BÚHO SCORE <strong>{score}</strong>
        <span>/100</span>
      </span>
    );
  return (
    <div className="score-panel">
      <div className="score-panel-top">
        <span className="eyebrow">BÚHO SCORE</span>
        <span className="status-badge">Preliminar · Demo</span>
      </div>
      <div className="score-value">
        {score}
        <span>/ 100</span>
      </div>
      <div
        className="score-track"
        role="meter"
        aria-label="Búho Score de demostración"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={score}
      >
        <span style={{ width: `${score}%` }} />
      </div>
      <p className="muted">{es.scoreDisclaimer}</p>
    </div>
  );
}
