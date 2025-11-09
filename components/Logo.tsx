import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link
      href="/"
      className="hover:opacity-80 transition-opacity cursor-pointer"
      aria-label="PoliGrade Home"
    >
      <Image
        src="/logo.svg"
        alt="PoliGrade"
        width={96}
        height={96}
        className="w-24 h-24 pointer-events-none"
        priority
      />
    </Link>
  )
}
