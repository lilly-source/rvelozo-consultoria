import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroPhoto from "@/assets/velozo-foto-06a.png";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  ArrowUpRight,
  Users,
  MessageSquare,
  Sparkles,
  ClipboardCheck,
  Compass,
  TrendingUp,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/disc")({
  head: () => ({
    meta: [
      { title: "Análise DISC · R. Velozo" },
      { name: "description", content: "Reorganize sua operação, desenvolva lideranças e recupere tempo para conduzir a empresa em vez de apagar incêndios." },
      { property: "og:title", content: "Análise DISC · R. Velozo" },
      { property: "og:description", content: "Reorganize sua operação, desenvolva lideranças e recupere tempo para conduzir a empresa em vez de apagar incêndios." },
    ],
  }),
  component: DiscPage,
});

function DiscPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Challenges />
        <WhatIsDisc />
        <Benefits />
        <DiscInNumbers />
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
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Análise DISC
            </p>
            <h1 className="mt-8 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--deep)] text-balance">
              Potencialize seus resultados com Análise DISC
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] text-pretty">
              Destrave a sua liderança e pare de apagar incêndios todos os dias. Aprenda a identificar seus pontos fortes, compreenda o que trava sua equipe e leia seus clientes com precisão.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5521964454543?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20An%C3%A1lise%20DISC."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
              >
                Eu quero
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-[var(--deep)]/5">
              <img
                src={heroPhoto}
                alt="Raphael Velozo"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. PRINCIPAIS DESAFIOS ---------------- */
function Challenges() {
  const items = [
    {
      icon: Users,
      title: "Equipe que não entrega",
      text: "Por que minha equipe não entrega o que espero, mesmo com tanto esforço?",
    },
    {
      icon: MessageSquare,
      title: "Conversas em conflito",
      text: "Por que as mesmas conversas sempre terminam em conflito?",
    },
    {
      icon: TrendingUp,
      title: "Resultados que não evoluem",
      text: "Por que trabalho muito mas os resultados não evoluem?",
    },
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            Desafios
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            Você já se perguntou?
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-[var(--deep)] p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B8B19E]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-6 max-w-3xl">
          <Compass className="h-6 w-6 text-[var(--sand)] shrink-0" strokeWidth={1.4} />
          <p className="font-serif text-xl sm:text-2xl leading-snug text-white italic">
            Liderar sem se conhecer é navegar sem bússola.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. O QUE É DISC ---------------- */
function WhatIsDisc() {
  const profiles = [
    {
      letter: "D",
      title: "Dominância",
      text: "Foco em resultados, desafios e decisões rápidas",
      color: "#B23A48", // vermelho institucional
    },
    {
      letter: "I",
      title: "Influência",
      text: "Foco em pessoas, comunicação e relacionamento",
      color: "#C9A24A", // amarelo dourado
    },
    {
      letter: "S",
      title: "Estabilidade",
      text: "Foco em harmonia, consistência e cooperação",
      color: "#6B8E6F", // verde sálvia
    },
    {
      letter: "C",
      title: "Conformidade",
      text: "Foco em qualidade, análise e precisão",
      color: "#3C5A7A", // azul institucional
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            O que é DISC
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            Comportamento em resultado.
          </h2>
          <div className="hairline my-10" />
          <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            O DISC é um mapeamento de perfil comportamental que revela como você age, decide, se comunica e reage sob pressão — e como ler as pessoas ao seu redor com precisão.
          </p>
          <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            Utilizado por líderes e empresas de alto desempenho no mundo inteiro, é a ferramenta mais prática para transformar comportamento em resultado.
          </p>
        </div>

        <aside className="lg:col-span-6 grid grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
          {profiles.map(({ letter, title, text, color }) => (
            <article
              key={letter}
              className="bg-background p-6 lg:p-8 flex flex-col border-t-2"
              style={{ borderTopColor: color }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-serif text-5xl leading-none"
                  style={{ color }}
                >
                  {letter}
                </span>
                <span className="h-px flex-1" style={{ backgroundColor: `${color}55` }} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-[var(--deep)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                {text}
              </p>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}


/* ---------------- 4. BENEFÍCIOS ---------------- */
function Benefits() {
  const items = [
    {
      icon: MessageSquare,
      title: "Comunicação Sem Conflitos",
      text: "Fale a língua de cada perfil e elimine ruídos.",
    },
    {
      icon: ClipboardCheck,
      title: "Decisão Estratégica",
      text: "Decida com clareza, não com impulso.",
    },
    {
      icon: TrendingUp,
      title: "Produtividade e Foco",
      text: "Coloque cada talento no lugar certo.",
    },
    {
      icon: Sparkles,
      title: "Desenvolvimento Profissional",
      text: "Evolua com base no seu perfil real.",
    },
    {
      icon: Brain,
      title: "Autoconhecimento",
      text: "Conheça suas forças e neutralize suas travas.",
    },
    {
      icon: Users,
      title: "Liderança Adaptativa",
      text: "Lidere diferentes perfis com mais influência e menos atrito.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Benefícios da Análise DISC
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            O que você ganha ao aplicar o DISC.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[var(--gold)] shrink-0" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-[var(--deep)] leading-snug">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. DISC EM NÚMEROS ---------------- */
function DiscInNumbers() {
  const stats = [
    { value: "+1M", label: "Avaliações realizadas por ano no mundo" },
    { value: "+500", label: "Empresas utilizam o DISC na gestão de pessoas" },
    { value: "45%", label: "Redução em conflitos internos após mapeamento" },
    { value: "4", label: "Áreas: Liderança, Vendas, RH e Cultura Organizacional" },
  ];
  const brands = ["Google", "IBM", "Nike", "Microsoft"];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            Por que funciona?
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            DISC em Números
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {stats.map((s, i) => (
            <div key={i} className="bg-[var(--deep)] p-8 lg:p-10">
              <p className="font-serif text-5xl text-[var(--sand)]">{s.value}</p>
              <div className="hairline my-6 opacity-60" />
              <p className="text-xs uppercase tracking-[0.22em] text-[#C8C1AE] leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-10">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            Usado por
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {brands.map((b) => (
              <span
                key={b}
                className="font-serif text-2xl lg:text-3xl text-white/85"
              >
                {b}
              </span>
            ))}
            <span className="text-sm text-[#C8C1AE] italic">
              + milhares de empresas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. CTA FINAL ---------------- */
function FinalCTA() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="gold-rule inline-block text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
          Próximo passo
        </p>
        <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
          Pronto para liderar com inteligência?
        </h2>
        <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed max-w-2xl mx-auto">
          Agende sua Análise DISC e descubra como potencializar seus resultados, sua equipe e sua liderança agora mesmo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5521964454543?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20An%C3%A1lise%20DISC."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
          >
            Agendar minha Análise DISC
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

