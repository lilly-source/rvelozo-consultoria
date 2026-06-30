import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import portraitImg from "@/assets/velozo-portrait.jpg";
import heroPhoto from "@/assets/velozo-foto-05a.png";
import {
  ArrowUpRight,
  BatteryLow,
  Users,
  Workflow,
  Compass,
  Brain,
  Map as MapIcon,
  Target,
  LayoutGrid,
} from "lucide-react";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: "Mentoria · R. Velozo" },
      { name: "description", content: "Reorganize sua operação, desenvolva lideranças e recupere tempo para conduzir a empresa em vez de apagar incêndios." },
      { property: "og:title", content: "Mentoria · R. Velozo" },
      { property: "og:description", content: "Reorganize sua operação, desenvolva lideranças e recupere tempo para conduzir a empresa em vez de apagar incêndios." },
    ],
  }),
  component: MentoriaPage,
});

function MentoriaPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Mindset />
        <AboutMentor />
        <FreeMaterial />
        <HowItWorks />
        <Pillars />
        <Benefits />
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
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Mentoria
          </p>
          <h1 className="mt-8 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--deep)] text-balance">
            Mudança de Mentalidade
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] text-pretty">
            Muitos profissionais vivem presos na mentalidade de ser apenas um cabeleireiro, esteticista, barbeiro ou manicure.
            <br />
            <br />
            É aquela sensação de "sou apenas mais um profissional do meu bairro" — a crença de que seu cliente nunca vai pagar mais pelo seu  serviço, de que você precisa estar disponível a qualquer hora, em qualquer dia, e de que se parar, mesmo que por um dia de folga, tudo vai desmoronar.{" "} 
            <br />
            <br />
            Noites mal dormidas. Dificuldade em dizer NÃO. Incapacidade de delegar porque "ninguém faz do jeito que eu faço."{" "}
            <br />
            <br />
            Se você se sente travado no dia a dia, perdendo sua liberdade e vendo o tempo escorrer entre os dedos — você está no lugar certo para mudar esse jogo.{" "}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5521972052155?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
            >
              Eu quero
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-[var(--deep)]/5">
            <img
              src={heroPhoto}
              alt="Raphael Velozo"
              loading="eager"
              className="w-full h-auto object-cover"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. PROBLEMA ---------------- */
function Problem() {
  const items = [
    {
      icon: BatteryLow,
      title: "Sobrecarga",
      desc: "Noites mal dormidas e a sensação sufocante de que, se você parar, tudo para.",
    },
    {
      icon: Workflow,
      title: "Dependência operacional",
      desc: "A operação inteira gira em torno de você, sem espaço para pensar estrategicamente.",
    },
    {
      icon: Users,
      title: "Falta de Posicionamento",
      desc: "Clientes que barganham preço, questionam procedimentos e desorganizam sua agenda e sua rotina.",
    },
    {
      icon: Compass,
      title: "Falta de tempo",
      desc: "O tempo escorre entre os dedos e a vida pessoal sempre em segundo plano.",
    },
  ];
  return (
    <section className="bg-[var(--deep)] text-[#E7E1D2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--sand)]">
            Mentalidade operacional
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white text-balance">
            Os 4 Sinais de que você está preso no Operacional
          </h2>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#C8C1AE] max-w-2xl">
            É aquela sensação sufocante de que, se você parar, tudo para. Noites mal dormidas, dificuldade real em delegar e uma equipe que parece nunca vestir a camisa. Se você se sente travado no dia a dia, perdendo sua liberdade e vendo o tempo escorrer entre os dedos, você está no lugar certo para mudar esse jogo.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[var(--deep)] p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--sand)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B8B19E]">{desc}</p>
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
            Do operacional ao estratégico
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            Sair da rotina que sufoca e assumir o lugar de quem realmente lidera.
          </h2>
          <div className="hairline my-10" />
          <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            Muitos profissionais vivem presos na Mentalidade Operacional. É aquela sensação sufocante de que, se você parar, tudo para. Noites mal dormidas, dificuldade real em delegar e uma equipe que parece nunca vestir a camisa.
          </p>
          <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
            Se você se sente travado no dia a dia, perdendo sua liberdade e vendo o tempo escorrer entre os dedos, você está no lugar certo para mudar esse jogo.
          </p>
        </div>

        <aside className="lg:col-span-5">
          <div className="bg-[var(--muted)] border-l-2 border-[var(--gold)] p-10 lg:p-12 h-full flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              O ponto de virada
            </p>
            <p className="mt-6 font-serif text-2xl lg:text-3xl leading-[1.2] text-[var(--deep)] text-balance">
              Liberdade começa quando a empresa para de depender exclusivamente de você.
            </p>
            <div className="hairline my-8" />
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              A mentoria estrutura mentalidade, planejamento e estratégia para que a operação ande sem precisar do empresário em todas as decisões.
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
            Sobre o mentor
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[var(--deep)] text-balance">
            25 anos unindo gestão estratégica e liderança de alta performance.
          </h2>
          <div className="hairline my-10" />
          <p className="text-base text-[var(--ink-soft)] leading-relaxed">
            Eu não apenas ensino gestão e liderança; eu as vivo na prática há 25 anos. Minha jornada foi construída no chão do empreendedorismo e em gigantes do mercado como McDonald's, Grupo Embelleze e Senac RJ, além de instituições de referência como FAETEC e IFRJ.
          </p>
          <p className="mt-6 text-base text-[var(--ink-soft)] leading-relaxed">
            Foram 16 anos empreendendo diretamente nos setores de beleza, bem-estar e saúde, e 13 anos liderando equipes de alta performance na área da educação. Eu sei o que é quebrar, sei o que é recomeçar e, principalmente, sei como sair da desordem absoluta para uma gestão que gera lucro real.
          </p>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Trajetória
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {["McDonald's", "Grupo Embelleze", "Senac RJ", "FAETEC", "IFRJ", "Empreendedorismo"].map((n) => (
                <div
                  key={n}
                  className="bg-background h-24 flex items-center justify-center text-center px-4"
                >
                  <span className="font-serif text-[var(--deep)] text-base">{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Experiência
            </p>
            <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {[
                { t: "25 anos de mercado", d: "Atuação prática unindo gestão estratégica e liderança de alta performance." },
                { t: "16 anos empreendendo", d: "Setores de beleza, bem-estar e saúde, do operacional à gestão." },
                { t: "13 anos em educação", d: "Liderança de equipes de alta performance em instituições de referência." },
              ].map((item, i) => (
                <li key={item.t} className="py-5 flex items-baseline gap-6">
                  <span className="font-serif text-[var(--gold)] text-lg w-16 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-serif text-lg text-[var(--deep)]">{item.t}</p>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">{item.d}</p>
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

/* ---------------- FREE MATERIAL ---------------- */
function FreeMaterial() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--muted)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="bg-background border border-[var(--gold)]/30 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(16,32,66,0.08)]">
          {/* Decorative subtle gold corners for premium editorial look */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--gold)]/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--gold)]/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--gold)]/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--gold)]/40" />

          <p className="gold-rule justify-center text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)] inline-block">
            Material Gratuito
          </p>
          
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-[var(--deep)] text-balance max-w-2xl mx-auto">
            Guia Completo de Gestão e Liderança de Alta Performance
          </h2>
          
          <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed max-w-2xl mx-auto">
            Aprenda os fundamentos que ajudam empresários e gestores a saírem da operação e construírem equipes mais autônomas.
          </p>
          
          <div className="mt-10 flex justify-center">
            <a
              href="/Ebook-Guia-Completo-Gestao-e-Lideranca.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ebook - Guia Completo Gestao & Lideranca de Alta Performance.pdf"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-8 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
            >
              Baixar Material
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. COMO A MENTORIA FUNCIONA ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Capacitação e Autonomia",
      desc: "Vamos eliminar a dependência que o seu negócio tem de você. Focamos em criar uma equipe tecnicamente pronta, confiante e autônoma.",
    },
    {
      n: "02",
      title: "Engajamento e Cultura",
      desc: "Chega de rotatividade alta. Vamos construir uma cultura de responsabilidade onde cada colaborador se sinta parte do resultado e dono do processo.",
    },
    {
      n: "03",
      title: "Foco no Lucro Real",
      desc: "Usamos a análise de desempenho como bússola estratégica. Cada esforço da equipe é convertido em lucratividade, previsibilidade e sustentabilidade para o caixa.",
    },
  ];
  return (
    <section className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
              Como funciona
            </p>
            <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
              A Mentoria R. Velozo na prática
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed">
              A Mentoria é o caminho mais curto entre o caos onde você está hoje e o sucesso que deseja alcançar. Uma metodologia sólida estruturada em três frentes complementares.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="bg-background p-8 lg:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-[var(--gold)]">{n}</span>
                <span className="h-px flex-1 bg-[var(--gold)]/40" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">{desc}</p>
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
    {
      icon: Brain,
      title: "Mentalidade",
      desc: "Reposicionamento de mindset para sair do operacional e assumir o lugar de quem realmente decide.",
    },
    {
      icon: MapIcon,
      title: "Planejamento",
      desc: "Roteiro claro de prioridades, metas e processos para transformar intenção em execução consistente.",
    },
    {
      icon: Target,
      title: "Estratégia",
      desc: "Decisões orientadas por dados e desempenho, com foco em lucro real e crescimento sustentável.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Os 3 pilares
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            A metodologia que sustenta a sua trajetória de alta performance.
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
              <p className="text-sm leading-relaxed text-[var(--ink-soft)] flex-1">{desc}</p>
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
    {
      icon: MapIcon,
      title: "Plano de Desenvolvimento Individual (PDI)",
      desc: "Roteiro personalizado focado nos seus objetivos reais de carreira ou negócio, sem fórmulas prontas de prateleira.",
    },
    {
      icon: LayoutGrid,
      title: "Gestão de Tempo na Prática",
      desc: "Implementamos ferramentas como a Matriz de Eisenhower para dominar sua agenda, separando o que é incêndio passageiro do que realmente gera valor e riqueza.",
    },
    {
      icon: Brain,
      title: "Desenvolvimento de Mindset",
      desc: "Técnicas avançadas de PNL para destravar o seu potencial e Análise DISC comportamental para aprimorar comunicação, refinar liderança e acelerar resultados.",
    },
  ];
  return (
    <section className="bg-[var(--muted)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="gold-rule text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Benefícios da jornada
          </p>
          <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
            O que você desenvolve ao longo da mentoria.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 lg:p-10">
              <Icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-[var(--deep)]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{desc}</p>
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
          Próximo passo
        </p>
        <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[var(--deep)] text-balance">
          Chega de tentar resolver tudo sozinho.
        </h2>
        <p className="mt-6 text-base lg:text-lg text-[var(--ink-soft)] leading-relaxed max-w-2xl mx-auto">
          Vamos planejar o seu próximo nível com quem tem 25 anos de estrada. Entre em contato e vamos agendar o seu diagnóstico. Sua performance de amanhã começa com a decisão estratégica que você toma hoje.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5521972052155?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[var(--deep)] text-[var(--background)] px-7 py-4 text-sm tracking-wide hover:bg-[var(--institutional)] transition-colors"
          >
            Quero meu diagnóstico
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}