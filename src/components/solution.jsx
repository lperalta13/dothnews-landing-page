import { useLayoutEffect, useRef } from 'react'
import { Reveal, Shell, Chip, Card, Icon, CLIENT_LOGOS } from './ui'

function LogoMarquee() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    // scrollWidth = soma real de todos os 18 logos + gaps
    // Dividir por 2 = largura exata de 1 grupo (9 logos)
    // Esse é o deslocamento preciso para o loop perfeito
    el.style.setProperty('--mw', `-${el.scrollWidth / 2}px`)
  }, [])

  return (
    <div className=" mt-auto overflow-hidden border-t border-line pt-7 -mx-7">
      <div ref={ref} className="logo-marquee">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
          <img
            key={i}
            src={c.file}
            alt={c.name}
            title={c.name}
            loading="lazy"
            className="h-12 w-auto flex-none opacity-60 transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </div>
  )
}

function BlobPurple({ fill1 = '#2600FF', fill2 = '#00FFE1' }) {
  return (
    <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style={{ display: 'block' }} viewBox="0 0 1411.11 324.151" fill="none">
      <path fill={fill1} d="M91.7767 7.13611H0V317.581C12.4788 317.581 89.0921 317.581 91.7767 317.581C159.553 317.581 214.618 245.622 214.618 162.366C214.618 77.3126 159.081 7.13611 91.7767 7.13611ZM91.7767 251.556H52.2442V73.1437H91.7767C130.371 73.1437 162.374 114.187 162.374 162.358C162.374 211.118 129.899 251.556 91.7767 251.556ZM283.75 0.596669C220.211 -1.78206 165.618 74.3371 166.556 162.358C165.612 249.774 220.211 325.902 283.75 324.12C347.289 325.902 401.882 249.774 400.944 162.358C401.882 74.3453 347.289 -1.78206 283.75 0.596669ZM327.992 233.131C316.225 252.758 301.165 262.273 283.75 262.273C266.335 262.273 251.748 252.758 239.508 233.131C227.741 213.505 221.621 190.314 221.621 162.366C221.621 107.656 249.386 62.4517 283.75 62.4517C301.165 62.4517 315.753 72.5551 327.992 92.1817C340.231 111.808 346.345 134.999 346.345 162.366C346.345 190.306 340.231 213.497 327.992 233.131ZM334.687 7.13611H564.837V73.1437H475.888V317.572H423.644V73.1437H334.694L334.687 7.13611ZM717.756 7.13611V317.581H665.046V195.064H560.57V317.572H508.326V7.13611H560.57V129.056H665.046V7.13611H717.756Z" />
      <path fill={fill2} d="M842.784 7.13617H895.494V317.58H853.606L738.289 132.032V317.58H686.051V7.13617H727.938L842.771 193.282V7.13617H842.784ZM810.071 317.278H966.797V251.262H862.308V194.769H966.797V128.762H862.308V72.8495H966.797V6.8419H810.071V317.278ZM1145.26 195.064L1077.48 7.13617H1021.49L1055.37 97.5359L1020.07 195.072L951.829 7.14435H895.82L1014.42 324.128H1025.25L1082.67 170.688L1140.09 324.128H1150.44L1269.51 7.14435H1213.52L1145.26 195.064ZM1391.35 170.68C1378.18 158.197 1362.64 148.086 1344.29 140.95C1326.4 133.814 1308.52 126.081 1290.17 118.34C1271.81 110.018 1262.87 101.1 1262.87 90.9883C1262.87 71.9585 1276.99 60.6534 1305.69 60.6534C1329.23 60.6534 1361.23 74.3372 1385.71 89.7866L1404.07 40.4301C1370.65 13.6756 1334.41 0 1298.16 0C1244.98 0 1202.63 42.8171 1202.63 93.9637C1202.63 117.162 1209.21 135.596 1222.39 149.271C1235.57 162.366 1251.1 172.47 1268.99 180.195C1287.34 187.331 1305.23 195.064 1323.58 202.805C1341.94 210.529 1351.35 219.456 1351.35 230.156C1351.35 253.943 1330.16 263.458 1305.22 263.458C1279.81 263.458 1249.69 253.355 1214.39 232.535L1206.86 287.245C1236.98 311.629 1270.87 324.128 1308.98 324.128C1363.11 324.128 1411.11 286.657 1411.11 223.02C1411.12 201.015 1404.53 183.17 1391.35 170.68Z" />
    </svg>
  )
}

function BlobBlue({ fill1 = '#1500FF', fill2 = '#394AF7' }) {
  return (
    <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style={{ display: 'block' }} viewBox="0 0 1419.99 404.092" fill="none">
      <path fill={fill1} d="M63.2068 8.89593H0V395.902C8.5942 395.902 61.3579 395.902 63.2068 395.902C109.885 395.902 147.808 306.196 147.808 202.408C147.808 96.3791 109.559 8.89593 63.2068 8.89593ZM63.2068 313.594H35.9807V91.1821H63.2068C89.7869 91.1821 111.827 142.347 111.827 202.398C111.827 263.183 89.4617 313.594 63.2068 313.594ZM245.209 0.743751C201.449 -2.22161 163.851 92.6698 164.497 202.398C163.847 311.373 201.449 406.274 245.209 404.054C288.968 406.274 326.566 311.373 325.92 202.398C326.566 92.68 288.968 -2.22161 245.209 0.743751ZM275.678 290.625C267.574 315.092 257.202 326.954 245.209 326.954C233.215 326.954 223.169 315.092 214.739 290.625C206.635 266.159 202.42 237.249 202.42 202.408C202.42 134.205 221.542 77.8532 245.209 77.8532C257.202 77.8532 267.249 90.4484 275.678 114.915C284.108 139.382 288.318 168.292 288.318 202.408C288.318 237.239 284.108 266.148 275.678 290.625ZM339.041 8.89593H497.546V91.1821H436.286V395.89H400.305V91.1821H339.046L339.041 8.89593ZM672.567 8.89593V395.902H636.265V243.169H564.313V395.89H528.332V8.89593H564.313V160.883H636.265V8.89593H672.567Z" />
      <path fill={fill2} d="M809.512 8.89607H845.814V395.901H816.966L737.547 164.593V395.901H701.57V8.89607H730.418L809.504 240.948V8.89607H809.512ZM876.604 395.524H984.542V313.227H912.581V242.803H984.542V160.517H912.581V90.8154H984.542V8.52922H876.604V395.524ZM1187.11 243.17L1140.44 8.89607H1101.87L1125.21 121.59L1100.9 243.18L1053.9 8.90627H1015.32L1097.01 404.063H1104.46L1144 212.782L1183.55 404.063H1190.68L1272.69 8.90627H1234.12L1187.11 243.17ZM1406.39 212.772C1397.31 197.212 1386.62 184.606 1373.98 175.71C1361.65 166.814 1349.34 157.174 1336.7 147.524C1324.06 137.15 1317.9 126.033 1317.9 113.428C1317.9 89.7046 1327.62 75.6115 1347.39 75.6115C1363.6 75.6115 1385.64 92.67 1402.5 111.93L1415.14 50.4009C1392.13 17.0483 1367.17 0 1342.21 0C1305.58 0 1276.41 53.3765 1276.41 117.137C1276.41 146.057 1280.95 169.036 1290.02 186.084C1299.1 202.409 1309.79 215.004 1322.11 224.634C1334.76 233.53 1347.07 243.17 1359.71 252.82C1372.35 262.449 1378.84 273.577 1378.84 286.916C1378.84 316.57 1364.25 328.431 1347.07 328.431C1329.57 328.431 1308.82 315.836 1284.51 289.882L1279.32 358.085C1300.07 388.482 1323.41 404.063 1349.66 404.063C1386.94 404.063 1419.99 357.351 1419.99 278.02C1420 250.588 1415.46 228.343 1406.39 212.772Z" />
    </svg>
  )
}

const PILLARS = [
  {
    icon: 'code',
    title: 'Tecnologia Própria',
    text: 'Controle total da infraestrutura, do código e da evolução. Sem plugins de terceiro no caminho crítico.',
  },
  {
    icon: 'speed',
    title: 'Performance que Protege Receita',
    text: 'Uptime de 99,9% e carregamento otimizado para que suas campanhas entreguem o que foi contratado.',
    highlight: true,
  },
  {
    icon: 'my_location',
    title: 'Foco Exclusivo em Portais',
    text: 'Não atendemos tudo. Cada decisão de produto parte da realidade de quem opera um portal editorial de verdade.',
  },
  {
    icon: 'headset_mic',
    title: 'Suporte Especializado',
    text: 'Uma equipe que entende editorial e tecnologia, não um helpdesk com tickets e SLA genérico.',
  },
  {
    icon: 'dns',
    title: 'Infraestrutura Dedicada',
    text: 'Servidores e monitoramento dimensionados para o ritmo das notícias: sem pausas, sem fins de semana, sem feriados.',
  },
  {
    icon: 'autorenew',
    title: 'Evolução Constante',
    text: 'Novas versões, novos recursos e novas capacidades incluídas na estrutura, sem custo adicional.',
  },
]

function PillarCard({ p }) {
  const hl = p.highlight
  return (
    <Card highlight={hl} className="h-full">
      <div className={hl ? 'inline-flex rounded-lg bg-white/15 p-2 text-white' : 'text-primary'}>
        <Icon name={p.icon} className="text-[32px]" />
      </div>
      <h3 className={'mt-6 text-[18px] font-semibold ' + (hl ? 'text-white' : 'text-ink')}>{p.title}</h3>
      <p className={'mt-2.5 text-[14.5px] leading-[1.55] ' + (hl ? 'text-white/80' : 'text-mute')}>{p.text}</p>
    </Card>
  )
}

export function WhatSection() {
  return (
    <section className="mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden py-24 lg:py-[120px]">
      <Shell>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Chip className="justify-center">Plataforma</Chip>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="headline mt-6 text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-ink sm:text-[42px]">
              Infraestrutura especializada para operações editoriais que cresceram além das soluções genéricas.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.66] text-mute">
              Não é um CMS adaptado nem uma plataforma genérica. É uma estrutura construída especificamente para portais de
              notícias, que sustenta a operação e protege a receita.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.slice(0, 3).map((p, i) => (
            <Reveal key={i} delay={i * 80}>
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
                O mesmo editor que centenas de jornalistas usam todos os dias. Pensado para o fluxo de uma redação,
                não adaptado de um CMS genérico.
              </p>
            </div>
            <div className="relative min-h-[260px] border-t border-line lg:border-l lg:border-t-0">
              <img
                src="/assets/sgi-criar-post.png"
                alt="Editor de criação de post do SGI"
                width="1920"
                height="1066"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.slice(3).map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <PillarCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Database infrastructure detail */}
        <Reveal delay={120} className="mt-6">
          <div className="grid items-stretch overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="relative min-h-[260px] border-b border-line lg:border-b-0 lg:border-r">
              <img
                src="/assets/monitoramento-grafana-dashboard-nave-mae-mysql.png"
                alt="Dashboard MySQL com QPS, conexões e buffer pool em tempo real"
                width="1897"
                height="910"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                // banco de dados em operação real
              </span>
              <p className="pretty mt-4 text-[19px] leading-[1.5] text-subink">
                QPS, conexões e buffer pool visíveis a todo momento. Infraestrutura que não esconde o que está acontecendo.
              </p>
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
  'Tecnologia própria: nenhum plugin crítico de terceiro',
  'Controle total da stack técnica',
  'Independência operacional real',
  'Evolução planejada para portais editoriais',
]

export function WhySection() {
  return (
    <section id="clientes" className="why-section relative mx-[8px] sm:mx-[24px] lg:mx-[40px] mt-3 sm:mt-4 rounded-2xl sm:rounded-[32px] overflow-hidden bg-primary py-24 lg:py-[120px]">

      {/*
        Background negativo do hero: SVGs brancos (brightness(0)+invert(1))
        desfocados diretamente via filter:blur, criando nuvens claras sobre
        o fundo azul escuro — espelho invertido do efeito do hero.
      */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute why-blob-1" style={{ filter: 'blur(125px)' }}>
          <BlobPurple fill1="#FC52FF" fill2="#39FF85" />
        </div>
        <div className="absolute why-blob-2" style={{ filter: 'blur(125px)' }}>
          <BlobBlue fill1="#39FF85" fill2="#FC52FF" />
        </div>
      </div>

      <Shell className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Chip className="justify-center" variant="dark">Validação</Chip>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="headline mt-6 text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-white sm:text-[42px]">
              Estrutura validada diariamente por operações editoriais reais.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="pretty mx-auto mt-6 max-w-2xl text-[17px] leading-[1.66] text-white/55">
              Números que vêm de operação real. Especialização que vem de foco real. Suporte que vem de pessoas reais.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Col 1 — Authority */}
          <Reveal>
            <Card className="flex h-full flex-col">
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
                Duas décadas operando portais que precisam funcionar, em qualquer dia da semana.
              </p>
              <LogoMarquee />
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
                construída do zero para portais de notícias. Sem camadas de adaptação, sem plugins externos no caminho
                crítico e sem limitações que aparecem quando a operação cresce.
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
