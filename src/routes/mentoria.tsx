import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import portraitImg from "@/assets/velozo-portrait.jpg";
import {
  ArrowUpRight,
  BatteryLow,
  Users,
  Workflow,
  Compass,
  Brain,
  Map,
  Target,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  LineChart,
  LayoutGrid,
} from "lucide-react";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: "Mentoria · R. Velozo" },
      { name: "description", content: "[Descrição será inserida posteriormente]" },
      { property: "og:title", content: "Mentoria · R. Velozo" },
      { property: "og:description", content: "[Descrição será inserida posteriormente]" },
    ],
  }),
  component: MentoriaPage,
});

function MentoriaPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Problem />
      <Mindset />
      <AboutMentor />
      <HowItWorks />
      <Pillars />
      <Benefits />
      <FinalCTA />
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------------- 1. HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
          Mentoria
        </p>
        <h1 className="mt-8 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--deep)] text-balance">
          [Título principal da mentoria]
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] text-pretty">
          [Subtítulo será inserido posteriormente]
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5521964454543?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
          >
            [CTA principal]
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. PROBLEMA ---------------- */
function Problem() {
  const items = [
    { icon: BatteryLow, title: "[Sobrecarga]" },
    { icon: Workflow, title: "[Dependência operacional]" },
    { icon: Users, title: "[Dificuldade de delegação]" },
    { icon: Compass, title: "[Perda de liberdade]" },
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            [Seção · O problema]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            [Título da dor do empresário]
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#C8C1AE] max-w-2xl">
            [Conteúdo será inserido posteriormente]
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="bg-[var(--deep)] p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B8B19E]">
                [Conteúdo será inserido posteriormente]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. MENTALIDADE OPERACIONAL ---------------- */
function Mindset() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Mentalidade operacional]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título editorial]
          </h2>
          <div className="hairline my-10" />
          <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            [Texto principal será inserido posteriormente]
          </p>
          <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            [Continuação do texto principal]
          </p>
        </div>

        <aside className="lg:col-span-5">
          <div className="bg-[var(--muted)] border-l-2 border-[var(--gold)] p-10 lg:p-12 h-full flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              [Bloco de destaque]
            </p>
            <p className="mt-6 font-serif text-2xl lg:text-3xl leading-[1.2] text-[var(--deep)] text-balance">
              [Argumento central da seção]
            </p>
            <div className="hairline my-8" />
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              [Suporte ao argumento será inserido posteriormente]
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- 4. SOBRE O MENTOR ---------------- */
function AboutMentor() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="relative w-full">
            <img
              src={portraitImg}
              alt="R. Velozo"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 ring-1 ring-[var(--deep)]/10 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Sobre o mentor]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[var(--deep)] text-balance">
            [Título institucional do mentor]
          </h2>
          <div className="hairline my-10" />
          <p className="text-base text-[var(--ink-soft)] leading-relaxed">
            [Texto biográfico será inserido posteriormente]
          </p>
          <p className="mt-6 text-base text-[var(--ink-soft)] leading-relaxed">
            [Continuação biográfica]
          </p>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              [Credenciais]
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="bg-background h-24 flex items-center justify-center text-center px-4"
                >
                  <span className="font-serif text-[var(--deep)] text-base">
                    [Credencial {n}]
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              [Experiência profissional]
            </p>
            <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {[1, 2, 3].map((n) => (
                <li key={n} className="py-5 flex items-baseline gap-6">
                  <span className="font-serif text-[var(--gold)] text-lg w-16 shrink-0">
                    0{n}
                  </span>
                  <div>
                    <p className="font-serif text-lg text-[var(--deep)]">
                      [Experiência {n}]
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">
                      [Descrição da experiência]
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. COMO A MENTORIA FUNCIONA ---------------- */
function HowItWorks() {
  const steps = ["01", "02", "03", "04"];
  return (
    <section className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              [Seção · Como funciona]
            </p>
            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
              [Título do método]
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
              [Introdução do método será inserida posteriormente]
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {steps.map((n) => (
            <div key={n} className="bg-background p-8 lg:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-[var(--gold)]">{n}</span>
                <span className="h-px flex-1 bg-[var(--gold)]/40" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">
                [Etapa {n}]
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                [Conteúdo será inserido posteriormente]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. OS 3 PILARES ---------------- */
function Pillars() {
  const pillars = [
    { icon: Brain, title: "Mentalidade" },
    { icon: Map, title: "Planejamento" },
    { icon: Target, title: "Estratégia" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Os 3 pilares]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título dos pilares]
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="group bg-background border border-[var(--border)] p-8 lg:p-10 flex flex-col hover:border-[var(--gold)] transition-colors"
            >
              <Icon className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
              <h3 className="mt-8 font-serif text-2xl text-[var(--deep)]">{title}</h3>
              <div className="hairline my-6" />
              <p className="text-sm leading-relaxed text-[var(--ink-soft)] flex-1">
                [Conteúdo será inserido posteriormente]
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. BENEFÍCIOS DA JORNADA ---------------- */
function Benefits() {
  const items = [
    { icon: Sparkles, title: "Autonomia" },
    { icon: ShieldCheck, title: "Liderança" },
    { icon: Users, title: "Cultura" },
    { icon: LayoutGrid, title: "Produtividade" },
    { icon: TrendingUp, title: "Lucro" },
    { icon: LineChart, title: "Gestão" },
  ];
  return (
    <section className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Benefícios da jornada]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título dos benefícios]
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="bg-background p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                [Conteúdo será inserido posteriormente]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. CTA FINAL ---------------- */
function FinalCTA() {
  return (
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
            [CTA WhatsApp]
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
