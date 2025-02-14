export const theme = {
    colors: {
      primary: '#00FF95',
      secondary: '#A5D6B5',
      background: '#0D1411',
      text: '#FFFFFF',
    },
  } as const

  export type Theme = typeof theme