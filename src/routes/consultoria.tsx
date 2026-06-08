import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  ArrowUpRight,
  HelpCircle,
  AlertTriangle,
  Workflow,
  Users,
  Compass,
  Flame,
  CloudFog,
  BatteryLow,
  TrendingDown,
  TrendingUp,
  Clock,
  Wallet,
  Brain,
  Settings,
  LineChart,
  GitCompare,
  Target,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/consultoria")({
  head: () => ({
    meta: [
      { title: "Consultoria · R. Velozo" },
      { name: "description", content: "[Descrição será inserida posteriormente]" },
      { property: "og:title", content: "Consultoria · R. Velozo" },
      { property: "og:description", content: "[Descrição será inserida posteriormente]" },
    ],
  }),
  component: ConsultoriaPage,
});

function ConsultoriaPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Diagnostico />
        <CicloSobrevivente />
        <Liberdade />
        <Metodologia />
        <Caminho />
        <Resultados />
        <FinalCTA />
      </main>
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
          Consultoria
        </p>
        <h1 className="mt-8 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--deep)] text-balance">
          [Título principal da consultoria]
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

/* ---------------- 2. DIAGNÓSTICO ---------------- */
function Diagnostico() {
  const items = [
    { icon: Wallet, title: "Trabalha muito, mas não vê a cor do dinheiro?" },
    { icon: AlertTriangle, title: "Sente que se você parar por um dia, tudo para?" },
    { icon: GitCompare, title: "Técnica nota 10, mas gestão nota 4?" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Diagnóstico
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            Você é dono do seu negócio ou seu negócio é seu dono?
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="bg-background p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)] leading-snug">{title}</h3>
            </div>
          ))}
        </div>

        <p className="mt-16 font-serif text-2xl sm:text-3xl text-[var(--deep)] text-balance max-w-3xl">
          “Estar ocupado não é o mesmo que ser produtivo.”
        </p>
      </div>
    </section>
  );
}

/* ---------------- 3. CICLO DO SOBREVIVENTE OPERACIONAL ---------------- */
function CicloSobrevivente() {
  const stages = [
    { icon: CloudFog, label: "Caos" },
    { icon: HelpCircle, label: "Incerteza" },
    { icon: BatteryLow, label: "Cansaço" },
    { icon: TrendingDown, label: "Falta de crescimento" },
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            [Seção · Ciclo do sobrevivente operacional]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            [Título do ciclo]
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#C8C1AE] max-w-2xl">
            [Conteúdo será inserido posteriormente]
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-[var(--sand)]/30" />
          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-px md:gap-0 bg-white/10 md:bg-transparent border md:border-0 border-white/10">
            {stages.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className="bg-[var(--deep)] p-8 lg:p-10 md:bg-transparent relative"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl text-[var(--sand)]">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-[var(--sand)]/40 md:hidden" />
                </div>
                <div className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-[var(--sand)]/40 bg-[var(--deep)] relative z-10">
                  <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white">{label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B8B19E] max-w-xs">
                  [Conteúdo será inserido posteriormente]
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. LIBERDADE PROFISSIONAL ---------------- */
function Liberdade() {
  const items = [
    { icon: Wallet, title: "Lucro" },
    { icon: Clock, title: "Tempo" },
    { icon: Users, title: "Equipe" },
    { icon: TrendingUp, title: "Crescimento" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Liberdade profissional]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título da liberdade profissional]
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
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

/* ---------------- 5. METODOLOGIA ---------------- */
function Metodologia() {
  const pillars = [
    { icon: Brain, title: "Mentalidade" },
    { icon: Settings, title: "Processos" },
    { icon: LineChart, title: "Finanças e Dados" },
  ];
  return (
    <section className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Metodologia]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título da metodologia]
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

/* ---------------- 6. COMO VAMOS CAMINHAR JUNTOS ---------------- */
function Caminho() {
  const modes = [
    { label: "Mentoria", eyebrow: "[Modelo 01]" },
    { label: "Consultoria", eyebrow: "[Modelo 02]" },
    { label: "Combinação dos dois", eyebrow: "[Modelo 03]" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            [Seção · Como vamos caminhar juntos]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            [Título do modelo de trabalho]
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[var(--ink-soft)] max-w-2xl">
            [Conteúdo será inserido posteriormente]
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {modes.map(({ label, eyebrow }) => (
            <article key={label} className="bg-background p-8 lg:p-10 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
                {eyebrow}
              </p>
              <h3 className="mt-6 font-serif text-2xl text-[var(--deep)]">{label}</h3>
              <div className="hairline my-6" />
              <ul className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)] flex-1">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="flex items-baseline gap-3">
                    <GitCompare className="h-3 w-3 text-[var(--gold)] shrink-0" strokeWidth={1.5} />
                    <span>[Característica {n}]</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
                [Indicado para]
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                [Conteúdo será inserido posteriormente]
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. RESULTADOS ---------------- */
function Resultados() {
  const metrics = [
    { icon: BarChart3, title: "[Indicador]" },
    { icon: Target, title: "[Métrica]" },
    { icon: ShieldCheck, title: "[Resultado]" },
    { icon: Sparkles, title: "[Transformação]" },
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            [Seção · Resultados]
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            [Título dos resultados]
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {metrics.map(({ icon: Icon, title }) => (
            <div key={title} className="bg-[var(--deep)] p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
              <p className="mt-6 font-serif text-4xl lg:text-5xl text-white">
                [00]
              </p>
              <h3 className="mt-4 font-serif text-lg text-[var(--sand)]">{title}</h3>
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
