import { useState, useEffect } from 'react';
import "./Accessories.scss";
import balls from "../assets/images/accessories/balls.png";
import sand from "../assets/images/accessories/sand.png";
import gold_sand from "../assets/images/accessories/gold_sand.png";
import glasssucker from "../assets/images/accessories/glasssucker.png";

const Accessories = () => {
  const [quantities, setQuantities] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const accessories = [
    { id: 1, name: 'Precision Metal Ball', category: 'Hardware', price: '$15', description: 'Silicon-nitride coated for silent gliding.', image: balls },
    { id: 2, name: 'Kinetic White Sand', category: 'Surface Media', price: '$25', description: 'Ultra-fine silica for crisp patterns.', image: sand },
    { id: 3, name: 'Royal Gold Sand', category: 'Surface Media', price: '$35', description: 'Metallic finish for high-contrast art.', image: gold_sand },
    { id: 4, name: 'Replacement Glass', category: 'Hardware', price: '$85', description: 'Tempered, low-iron glass for clarity.', image: glasssucker },
    { id: 5, name: 'Ergonomic Glass Sucker', category: 'Maintenance', price: '$12', description: 'Safe removal for annual maintenance.', image: glasssucker },
    { id: 6, name: 'Maintenance Kit', category: 'Maintenance', price: '$20', description: 'Essential tools for peak performance.', image: balls },
  ];

  const handleIncrement = (index) => {
    setQuantities(prev => prev.map((q, i) => i === index ? q + 1 : q));
  };

  const handleDecrement = (index) => {
    setQuantities(prev => prev.map((q, i) => i === index ? Math.max(0, q - 1) : q));
  };

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Surface Media', 'Hardware', 'Maintenance'];

  const filteredAccessories = activeCategory === 'All'
    ? accessories
    : accessories.filter(acc => acc.category === activeCategory);

  return (
    <div className="accessories-page">
      <div className="accessories-container section-fade-in">
        <div className="accessories-header">
          <h1 className="accessories-heading">Enhance Your Experience</h1>
          <p className="accessories-subheading">Premium add-ons and maintenance essentials for your ArtScape table.</p>
        </div>

        <div className="category-filter neu-pressed">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="accessories-grid">
          {filteredAccessories.map((acc, index) => (
            <div key={acc.id} className="accessory-tile neu-lifted" data-reveal>
              <div className="accessory-badge">{acc.category}</div>
              <div className="image-wrapper neu-pressed">
                <img src={acc.image} alt={acc.name} className="accessory-image" />
              </div>
              <div className="accessory-info">
                <h3 className="accessory-name">{acc.name}</h3>
                <p className="accessory-description">{acc.description}</p>
                <div className="accessory-footer">
                  <span className="accessory-price">{acc.price}</span>
                  <div className="quantity-controls neu-pressed">
                    <button onClick={() => handleDecrement(index)} className="quantity-btn">-</button>
                    <span className="quantity-count">{quantities[index]}</span>
                    <button onClick={() => handleIncrement(index)} className="quantity-btn">+</button>
                  </div>
                </div>
                <button className="buy-now-btn neu-button">Add to Collection</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
