import logoImage from '../assets/Logo.png'
import { buildSitePath, getCurrentRoute } from '../sitePaths'

function Header() {
  const currentPath = getCurrentRoute()

  return (
    <header className="topbar">
        <a className="brand" href={buildSitePath('/')} aria-label="Bhagyamani Chemicals home">
          <img src={logoImage} alt="Bhagyamani Chemicals" />
          <span className="brand-name">Bhagyamani</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href={buildSitePath('/')} className={currentPath === '/' ? 'active' : undefined}>
            Home
          </a>
          <a href={buildSitePath('/about-us')} className={currentPath === '/about-us' ? 'active' : undefined}>
            About Us
          </a>
          <a href={buildSitePath('/products')} className={currentPath === '/products' ? 'active' : undefined}>
            Products
          </a>
          <a
            href={buildSitePath('/quality-and-safety')}
            className={currentPath === '/quality-and-safety' ? 'active' : undefined}
          >
            Quality &amp; Safety
          </a>
        </nav>
    </header>
  );
}

export default Header;