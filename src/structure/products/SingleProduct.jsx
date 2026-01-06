import "./SingleProduct.scss"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import 'swiper/css';

import products from "../products/productsData"
import artscape01 from "../../assets/images/products/singleproduct/artscape1.jpg"
import Accordion from "./Accordion";
import Pagenotfound from "../../components/Pagenotfound";
import wood from "../../assets/images/products/singleproduct/woodvarient.jpg"
import KeenCarousel from "../../components/KeenCarousel";


const SingleProduct = () => {
    const { slug } = useParams()
    const product = products.find((p) => p.slug === slug)

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
    }, [slug]);

    if (!product) { return <Pagenotfound /> }

    const hasVariants = product.woodProductImages && product.metalProductImages;
    const [selectedVariant, setSelectedVariant] = useState(hasVariants ? 'wood' : null);
    const productImages = hasVariants ? (selectedVariant === 'wood' ? product.woodProductImages : product.metalProductImages) : (product.productImages || []);
    const [activeThumbnail, setActiveThumbnail] = useState(productImages[0]);

    const handleThumbnailClick = (image) => {
        setActiveThumbnail(image);
    };
    const handleVariantClick = (variant) => {
        if (!hasVariants) return;
        setSelectedVariant(variant);
        setActiveThumbnail(variant === 'wood' ? product.woodProductImages[0] : product.metalProductImages[0]);
    };

    const accordionData = {
        "SPECS": `
        • Diameter: 20" (50cm)
        • Height: 21" (54cm)
        • Power: Included corded power supply
        • Sound: Nearly silent
        • Control: Free iOS and Android app
        • Connectivity: WiFi
        • Media: Included Sand Packet
        `,
        "SHIPPING AND RETURNS": "Shipping takes 5–7 business days. We offer global shipping with premium tracking.",
        "WHAT'S INCLUDED?": "Every ArtScape comes with the kinetic table, a pre-filled sand bed, a precision metal ball, and the dedicated power suite.",
        "WHY PRE-ORDER?": "Pre-ordering guarantees early shipment from the next handcrafted batch and exclusive member pricing.",
        "POWER REQUIREMENTS": "110-240V AC. Includes local adapter."
    };

    const faqData = {
        "How does Sand Art Furniture help with relaxation?": "The gentle, continuous movement of real sand creates a calming visual rhythm that naturally helps reduce stress, quiet the mind, and promote relaxation.",
        "Can this furniture really inspire creativity?": "Yes. The ever-changing patterns stimulate visual thinking and imagination, making it ideal for creative spaces and sophisticated living areas.",
        "Is it suitable for homes and offices?": "Absolutely. Its elegant design and soothing motion make it a perfect fit for both home and office settings, enhancing ambiance everywhere.",
        "Do the patterns repeat?": "No. With 1000+ inbuilt patterns and continuous app updates, the experience stays fresh and dynamic indefinitely.",
    };

    const sliderImages = [artscape01, artscape01, artscape01, artscape01];

    return (
        <div className="single-product-page">
            <div className="product-layout section-fade-in">
                <div className="left-section">
                    <div className="main-image-container neu-lifted">
                        <img src={activeThumbnail} className="main-image" alt="Main Product View" />
                    </div>
                    <div className="thumbnail-grid">
                        {productImages.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => handleThumbnailClick(image)}
                                className={`thumbnail-box neu-lifted ${activeThumbnail === image ? 'active' : ''}`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="thumbnail-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-section">
                    <h1 className="title">ArtScape <span>{product.title}</span></h1>
                    <div className="reviews neu-pressed">⭐⭐⭐⭐⭐ 125 Luxury Reviews</div>

                    <div className="description-box neu-lifted" data-reveal>
                        <p>{product.description}</p>
                    </div>

                    <div className="pricing-suite neu-lifted" data-reveal>
                        <div className="badge">Limited Launch Edition</div>
                        <div className="main-price">₹ 1,49,999/-</div>
                        <div className="price-meta">
                            <span className="original">₹ 2,99,999/-</span>
                            <span className="savings">Exclusive ₹ 49,999/- Saving</span>
                        </div>
                    </div>

                    {hasVariants && (
                        <div className="variants-section" data-reveal>
                            <h3>Select Finish</h3>
                            <div className="variant-grid">
                                <div
                                    className={`variant-card neu-lifted ${selectedVariant === 'wood' ? 'active' : ''}`}
                                    onClick={() => handleVariantClick('wood')}
                                >
                                    <img src={wood} alt="Wood" />
                                    <span>Walnut Wood</span>
                                </div>

                                <div
                                    className={`variant-card neu-lifted ${selectedVariant === 'metal' ? 'active' : ''}`}
                                    onClick={() => handleVariantClick('metal')}
                                >
                                    <img src={wood} alt="Metal" />
                                    <span>Graphite Metal</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="accordion-suite" data-reveal>
                        <Accordion items={accordionData} />
                    </div>

                    <div className="action-area" data-reveal>
                        <a href="https://wa.me/9642084569?text=Hello%20I%20am%20interested%20in%20buying%20the%20ArtScape%20Studio." className="buy-link">
                            <button className="buy-now-btn neu-button">Enquire to Acquire</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="marquee-section neu-pressed" data-reveal>
                <div className="marquee-content">
                    {sliderImages.concat(sliderImages).map((img, index) => (
                        <img key={index} src={img} alt={`Showcase ${index + 1}`} />
                    ))}
                </div>
            </div>

            <div className="benefits-strip neu-lifted" data-reveal>
                <div className="benefit-item">
                    <span className="icon">🌟</span>
                    <span className="text">Quietly Relaxing</span>
                </div>
                <div className="benefit-item">
                    <span className="icon">🎨</span>
                    <span className="text">Endlessly Creative</span>
                </div>
                <div className="benefit-item">
                    <span className="icon">🛋️</span>
                    <span className="text">Premium Craftsmanship</span>
                </div>
            </div>

            <section className="keen-slider-section" data-reveal>
                <KeenCarousel images={sliderImages} />
            </section>

            <section className="faq-section" data-reveal>
                <h2 className="faq-title">Acquisition FAQ</h2>
                <div className="faq-container neu-lifted">
                    <Accordion items={faqData} showWarrantyBar={false} />
                </div>
            </section>
        </div>
    )
}

export default SingleProduct
