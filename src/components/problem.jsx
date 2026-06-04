import { Reveal, Shell, Chip, Card, Icon } from './ui'

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
    <section id="estrutura" className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white py-24 lg:py-[120px]">
      <Shell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
          <Reveal>
            <Chip>Operação</Chip>
            <h2 className="headline mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[44px]">
              Soluções simples funcionam.<br />
              <span className="text-faint">Até o crescimento começar.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="pretty text-[17px] leading-[1.66] text-mute">
              Audiência crescendo, anunciantes exigindo mais. No meio disso tudo, uma plataforma que trava
              exatamente quando a cobertura não pode parar. Cada minuto de instabilidade é uma impressão de anúncio
              perdida. Cada página lenta é um leitor que não volta. Não é falta de esforço. É que a estrutura não foi
              construída para esse nível de operação.
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
    <section className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden bg-primary py-24 lg:py-[120px]">
      <Shell className="max-w-4xl text-center">
        <Reveal>
          <Chip className="justify-center" variant="dark">Reflexão</Chip>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="headline mx-auto mt-7 max-w-3xl text-[32px] font-bold leading-[1.13] tracking-[-0.015em] text-white sm:text-[46px]">
            O problema nem sempre é o crescimento do portal. Às vezes, é a estrutura que ficou para trás.
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="pretty mx-auto mt-9 max-w-2xl text-[17px] leading-[1.7] text-white/75">
            Portais crescem, audiência cresce, receita cresce. Mas a infraestrutura nem sempre acompanha. O
            resultado é uma operação que funciona, mas opera no limite. Com desgaste acumulado, improvisos que
            viraram rotina e potencial represado pela arquitetura errada.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-white/85">
            A pergunta não é se o seu portal está crescendo. A pergunta é: a estrutura por baixo dele está preparada
            para esse crescimento?
          </p>
        </Reveal>

        <Reveal delay={260}>
          <figure className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/25 bg-white/15 px-8 py-12 backdrop-blur-sm">
            <span aria-hidden="true" className="block font-serif text-[52px] leading-none text-white/40">"</span>
            <blockquote className="headline -mt-5 text-[25px] font-semibold leading-[1.34] text-white sm:text-[31px]">
              Talvez meu portal tenha crescido além da estrutura que o sustenta.
            </blockquote>
          </figure>
        </Reveal>
      </Shell>
    </section>
  )
}
