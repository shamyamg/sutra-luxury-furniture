import { createIcons, Truck, Wrench, Leaf, ShieldCheck, ArrowRight } from 'lucide';

// Initialize Lucide icons
createIcons({
  icons: {
    Truck,
    Wrench,
    Leaf,
    ShieldCheck,
    ArrowRight
  }
});

const products = [
  {
    id: 1,
    name: 'The Haven 3-Seater Sofa',
    category: 'Living Room',
    desc: 'Upholstered in premium sand beige linen with a deep walnut frame. Handcrafted for supreme comfort.',
    originalPrice: '₹28,999',
    salePrice: '₹24,999',
    image: '/images/sofa.jpg',
  },
  {
    id: 2,
    name: 'Aura King Bed',
    category: 'Bedroom',
    desc: 'A statement piece featuring an oversized walnut headboard and meticulous joinery details.',
    originalPrice: '₹22,999',
    salePrice: '₹18,499',
    image: '/images/bed.jpg',
  },
  {
    id: 3,
    name: 'Kashi Oak Dining Set',
    category: 'Dining',
    desc: 'Minimalist 6-seater solid oak dining table. Includes beautifully curved chairs with textured upholstery.',
    originalPrice: '₹42,999',
    salePrice: '₹34,999',
    image: '/images/dining.jpg',
  },
  {
    id: 4,
    name: 'Clarity Study Desk',
    category: 'Office',
    desc: 'Sleek walnut desk with integrated cable management and discreet drawers for a minimal workspace.',
    originalPrice: '₹12,499',
    salePrice: '₹9,799',
    image: '/images/desk.jpg',
  },
  {
    id: 5,
    name: 'Pebble Coffee Table',
    category: 'Living Room',
    desc: 'Sculptural organic shaped coffee table in warm travertine and solid wood tones.',
    originalPrice: '₹7,999',
    salePrice: '₹5,999',
    image: '/images/coffee_table.jpg',
  },
  {
    id: 6,
    name: 'Zenith Wardrobe',
    category: 'Bedroom',
    desc: 'Tall, elegant double wardrobe featuring seamless walnut doors and ambient interior lighting.',
    originalPrice: '₹25,999',
    salePrice: '₹21,499',
    image: '/images/wardrobe.jpg',
  }
];

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office'];

let activeCategory = 'All';
let searchQuery = '';

const filtersContainer = document.getElementById('filters-container');
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const exploreBtn = document.getElementById('explore-btn');

if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
  });
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchQuery = searchInput.value.trim();
    renderProducts();
  });
}

if (searchInput) {
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      searchQuery = searchInput.value.trim();
      renderProducts();
    }
  });
}

function renderFilters() {
  if (!filtersContainer) return;
  filtersContainer.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-pill ${activeCategory === cat ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      renderFilters();
      renderProducts();
    });
    filtersContainer.appendChild(btn);
  });
}

function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  
  let filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  if (searchQuery) {
    const lowerQ = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(lowerQ) || 
      p.desc.toLowerCase().includes(lowerQ) ||
      p.category.toLowerCase().includes(lowerQ)
    );
  }

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666; font-size: 1.1rem;">No products found matching your search.</div>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="product-image-container">
        <span class="category-label">${product.category}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="price-container">
          <span class="price-sale">${product.salePrice}</span>
          <span class="price-original">${product.originalPrice}</span>
        </div>
        <button class="btn-outline">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Initial render
renderFilters();
renderProducts();
