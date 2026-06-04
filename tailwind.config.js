const paletteColorNames = [
  'primary',
  'primary-dark',
  'primary-soft',
  'primary-50',
  'primary-100',
  'primary-200',
  'primary-300',
  'primary-400',
  'primary-500',
  'primary-600',
  'primary-700',
  'primary-800',
  'primary-900',
  'primary-950',
  'neutral-0',
  'neutral-50',
  'neutral-100',
  'neutral-200',
  'neutral-300',
  'neutral-400',
  'neutral-500',
  'neutral-600',
  'neutral-700',
  'neutral-800',
  'neutral-900',
  'neutral-950',
  'ink',
  'subink',
  'mute',
  'faint',
  'line',
  'tint',
  'surface',
  'canvas',
  'night',
  'nightcard',
]

const colorUtilities = [
  'bg',
  'text',
  'border',
  'ring',
  'fill',
  'stroke',
  'from',
  'via',
  'to',
]

const colorVariants = ['hover', 'focus', 'group-hover']

const colorSafelist = paletteColorNames.flatMap((color) => [
  ...colorUtilities.flatMap((utility) => [
    `${utility}-${color}`,
    ...colorVariants.map((variant) => `${variant}:${utility}-${color}`),
  ]),
  `placeholder:text-${color}`,
  `focus:placeholder:text-${color}`,
])

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html,scss}'],
  safelist: colorSafelist,
  theme: {
    extend: {
      colors: {
        ink: '#040407',
        subink: '#292D3D',
        mute: '#626983',
        faint: '#949EB7',
        line: '#DFE7F1',
        tint: '#F0F4FA',
        surface: '#F4F6FD',
        canvas: '#FFFFFF',
        night: '#0F1219',
        nightcard: '#292D3D',
        // ── Primary (azul/índigo) — escala DothNews ──────────────────────────
        primary: {
          DEFAULT: '#2B00C9',
          dark: '#0A1E98',
          soft: '#F4F6FD',
          50:  '#F4F6FD',
          100: '#D7DFFB',
          200: '#9EB0F8',
          300: '#6C82F7',
          400: '#394AF7',
          500: '#2B00C9',
          600: '#0A1E98',
          700: '#092166',
          800: '#061941',
          900: '#041028',
          950: '#030B1A',
        },
        // ── Neutral (cinza azulado) — escala DothNews ─────────────────────────
        neutral: {
          0:   '#FFFFFF',
          50:  '#F0F4FA',
          100: '#DFE7F1',
          200: '#C6D0E1',
          300: '#ADB7CD',
          400: '#949EB7',
          500: '#858A9C',
          600: '#626983',
          700: '#434A60',
          800: '#292D3D',
          900: '#0F1219',
          950: '#040407',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
}
