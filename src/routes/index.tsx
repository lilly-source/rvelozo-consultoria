import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/velozo-foto-08a.png.asset.json";
const heroImg = heroAsset.url;
import portraitImg from "@/assets/velozo-portrait.jpg";
import seatedImg from "@/assets/velozo-seated.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  ArrowUpRight,
  Compass,
  LayoutGrid,
  TrendingUp,
  Clock,
  Users,
  AlertTriangle,
  Workflow,
  CircleDollarSign,
  BatteryLow,
  ShieldCheck,
  LineChart,
  Sparkles,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R. Velozo · Mentoria & Consultoria para Empresários" },
      {
        name: "description",
        content:
          "Reorganize sua operação, desenvolva lideranças e recupere tempo para conduzir a empresa em vez de apagar incêndios.",
      },
      { property: "og:title", content: "R. Velozo · Mentoria & Consultoria" },
      {
        property: "og:description",
        content:
          "Método de estruturação para empresários que buscam clareza, liderança e lucro previsível.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Pains />
        <Transformation />
        <Method />
        <Authority />
        <Services />
        <FinalCTA />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Mentoria &amp; Consultoria Estratégica
          </p>
          <h1 className="mt-8 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--deep)] text-balance">
            Transforme sua empresa em uma operação que cresce
            <span className="italic text-[var(--institutional)]"> sem depender de você.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] text-pretty">
            Um método consultivo para reorganizar gestão, liderança e equipe, devolver previsibilidade ao
            lucro e recuperar tempo de vida — sem hype, sem fórmulas mágicas, sem terceirizar o que importa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
            >
              Agendar Diagnóstico Estratégico
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wa.me/5521964454543?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm tracking-wide text-[var(--deep)] border border-[var(--deep)]/15 hover:border-[var(--institutional)] hover:text-[var(--institutional)] transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
            <span>25 anos de mercado</span>
            <span className="hidden sm:inline text-[var(--gold)]">·</span>
            <span>McDonald’s · Embelleze</span>
            <span className="hidden sm:inline text-[var(--gold)]">·</span>
            <span>Senac · FAETEC · IFRJ</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={heroImg}
              alt="R. Velozo — consultor e mentor estratégico"
              width={1080}
              height={1350}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-[var(--deep)]/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[var(--background)] border border-[var(--gold)]/40 px-6 py-5 max-w-[220px]">
            <p className="font-serif text-2xl text-[var(--deep)]">+25</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              Anos liderando operações e equipes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAINS ---------------- */
function Pains() {
  const items = [
    { icon: Workflow, title: "Excesso operacional", text: "Você decide tudo, aprova tudo, resolve tudo. A empresa não anda sem você na sala." },
    { icon: Clock, title: "Falta de tempo", text: "Agenda lotada de urgências, e nenhum espaço para pensar o negócio com clareza." },
    { icon: Users, title: "Equipe dependente", text: "Times que executam pouco, perguntam muito e não assumem responsabilidade real." },
    { icon: AlertTriangle, title: "Ausência de processos", text: "Tudo vive na cabeça de uma ou duas pessoas. Cada novo cliente é um improviso." },
    { icon: CircleDollarSign, title: "Lucro inconsistente", text: "Mês bom, mês fraco. Faturamento sobe, mas o resultado real não acompanha." },
    { icon: BatteryLow, title: "Cansaço constante", text: "Você ama o que construiu — mas não lembra a última vez que descansou de verdade." },
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            O cenário real
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            O negócio cresceu. O empresário virou o gargalo.
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#C8C1AE] max-w-2xl">
            Reconhecer esse momento não é fraqueza — é o ponto de partida para uma nova fase de gestão.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-[var(--deep)] p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B8B19E]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRANSFORMATION ---------------- */
function Transformation() {
  const items = [
    { icon: Users, title: "Equipe autônoma", text: "Lideranças que decidem com critério e não dependem da sua aprovação para tudo." },
    { icon: LineChart, title: "Previsibilidade", text: "Indicadores claros de receita, custo e operação — sem surpresas no fim do mês." },
    { icon: Compass, title: "Clareza estratégica", text: "Você sabe onde está, para onde vai e quais são os próximos três movimentos." },
    { icon: Sparkles, title: "Tempo de vida", text: "Espaço para pensar, descansar e voltar à empresa com energia, não exaustão." },
    { icon: LayoutGrid, title: "Organização", text: "Processos documentados, papéis definidos e fluxos que funcionam mesmo sem você." },
    { icon: TrendingUp, title: "Crescimento sustentável", text: "Expansão construída sobre base sólida — sem comprometer margem nem qualidade." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Para onde vamos
            </p>
            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
              Uma empresa que cresce sem precisar de você o tempo inteiro.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
              O objetivo não é trabalhar mais. É construir uma estrutura em que o seu papel volte
              a ser o de empresário — não o de operador.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-8 lg:p-10 hover:bg-white transition-colors">
              <Icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- METHOD ---------------- */
function Method() {
  const steps = [
    {
      n: "01",
      title: "Diagnóstico",
      text: "Imersão estruturada na sua operação. Mapeamos gestão, equipe, processos, indicadores e o que está, de fato, segurando o crescimento.",
    },
    {
      n: "02",
      title: "Estruturação",
      text: "Construção do desenho organizacional, rotinas de liderança, papéis, métricas e cadência. Cada peça encontra seu lugar.",
    },
    {
      n: "03",
      title: "Crescimento Estratégico",
      text: "Acompanhamento próximo da execução. Ajustes finos, decisões de expansão e consolidação do empresário no lugar correto.",
    },
  ];
  return (
    <section id="metodo" className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Como trabalhamos
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            Três etapas. Um método consistente.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-px md:bg-[var(--border)] md:border md:border-[var(--border)]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[var(--muted)] md:bg-background p-0 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-[var(--gold)]">{s.n}</span>
                <span className="h-px flex-1 bg-[var(--gold)]/40" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[var(--deep)]">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] max-w-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AUTHORITY ---------------- */
function Authority() {
  const marks = ["McDonald’s", "Grupo Embelleze", "Senac RJ", "FAETEC", "IFRJ"];
  return (
    <section id="autoridade" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="hidden lg:block lg:col-span-5">
          <div className="relative w-full">
            <img
              src={seatedImg}
              alt="Raphael Velozo"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 ring-1 ring-[var(--deep)]/10 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Quem conduz
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[var(--deep)] text-balance">
            25 anos liderando operações, equipes e estruturas reais.
          </h2>
          <div className="hairline my-10" />
          <p className="text-base text-[var(--ink-soft)] leading-relaxed">
            Carreira construída dentro de operações exigentes — do varejo de alta escala à educação
            corporativa e técnica. Vivência de chão de loja, liderança de equipes multidisciplinares
            e direção de unidades educacionais. Hoje, esse repertório se traduz em consultoria
            objetiva para empresários que precisam de método, não de palco.
          </p>
          <div className="mt-10 relative aspect-[4/5] overflow-hidden max-w-sm lg:hidden">
            <img
              src={seatedImg}
              alt="Raphael Velozo"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-[var(--deep)]/10" />
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
            {marks.map((m) => (
              <div
                key={m}
                className="bg-background h-28 flex items-center justify-center text-center px-4"
              >
                <span className="font-serif text-[var(--deep)] text-lg">{m}</span>
              </div>
            ))}
            <div className="bg-[var(--deep)] h-28 flex items-center justify-center text-center px-4">
              <span className="text-[var(--sand)] text-xs uppercase tracking-[0.24em]">
                Empreendedorismo real
              </span>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-8">
            <Stat label="Anos de mercado" value="25+" />
            <Stat label="Setores atendidos" value="12" />
            <Stat label="Líderes formados" value="300+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-serif text-4xl text-[var(--deep)]">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">{label}</p>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      icon: Compass,
      title: "Mentoria",
      desc: "Encontros estratégicos individuais para empresários que precisam de clareza, direção e um sparring experiente ao lado.",
      cta: "Conhecer mentoria",
      href: "/mentoria",
    },
    {
      icon: ShieldCheck,
      title: "Consultoria",
      desc: "Imersão na operação para reorganizar gestão, processos, liderança e indicadores — com entregas concretas e cronograma.",
      cta: "Falar sobre consultoria",
      href: "/consultoria",
    },
    {
      icon: LineChart,
      title: "Análise DISC",
      desc: "Mapeamento comportamental para decisões de equipe mais maduras: contratação, alocação, liderança e sucessão.",
      cta: "Aplicar análise DISC",
      href: "/disc",
    },
  ];

  return (
    <section id="servicos" className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            Frentes de trabalho
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            Três caminhos. Uma mesma exigência de método.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ icon: Icon, title, desc, cta, href }) => (
            <article
              key={title}
              className="group bg-[var(--deep)] border border-white/10 p-8 lg:p-10 flex flex-col hover:border-[var(--sand)] transition-colors"
            >
              <Icon className="h-6 w-6 text-[var(--sand)]" strokeWidth={1.4} />
              <h3 className="mt-8 font-serif text-2xl text-white">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#B8B19E] flex-1">{desc}</p>
              <a
                href={href}
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#E7E1D2] border-b border-[var(--gold)] pb-1 self-start group-hover:text-[var(--sand)] transition-colors"
              >
                {cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contato" className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="mx-auto mb-10 h-20 w-20 overflow-hidden rounded-full ring-1 ring-[var(--gold)]/40">
          <img src={portraitImg} alt="Raphael Velozo" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <p className="gold-rule justify-center text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)] inline-block">
          Próximo passo
        </p>
        <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.1] text-[var(--deep)] text-balance">
          Você não precisa de mais esforço.
          <span className="italic text-[var(--institutional)]"> Precisa de direção.</span>
        </h2>
        <p className="mt-8 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed max-w-2xl mx-auto">
          O Diagnóstico Estratégico é uma conversa estruturada para entender, com honestidade,
          em que ponto sua operação está — e qual o caminho mais curto para a próxima fase.
        </p>
        <div className="mt-12">
          <a
            href="https://wa.me/5521964454543?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[var(--deep)] text-[var(--background)] px-9 py-5 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Agendar Diagnóstico
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
