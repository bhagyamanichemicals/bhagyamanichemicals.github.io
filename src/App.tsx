import { useState } from 'react'
import './App.css'
import About from './About/About'
import Products from './Products/Products'
import QualityAndSafety from './QualityAndSafety/QualityAndSafety'
import { FeaturedCarousel } from './components/FeaturedCarousel'
import Header from './components/Header'
import { BRAND_COLORS } from './constants/colors'
import { buildSitePath, getCurrentRoute } from './sitePaths'
import dishwasherImage from './assets/Dishwasher.jpg'
import fabricWashImage from './assets/Fabric Wash.jpg'
import floorCleanerImage from './assets/Floor Cleaner.jpg'
import glassCleanerImage from './assets/Glass Cleaner.jpg'
import liquidDetergentImage from './assets/Liquid Detergent.jpg'
import whiteFloorCleanerImage from './assets/White Floor Cleaner.jpg'

const themeVars = {
  '--bgPure': BRAND_COLORS.bgPure,
  '--bgSurface': BRAND_COLORS.bgSurface,
  '--primary': BRAND_COLORS.primary,
  '--textMain': BRAND_COLORS.textMain,
  '--accent': BRAND_COLORS.accent,
  '--warning': BRAND_COLORS.warning,
} as React.CSSProperties


const chemicalProducts = [
  { id: 1, name: 'White Floor Cleaner', image: whiteFloorCleanerImage },
  { id: 2, name: 'Liquid Detergent', image: liquidDetergentImage },
  { id: 3, name: 'Glass Cleaner', image: glassCleanerImage },
  { id: 4, name: 'Dishwasher Liquid', image: dishwasherImage },
  { id: 5, name: 'Fabric Wash', image: fabricWashImage },
  { id: 6, name: 'Floor Cleaner', image: floorCleanerImage },
]

const reasons = [
  { title: 'ISO Certified', icon: '✓', tone: 'check' },
  { title: 'Eco-Conscious', icon: '❀', tone: 'leaf' },
  { title: "Bihar's Pride", icon: '◉', tone: 'person' },
  { title: 'Quality Assurance', icon: '✓', tone: 'check' },
]

function ContactForm() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')
    const form = event.currentTarget
    const formData = new FormData(form)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('The contact form is not configured yet. Please contact us by phone or email.')
      setIsSubmitting(false)
      return
    }

    const name = String(formData.get('name') ?? '').trim()
    const enquiry = {
      access_key: accessKey,
      name,
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      subject: `New Website Enquiry from ${name}`,
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiry),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message. Please try again.')
      }

      form.reset()
      setStatus('Your message has been sent. Thank you for contacting us.')
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleContactSubmit}>
      <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" required maxLength={100} />
      <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" required maxLength={254} />
      <input
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        aria-label="Mobile Number"
        autoComplete="tel"
        maxLength={30}
      />
      <textarea name="message" placeholder="Message" aria-label="Message" rows={4} required maxLength={5000} />
      <button type="submit" className="send-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {status && (
        <p className="contact-form-status" role="status">
          {status}
        </p>
      )}
    </form>
  )
}

function App() {
  const currentPath = getCurrentRoute()

  if (currentPath === '/about-us') {
    return <About />
  }

  if (currentPath === '/products') {
    return <Products />
  }

  if (currentPath === '/quality-and-safety') {
    return <QualityAndSafety />
  }

  return (
    <div className="page-shell" style={themeVars}>
      <Header />
      <main className="page-content">
        <section className="hero-section">
          <h1>Excellence in Hygiene, Safety in Every Drop</h1>

          <div className="cta-row">
            <a href={buildSitePath('/products')} className="primary-btn">
              Explore Products
            </a>
            <a href="#contact" className="secondary-btn">
              Partner With Us
            </a>
          </div>
        </section>

        <div className="cert-strip">
          ISO 9001 Certified | Eco-Friendly | Made in Bihar
        </div>
      <FeaturedCarousel products={chemicalProducts} title="Our Chemical Formulations" />
        <section className="why-us-section">
          <div className="section-title-wrap">
            <span>Why Choose Us?</span>
          </div>

          <div className="feature-grid">
            {reasons.map((reason) => (
              <div key={reason.title} className="feature-item">
                <div className={`feature-icon ${reason.tone}`}>
                  <span>{reason.icon}</span>
                </div>
                <p>{reason.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-title-wrap">
            <span>Get in Touch</span>
          </div>

          <div className="contact-layout">
            <div className="info-column">
              <div className="info-row">
                <span className="info-icon">◌</span>
                <span>
                  <strong>Location</strong>
                  <span>Laukariya, East Champaran, Bihar, India</span>
                </span>
              </div>
              <div className="info-row">
                <span className="info-icon">◔</span>
                <span>
                  <strong>Phone</strong>
                  <a href="tel:+917759999929">+91 77599 99929</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-icon">✉</span>
                <span>
                  <strong>Email</strong>
                  <a href="mailto:bhagyamani2k25@gmail.com">
                    bhagyamani2k25@gmail.com
                  </a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-icon">◍</span>
                <span>
                  <strong>Address</strong>
                  <span>
                    Bhagyamani Path, Sirisiya Nizamat, Laukariya,
                    East Champaran, Bihar 845440, India
                  </span>
                </span>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        © 2026/Bhagyamani Chemicals • East Champaran • Bihar, India
      </footer>
    </div>
  )
}

export default App
