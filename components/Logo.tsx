import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-xl font-bold text-foreground hover:opacity-80 transition-opacity"
      aria-label="PoliGrade Home"
    >
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2L4 8V15C4 22 9 28 16 30C23 28 28 22 28 15V8L16 2Z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M16 2L4 8V15C4 22 9 28 16 30C23 28 28 22 28 15V8L16 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16L15 19L20 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-foreground">PoliGrade</span>
    </Link>
  )
}
