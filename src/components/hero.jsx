import { useState, useEffect } from 'react'
import { Chip, Button } from './ui'

const SLIDES = [
  { src: '/assets/sgi-dashboard.png', alt: 'Painel de gestão editorial SGI da DothNews' },
  { src: '/assets/sgi-posts.png', alt: 'Lista de posts do SGI DothNews' },
  { src: '/assets/sgi-criar-post.png', alt: 'Editor de post do SGI DothNews' },
  { src: '/assets/sgi-config.png', alt: 'Configurações do SGI DothNews' },
  { src: '/assets/sgi-usuarios.png', alt: 'Gerenciamento de usuários do SGI DothNews' },
]

const SLIDE_INTERVAL = 3500

export function Hero({ onOpenForm }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="hero relative bg-white">

      {/* Copy — centered */}
      <div className="relative z-20 mx-auto flex max-w-[1104px] flex-col items-center gap-8 sm:gap-[60px] pt-[60px] text-center">
        {/* Tag + headline */}
        <div className="flex flex-col items-center gap-5">
          <Chip>22 anos de Infraestrutura editorial</Chip>

          <h1 className="text-ink">
            <span className="block font-sans text-[26px] font-normal leading-[30px] sm:text-[38px] sm:leading-[44px] lg:text-[48px] lg:leading-[48px]">
              Infraestrutura editorial feita para crescer.
            </span>
            <span className="block font-sans text-[34px] font-bold leading-[40px] sm:text-[50px] sm:leading-[58px] lg:text-[62px] lg:leading-[70px]">
              Não adaptada. Construída.
            </span>
          </h1>
        </div>

        {/* Body text + CTA */}
        <div className="flex w-full flex-col items-center gap-5">
          <p className="max-w-[822px] text-[17px] leading-[28px] text-ink">
            Quando audiência, monetização e operação evoluem, soluções improvisadas começam a limitar o negócio. A DothNews desenvolve infraestrutura especializada para operações editoriais há mais de duas décadas.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon="arrow_outward"
            iconPosition="left"
            description="Inicie seu diagnóstico editorial gratuito com a equipe DothNews"
            onClick={onOpenForm}
          >
            Quero escalar minha operação
          </Button>
        </div>
      </div>

      {/* Dashboard — glass card */}
      <div className="relative z-10 mx-auto mt-10 w-full max-w-[1142px] sm:mt-16">
        <div className="liquid-glass rounded-2xl px-4 pb-4 pt-4 sm:rounded-[32px] sm:px-[40px] sm:pb-6">
          <p className="mb-4 text-center text-[12px] leading-normal text-ink">
            Mais de 40 operações editoriais ativas confiam nessa estrutura todos os dias.
          </p>
          <div className="overflow-hidden rounded-[16px] shadow-[0_30px_70px_-30px_rgba(8,4,40,0.35)]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  width="1920"
                  height="1066"
                  className="block w-full flex-shrink-0"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/*
        Background: dois SVGs vetoriais ("DOTHNEWS") sobrepostos com baixa opacidade.
        O overlay com backdrop-blur-[125px] os difunde em nuvens gradiente,
        replicando fielmente o Figma (node 43:1992).
        Alturas fixas calculadas a partir do frame Figma (1290px de altura):
          purple: top=232px h=138px  |  blue: top=199px h=171px
      */}
      <div className="hero-background pointer-events-none z-0 inset-0 select-none" aria-hidden="true">
        {/* Blob roxo — #2600FF + #00FFE1, opacidade 48% */}
        <div
          className="absolute hero-blob-purple opacity-[0.48]"
        >
          <img src="/assets/bg/blob-purple.svg" alt="" className="block h-full w-full" />
        </div>

        {/* Blob azul — #1500FF + #394AF7, opacidade 80% */}
        <div
          className="absolute hero-blob-blue opacity-80"
        >
          <img src="/assets/bg/blob-blue.svg" alt="" className="block h-full w-full" />
        </div>

        {/* Overlay com backdrop-blur que difunde os blobs em gradiente suave */}
        <div
          className="absolute hero-blur-overlay rounded-[20px] backdrop-blur-[125px]"
        />
      </div>
    </section>
  )
}
