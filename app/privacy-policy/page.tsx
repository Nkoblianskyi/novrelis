import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <ShieldCheck className="h-6 w-6 text-teal-500 mr-2" />
            <h1 className="text-3xl font-bold text-teal-800">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Effective Date: January 15, 2025</p>

            <h2 className="text-teal-700">Our Privacy Commitment</h2>
            <p>
              At Novrelis, we understand that your privacy matters. This document outlines how we handle your personal
              information when you interact with our free social gaming platform "Rescue Hero in the Canadian Rockies".
              We are committed to transparency and protecting your digital privacy rights.
            </p>

            <h2 className="text-teal-700">What Information We Gather</h2>
            <p>When you use our platform, we may collect several types of information:</p>
            <ul>
              <li>
                <strong>Account Details:</strong> Your chosen username, email address, and age confirmation when you
                register or contact our support team.
              </li>
              <li>
                <strong>Gaming Activity:</strong> Your game progress, achievements, scores, and gameplay preferences to
                enhance your experience.
              </li>
              <li>
                <strong>Technical Data:</strong> Your device type, browser information, IP address, and connection
                details for security and optimization purposes.
              </li>
              <li>
                <strong>Communication Records:</strong> Messages you send to our support team and feedback you provide
                about our platform.
              </li>
            </ul>

            <h2 className="text-teal-700">How We Use Your Information</h2>
            <p>Your information helps us provide and improve our services in the following ways:</p>
            <ul>
              <li>Delivering a personalized and engaging gaming experience</li>
              <li>Maintaining platform security and preventing unauthorized access</li>
              <li>Responding to your questions and providing technical support</li>
              <li>Analyzing platform usage to identify areas for improvement</li>
              <li>Ensuring compliance with age verification requirements</li>
              <li>Communicating important updates about our platform</li>
            </ul>

            <h2 className="text-teal-700">Information Sharing Practices</h2>
            <p>We maintain strict control over your personal information and only share it in limited circumstances:</p>
            <ul>
              <li>
                With trusted service providers who help us operate our platform under strict confidentiality agreements
              </li>
              <li>When required by Canadian law or legal proceedings</li>
              <li>To protect the safety and security of our users and platform</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>

            <h2 className="text-teal-700">Data Protection Measures</h2>
            <p>
              We implement comprehensive security measures including encryption, secure servers, and regular security
              audits to protect your information. While we strive for maximum security, we acknowledge that no online
              system can guarantee complete protection against all potential threats.
            </p>

            <h2 className="text-teal-700">Your Privacy Rights</h2>
            <p>As a user of our platform, you have several important rights regarding your personal information:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Ask us to correct any inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Limit how we process your information</li>
              <li>Receive a copy of your information in a portable format</li>
              <li>Withdraw consent for certain types of processing</li>
            </ul>

            <h2 className="text-teal-700">Data Retention</h2>
            <p>
              We retain your information only as long as necessary to provide our services and comply with legal
              obligations. Game progress and account information are typically retained while your account remains
              active. Communication records are kept for customer service purposes for a reasonable period.
            </p>

            <h2 className="text-teal-700">Contact Information</h2>
            <p>For any privacy-related questions or concerns, please reach out to us:</p>
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
