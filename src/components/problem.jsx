import { Reveal, Shell, Chip, Card, Icon } from './ui'

const SIGNALS = [
  'Novas funcionalidades viram projetos demorados.',
  'O suporte não acompanha a velocidade da operação.',
  'A monetização encontra limitações técnicas.',
  'A equipe cria atalhos para contornar problemas.',
  'Pequenas mudanças geram grandes esforços.',
  'A plataforma começa a ditar o ritmo do crescimento.',
]

const PAINS = [
  { icon: 'schedule',             text: 'Suporte que responde em horas quando o problema exige minutos.' },
  { icon: 'speed',                text: 'Instabilidade em momentos de pico: exatamente quando a cobertura não pode parar.' },
  { icon: 'search',               text: 'Lentidão que prejudica SEO e impacta a receita publicitária.' },
  { icon: 'grid_view',            text: 'Limitações técnicas que travam a evolução editorial.' },
  { icon: 'electrical_services',  text: 'Dependência de plugins que ninguém controla de verdade.' },
  { icon: 'layers',               text: 'Plataforma que cresceu junto com o portal, mas parou de acompanhar.' },
]

export function GrowthSection() {
  return (
    <section id="estrutura" aria-labelledby="estrutura-title" className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white py-24 lg:py-[120px]">
      <Shell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
          <Reveal>
            <Chip>Operação</Chip>
            <h2 id="estrutura-title" className="headline mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[44px]">
              Soluções simples funcionam.<br />
              <span className="text-faint">Até o crescimento começar.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="pretty text-[17px] leading-[1.66] text-mute">
              Quando audiência, monetização e operação evoluem, as limitações da estrutura começam a aparecer.
              O que antes parecia suficiente passa a consumir tempo, gerar dependência técnica e limitar novas
              oportunidades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <Card className="h-full">
                <div className="text-primary">
                  <Icon name={p.icon} className="text-[32px]" />
                </div>
                <p className="mt-6 text-[15.5px] leading-[1.5] text-subink">{p.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  )
}

export function ReflectionSection() {
  return (
    <section aria-labelledby="reflexao-title" className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden bg-primary py-24 lg:py-[120px]">
      <Shell className="max-w-4xl">
        <div className="text-center">
          <Reveal>
            <Chip className="justify-center" variant="dark">Reflexão</Chip>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="reflexao-title" className="headline mx-auto mt-7 max-w-3xl text-[32px] font-bold leading-[1.13] tracking-[-0.015em] text-white sm:text-[46px]">
              O problema nem sempre é o crescimento do portal. Às vezes, é a estrutura que ficou para trás.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="pretty mx-auto mt-9 max-w-2xl text-[17px] leading-[1.7] text-white/75">
              Muitos portais acreditam que estão enfrentando dificuldades de crescimento.
              Na prática, o crescimento já aconteceu.
              O que ficou para trás foi a estrutura responsável por sustentar a operação.
              Quando isso acontece, novos projetos demoram mais, a equipe cria atalhos para contornar limitações
              e a evolução do portal passa a depender de soluções improvisadas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 rounded-2xl border border-white/20 bg-white/10 px-8 py-10 lg:px-12 lg:py-12 backdrop-blur-sm">
            <h3 className="text-center text-[19px] font-semibold leading-[1.3] text-white sm:text-[22px]">
              Sinais de que sua estrutura começou a limitar sua operação
            </h3>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {SIGNALS.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="arrow_forward" className="mt-[3px] flex-none text-[17px] text-white/35" />
                  <span className="text-[15.5px] leading-[1.55] text-white/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Shell>
    </section>
  )
}
