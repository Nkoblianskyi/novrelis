import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <Cookie className="h-6 w-6 text-teal-500 mr-2" />
            <h1 className="text-3xl font-bold text-teal-800">Cookie Settings</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Last Updated: January 15, 2025</p>

            <h2 className="text-teal-700">Understanding Cookies</h2>
            <p>
              Cookies are small data files stored on your device when you visit our platform. They help us remember your
              preferences, improve your gaming experience, and ensure our platform functions properly. Think of them as
              digital bookmarks that help us provide you with a personalized experience.
            </p>

            <h2 className="text-teal-700">How We Use Cookies</h2>
            <p>Our platform uses cookies to enhance your experience in several important ways:</p>

            <h3 className="text-teal-600">Essential Platform Cookies</h3>
            <p>
              These cookies are fundamental to our platform's operation. They enable basic functions like secure login,
              game state preservation, and navigation. Without these cookies, core features of our platform would not
              function properly.
            </p>

            <h3 className="text-teal-600">Performance and Analytics Cookies</h3>
            <p>
              We use these cookies to understand how users interact with our platform. They help us identify popular
              features, detect technical issues, and optimize performance. This information is collected anonymously and
              helps us improve the overall user experience.
            </p>

            <h3 className="text-teal-600">Personalization Cookies</h3>
            <p>
              These cookies remember your preferences, such as language settings, display options, and game
              configurations. They ensure that your customized experience is maintained across different sessions.
            </p>

            <h3 className="text-teal-600">Age Verification Cookies</h3>
            <p>
              Since our platform is intended for users 18 and older, we use specific cookies to remember your age
              verification status. This prevents repeated verification requests during your visits.
            </p>

            <h2 className="text-teal-700">Cookie Categories</h2>

            <h3 className="text-teal-600">Session-Based Cookies</h3>
            <p>
              These temporary cookies exist only during your current browsing session. They are automatically deleted
              when you close your browser and contain no personally identifiable information.
            </p>

            <h3 className="text-teal-600">Persistent Cookies</h3>
            <p>
              These cookies remain on your device for a specified period or until you manually delete them. They help us
              remember your preferences and provide a consistent experience across multiple visits.
            </p>

            <h2 className="text-teal-700">Third-Party Services</h2>
            <p>
              Our platform may utilize third-party services for analytics and performance monitoring. These services may
              place their own cookies on your device. We carefully select partners who share our commitment to user
              privacy and data protection.
            </p>

            <h2 className="text-teal-700">Managing Your Cookie Preferences</h2>
            <p>
              You have full control over cookie settings through your browser preferences. Most modern browsers allow
              you to:
            </p>
            <ul>
              <li>View and delete existing cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Set preferences for different types of cookies</li>
              <li>Receive notifications when cookies are being set</li>
              <li>Configure automatic cookie deletion</li>
            </ul>

            <p>
              Please note that disabling certain cookies may affect the functionality and performance of our platform.
              Essential cookies are necessary for basic platform operation and cannot be disabled while using our
              services.
            </p>

            <h2 className="text-teal-700">Cookie Policy Updates</h2>
            <p>
              We may periodically update this Cookie Policy to reflect changes in our platform, technology, or legal
              requirements. When significant changes occur, we will notify users through our platform and update the
              effective date at the top of this document.
            </p>

            <h2 className="text-teal-700">Questions and Support</h2>
            <p>If you have questions about our cookie practices, please contact us:</p>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <p className="mb-2">
                <strong>Novrelis</strong>
              </p>
              <p>79 Saint Laurent Blvd</p>
              <p>Montreal, QC, H2Z 1X7</p>
              <p>Canada</p>
              <p className="mt-2">Email: mail@novrelis.com</p>
              <p>Website: novrelis.com</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button className="bg-teal-600 hover:bg-teal-700">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
