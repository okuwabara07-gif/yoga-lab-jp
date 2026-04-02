import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ヨガLab',
  description: 'ヨガ・ピラティス情報',
  keywords: 'ヨガLab,ヨガ・ピラティス情報',
  openGraph: {
    title: 'ヨガLab',
    description: 'ヨガ・ピラティス情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ヨガLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ヨガLab',
    description: 'ヨガ・ピラティス情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
