/**
 * Button — componente unificado de CTA
 *
 * Props
 * ─────────────────────────────────────────────────────────────────
 * variant      'primary' | 'secondary' | 'ghost'   (default: 'primary')
 * size         'sm' | 'md' | 'lg'                  (default: 'md')
 * icon         Material Symbol ligature name        (ex: 'arrow_outward')
 * iconPosition 'left' | 'right'                    (default: 'right')
 * description  string — aria-description + title   (para acessibilidade e tooltip)
 * href         string — renderiza <a> quando definido, <button> caso contrário
 * as           elemento raiz customizado            (override de 'a' / 'button')
 * className    classes adicionais
 * ...rest      qualquer prop nativa do elemento raiz
 * ─────────────────────────────────────────────────────────────────
 */

const SIZES = {
  sm: {
    wrap: 'px-3 py-[6px] gap-1 rounded-[10px] text-[14px]',
    icon: 'text-[18px]',
  },
  md: {
    wrap: 'px-[16px] py-[8px] gap-[6px] rounded-[12px] text-[16px]',
    icon: 'text-[24px]',
  },
  lg: {
    wrap: 'px-8 py-4 gap-2 rounded-[16px] text-[18px]',
    icon: 'text-[20px]',
  },
}

const VARIANTS = {
  primary:   'bg-primary text-white hover:bg-primary-dark',
  secondary: 'border border-primary text-primary hover:bg-primary-soft',
  ghost:     'text-primary hover:text-primary-dark',
}

export function Button({
  as: Tag,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  description,
  href,
  children,
  className = '',
  ...rest
}) {
  const s = SIZES[size] ?? SIZES.md
  const v = VARIANTS[variant] ?? VARIANTS.primary
  const Root = Tag ?? (href ? 'a' : 'button')
  const linkProps = href ? { href } : {}
  const a11yProps = description
    ? { title: description, 'aria-description': description }
    : {}

  const iconEl = icon ? (
    <span className={`material-symbols-outlined ${s.icon}`} aria-hidden="true">
      {icon}
    </span>
  ) : null

  return (
    <Root
      {...linkProps}
      {...a11yProps}
      className={[
        'inline-flex items-center font-medium transition-colors duration-300',
        s.wrap,
        v,
        className,
      ].join(' ')}
      {...rest}
    >
      {iconPosition === 'left' && iconEl}
      <span>{children}</span>
      {iconPosition === 'right' && iconEl}
    </Root>
  )
}
