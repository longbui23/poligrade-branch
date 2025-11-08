import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - PoliGrade',
  description: 'Frequently asked questions about PoliGrade, our grading methodology, data sources, and how we evaluate politicians based on policy positions.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
