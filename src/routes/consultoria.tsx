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

/* ---------------- 3. CICLO DO SOBREVIVENTE ---------------- */
function CicloSobrevivente() {
  const stages = [
    { icon: CloudFog, label: "Desordem" },
    { icon: AlertTriangle, label: "Preocupação" },
    { icon: BatteryLow, label: "Cansaço" },
    { icon: HelpCircle, label: "Incerteza" },
  ];
  const causes = [
    "Sem tempo para pensar em crescimento",
    "Sem processos e equipe treinada",
    "Sem clareza financeira",
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            O ciclo do sobrevivente
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            O ciclo que mantém o empresário operacional preso à rotina.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            {causes.map((cause) => (
              <div key={cause} className="flex items-start gap-4">
                <span className="mt-3 h-px w-8 bg-[var(--sand)] shrink-0" />
                <p className="font-serif text-xl lg:text-2xl text-white leading-snug">
                  {cause}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full border border-[var(--sand)]/40" />
            <div className="absolute inset-8 rounded-full border border-[var(--sand)]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-sm uppercase tracking-[0.32em] text-[var(--sand)]">
                Ciclo
              </span>
            </div>
            {stages.map(({ icon: Icon, label }, i) => {
              const angle = (i / stages.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);
              return (
                <div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center bg-[var(--deep)] border border-[var(--sand)]/60 rounded-full">
                    <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-base text-white whitespace-nowrap">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. LIBERDADE PROFISSIONAL ---------------- */
function Liberdade() {
  const items = [
    {
      icon: Wallet,
      title: "Lucro Real",
      desc: "Previsibilidade no caixa todo mês.",
    },
    {
      icon: Clock,
      title: "Tempo de Vida",
      desc: "Família e lazer como prioridade.",
    },
    {
      icon: Users,
      title: "Equipe Autônoma",
      desc: "Trabalham sem você precisar vigiar.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Focado",
      desc: "Você foca apenas no que importa.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Liberdade profissional
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            O que é Liberdade Profissional para você?
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {desc}
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
    {
      icon: Brain,
      title: "Mentalidade",
      desc: "Da operação à liderança estratégica.",
    },
    {
      icon: Settings,
      title: "Processos",
      desc: "O manual de crescimento do seu negócio.",
    },
    {
      icon: LineChart,
      title: "Finanças e Dados",
      desc: "Transformando anotações em decisões que geram lucro.",
    },
  ];
  return (
    <section className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Metodologia
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            Como vamos chegar lá?
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group bg-background border border-[var(--border)] p-8 lg:p-10 flex flex-col hover:border-[var(--gold)] transition-colors"
            >
              <Icon className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
              <h3 className="mt-8 font-serif text-2xl text-[var(--deep)]">{title}</h3>
              <div className="hairline my-6" />
              <p className="text-sm leading-relaxed text-[var(--ink-soft)] flex-1">
                {desc}
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
    {
      icon: Compass,
      eyebrow: "Mentoria",
      title: "Te guio pelo caminho que já trilhei.",
      desc: "Foco no SEU desenvolvimento como líder.",
    },
    {
      icon: Settings,
      eyebrow: "Consultoria",
      title: "Entro no seu negócio para ajustar as engrenagens.",
      desc: "Foco na SOLUÇÃO de problemas.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Como vamos caminhar juntos
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            Como eu vou caminhar com você?
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-stretch">
          <article className="bg-background border border-[var(--border)] p-8 lg:p-10 flex flex-col">
            <Compass className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Mentoria
            </p>
            <h3 className="mt-4 font-serif text-2xl text-[var(--deep)] leading-snug">
              Te guio pelo caminho que já trilhei.
            </h3>
            <div className="hairline my-6" />
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              Foco no SEU desenvolvimento como líder.
            </p>
          </article>

          <div
            className="flex items-center justify-center font-serif text-7xl lg:text-8xl text-[var(--gold)]"
            aria-hidden
          >
            +
          </div>

          <article className="bg-background border border-[var(--border)] p-8 lg:p-10 flex flex-col">
            <Settings className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4} />
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Consultoria
            </p>
            <h3 className="mt-4 font-serif text-2xl text-[var(--deep)] leading-snug">
              Entro no seu negócio para ajustar as engrenagens.
            </h3>
            <div className="hairline my-6" />
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              Foco na SOLUÇÃO de problemas.
            </p>
          </article>
        </div>


        <p className="mt-16 text-center font-serif text-xl sm:text-2xl text-[var(--deep)] text-balance">
          Resultado: o melhor dos dois mundos — Lucro, Crescimento e Previsão.
        </p>
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
