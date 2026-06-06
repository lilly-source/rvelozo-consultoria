import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

type Props = {
  eyebrow: string;
  pageLabel: string;
};

export function InternalPage({ eyebrow, pageLabel }: Props) {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>

      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            {eyebrow}
          </p>
          <h1 className="mt-8 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--deep)] text-balance">
            [Título da página · {pageLabel}]
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] text-pretty">
            [Subtítulo será inserido posteriormente]
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/#contato"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
            >
              [CTA principal]
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Introdução]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título da seção]
          </h2>
          <div className="hairline my-10" />
          <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            [Conteúdo será inserido posteriormente]
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[var(--muted)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              [Seção · Diferenciais]
            </p>
            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
              [Título da seção]
            </h2>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-background p-8 lg:p-10">
                <div className="h-5 w-5 border border-[var(--gold)]" />
                <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">
                  [Diferencial {n}]
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  [Conteúdo será inserido posteriormente]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
              [Seção · Metodologia]
            </p>
            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
              [Título da seção]
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {["01", "02", "03"].map((n) => (
              <div key={n} className="bg-[var(--deep)] p-8 lg:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl text-[var(--sand)]">{n}</span>
                  <span className="h-px flex-1 bg-[var(--sand)]/40" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white">[Etapa {n}]</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#B8B19E] max-w-sm">
                  [Conteúdo será inserido posteriormente]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="gold-rule inline-block text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · CTA Final]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título do CTA Final]
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed max-w-2xl mx-auto">
            [Conteúdo será inserido posteriormente]
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521964454543?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
            >
              [CTA]
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
