"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/config/site";
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    dialog.current?.close();
  }, [open]);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <div className="mobile-navigation">
      <button
        ref={trigger}
        className="icon-button"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <Menu size={23} />
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog"
        onCancel={close}
        aria-label="Navegación principal"
      >
        <div className="mobile-menu-top">
          <span className="eyebrow">BÚHO AUTOMOTIVE</span>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Cerrar menú"
          >
            <X />
          </button>
        </div>
        <nav>
          {[
            ...navigation,
            { label: "Sobre Búho", href: "/sobre-buho" },
            { label: "Contacto", href: "/contacto" },
          ].map((item, i) => (
            <Link key={item.href} href={item.href} onClick={close}>
              <span className="eyebrow">0{i + 1}</span>
              {item.label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
        <p className="muted">Del lado del comprador. En toda Europa.</p>
        <p className="language">
          ES <span aria-label="Inglés próximamente">/ EN · Próximamente</span>
        </p>
      </dialog>
    </div>
  );
}
