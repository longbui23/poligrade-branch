'use client'

import { Button, Input, Card, CardBody } from '@nextui-org/react'
import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(false)

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Get redirect path or default to home
        const redirectPath = searchParams.get('redirect') || '/'
        router.push(redirectPath)
        router.refresh()
      } else {
        setError(true)
        setPassword('')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md">
        <Card>
          <CardBody className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">PoliGrade</h1>
              <p className="text-foreground/60">Site Access</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="password"
                label="Password"
                placeholder="Enter site password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
                autoFocus
                isInvalid={error}
                errorMessage={error ? 'Incorrect password' : ''}
                classNames={{
                  input: 'text-base',
                  inputWrapper: 'h-12',
                }}
              />

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full font-semibold"
                isLoading={isLoading}
                isDisabled={isLoading || !password}
              >
                {isLoading ? 'Verifying...' : 'Access Site'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-foreground/60">
              <p>This site is currently in beta and password protected.</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
