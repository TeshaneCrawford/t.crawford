import type { Theme } from 'theme-ui'

export const theme: Theme = {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: 'hsl(233, 4%, 35%)',
      title: 'hsl(233, 20%, 15%)',
      background: 'hsl(2, 100%, 97%)',
      primary: 'hsl(2, 100%, 61%)',
      secondary: 'hsl(2, 88%, 53%)',
      modes: {
        dark: {
          text: '#fff',
          background: '#1a1919',
          primary: '#502F4C',
        }
      }
    },
  }

