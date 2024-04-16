export default defineAppConfig({
  ui: {
    primary: 'cyan',
    gray: 'cool',
    button: {
      base: 'transition ease-in'
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