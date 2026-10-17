import './QualityAndSafety.css'
import Header from '../components/Header'
import { BRAND_COLORS } from '../constants/colors'
import allProductsImage from '../assets/All Products.jpg'

const themeVars = {
  '--bgPure': BRAND_COLORS.bgPure,
  '--bgSurface': BRAND_COLORS.bgSurface,
  '--primary': BRAND_COLORS.primary,
  '--textMain': BRAND_COLORS.textMain,
  '--accent': BRAND_COLORS.accent,
  '--warning': BRAND_COLORS.warning,
} as React.CSSProperties

const qualityCommitments = [
  {
    number: '01',
    title: 'Quality-led operations',
    description:
      'Bhagyamani Chemical is ISO 9001:2015 certified with IAF accreditation. The company states that batches undergo quality checks to support consistent products.',
  },
  {
    number: '02',
    title: 'Product traceability',
    description:
      'Barcode scanners and dynamic QR codes are used to support product authenticity and traceability through the supply chain.',
  },
  {
    number: '03',
    title: 'Clear product information',
    description:
      'Product directions and precautions help customers select and use each cleaner appropriately. Always follow the specific product label.',
  },
]

const safeUseGuidelines = [
  'Read the product label and follow its directions before use.',
  'Keep cleaning products in their original, labeled containers.',
  'Store products securely, away from children, pets, food, and direct heat.',
  'Do not mix cleaning products together.',
  'Avoid contact with eyes and skin; wash hands after handling.',
  'Use products only for their intended purpose and as directed on the label.',
]

function QualityAndSafety() {
  return (
    <div className="page-shell" style={themeVars}>
      <Header />
      <main className="page-content quality-page">
        <section className="quality-hero">
          <p className="quality-eyebrow">Our commitment</p>
          <h1>Quality in Every Detail. Safety in Every Use.</h1>
          <p>
            We are committed to dependable household cleaning products,
            responsible product information, and helping customers use and
            store cleaning products carefully.
          </p>
          <div className="quality-certification">
            <span className="quality-certification__mark" aria-hidden="true">✓</span>
            <span>
              <strong>ISO 9001:2015 certified · IAF accredited</strong>
              <small>Bhagyamani Chemical</small>
            </span>
          </div>
        </section>

        <section className="quality-story" aria-label="Our quality approach">
          <div className="quality-story__copy">
            <p className="quality-eyebrow">Quality &amp; traceability</p>
            <h2>Care from product information to everyday use</h2>
            <p>
              Quality is central to how we serve homes and businesses. We use
              product identification and traceability features, including
              barcodes and QR codes, to help customers access product
              information and verify products.
            </p>
            <p>
              Every formulation has its own intended use. Please read the
              product label and follow its instructions and precautions.
            </p>
          </div>
          <img
            className="quality-story__image"
            src={allProductsImage}
            alt="Bhagyamani household cleaning product range"
          />
        </section>

        <section className="quality-commitments" aria-labelledby="quality-commitments-title">
          <div className="quality-section-heading">
            <p className="quality-eyebrow">How we build confidence</p>
            <h2 id="quality-commitments-title">Our Quality Commitments</h2>
          </div>
          <div className="quality-commitment-grid">
            {qualityCommitments.map((commitment) => (
              <article className="quality-commitment-card" key={commitment.number}>
                <span className="quality-commitment-card__number">{commitment.number}</span>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="safe-use" aria-labelledby="safe-use-title">
          <div className="safe-use__heading">
            <p className="quality-eyebrow">A few simple precautions</p>
            <h2 id="safe-use-title">Cleaning Product Safety</h2>
            <p>
              Use household cleaning products carefully. Always check the
              directions and safety information on the specific product label.
            </p>
          </div>
          <ul className="safe-use-list">
            {safeUseGuidelines.map((guideline) => (
              <li key={guideline}>
                <span aria-hidden="true">✓</span>
                {guideline}
              </li>
            ))}
          </ul>
        </section>

        <section className="quality-workplace" aria-labelledby="quality-workplace-title">
          <div className="quality-section-heading">
            <p className="quality-eyebrow">People and environment</p>
            <h2 id="quality-workplace-title">Responsible Manufacturing</h2>
            <p>
              The company’s stated priorities include safe chemical handling,
              employee protection, and responsible environmental practices.
            </p>
          </div>
          <div className="quality-workplace-grid">
            <article>
              <h3>Workplace safety</h3>
              <p>
                Appropriate protective equipment, hazard reporting, trained
                machinery operation, and emergency readiness are key safety
                practices in chemical manufacturing.
              </p>
            </article>
            <article>
              <h3>Environmental care</h3>
              <p>
                Responsible waste handling, pollution prevention, and careful
                use of resources are important parts of safer manufacturing.
              </p>
            </article>
          </div>
        </section>

        <section className="quality-contact">
          <h2>Need product or quality support?</h2>
          <p>
            Customer support: <a href="tel:+917759999929">+91 77599 99929</a>
            {' · '}
            <a href="mailto:bhagyamani2k25@gmail.com">bhagyamani2k25@gmail.com</a>
          </p>
          <p className="quality-contact__response">
            The company aims to acknowledge formal complaints within 24 hours
            and provide a resolution plan within 72 hours.
          </p>
          <a href={`${import.meta.env.BASE_URL}#contact`} className="quality-contact__link">Contact Us</a>
        </section>
      </main>
      <footer className="footer-bar">
        © 2026/Bhagyamani Chemicals • East Champaran • Bihar, India
      </footer>
    </div>
  )
}

export default QualityAndSafety
