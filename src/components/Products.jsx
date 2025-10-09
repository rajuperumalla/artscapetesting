import { Link } from "react-router-dom"
import "./Products.scss"
import diamond from "../assets/images/products/diamond.jpg"
import side_table from "../assets/images/products/side_table.jpg"
import center_table from "../assets/images/products/center_table.jpg"
import coffee_table from "../assets/images/products/coffee_table.jpg"

const Products = () => {
  return (
    <>
        <section className="products">
            <div className="artscape-collection">ArtScape Collection</div>
            <div className="products-container">
                <div className="product">
                    <div className="product-content">
                        <img className="product-image" src={side_table} alt="image" />
                        <div className="product-text">
                            <h4 className="table-title">Side Table</h4>
                            {/* <del>₹1,60,000</del><span className=""> ₹1,30,000 /-</span> */}
                        </div>
                    </div>
                    <Link to="../contactUs" className="add-to-cart" >Contact Us to Buy</Link>
                </div>
                <div className="product">
                    <div className="product-content">
                        <img className="product-image" src={coffee_table} alt="image" />
                        <div className="product-text">
                            <h4 className="table-title">Coffee Table</h4>
                            {/* <del>₹2,49,000</del><span className=""> ₹1,99,000 /-</span> */}
                        </div>
                    </div>
                    <Link to="../contactUs" className="add-to-cart" >Contact Us to Buy</Link>
                </div>
                <div className="product">
                     <div className="product-content">
                        <img className="product-image" src={center_table} alt="image" />
                        <div className="product-text">
                            <h4 className="table-title">Center Table</h4>
                            {/* <del>₹3,30,000</del><span className=""> ₹2,50,000 /-</span> */}
                        </div>
                    </div>
                    <Link to="../contactUs" className="add-to-cart" >Contact Us to Buy</Link>
                </div>
                <div className="product">
                     <div className="product-content">
                        <img className="product-image" src={diamond} alt="image" />
                        <div className="product-text">
                            <h4 className="table-title">Diamond Series</h4>
                            {/* <del>₹4,49,000</del><span className=""> ₹3,00,000 /-</span> */}
                        </div>
                    </div>
                    <Link to="../contactUs" className="add-to-cart">Contact Us to Buy</Link>
                </div>
            </div>

        </section>
        
    </>
    
  )
}

export default Products
