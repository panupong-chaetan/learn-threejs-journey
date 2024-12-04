import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const Template = {
  colors: {
    skyBlue: {
      DEFAULT: '#219FD5',
      100: '#F0F8FC',
      200: '#DDEDF5',
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
}

export default defineConfig({
  shortcuts: [
    ['container', 'sm:px-6 px-4 2xl:max-w-6xl xl:max-w-5xl max-w-full relative z-1 mx-auto'],
    [
      'btn',
      'transition-all duration-200 ease-in font-400 whitespace-nowrap sm:px-4.75 px-3.5 sm:py-2.25 py-2 rounded-full inline-block cursor-pointer disabled:cursor-default disabled:opacity-50 md:text-3.75 sm:text-3.5 text-3.25 focus:outline-none',
    ],
    ['btn-xs', '!px-3 !py-1.5 !text-xs'],
    ['btn-sm', '!px-3.5 !py-2 !text-xs xs:!text-sm'],
    ['btn-md', '!px-5 !py-2.25 !text-sm xs:!text-base'],
    ['btn-lg', '!px-6 py-3 !text-md xs:!text-lg'],
    [
      'btn-primary',
      'btn bg-neutral-800 hover:bg-neutral-600 text-white active:ring-2 active:ring-offset-2 active:ring-neutral/20',
    ],
    [
      'btn-secondary',
      'btn bg-white hover:bg-neutral-200',
    ],
    [
      'btn-tertiary',
      'btn !rounded-0 bg-transparent text-neutral-800 relative before:transition-all before:content-empty before:absolute  before:bottom-0 before:w-[calc(100%-36px)] before:hover:!border-b before:hover:!border-neutral-800',
    ],
    [
      'btn-quaternary',
      'btn bg-transparent duration-200 ease-in-out hover:bg-neutral-200/60 text-neutral-800 relative border sm:border-transparent border-neutral-200  focus:bg-white focus:!border-neutral-300',
    ],
    ['btn-skeleton', 'bg-neutral-200 border border-neutral-200'],
    [
      'btn-outline-neutral',
      'bg-white border border-neutral-200 text-neutral-600 active:ring-2 active:ring-offset-2 active:ring-neutral-500/20 hover:!border-neutral-300',
    ],
    [
      'btn-outline',
      'btn bg-transparent duration-200 ease-in-out hover:bg-neutral-200/60 text-neutral-800 relative border border-neutral-200  active:!bg-transparent focus:!border-neutral-300',
    ],
  ],
  safelist: [
    'bg-slate-800',
    'bg-green-800',
    'bg-red-800',
    'bg-blue-800',
    'bg-yellow-800',
    'bg-stone-800',
    'bg-gray-800',
    'bg-lime-800',
    'bg-indigo-800',
    'bg-purple-800',
    'bg-pink-800',

    'w-full',
    'w-3/4',
    'w-3/6',
    
    'pt-0',
    'pt-4',
    'pt-8',
    'pt-12',
    'pt-16',
    'pt-20',
    'pt-24',
    'pt-28',
    'pb-0',
    'pb-4',
    'pb-8',
    'pb-12',
    'pb-16',
    'pb-20',
    'pb-24',
    'pb-28',
    'py-0',
    'py-4',
    'py-8',
    'py-12',
    'py-16',
    'py-20',
    'py-24',
    'py-28',

    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-4xl',
    'max-w-5xl'
  ],
  theme: {
    height: {
      'mobile-header': '48px',
      'desktop-header': '64px',
    },
    spacing: {
      'navHeight': '58px',
      'custom': '112px',
    },
    maxWidth: {
      '8xl': '84rem',
    },
    breakpoints: {
      'xs': '360px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
      '4xl': '1920px',
    },
    screens: {
      'xs': '360px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
      '4xl': '1920px',
    },
    container: {
      center: true,
    },
    colors: {
      neutral: Template.colors.neutral,
      skyblue: Template.colors.skyBlue,
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
