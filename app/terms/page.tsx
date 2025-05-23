import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-teal-500 mr-2" />
            <h1 className="text-3xl font-bold text-teal-800">Terms of Use</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Last Updated: January 15, 2025</p>

            <h2 className="text-teal-700">Welcome to Our Platform</h2>
            <p>
              These Terms of Use govern your access to and use of "Rescue Hero in the Canadian Rockies", a free social
              gaming platform operated by Novrelis. By accessing our platform, you agree to comply with these terms. If
              you do not agree with any provision, please discontinue use of our services.
            </p>

            <h2 className="text-teal-700">Age Requirements</h2>
            <p>
              Our platform is designed for adults aged 18 and older. By using our services, you confirm that you meet
              this age requirement. We reserve the right to verify your age and restrict access if we have reason to
              believe you do not meet our age requirements.
            </p>

            <h2 className="text-teal-700">Platform Purpose and Nature</h2>
            <p>"Rescue Hero in the Canadian Rockies" is a free social entertainment platform that offers:</p>
            <ul>
              <li>Interactive gaming experiences with no monetary transactions</li>
              <li>Virtual achievements and progress tracking with no real-world value</li>
              <li>Social features for connecting with other players</li>
              <li>Entertainment content focused on adventure and rescue scenarios</li>
              <li>Complete freedom from gambling mechanics or real money involvement</li>
            </ul>

            <h2 className="text-teal-700">User Responsibilities</h2>
            <p>When using our platform, you agree to:</p>
            <ul>
              <li>Provide accurate information when creating an account</li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>Use the platform in accordance with applicable laws and regulations</li>
              <li>Respect other users and maintain appropriate conduct</li>
              <li>Report any security vulnerabilities or inappropriate behavior</li>
              <li>Refrain from attempting to exploit or damage our systems</li>
            </ul>

            <h2 className="text-teal-700">Prohibited Activities</h2>
            <p>The following activities are strictly prohibited on our platform:</p>
            <ul>
              <li>Harassment, bullying, or threatening behavior toward other users</li>
              <li>Sharing inappropriate, offensive, or illegal content</li>
              <li>Attempting to hack, disrupt, or compromise platform security</li>
              <li>Creating multiple accounts to circumvent restrictions</li>
              <li>Using automated tools or bots to interact with our platform</li>
              <li>Impersonating other users, staff members, or third parties</li>
            </ul>

            <h2 className="text-teal-700">Intellectual Property Rights</h2>
            <p>
              All content, features, and functionality of our platform, including but not limited to graphics, text,
              software, and game mechanics, are owned by Novrelis and protected by Canadian and international copyright
              laws. Users are granted a limited, non-exclusive license to use the platform for personal entertainment
              purposes only.
            </p>

            <h2 className="text-teal-700">Platform Availability</h2>
            <p>
              While we strive to maintain consistent platform availability, we cannot guarantee uninterrupted service.
              We reserve the right to modify, suspend, or discontinue any aspect of our platform at any time for
              maintenance, updates, or other operational reasons.
            </p>

            <h2 className="text-teal-700">Limitation of Liability</h2>
            <p>
              Novrelis and its team members shall not be held liable for any indirect, incidental, or consequential
              damages arising from your use of our platform. Our liability is limited to the maximum extent permitted by
              Canadian law.
            </p>

            <h2 className="text-teal-700">Modifications to Terms</h2>
            <p>
              We may update these Terms of Use periodically to reflect changes in our platform or legal requirements.
              Significant changes will be communicated through our platform, and continued use constitutes acceptance of
              the updated terms.
            </p>

            <h2 className="text-teal-700">Contact Information</h2>
            <p>For questions about these Terms of Use, please contact us:</p>
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
