import { Noto_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import AppProvider from '@/contexts'

import { cn } from '@/utils/functions'

import '../styles/globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

export const metadata = {
  title: 'Next.js 14 Boilerplate',
  description:
    'A robust and feature-rich boilerplate for Next.js 14 projects, designed to jumpstart your development with best practices and essential tooling.',
}

export default function RootLayout({ children, params: { locale = 'en' } }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(notoSans.variable, 'min-h-screen font-sans antialiased')}>
        <NextTopLoader />
        <AppProvider locale={locale}>{children}</AppProvider>
      </body>
    </html>
  )
}
