import { createSharedComposable } from '@vueuse/core'

const _useNavigation = () => {
  const route = useRoute()

  const headerLinks = computed(() => [{
    label: 'Projects',
    icon: 'mdi-folder',
    to: '/projects',
  },
  {
    label: 'About',
    icon: 'mdi-account',
    to: '/about',
  },
  {
    label: 'Blog',
    icon: 'mdi-newspaper',
    to: '/blog',
  },
  {
    label: 'Resume',
    icon: 'mdi-file-document',
    to: '/resume',
  },
  {
    label: 'Tech Stack',
    icon: 'mdi-code-braces',
    to: '/tech-stack',
  },
  {
    title: 'Let\'s Chat',
    icon: 'mdi-chat',
    to: '/chat',
  },
  {
    title: 'Contact',
    icon: 'mdi-email',
    to: '/contact',
  },
  {
    title: 'Github',
    icon: 'mdi-github',
    to: 'https://github.com/TeshaneCrawford',
    target: '_blank',
  },
  {
    title: 'Threads',
    icon: 'simple-icons:threads',
    to: 'https://www.threads.net/@teshanecrawford',
    target: '_blank',
  },
  {
    title: 'RSS',
    icon: 'mdi-rss',
    to: 'https://teshanecrawford.com/feed.xml',
    target: '_blank',
  }
  ])

  const footerLinks = [{
    label: 'Navigation',
    children: [{
      label: 'Home',
      to: '/',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
    {
      label: 'Resume',
      to: '/resume',
    },
    {
      label: 'Tech Stack',
      to: '/tech-stack',
    },
    {
      label: 'Chat',
      to: '/chat',
    },
    {
      label: 'Contact',
      to: '/contact',
    }
    ]
  },
  {
    label: 'Social',
    children: [
      {
        label: 'Github',
        to: 'https://github.com/TeshaneCrawford',
        target: '_blank',
      },
      {
        label: 'Twitter',
        to: 'https://twitter.com/TeshaneCrawford',
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        to: 'https://www.linkedin.com/in/teshanecrawford/',
        target: '_blank',
      },
      {
        label: 'Threads',
        to: 'https://www.threads.net/@teshanecrawford',
        target: '_blank',
      },
      {
        label: 'RSS',
        to: 'https://teshanecrawford.com/feed.xml',
        target: '_blank',
      }
    ]
  },
  ]
  return {
    headerLinks,
    footerLinks,
  }
}

export const useNavigation = createSharedComposable(_useNavigation)