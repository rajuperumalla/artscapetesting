import { Link } from "react-router-dom"
import "./Products.scss"
import products from "./productsData"
const Products = () => {
  return (
    <>
        <section className="products">
            <div className="artscape-collection">ArtScape Collection</div>
            <div className="products-container">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.slug}`}
                        className="product"
                    >
                        <div className="product-content">
                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.title}
                        />
                        <div className="product-text">
                            <h4 className="table-title">{product.title}</h4>
                        </div>
                        </div>
                    </Link> 
                ))}
            </div>
        </section>
    </>  
  )
}

export default Products
