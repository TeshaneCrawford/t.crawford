type Image = {
  src: string
  alt?: string
  caption?: string
}

type Social = {
  platform: string
  link: string
  icon: string
}

type Meta = {
  title: string
  description: string
  image: Image
}

type Link = {
  name: string
  url: string
  icon: string
  shareUrl: string
}

type SiteConfig = {
  meta: Meta
  name: string
  headshot: string
  title: string
  description: string
  link: Array<Link>
  socials: Array<Social>
}

export type { Image, Social, Meta, SiteConfig }
