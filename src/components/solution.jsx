import { Reveal, Shell, Eyebrow, Card, Icon, CLIENT_LOGOS } from './ui'

const PILLARS = [
  {
    icon: 'code',
    title: 'Tecnologia Própria',
    text: 'Controle total da infraestrutura, do código e da evolução — sem plugins de terceiro no caminho crítico.',
  },
  {
    icon: 'gauge',
    title: 'Performance que Protege Receita',
    text: 'Uptime de 99,9% e carregamento otimizado para que suas campanhas entreguem o que foi contratado.',
    highlight: true,
  },
  {
    icon: 'target',
    title: 'Foco Exclusivo em Portais',
    text: 'Não atendemos tudo. Cada decisão de produto parte da realidade de quem opera um portal editorial de verdade.',
  },
  {
    icon: 'headset',
    title: 'Suporte Especializado',
    text: 'Uma equipe que entende editorial e tecnologia — não um helpdesk com tickets e tempos de resposta genéricos.',
  },
  {
    icon: 'server',
    title: 'Infraestrutura Dedicada',
    text: 'Servidores e monitoramento dimensionados para o ritmo das notícias: sem pausas, sem fins de semana, sem feriados.',
  },
  {
    icon: 'refresh',
    title: 'Evolução Constante',
    text: 'Novas versões, novos recursos, novas capacidades — incluídas na estrutura, sem custo adicional.',
  },
]

function PillarCard({ p }) {
  const hl = p.highlight
  return (
    <Card highlight={hl} className="h-full">
      <div className={hl ? 'inline-flex rounded-lg bg-white/15 p-2 text-white' : 'text-primary'}>
        <Icon name={p.icon} className="h-6 w-6" />
      </div>
      <h3 className={'mt-6 text-[18px] font-semibold ' + (hl ? 'text-white' : 'text-ink')}>{p.title}</h3>
      <p className={'mt-2.5 text-[14.5px] leading-[1.55] ' + (hl ? 'text-white/80' : 'text-mute')}>{p.text}</p>
    </Card>
  )
}

export function WhatSection() {
  return (
    <section className="bg-tint py-24 lg:py-[120px]">
      <Shell>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Plataforma</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="headline mt-6 text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-ink sm:text-[42px]">
              Infraestrutura especializada para operações editoriais que cresceram além das soluções genéricas.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.66] text-mute">
              Não é um CMS. Não é uma plataforma de sites. É uma estrutura construída especificamente para portais de
              notícias — que sustenta operação e sustenta receita.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <PillarCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Editorial product detail */}
        <Reveal delay={120} className="mt-6">
          <div className="grid items-stretch overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                // interface editorial em uso real
              </span>
              <p className="pretty mt-4 text-[19px] leading-[1.5] text-subink">
                O mesmo editor que centenas de jornalistas usam todos os dias — pensado para o fluxo de uma redação,
                não adaptado de um CMS genérico.
              </p>
            </div>
            <div className="relative min-h-[260px] border-t border-line lg:border-l lg:border-t-0">
              <img
                src="/assets/sgi-criar-post.png"
                alt="Editor de criação de post do SGI"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  )
}

const METRICS = [
  { value: '22+',      label: 'anos de mercado' },
  { value: '100+',     label: 'plataformas entregues' },
  { value: '40+',      label: 'operações ativas hoje' },
  { value: '100M+',    label: 'pageviews mensais' },
  { value: '99,9%',    label: 'de uptime garantido' },
  { value: 'Centenas', label: 'de jornalistas diariamente' },
]

const WHY_BULLETS = [
  'Tecnologia própria — nenhum plugin crítico de terceiro',
  'Controle total da stack técnica',
  'Independência operacional real',
  'Evolução planejada para portais editoriais',
]

export function WhySection() {
  return (
    <section id="clientes" className="bg-white py-24 lg:py-[120px]">
      <Shell>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Validação</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="headline mt-6 text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-ink sm:text-[42px]">
              Estrutura validada diariamente por operações editoriais reais.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.66] text-mute">
              Números que vêm de operação real. Especialização que vem de foco real. Suporte que vem de pessoas reais.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Col 1 — Authority */}
          <Reveal>
            <Card className="h-full">
              <span className="text-[12.5px] font-medium text-faint">Validados pelo mercado</span>
              <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4">
                {METRICS.map((m, i) => (
                  <div key={i}>
                    <div className="headline text-[30px] font-bold leading-none text-ink">{m.value}</div>
                    <div className="mt-1.5 text-[12.5px] leading-tight text-mute">{m.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-[13.5px] leading-[1.55] text-mute">
                Duas décadas operando portais que precisam funcionar — especialmente nos dias em que mais importa.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-x-5 gap-y-5 border-t border-line pt-7">
                {CLIENT_LOGOS.slice(0, 6).map((c) => (
                  <div key={c.name} className="flex items-center justify-center">
                    <img
                      src={c.file}
                      alt={c.name}
                      title={c.name}
                      loading="lazy"
                      className="h-7 w-full object-contain opacity-50 grayscale transition-opacity hover:opacity-90"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Col 2 — Structural difference */}
          <Reveal delay={100}>
            <Card className="h-full">
              <span className="text-[12.5px] font-medium text-faint">Especializados, não adaptados</span>
              <h3 className="headline mt-6 text-[22px] font-semibold leading-[1.22] text-ink">
                Existe diferença entre adaptar uma plataforma genérica e construir uma estrutura especializada.
              </h3>
              <p className="pretty mt-5 text-[14.5px] leading-[1.6] text-mute">
                Soluções genéricas precisam ser adaptadas, configuradas e remendadas para cada caso. A DothNews foi
                construída do zero para portais de notícias — sem camadas de adaptação, sem plugins externos no caminho
                crítico, sem limitações que aparecem quando a operação cresce.
              </p>
              <ul className="mt-7 space-y-3.5">
                {WHY_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-[1.45] text-subink">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-primary"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Col 3 — Support (highlighted) */}
          <Reveal delay={200}>
            <Card highlight className="flex h-full flex-col">
              <span className="text-[12.5px] font-medium text-white/65">Presentes quando importa</span>
              <h3 className="headline mt-6 text-[22px] font-semibold leading-[1.22] text-white">
                Seu portal não deveria depender de improviso quando precisa de suporte.
              </h3>
              <p className="pretty mt-5 text-[14.5px] leading-[1.6] text-white/75">
                Nossa equipe sabe o que significa uma queda às 6h num dia de pauta quente. Sabe o que está em jogo para a
                redação, para a audiência e para a receita.
              </p>
              <p className="headline mt-auto border-t border-white/15 pt-7 text-[18px] font-semibold leading-[1.35] text-white">
                Não somos um helpdesk. Somos o time técnico que operações editoriais sérias precisam ter.
              </p>
            </Card>
          </Reveal>
        </div>
      </Shell>
    </section>
  )
}
