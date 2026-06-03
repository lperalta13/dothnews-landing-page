/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        subink: '#383838',
        mute: '#5d5d66',
        faint: '#9a9aa4',
        line: '#e5e7eb',
        tint: '#f6f6fb',
        surface: '#f6f6fb',
        canvas: '#ffffff',
        night: '#0f0f17',
        nightcard: '#1a1a24',
        primary: {
          DEFAULT: '#2b00c9',
          dark: '#2200a3',
          soft: '#efebff',
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
