import Link from 'next/link'
import { Button } from '@nextui-org/react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-foreground/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            as={Link}
            href="/"
            size="lg"
            color="primary"
            className="font-semibold"
          >
            Go Home
          </Button>
          <Button
            as={Link}
            href="/grades"
            size="lg"
            variant="bordered"
            className="font-semibold"
          >
            View Politicians
          </Button>
        </div>
      </div>
    </div>
  )
}
