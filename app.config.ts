export default defineAppConfig({
  ui: {
    primary: 'cyan',
    gray: 'cool',
    button: {
      base: 'transition ease-in',
      color: {
        gray: {
          solid: 'shadow-none bg-gray-300/20 hover:bg-gray-300/40 dark:bg-gray-700/40 dark:hover:bg-gray-700/50',
        },
      },
      variant: {
        solid: 'shadow-none',
      },
    },
    icons: {
      height: '1.2em',
      width: '1.2em',
    },
  },
  nuxtIcon: {
    size: '24px',
    aliases: {
      'postgresql': 'logos:postgresql',
    }
  }
})