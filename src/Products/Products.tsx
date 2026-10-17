import './Products.css'
import Header from '../components/Header'
import { BRAND_COLORS } from '../constants/colors'
import dishwasherImage from '../assets/Dishwasher.jpg'
import fabricWashImage from '../assets/Fabric Wash.jpg'
import floorCleanerImage from '../assets/Floor Cleaner.jpg'
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
  {
    name: 'White Floor Cleaner',
    slug: 'white-floor-cleaner',
    image: whiteFloorCleanerImage,
    description:
      'A practical everyday cleaner for refreshing hard floors and keeping frequently used spaces looking neat.',
    usage: 'Dilute 1–2 capfuls in approximately 4–5 litres of water and mop. Check the product label for exact directions.',
  },
  {
    name: 'Liquid Detergent',
    slug: 'liquid-detergent',
    image: liquidDetergentImage,
    description:
      'A convenient liquid laundry wash for routine clothing care and everyday household loads.',
    usage: 'For a regular 6–7 kg machine load, the supplied guidance is 60 ml; use 90 ml for heavily soiled laundry. Adjust and follow the product label.',
  },
  {
    name: 'Glass Cleaner',
    slug: 'glass-cleaner',
    image: glassCleanerImage,
    description:
      'Designed for glass and other suitable smooth surfaces to help lift everyday marks and leave a clear finish.',
    usage: 'Spray onto the surface and wipe with a clean, dry lint-free cloth. For screens or electronics, spray the cloth rather than the device.',
  },
  {
    name: 'Dishwasher Liquid',
    slug: 'dishwasher-liquid',
    image: dishwasherImage,
    description:
      'A liquid dishwashing solution for daily cleaning of dishes, cookware, and kitchen utensils.',
    usage: 'The supplied guidance is to dilute 10 ml in about 40 ml of water, then apply with a sponge. For greasy cookware, apply a few drops to the sponge. Follow the product label.',
  },
  {
    name: 'Fabric Wash',
    slug: 'fabric-wash',
    image: fabricWashImage,
    description:
      'A gentle-feeling liquid wash for regular fabric care, helping make laundry day simple and convenient.',
    usage: 'Use according to the garment care instructions and the dosage printed on the product label.',
  },
  {
    name: 'Floor Cleaner',
    slug: 'floor-cleaner',
    image: floorCleanerImage,
    description:
      'A dependable cleaner for routine floor care at home or in other everyday spaces.',
    usage: 'Dilute according to the product label before mopping. Do not mix with other cleaning products.',
  },
]

function Products() {
  return (
    <div className="page-shell" style={themeVars}>
      <Header />
      <main className="page-content products-page">
        <section className="products-hero">
          <p className="products-eyebrow">Bhagyamani Chemicals</p>
          <h1>Everyday Cleaning, Made Simple</h1>
          <p>
            Explore our household cleaning range, created for the everyday
            needs of homes and businesses.
          </p>
        </section>

        <section className="products-grid" aria-label="Bhagyamani product range">
          {products.map((product) => (
            <article className="product-detail-card" id={product.slug} key={product.name}>
              <div className="product-detail-card__image">
                <img src={product.image} alt={`Bhagyamani ${product.name}`} />
              </div>
              <div className="product-detail-card__content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <details className="product-use">
                  <summary>Usage guidance</summary>
                  <p>{product.usage}</p>
                </details>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer className="footer-bar">
        © 2026/Bhagyamani Chemicals • East Champaran • Bihar, India
      </footer>
    </div>
  )
}

export default Products
