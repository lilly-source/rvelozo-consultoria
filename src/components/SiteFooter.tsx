export function SiteFooter() {
  return (
    <footer className="bg-[var(--deep)] text-[#D8D2C5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-white">R. Velozo</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[var(--sand)]">
              Mentoria &amp; Consultoria
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#C7C0AE] max-w-sm">
              Estruturamos gestão, processos e liderança para que sua empresa cresça
              com previsibilidade — sem que tudo dependa de você.
            </p>
          </div>
          <div className="text-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--sand)] mb-4">Navegação</p>
            <ul className="space-y-2">
              <li><a href="/consultoria" className="hover:text-white transition">Consultoria</a></li>
              <li><a href="/mentoria" className="hover:text-white transition">Mentoria</a></li>
              <li><a href="/disc" className="hover:text-white transition">DISC</a></li>
              <li><a href="/#contato" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--sand)] mb-4">Contato</p>
            <ul className="space-y-2">
              <li>Rio de Janeiro · Brasil</li>
              <li>contato@rvelozo.com.br</li>
              <li>WhatsApp disponível</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9C957F]">
          <p>© {new Date().getFullYear()} R. Velozo Mentoria &amp; Consultoria. Todos os direitos reservados.</p>
          <p className="tracking-[0.2em] uppercase">Empreendedorismo Real</p>
        </div>
      </div>
    </footer>
  );
}
