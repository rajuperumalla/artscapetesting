import "./SingleProduct.scss"
import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import 'swiper/css';

import products from "../products/productsData"
import artscape01 from "../../assets/images/products/singleproduct/artscape1.jpg"
import artscape02 from "../../assets/images/products/singleproduct/artscape.png"
import Accordion from "./Accordion";
import Pagenotfound from "../../components/Pagenotfound";
import wood from "../../assets/images/products/singleproduct/woodvarient.jpg"


const SingleProduct = () => {
    const { slug } = useParams()
    const product = products.find((p) => p.slug === slug)
    if (!product) { return <Pagenotfound /> }

    const productImages = [artscape01, artscape02, artscape01, artscape02, artscape01];
    const [mainImageSrc, setMainImageSrc] = useState(productImages[0]);
    const [activeThumbnail, setActiveThumbnail] = useState(productImages[0]);
    const [selectedVariant, setSelectedVariant] = useState('wood');

    
    const variantImages = { wood: artscape01, metal: artscape02 };

    const handleThumbnailClick = (imageSource) => {
        setMainImageSrc(imageSource); // Update the main image
        setActiveThumbnail(imageSource); // Set the clicked thumbnail as active
    };
    const handleVariantClick = (variant) => {
        setSelectedVariant(variant);
        setMainImageSrc(variantImages[variant]);
    };

    const accordionData = {
        // Updated SPECS entry
        "SPECS": `
        • Diameter: 20" (50cm)
        • Height: 21" (54cm)
        • Power: Included corded power supply
        • Sound: Nearly silent
        • Control: Free iOS and Android app
        • Connectivity: WiFi
        • Media: Included Sand Packet
        `,
        "SHIPPING AND RETURNS": "Shipping takes 5–7 business days.",
        "WHAT'S INCLUDED?": "You get the full package.",
        "WHY PRE-ORDER?": "Early access and discounts.",
        "POWER REQUIREMENTS": "Requires 12V DC."
    };

    const sliderImages = [artscape01, artscape01, artscape01, artscape01, artscape01, artscape01, artscape01, artscape01,];


    return (
        <>
           <div className="page">
                <div className="left-section">
                    <img src={mainImageSrc} className="main-image" alt="Main Product View" />
                    <div className="thumbnail-row">
                        {productImages.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => handleThumbnailClick(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail-image ${activeThumbnail === image ? 'active' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-section">
                    <h1 className="title">ArtScape (Side Table)</h1>
                    <div className="stars">⭐⭐⭐⭐⭐ 125 reviews</div>
                    <div className="review-box">
                        “This item is awesome. Very relaxing watching it work. The app is
                        easy to use and a lot of designs. Gave it to my wife for an
                        anniversary gift. She loves it!”
                    </div>
                    <div className="variants">
                        <h2>Variants</h2>
                        <div className="variant-list">
                            <div
                                className={`variant-box ${selectedVariant === 'wood' ? 'active' : ''}`}
                                onClick={() => handleVariantClick('wood')}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={wood} alt="Wood" style={{ pointerEvents: 'none' }} />
                                <span style={{ pointerEvents: 'none' }}>Wood</span>
                            </div>

                            <div
                                className={`variant-box ${selectedVariant === 'metal' ? 'active' : ''}`}
                                onClick={() => handleVariantClick('metal')}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={wood} alt="Metal" style={{ pointerEvents: 'none' }} />
                                <span style={{ pointerEvents: 'none' }}>Metal</span>
                            </div>
                        </div>
                    </div>



                    <div>
                        <Accordion items={accordionData} />
                    </div>


                    {/* <!-- PRODUCT OPTION BOXES GRID --> */}

                    <a href="https://wa.me/9642084569?text=Hello%20I%20am%20interested%20in%20buying%20the%20product%20I%20saw%20on%20your%20website.">
                        <button className="big-contac-btn">Contact Us To Buy</button>
                    </a>

                </div>
            </div>

            <div className="auto-scroll">
                <div className="scroll-content">
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />

                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                    <img src={artscape01} />
                </div>
            </div>
            <div className="beniftsbar">
                <span>Stress Relief</span>
                <span>Stress Relief</span>
                <span>Stress Relief</span>
            </div>
            <div className="faqs">
                what is artscape
            </div>

        </>
    )
}

export default SingleProduct