import { useState, useEffect } from 'react'
import { Shell } from './ui'
import { Button } from './Button'

/**
 * Dados padrão do header — substitua por payload de API.
 *
 * Estrutura esperada pela API:
 * {
 *   logo:  { src, alt, href }
 *   links: [{ id, label, href }]
 *   cta:   { label, href, icon, iconPosition?, description? }
 * }
 */
export const DEFAULT_HEADER = {
  logo: {
    src: '/assets/logo-dothnews.svg',
    alt: 'DothNews',
    href: '#top',
  },
  links: [
    { id: 'estrutura',   label: 'Estrutura',   href: '#estrutura' },
    { id: 'clientes',    label: 'Clientes',    href: '#clientes' },
    { id: 'diagnostico', label: 'Diagnóstico', href: '#diagnostico' },
  ],
  cta: {
    label: 'Solicitar Diagnóstico',
    href: '#diagnostico',
    icon: 'arrow_outward',
    iconPosition: 'right',
    description: 'Agende seu diagnóstico editorial gratuito com a equipe DothNews',
  },
}

// ─── SiteNav ──────────────────────────────────────────────────────────────────
// Barra de navegação desktop. Recebe links e CTA como props.

export function SiteNav({ links = [], cta = null }) {
  return (
    <nav
      className="hidden items-center gap-[40px] md:flex"
      aria-label="Navegação principal"
    >
      {links.map((link) => (
        <a
          key={link.id ?? link.href}
          href={link.href}
          className="text-[16px] font-medium text-black transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}

      {cta && (
        <Button
          variant="primary"
          size="md"
          href={cta.href}
          icon={cta.icon}
          iconPosition={cta.iconPosition ?? 'right'}
          description={cta.description}
        >
          {cta.label}
        </Button>
      )}
    </nav>
  )
}

// ─── SiteHeader ───────────────────────────────────────────────────────────────
// Header completo: logo + nav desktop + menu mobile.

export function SiteHeader({
  logo  = DEFAULT_HEADER.logo,
  links = DEFAULT_HEADER.links,
  cta   = DEFAULT_HEADER.cta,
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ' +
        (scrolled
          ? 'liquid-glass fixed-liquid frost'
          : 'border-b border-transparent bg-transparent')
      }
    >
      <Shell className="flex items-center justify-between py-4">
        {/* Logo */}
        <a href={logo.href} aria-label={logo.alt} className="flex items-center">
          <img src={logo.src} alt={logo.alt} className="h-[25px] w-auto" />
        </a>

        {/* Nav desktop */}
        <SiteNav links={links} cta={cta} />

        {/* Botão hambúrguer mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </Shell>

      {/* Menu mobile */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white md:hidden">
          <Shell className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.id ?? link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[16px] font-medium text-black"
              >
                {link.label}
              </a>
            ))}

            {cta && (
              <Button
                variant="primary"
                size="md"
                href={cta.href}
                icon={cta.icon}
                iconPosition={cta.iconPosition ?? 'right'}
                className="mt-2 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </Button>
            )}
          </Shell>
        </div>
      )}
    </header>
  )
}
