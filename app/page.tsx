import AgeVerificationModal from "@/components/age-verification-modal"
import StructuredData from "./structured-data"
import HeroSection from "@/components/home/hero-section"
import GameFeatures from "@/components/home/game-features"
import GameplayPreview from "@/components/home/gameplay-preview"
import SkiingGameDescription from "@/components/skiing-game-description"
import ContactForm from "@/components/contact-form"
import DownloadCta from "@/components/home/download-cta"

export default function Home() {
  return (
    <>
      <StructuredData />
      <AgeVerificationModal />

      {/* Hero Section */}
      <HeroSection />

      {/* Skiing Game Description */}
      <SkiingGameDescription />

      {/* Game Features Section */}
      <GameFeatures />

      {/* Gameplay Preview Section */}
      <GameplayPreview />
      <DownloadCta />
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-800">Contact Us</h2>
            <p className="text-center text-gray-600 mb-10">
              Have questions about our skiing game? Want to share your feedback? Reach out to us!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Download CTA Section */}

    </>
  )
}
