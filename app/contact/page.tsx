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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct mailto link with form data
    const mailtoLink = `mailto:contact@poligrade.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`

    // Open user's email client
    window.location.href = mailtoLink
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
      </div>
    </div>
  )
}
