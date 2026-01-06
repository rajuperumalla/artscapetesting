import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Products.scss"
import products from "./productsData"

const Products = () => {
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

    return (
        <div className="products-page">
            <section className="products">
                <div className="artscape-collection section-fade-in">ArtScape Collection</div>
                <div className="products-container">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.slug}`}
                            className="product neu-lifted"
                            data-reveal
                        >
                            <div className="product-content">
                                <div className="image-wrapper neu-pressed">
                                    <img
                                        className="product-image"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                                <div className="product-text">
                                    <h4 className="table-title">{product.title}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Products

