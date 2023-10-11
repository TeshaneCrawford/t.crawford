// import './globals.css'
import '@/styles/panda.css'
import type { Metadata } from 'next'
import { css, cx } from '@/css'
import { fontClassName } from '@/styles/font'
import {Flex} from '@/jsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teshane Crawford | Software Engineer',
  description: 'Teshane Crawford is a software engineer, problem solver, and lifelong learner.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    className={cx(
      fontClassName,
      css({ overflowX: 'hidden', fontFamily: 'body', fontSize: '0.9em' })
    )}
    suppressHydrationWarning
    >
      <body className={css({ overflowX: 'hidden', overflowY: 'auto' })}>
      <Flex direction="column">{children}</Flex>
      </body>
    </html>
  )
}
