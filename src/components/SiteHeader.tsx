import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-[var(--deep)]">R. Velozo</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-[var(--ink-soft)]">
            Mentoria &amp; Consultoria
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[var(--ink-soft)]">
          <Link to="/consultoria" className="hover:text-[var(--deep)] transition">Consultoria</Link>
          <Link to="/mentoria" className="hover:text-[var(--deep)] transition">Mentoria</Link>
          <Link to="/disc" className="hover:text-[var(--deep)] transition">DISC</Link>
          <a href="/#contato" className="hover:text-[var(--deep)] transition">Contato</a>
        </nav>
        <a
          href="/#contato"
          className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.22em] text-[var(--deep)] border-b border-[var(--gold)] pb-1 hover:text-[var(--institutional)] hover:border-[var(--institutional)] transition-colors"
        >
          Agendar Diagnóstico
        </a>
      </div>
    </header>
  );
}
