import { useState } from 'react'
import { Reveal, Shell, Eyebrow, Card, Icon } from './ui'

const STEPS = [
  {
    n: '01',
    title: 'Envio das informações',
    text: 'Você compartilha os dados básicos da sua operação. Simples e direto.',
  },
  {
    n: '02',
    title: 'Análise estrutural',
    text: 'Nossa equipe analisa plataforma, audiência, operação, gargalos e riscos visíveis.',
  },
  {
    n: '03',
    title: 'Diagnóstico consultivo',
    text: 'Apresentamos o que encontramos com honestidade. Sem jargão, sem pressão, sem proposta antes da hora.',
  },
  {
    n: '04',
    title: 'Recomendação estratégica',
    text: 'Se fizer sentido para os dois lados, apresentamos um caminho — incluindo como seria a transição. Se não fizer, dizemos isso também.',
  },
]

const inputCls =
  'w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-faint transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-subink">{label}</span>
      {children}
    </label>
  )
}

function DiagnosisForm() {
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({
    nome: '',
    portal: '',
    url: '',
    contato: '',
    audiencia: '',
    plataforma: '',
    dificuldade: '',
  })

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value })
  const valid = data.nome && data.portal && data.contato

  if (sent) {
    return (
      <div className="flex h-full min-h-[440px] flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Icon name="shield" className="h-7 w-7" />
        </div>
        <h3 className="headline mt-6 text-[24px] font-bold text-ink">Solicitação recebida.</h3>
        <p className="pretty mt-3 max-w-sm text-[15px] leading-[1.6] text-mute">
          Obrigado, {data.nome.split(' ')[0] || 'tudo certo'}. Nossa equipe retorna em até 48 horas úteis com os
          próximos passos do seu diagnóstico.
        </p>
        <button
          onClick={() => {
            setSent(false)
            setData({ nome: '', portal: '', url: '', contato: '', audiencia: '', plataforma: '', dificuldade: '' })
          }}
          className="mt-7 text-[14px] font-semibold text-primary hover:underline"
        >
          Enviar outra solicitação
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true) }}
      className="rounded-2xl border border-line bg-white p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo">
          <input required value={data.nome} onChange={set('nome')} className={inputCls} placeholder="Seu nome" />
        </Field>
        <Field label="Nome do portal">
          <input required value={data.portal} onChange={set('portal')} className={inputCls} placeholder="Nome do veículo" />
        </Field>
        <Field label="URL do portal">
          <input value={data.url} onChange={set('url')} className={inputCls} placeholder="https://" />
        </Field>
        <Field label="WhatsApp / Contato">
          <input required value={data.contato} onChange={set('contato')} className={inputCls} placeholder="(00) 00000-0000" />
        </Field>
        <Field label="Faixa de audiência mensal">
          <select value={data.audiencia} onChange={set('audiencia')} className={inputCls + ' appearance-none'}>
            <option value="">Selecione</option>
            <option>Até 1M pageviews/mês</option>
            <option>1M – 5M pageviews/mês</option>
            <option>5M – 20M pageviews/mês</option>
            <option>20M+ pageviews/mês</option>
          </select>
        </Field>
        <Field label="Plataforma atual">
          <select value={data.plataforma} onChange={set('plataforma')} className={inputCls + ' appearance-none'}>
            <option value="">Selecione</option>
            <option>WordPress</option>
            <option>CMS próprio</option>
            <option>Outra plataforma</option>
            <option>Outra</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Principal dificuldade hoje">
          <textarea
            value={data.dificuldade}
            onChange={set('dificuldade')}
            rows="3"
            className={inputCls + ' resize-none'}
            placeholder="Conte, em poucas linhas, o que mais te incomoda na estrutura atual."
          />
        </Field>
      </div>
      <button
        type="submit"
        className="group mt-7 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-primary px-7 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-primary-dark"
      >
        Solicitar diagnóstico
        <span className="text-[1.05em] leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </button>
      <p className="mt-4 text-center text-[12.5px] text-faint">
        Retornamos em até 48 horas úteis · Sem compromisso · Sem proposta na primeira conversa
      </p>
    </form>
  )
}

export function DiagnosisSection() {
  return (
    <section id="diagnostico" className="bg-tint py-24 lg:py-[120px]">
      <Shell>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Diagnóstico</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="headline mt-6 text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-ink sm:text-[42px]">
              Antes de indicar uma solução, entendemos a estrutura da sua operação.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.66] text-mute">
              O diagnóstico começa pelo entendimento real do seu cenário — não por uma proposta genérica.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 70}>
              <Card className="h-full">
                <span className="font-mono text-[14px] font-semibold text-primary">{s.n}</span>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.5] text-mute">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[16px] leading-[1.6] text-subink">
            Não existe proposta padrão. Existe o entendimento da sua operação — e uma recomendação baseada nisso.
          </p>
        </Reveal>

        {/* Form + discrete product evidence */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <Reveal>
            <DiagnosisForm />
          </Reveal>
          <Reveal delay={120} className="lg:pt-2">
            <Card className="h-full">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                // depois do diagnóstico
              </span>
              <p className="pretty mt-4 text-[18px] leading-[1.5] text-subink">
                O diagnóstico é a porta de entrada. Por trás dele existe uma plataforma de gestão completa, madura e em
                operação real.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-line">
                <img
                  src="/assets/sgi-config.png"
                  alt="Tela de configurações do SGI"
                  loading="lazy"
                  className="block w-full"
                />
              </div>
            </Card>
          </Reveal>
        </div>
      </Shell>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="bg-primary py-24 text-white lg:py-32">
      <Shell className="max-w-3xl text-center">
        <Reveal>
          <Eyebrow className="justify-center" dark>Próximo passo</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="headline mt-7 text-[34px] font-bold leading-[1.1] tracking-[-0.015em] sm:text-[48px]">
            A estrutura do seu portal precisa acompanhar o crescimento da sua operação.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="pretty mx-auto mt-7 max-w-2xl text-[18px] leading-[1.62] text-white/65">
            A DothNews ajuda operações editoriais a crescer com estabilidade, receita protegida e infraestrutura
            preparada para o longo prazo.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="pretty mx-auto mt-5 max-w-xl text-[16px] leading-[1.6] text-white/45">
            Se algo nessa página fez sentido para você, o próximo passo é simples — e começa por entender o seu cenário.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="#diagnostico"
              className="group inline-flex items-center gap-3 rounded-[12px] bg-white px-8 py-4 text-[16px] font-semibold text-primary shadow-[0_22px_50px_-20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Solicitar diagnóstico
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-white text-[12px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
            <span className="text-[13px] text-white/55">
              Análise consultiva · Retorno em até 48h · Sem compromisso
            </span>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="mx-auto mt-16 max-w-md border-t border-white/10 pt-8 text-[13.5px] leading-[1.7] text-white/45">
            <p>Mais de 40 operações editoriais ativas.</p>
            <p>Mais de 22 anos construindo infraestrutura para portais que levam o jornalismo a sério.</p>
            <p className="mt-2 italic text-white/65">Essa estrutura pode ser a do seu portal.</p>
          </div>
        </Reveal>
      </Shell>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night pb-12 pt-16 text-white/55">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <img src="/assets/logo-white.svg" alt="DothNews" className="h-7 w-auto" />
            <p className="mt-5 max-w-sm text-[15px] leading-[1.55] text-white/70">
              Infraestrutura especializada para portais de notícias.
            </p>
            <p className="mt-4 max-w-md text-[13.5px] leading-[1.65] text-white/45">
              A DothNews é desenvolvida pela{' '}
              <span className="font-medium text-white/70">Dotcom</span>, empresa com mais
              de 22 anos de experiência em tecnologia para operações editoriais digitais no Brasil.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[14px] lg:justify-end">
              <a href="#" className="transition-colors hover:text-white">Política de Privacidade</a>
              <a href="#" className="transition-colors hover:text-white">Termos de Uso</a>
              <a href="#diagnostico" className="transition-colors hover:text-white">Contato</a>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12.5px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DothNews · Dotcom Tecnologia. Todos os direitos reservados.</span>
          <span className="font-mono">infraestrutura editorial · desde 2004</span>
        </div>
      </Shell>
    </footer>
  )
}
