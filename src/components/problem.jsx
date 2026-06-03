import { Reveal, Shell, Eyebrow, Card, Icon } from './ui'

const PAINS = [
  { icon: 'clock',  text: 'Suporte que responde em horas quando o problema exige minutos.' },
  { icon: 'gauge',  text: 'Instabilidade em momentos de pico — exatamente quando mais importa.' },
  { icon: 'search', text: 'Lentidão que prejudica SEO e impacta a receita publicitária.' },
  { icon: 'block',  text: 'Limitações técnicas que travam a evolução editorial.' },
  { icon: 'plug',   text: 'Dependência de plugins que ninguém controla de verdade.' },
  { icon: 'layers', text: 'Plataforma que cresceu junto com o portal — mas parou de acompanhar.' },
]

export function GrowthSection() {
  return (
    <section id="estrutura" className="bg-tint py-24 lg:py-[120px]">
      <Shell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow>Operação</Eyebrow>
            <h2 className="headline mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[44px]">
              Soluções simples funcionam.<br />
              <span className="text-faint">Até o crescimento começar.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="pretty text-[17px] leading-[1.66] text-mute">
              Audiência crescendo, anunciantes exigindo mais — e, no meio disso tudo, uma plataforma que trava
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
                  <Icon name={p.icon} className="h-6 w-6" />
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
    <section className="bg-white py-24 lg:py-[120px]">
      <Shell className="max-w-4xl text-center">
        <Reveal>
          <Eyebrow className="justify-center">Reflexão</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="headline mx-auto mt-7 max-w-3xl text-[32px] font-bold leading-[1.13] tracking-[-0.015em] text-ink sm:text-[46px]">
            O problema nem sempre é o crescimento do portal. Às vezes, é a estrutura que ficou para trás.
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="pretty mx-auto mt-9 max-w-2xl text-[17px] leading-[1.7] text-mute">
            Portais crescem, audiência cresce, receita cresce — mas a infraestrutura nem sempre acompanha. O
            resultado é uma operação que funciona, mas opera no limite. Com desgaste acumulado, improvisos que
            viraram rotina e potencial represado pela arquitetura errada.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-subink">
            A pergunta não é se o seu portal está crescendo. A pergunta é: a estrutura por baixo dele está preparada
            para esse crescimento?
          </p>
        </Reveal>

        <Reveal delay={260}>
          <figure className="mx-auto mt-14 max-w-3xl rounded-2xl border border-line bg-tint px-8 py-12">
            <span aria-hidden="true" className="block font-serif text-[52px] leading-none text-primary/30">"</span>
            <blockquote className="headline -mt-5 text-[25px] font-semibold leading-[1.34] text-ink sm:text-[31px]">
              Talvez meu portal tenha crescido além da estrutura que o sustenta.
            </blockquote>
          </figure>
        </Reveal>
      </Shell>
    </section>
  )
}
