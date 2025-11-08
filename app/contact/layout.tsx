import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - PoliGrade',
  description: 'Have questions or feedback about PoliGrade? Get in touch with our team. We welcome inquiries about politician grades, methodology, and partnership opportunities.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
