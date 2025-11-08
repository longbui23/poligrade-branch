'use client'

import { Button, Input, Textarea, Card, CardBody } from '@nextui-org/react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/60">
            Have a question or feedback? Send us a message.
          </p>
        </div>

        {/* Contact Form */}
        <div>
            <Card>
              <CardBody className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Input
                      type="text"
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      isRequired
                      classNames={{
                        input: 'text-base',
                        inputWrapper: 'h-12',
                      }}
                    />
                    <Input
                      type="text"
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      isRequired
                      classNames={{
                        input: 'text-base',
                        inputWrapper: 'h-12',
                      }}
                    />
                  </div>

                  <Input
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    isRequired
                    classNames={{
                      input: 'text-base',
                      inputWrapper: 'h-12',
                    }}
                  />

                  <Input
                    type="text"
                    label="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    isRequired
                    classNames={{
                      input: 'text-base',
                      inputWrapper: 'h-12',
                    }}
                  />

                  <Textarea
                    label="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    isRequired
                    minRows={6}
                    classNames={{
                      input: 'text-base',
                    }}
                  />

                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="w-full font-semibold"
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                    aria-busy={isSubmitting}
                    aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div role="alert" className="p-4 rounded-lg bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400 border border-success-200 dark:border-success-500/30">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm mt-1">We&apos;ll get back to you as soon as possible.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div role="alert" className="p-4 rounded-lg bg-danger-50 text-danger-700 dark:bg-danger-500/10 dark:text-danger-400 border border-danger-200 dark:border-danger-500/30">
                      <p className="font-semibold">Something went wrong.</p>
                      <p className="text-sm mt-1">Please try again or email us directly at contact@poligrade.com</p>
                    </div>
                  )}
                </form>
              </CardBody>
            </Card>
          </div>
      </div>
    </div>
  )
}
