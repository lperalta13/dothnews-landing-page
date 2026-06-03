import { useEffect, useRef } from 'react'

// Scroll reveal — module-level singleton (only registers listeners once)
const revealEls = new Set()
let checkQueued = false

const checkReveal = () => {
  checkQueued = false
  const vh = window.innerHeight || document.documentElement.clientHeight
  revealEls.forEach((el) => {
    if (el.getBoundingClientRect().top < vh * 0.9) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.classList.add('in')
      revealEls.delete(el)
      // Self-heal: snap if transition froze (background tab / throttled context)
      setTimeout(() => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.9) {
          el.style.transition = 'none'
          el.style.opacity = '1'
          el.style.transform = 'none'
        }
      }, 1200)
    }
  })
}

const scheduleCheck = () => {
  if (!checkQueued) {
    checkQueued = true
    setTimeout(checkReveal, 16)
  }
}

const snapAll = () => {
  document.querySelectorAll('.reveal').forEach((el) => {
    el.style.transition = 'none'
    el.style.opacity = '1'
    el.style.transform = 'none'
  })
  revealEls.clear()
}

window.addEventListener('scroll', scheduleCheck, { passive: true })
window.addEventListener('resize', scheduleCheck)
window.addEventListener('load', scheduleCheck)
document.addEventListener('visibilitychange', () => { if (document.hidden) snapAll() })
if (document.hidden) setTimeout(snapAll, 50)
// Safety net: never leave content hidden if scroll never fires
setTimeout(() => {
  revealEls.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none' })
  revealEls.clear()
}, 2600)

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = delay + 'ms'
    revealEls.add(el)
    scheduleCheck()
  }, [delay])
  return <Tag ref={ref} className={'reveal ' + className} {...rest}>{children}</Tag>
}

export function Shell({ children, className = '' }) {
  return (
    <div className={'mx-auto w-full max-w-shell px-6 sm:px-8 lg:px-12 ' + className}>
      {children}
    </div>
  )
}

export function Eyebrow({ children, className = '', dark = false }) {
  return (
    <div className={'flex ' + className}>
      <span className={
        'inline-flex items-center rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium leading-none ' +
        (dark
          ? 'border-white/20 bg-white/5 text-white/75'
          : 'border-line bg-white text-subink')
      }>
        {children}
      </span>
    </div>
  )
}

export function PrimaryBtn({ children, href = '#diagnostico', className = '', big = false }) {
  return (
    <a
      href={href}
      className={
        'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-primary font-semibold text-white ' +
        'transition-all duration-300 hover:bg-primary-dark ' +
        (big ? 'px-8 py-4 text-[16px] ' : 'px-6 py-3.5 text-[14.5px] ') + className
      }
    >
      {children}
      <span className="text-[1.05em] leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
    </a>
  )
}

export function GhostBtn({ children, href = '#estrutura', className = '', dark = false }) {
  return (
    <a
      href={href}
      className={
        'inline-flex items-center gap-2 rounded-[10px] border font-semibold transition-colors duration-300 px-6 py-3.5 text-[14.5px] ' +
        (dark
          ? 'border-white/25 text-white hover:bg-white/10 '
          : 'border-primary/35 text-primary hover:bg-primary/[0.05] ') + className
      }
    >
      {children}
    </a>
  )
}

export function Card({ children, highlight = false, className = '' }) {
  return (
    <div className={
      'rounded-2xl p-7 transition-all duration-300 ' +
      (highlight
        ? 'bg-primary text-white '
        : 'border border-line bg-white hover:border-ink/20 ') + className
    }>
      {children}
    </div>
  )
}

export function BrowserFrame({ src, alt, url = 'painel.dothnews.com', className = '' }) {
  return (
    <div className={'overflow-hidden rounded-xl border border-line bg-white shadow-[0_40px_90px_-40px_rgba(17,17,30,0.35)] ' + className}>
      <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e0554d]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#e8b14b]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#54b265]"></span>
        </div>
        <div className="mx-auto flex w-1/2 items-center justify-center rounded-md bg-white/80 px-3 py-1 text-[11px] text-faint ring-1 ring-line">
          {url}
        </div>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  )
}

export function ScreenFrame({ src, alt, className = '', imgClass = '' }) {
  return (
    <div className={'overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_70px_-45px_rgba(17,17,30,0.45)] ' + className}>
      <img src={src} alt={alt} loading="lazy" className={'block w-full ' + imgClass} />
    </div>
  )
}

export function Icon({ name, className = 'h-6 w-6', stroke = 1.6 }) {
  const c = { fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    clock:   <><circle cx="12" cy="12" r="9" {...c} /><path d="M12 7.5V12l3 2" {...c} /></>,
    bolt:    <path d="M13 3 5 13h6l-1 8 8-11h-6l1-7Z" {...c} />,
    gauge:   <><path d="M4 18a8 8 0 1 1 16 0" {...c} /><path d="M12 14l4-4" {...c} /></>,
    block:   <><rect x="4" y="4" width="16" height="16" rx="2" {...c} /><path d="M4 10h16M10 4v16" {...c} /></>,
    plug:    <><path d="M9 3v5M15 3v5" {...c} /><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" {...c} /><path d="M12 17v4" {...c} /></>,
    layers:  <><path d="M12 3 3 8l9 5 9-5-9-5Z" {...c} /><path d="M3 13l9 5 9-5" {...c} /></>,
    code:    <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" {...c} /></>,
    shield:  <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" {...c} /><path d="M9 12l2 2 4-4" {...c} /></>,
    server:  <><rect x="4" y="4" width="16" height="7" rx="1.5" {...c} /><rect x="4" y="13" width="16" height="7" rx="1.5" {...c} /><path d="M7.5 7.5h.01M7.5 16.5h.01" {...c} /></>,
    headset: <><path d="M5 13v-1a7 7 0 0 1 14 0v1" {...c} /><rect x="3.5" y="13" width="3.5" height="6" rx="1.2" {...c} /><rect x="17" y="13" width="3.5" height="6" rx="1.2" {...c} /><path d="M19 19a4 4 0 0 1-4 3h-2" {...c} /></>,
    refresh: <><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" {...c} /><path d="M20 4v4h-4" {...c} /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" {...c} /><path d="M4 20v-4h4" {...c} /></>,
    spark:   <><path d="M12 4l1.6 5.4L19 11l-5.4 1.6L12 18l-1.6-5.4L5 11l5.4-1.6L12 4Z" {...c} /></>,
    search:  <><circle cx="11" cy="11" r="6" {...c} /><path d="M20 20l-4.5-4.5" {...c} /></>,
    expand:  <><path d="M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5" {...c} /></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="1.5" {...c} /><path d="M8 20h8M12 16v4" {...c} /><path d="M7 11l2.5-3 2 2L14 7l3 4" {...c} /></>,
    target:  <><circle cx="12" cy="12" r="8" {...c} /><circle cx="12" cy="12" r="3.5" {...c} /></>,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name] || paths.block}
    </svg>
  )
}

export const CLIENT_LOGOS = [
  { name: 'Correio do Estado',    file: '/assets/clients/correiodoestado.svg' },
  { name: 'Folha de Pernambuco',  file: '/assets/clients/folhadepernambuco.svg' },
  { name: 'Diário do Estado',     file: '/assets/clients/diariadoestado.svg' },
  { name: 'Capital do Pantanal',  file: '/assets/clients/capitaldopantanal.svg' },
  { name: 'Expressão MS',         file: '/assets/clients/expressaoms.svg' },
  { name: 'Folha de Alphaville',  file: '/assets/clients/folhadealphaville.svg' },
  { name: 'Portal Mais 360',      file: '/assets/clients/portalmais360.svg' },
  { name: 'Diário da Baixada',    file: '/assets/clients/diariadabaixada.svg' },
  { name: 'Portal de Prefeitura', file: '/assets/clients/portaldeprefeitura.svg' },
]
