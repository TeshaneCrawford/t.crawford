export default defineAppConfig({
  ui: {
    primary: 'cyan',
    gray: 'cool',
    button: {
      base: 'transition ease-in'
    },
    icons: {
      size: '24px',
    },
  },
  nuxtIcon: {
    size: '24px',
    aliases: {
      'postgresql': 'logos:postgresql',
    }
  }
})