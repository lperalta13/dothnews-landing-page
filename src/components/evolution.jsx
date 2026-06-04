import { useState } from 'react'
import { Reveal, Shell, Chip, Card, Icon } from './ui'

const EVO_CARDS = [
  {
    icon: 'auto_awesome',
    title: 'IA Editorial',
    text: 'Automação que amplia a capacidade da equipe sem substituir o jornalismo.',
    highlight: true,
  },
  {
    icon: 'search',
    title: 'SEO Técnico',
    text: 'Estrutura otimizada para tráfego orgânico em escala.',
  },
  {
    icon: 'speed',
    title: 'Performance',
    text: 'Velocidade e estabilidade que audiência e anunciantes exigem.',
    img: '/assets/grafana-nginx.png',
  },
  {
    icon: 'layers',
    title: 'Escalabilidade',
    text: 'Infraestrutura que cresce junto com a operação.',
  },
  {
    icon: 'autorenew',
    title: 'Atualizações Contínuas',
    text: 'Novas versões incluídas, sem custo adicional.',
  },
  {
    icon: 'monitor',
    title: 'Monitoramento Ativo',
    text: 'Visibilidade total da operação, em tempo real.',
    img: '/assets/grafana-overview.png',
  },
]

function EvoCard({ c }) {
  const hl = c.highlight
  return (
    <Card highlight={hl} className="relative h-full overflow-hidden">
      {c.img && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent"></div>
        </div>
      )}
      <div className={'relative inline-flex ' + (hl ? 'rounded-lg bg-white/15 p-2 text-white' : c.img ? 'rounded-lg bg-white/30 p-2 text-white' : 'text-primary')}>
        <Icon name={c.icon} className="text-[32px]" />
      </div>
      <div className="relative mt-6">
        <h3 className={'text-[18px] font-semibold ' + (hl ? 'text-white': c.img ? 'text-white' : 'text-ink')}>{c.title}</h3>
        <p className={'mt-2 text-[14.5px] leading-[1.5] ' + (hl ? 'text-white/80': c.img ? 'text-white' : 'text-mute')}>{c.text}</p>
        {c.img && (
          <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-white">
            // infra monitorada 24/7
          </span>
        )}
      </div>
    </Card>
  )
}

export function EvolutionSection() {
  return (
    <section className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden py-24 lg:py-[120px]">
      <Shell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <Reveal>
            <Chip>Evolução</Chip>
            <h2 className="headline mt-5 text-[30px] font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[42px]">
              Crescimento sustentável exige evolução contínua da estrutura.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="pretty text-[16px] leading-[1.66] text-mute">
              A plataforma que você contrata hoje não é a mesma de dois anos atrás. E não será a mesma daqui a dois
              anos, porque o mercado editorial não para. A DothNews acompanha essa evolução e traz ela para dentro
              da sua operação. Não como um extra. Como parte da estrutura que você já tem.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVO_CARDS.slice(0, 3).map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <EvoCard c={c} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVO_CARDS.slice(3).map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <EvoCard c={c} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <figure className="mx-auto mt-14 max-w-3xl rounded-2xl border border-line bg-surface px-8 py-12">
            <span aria-hidden="true" className="block font-serif text-[52px] leading-none text-center  text-primary/30">"</span>
            <blockquote className="headline -mt-5 text-[25px] font-semibold justify-center text-center leading-[1.34] text-ink sm:text-[31px]">
              Você foca na redação. A infraestrutura, a gente cuida.
            </blockquote>
          </figure>
        </Reveal>
      </Shell>
    </section>
  )
}

const FAQS = [
  {
    q: 'Vou perder meu posicionamento no Google durante a migração?',
    a: 'Não. Preservação de SEO é parte central do nosso processo, não um detalhe tratado depois. Redirecionamentos, estrutura de URLs, sitemap e histórico de indexação são mapeados antes e validados depois. Portais que migram com planejamento não perdem SEO.',
  },
  {
    q: 'O portal vai ficar fora do ar durante a migração?',
    a: 'Não. A migração acontece em etapas, com o portal operando normalmente durante todo o processo. Cada transição tem janelas controladas e plano de rollback disponível. Para uma operação editorial, downtime não é aceitável. O processo é construído com essa premissa.',
  },
  {
    q: 'Já tentei mudar de plataforma antes. Foi um trauma.',
    a: 'A maioria das migrações falha por falta de planejamento, não de intenção. O nosso processo começa com diagnóstico estrutural: entendemos a sua operação antes de propor qualquer coisa. Se identificarmos riscos, falamos antes. Preferimos uma relação de longo prazo a uma venda que vai dar problema.',
  },
  {
    q: 'Isso é para operações de qual tamanho?',
    a: 'Atendemos operações editoriais com audiência relevante, desde portais em crescimento acelerado até grupos com múltiplos veículos e alto volume de tráfego. O diagnóstico existe para entender o seu momento e se faz sentido para os dois lados.',
  },
  {
    q: 'Como funciona o suporte no dia a dia?',
    a: 'É uma equipe que conhece a sua operação e o que está em jogo, não um sistema de tickets. O objetivo é que você nunca precise lembrar que tem suporte. As coisas simplesmente funcionam.',
  },
]

function FaqItem({ item, open, onToggle, index }) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="group flex w-full items-center gap-5 py-6 text-left">
        <span className="w-6 font-mono text-[12px] text-faint">{String(index + 1).padStart(2, '0')}</span>
        <span className="flex-1 text-[18px] font-semibold leading-[1.4] text-ink transition-colors group-hover:text-primary sm:text-[19px]">
          {item.q}
        </span>
        <span className={
          'flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border transition-all duration-300 ' +
          (open
            ? 'border-primary bg-primary text-white'
            : 'border-line bg-white text-ink group-hover:border-primary/40')
        }>
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            {open ? 'remove' : 'add'}
          </span>
        </span>
      </button>
      <div
        className={'grid faq-answer transition-all duration-300 ease-out' + (open ? ' is-open' : '')}
      >
        <div className="overflow-hidden">
          <p className="pretty max-w-3xl pb-7 pl-11 pr-12 text-[16px] leading-[1.66] text-mute">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden bg-neutral-50 py-24 lg:py-[120px]">
      <Shell className="max-w-4xl">
        <Reveal className="text-center">
          <Chip className="justify-center">Dúvidas</Chip>
          <h2 className="headline mx-auto mt-6 max-w-2xl text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-ink sm:text-[42px]">
            As perguntas que você provavelmente está fazendo.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-12 border-t border-line">
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </Shell>
    </section>
  )
}
