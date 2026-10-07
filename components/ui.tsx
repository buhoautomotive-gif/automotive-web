import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
export function ButtonLink({
  children,
  href,
  secondary = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className="muted section-description">{description}</p>
      )}
    </div>
  );
}
export function StatusBadge({ children }: { children: ReactNode }) {
  return <span className="status-badge">{children}</span>;
}
export function FormField({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
export function TrustItem({ title, text }: { title: string; text?: string }) {
  return (
    <div className="trust-item">
      <Check size={17} aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        {text && <p className="muted">{text}</p>}
      </div>
    </div>
  );
}
