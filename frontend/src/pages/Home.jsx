import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TrustedBy from '../components/TrustedBy.jsx'
import Features from '../components/Features.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Statistics from '../components/Statistics.jsx'
import DashboardPreview from '../components/DashboardPreview.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Pricing from '../components/Pricing.jsx'
import FAQ from '../components/FAQ.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Statistics />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
