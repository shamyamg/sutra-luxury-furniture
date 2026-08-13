import React, { useState } from 'react';
import { Truck, Wrench, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import './index.css';

const products = [
  {
    id: 1,
    name: 'The Haven 3-Seater Sofa',
    category: 'Living Room',
    desc: 'Upholstered in premium sand beige fabric with a deep walnut frame. Handcrafted for supreme comfort.',
    originalPrice: '₹28,999',
    salePrice: '₹24,999',
    // Using generated image
    image: '/images/sofa.png',
  },
  {
    id: 2,
    name: 'Aura King Bed',
    category: 'Bedroom',
    desc: 'A statement piece featuring an oversized walnut headboard and meticulous joinery details.',
    originalPrice: '₹22,999',
    salePrice: '₹18,499',
    // Fallback to placeholder using an aesthetic color background (handled in styling if image is missing, but here we can just pass an empty string or reuse sofa.png with css filter)
    image: '/images/sofa.png',
  },
  {
    id: 3,
    name: 'Kashi Oak Dining Set',
    category: 'Dining',
    desc: 'Minimalist 6-seater solid oak dining table. Includes beautifully curved chairs with terracotta upholstery.',
    originalPrice: '₹42,999',
    salePrice: '₹34,999',
    image: '/images/sofa.png',
  },
  {
    id: 4,
    name: 'Clarity Study Desk',
    category: 'Office',
    desc: 'Sleek walnut desk with integrated cable management and discreet drawers for a minimal workspace.',
    originalPrice: '₹12,499',
    salePrice: '₹9,799',
    image: '/images/sofa.png',
  },
  {
    id: 5,
    name: 'Pebble Coffee Table',
    category: 'Living Room',
    desc: 'Sculptural organic shaped coffee table in warm sand beige wood tones.',
    originalPrice: '₹7,999',
    salePrice: '₹5,999',
    image: '/images/sofa.png',
  },
  {
    id: 6,
    name: 'Zenith Wardrobe',
    category: 'Bedroom',
    desc: 'Tall, elegant double wardrobe featuring seamless doors and hidden brass handles.',
    originalPrice: '₹25,999',
    salePrice: '₹21,499',
    image: '/images/sofa.png',
  }
];

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="app">
      {/* Marquee Strip */}
      <div className="marquee-container">
        <div className="marquee-content">
          Free Delivery over ₹15,000 &nbsp; · &nbsp; 5-Year Warranty &nbsp; · &nbsp; Easy EMI &nbsp; · &nbsp; Free Delivery over ₹15,000 &nbsp; · &nbsp; 5-Year Warranty &nbsp; · &nbsp; Easy EMI &nbsp; · &nbsp; Free Delivery over ₹15,000 &nbsp; · &nbsp; 5-Year Warranty &nbsp; · &nbsp; Easy EMI
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Where Every Room Tells a Story</h1>
          <p>Discover our curated collection of premium, sustainably sourced furniture designed to bring warmth and luxury to your Indian home.</p>
          <button className="btn-primary">
            Explore Collection <ArrowRight size={18} style={{ marginLeft: '10px' }} />
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="Luxurious living room interior" />
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="feature-item">
          <Truck size={32} />
          <span>Free Delivery</span>
        </div>
        <div className="feature-item">
          <Wrench size={32} />
          <span>Home Assembly</span>
        </div>
        <div className="feature-item">
          <Leaf size={32} />
          <span>Sustainably Sourced</span>
        </div>
        <div className="feature-item">
          <ShieldCheck size={32} />
          <span>5-Year Warranty</span>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="products-section container">
        <div className="section-header">
          <h2>Our Curated Pieces</h2>
          <div className="filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <span className="category-label">{product.category}</span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={product.id !== 1 && product.id !== 2 ? { 
                    filter: `hue-rotate(${product.id * 40}deg) saturate(1.2)` 
                  } : {}} 
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <div className="price-container">
                  <span className="price-sale">{product.salePrice}</span>
                  <span className="price-original">{product.originalPrice}</span>
                </div>
                <button className="btn-outline">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner">
        <h2>Transform Your Home, Stress-Free.</h2>
        <p>Experience the luxury of Sutra furniture with our flexible payment options. Enjoy 0% EMI for up to 12 months on all orders above ₹20,000.</p>
        <a href="#shop" className="btn-light">Shop 0% EMI Offers</a>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content container">
          <div className="brand-section">
            <h3>Sutra.</h3>
            <p>Elevating Indian homes with warm, luxurious, and mindful spaces since 2018.</p>
          </div>
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li><a href="#living">Living Room</a></li>
              <li><a href="#bedroom">Bedroom</a></li>
              <li><a href="#dining">Dining Room</a></li>
              <li><a href="#office">Home Office</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#care">Furniture Care</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>&copy; 2026 Sutra Furniture. All rights reserved.</span>
          <span>Terms of Service | Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
