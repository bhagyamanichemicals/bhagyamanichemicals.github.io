import React, { useRef, useEffect, useState } from 'react';
import './FeaturedCarousel.css';
import { buildSitePath } from '../sitePaths';

interface Product {
  id: string | number;
  name: string;
  image: string;
}

interface CarouselProps {
  products: Product[];
  title?: string;
}

export const FeaturedCarousel: React.FC<CarouselProps> = ({ products, title = "Featured Products" }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Guard against crashes if an empty or minimal array is provided
  if (!products || products.length === 0) return null;

  // Single card size dimension matching your CSS configuration (280px width + 24px gap)
  const CARD_WIDTH = 304; 
  const totalOriginalWidth = products.length * CARD_WIDTH;

  // Clone items array to create an infinite scroll loop buffer
  const cyclicProducts = [...products, ...products, ...products];

  // Initialize the carousel position directly to the authentic middle array section
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = totalOriginalWidth;
    }
  }, [totalOriginalWidth]);

  // Track scroll position to perform silent jumps when reaching borders
  const handleScrollAndCycle = () => {
    const container = carouselRef.current;
    if (!container) return;

    const { scrollLeft } = container;

    /* 
      CRITICAL FIX FOR JERKING:
      Instead of waiting until scrollLeft hits 0 or the absolute end, we trigger 
      the silent jump slightly before it completely run out of buffer items.
    */
    // Left boundary reset: If scrolling close to the beginning of the first clone block
    if (scrollLeft <= CARD_WIDTH) {
      // Temporarily remove smooth scroll behavior so the jump is completely hidden
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollLeft + totalOriginalWidth;
    } 
    // Right boundary reset: If scrolling past the authentic middle section into the last clone block
    else if (scrollLeft >= totalOriginalWidth * 2 - CARD_WIDTH) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollLeft - totalOriginalWidth;
    }
  };

  // Interactive control click function
  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (container) {
      const { scrollLeft } = container;
      const targetScroll = direction === 'left' ? scrollLeft - CARD_WIDTH : scrollLeft + CARD_WIDTH;
      
      // Explicitly turn smooth scrolling back on for human or automated clicks
      container.style.scrollBehavior = 'smooth';
      container.scrollLeft = targetScroll;
    }
  };

  // Auto-play interval handling loop updates
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 3000); // Advances slider every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="featured-section">
      <div className="section-header-wrap">
        <div className="section-title-wrap">
          <span>{title}</span>
        </div>
      </div>

      <div 
        className="carousel-track-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button 
          type="button" 
          className="ctrl-btn prev-btn" 
          onClick={() => scroll('left')} 
          aria-label="Previous"
        >
          ←
        </button>
        
        <button 
          type="button" 
          className="ctrl-btn next-btn" 
          onClick={() => scroll('right')} 
          aria-label="Next"
        >
          →
        </button>

        <div 
          ref={carouselRef} 
          className="product-grid carousel-mode"
          onScroll={handleScrollAndCycle}
        >
          {cyclicProducts.map((product, index) => (
            <article key={`${product.id}-cyclic-${index}`} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={`Bhagyamani ${product.name}`} />
              </div>
              <div className="product-name">{product.name}</div>
              <a href={buildSitePath('/products')} className="learn-btn">Learn More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
