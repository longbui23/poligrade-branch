import { Card, CardBody } from '@nextui-org/react'

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support PoliGrade</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Help us maintain accurate political data and provide reliable information to voters across the country.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <Card>
            <CardBody className="text-center p-6">
              <p className="text-3xl font-bold text-primary mb-1">589</p>
              <p className="text-sm text-foreground/60">Politicians Tracked</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center p-6">
              <p className="text-3xl font-bold text-success mb-1">27</p>
              <p className="text-sm text-foreground/60">Policy Areas</p>
            </CardBody>
          </Card>
          <Card className="col-span-2 md:col-span-1">
            <CardBody className="text-center p-6">
              <p className="text-3xl font-bold text-warning mb-1">100%</p>
              <p className="text-sm text-foreground/60">Fact-Based Data</p>
            </CardBody>
          </Card>
        </div>

        {/* What We Support */}
        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Your Donation Supports</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <p className="text-sm text-foreground/60">
                  Server costs, data storage, and platform maintenance
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Quality</h3>
                <p className="text-sm text-foreground/60">
                  Regular updates and accuracy verification
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Research</h3>
                <p className="text-sm text-foreground/60">
                  Policy analysis and grading methodology improvements
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-foreground/60">
                  Keeping PoliGrade free for all voters
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Donation Card */}
        <Card>
          <CardBody className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Make Your Contribution</h2>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
              Every contribution helps us continue our mission of providing transparent, data-driven political information.
            </p>

            {/* PayPal Button */}
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
              className="max-w-md mx-auto"
            >
              <input type="hidden" name="hosted_button_id" value="2SJS4BJQD5H68" />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0070BA] to-[#009CDE] text-white font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Donate via PayPal
              </button>
            </form>

            <p className="text-xs text-foreground/50 mt-6">
              Secure payment processing through PayPal
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
