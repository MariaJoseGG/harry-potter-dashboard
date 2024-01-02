import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'jambalaya': {
        '50': '#fdf9ed',
        '100': '#f7edce',
        '200': '#efda98',
        '300': '#e7c262',
        '400': '#e1ac3e',
        '500': '#d98f27',
        '600': '#c06d1f',
        '700': '#a0501d',
        '800': '#823f1e',
        '900': '#5e2e18',
        '950': '#3d1a0b',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
