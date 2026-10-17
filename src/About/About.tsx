import './About.css'
import Header from '../components/Header'
import { BRAND_COLORS } from '../constants/colors'
import allProductsImage from '../assets/All Products.jpg'
import brandDisplayImage from '../assets/1000254995.jpg'
import brandingImage from '../assets/Brading.jpg'
import dishwasherImage from '../assets/Dishwasher.jpg'
import fabricWashImage from '../assets/Fabric Wash.jpg'
import floorCleanerImage from '../assets/Floor Cleaner.jpg'
import founderImage from '../assets/Founder.jpg'
import founderOneImage from '../assets/Founder1.jpg'
import glassCleanerImage from '../assets/Glass Cleaner.jpg'
import liquidDetergentImage from '../assets/Liquid Detergent.jpg'
import whiteFloorCleanerImage from '../assets/White Floor Cleaner.jpg'

const themeVars = {
  '--bgPure': BRAND_COLORS.bgPure,
  '--bgSurface': BRAND_COLORS.bgSurface,
  '--primary': BRAND_COLORS.primary,
  '--textMain': BRAND_COLORS.textMain,
  '--accent': BRAND_COLORS.accent,
  '--warning': BRAND_COLORS.warning,
} as React.CSSProperties

const products = [
  { name: 'White Floor Cleaner', slug: 'white-floor-cleaner', image: whiteFloorCleanerImage },
  { name: 'Liquid Detergent', slug: 'liquid-detergent', image: liquidDetergentImage },
  { name: 'Glass Cleaner', slug: 'glass-cleaner', image: glassCleanerImage },
  { name: 'Dishwasher Liquid', slug: 'dishwasher-liquid', image: dishwasherImage },
  { name: 'Fabric Wash', slug: 'fabric-wash', image: fabricWashImage },
  { name: 'Floor Cleaner', slug: 'floor-cleaner', image: floorCleanerImage },
]

const founderPhotos = [
  { image: founderImage, alt: 'Bhagyamani founder in the laboratory' },
  { image: founderOneImage, alt: 'Bhagyamani founder portrait' },
]

function About() {
  return (
    <div className="page-shell" style={themeVars}>
      <Header />
      <main className="page-content about-page">
        <section className="about-hero">
          <p className="about-eyebrow">Who We Are</p>
          <h1>About Bhagyamani Chemical Company</h1>
          <p className="about-intro">
            Established in December 2025 and based in Raxaul, East Champaran,
            Bihar, Bhagyamani Chemical Company is an ISO 9001:2015 certified
            manufacturer of household cleaning products. We bring together
            dependable formulations, local manufacturing, and product
            traceability to serve homes and businesses.
          </p>
        </section>

        <section className="about-brand-showcase" aria-label="Our brand">
          <div className="about-brand-showcase__supporting">
            <img src={brandingImage} alt="Bhagyamani Chemicals brand identity" />
            <img src={brandDisplayImage} alt="Bhagyamani Chemicals display" />
            </div>
        </section>

        <section className="about-details" aria-label="Company information">
          <article className="about-card">
            <h2>Our Vision &amp; Leadership</h2>
            <ul>
              <li>
                Founded by Sudhanshu Kumar Singh, combining agricultural
                experience with practical, technology-driven manufacturing.
              </li>
              <li>
                Using barcode scanners and dynamic QR codes to support product
                authenticity and traceability.
              </li>
              <li>
                Making effective, affordable cleaning solutions accessible to
                customers in the region.
              </li>
            </ul>
          </article>

          <article className="about-card">
            <h2>What We Make</h2>
            <p>Our household cleaning range includes:</p>
            <ul>
              <li>Liquid detergents and multi-purpose cleaners</li>
              <li>Dishwashing liquids and glass cleaners</li>
              <li>Toilet cleaners and phenyle</li>
              <li>Disinfectants and bathroom cleaners</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>Serving Our Region</h2>
            <p>
              As a manufacturer and bulk supplier, we are growing our
              distributor network across North Bihar. We work with regional
              dealers and wholesalers to make our cleaning products available
              to more communities.
            </p>
          </article>
        </section>

        <section className="about-company" aria-labelledby="about-company-title">
          <div className="about-section-heading">
            <p className="about-eyebrow">Based in East Champaran, Bihar</p>
            <h2 id="about-company-title">Company Information</h2>
          </div>
          <div className="about-company-grid">
            <div className="about-company-card">
              <h3>Registered details</h3>
              <dl>
                <div>
                  <dt>Business</dt>
                  <dd>Bhagyamani Chemical</dd>
                </div>
                <div>
                  <dt>Founder &amp; CEO</dt>
                  <dd>Sudhanshu Kumar</dd>
                </div>
                <div>
                  <dt>GSTIN</dt>
                  <dd>10FNOPK0880G1Z2</dd>
                </div>
                <div>
                  <dt>Udyam registration</dt>
                  <dd>UDYAM-BR-11-0097281</dd>
                </div>
                <div>
                  <dt>Licence number</dt>
                  <dd>KSRBC2512503424</dd>
                </div>
              </dl>
            </div>
            <div className="about-company-card">
              <h3>Visit or contact us</h3>
              <address>
                Bhagyamani Path, Sirisiya Nizamat, Laukariya,
                East Champaran, Bihar 845440, India
              </address>
              <p>
                Customer support:{' '}
                <a href="tel:+917759999929">+91 77599 99929</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:bhagyamani2k25@gmail.com">
                  bhagyamani2k25@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="about-products" aria-labelledby="about-products-title">
          <div className="about-section-heading">
            <p className="about-eyebrow">Made for everyday care</p>
            <h2 id="about-products-title">Our Product Range</h2>
          </div>
          <div className="about-product-grid">
            {products.map((product) => (
              <a
                className="about-product-card"
                href={`${import.meta.env.BASE_URL}products#${product.slug}`}
                key={product.name}
              >
                <img src={product.image} alt={`Bhagyamani ${product.name}`} />
                <h3>{product.name}</h3>
              </a>
            ))}
            <a className="about-product-card about-product-card--wide" href={`${import.meta.env.BASE_URL}products`}>
              <img src={allProductsImage} alt="Full range of Bhagyamani products" />
              <h3>Our complete range</h3>
            </a>
          </div>
        </section>

        <section className="about-founders" aria-labelledby="about-founders-title">
          <div className="about-section-heading">
            <p className="about-eyebrow">The people behind the brand</p>
            <h2 id="about-founders-title">Our Leadership</h2>
          </div>
          <div className="about-founder-grid">
            {founderPhotos.map((photo) => (
              <img
                className="about-founder-photo"
                key={photo.image}
                src={photo.image}
                alt={photo.alt}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        © 2026/Bhagyamani Chemicals • East Champaran • Bihar, India
      </footer>
    </div>
  )
}

export default About
