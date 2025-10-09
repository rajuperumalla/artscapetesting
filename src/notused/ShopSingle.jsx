

const ShopSingle = () => {
  return (
    <>
        <section className="shop-single pt-130 pb-130">
            <div className="container">
                <div className="product-details-single pb-40">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="image img">
                                <div className="swiper shop-single-slide">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="assets/images/shop/01.jpg" alt="image"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/shop/02.jpg" alt="image"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/shop/03.jpg" alt="image"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="assets/images/shop/04.jpg" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 swiper shop-slider-thumb">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide slide-smoll">
                                            <img src="assets/images/shop/01.jpg" alt="image"/>
                                        </div>
                                        <div className="swiper-slide slide-smoll">
                                            <img src="assets/images/shop/02.jpg" alt="image"/>
                                        </div>
                                        <div className="swiper-slide slide-smoll">
                                            <img src="assets/images/shop/03.jpg" alt="image"/>
                                        </div>
                                        <div className="swiper-slide slide-smoll">
                                            <img src="assets/images/shop/04.jpg" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content h24">
                                <h3 className="pb-2 primary-color">POP Extra Strawberry</h3>
                                <div className="star primary-color pb-2">
                                    <span><i className="fa-solid fa-star sm-font"></i></span>
                                    <span><i className="fa-solid fa-star sm-font"></i></span>
                                    <span><i className="fa-solid fa-star sm-font"></i></span>
                                    <span><i className="fa-solid fa-star sm-font"></i></span>
                                    <span><i className="fa-solid fa-star-half-stroke sm-font"></i></span>
                                </div>
                                <h2 className="pb-3">$440.00</h2>
                                <h4 className="pb-2 primary-color">Product Description</h4>
                                <p className="text-justify mb-10">Rapidiusly transform corporate expertise whereas
                                    enterprise-wide
                                    web
                                    services.
                                    Progressively whiteboard multifunctional
                                    networks for pandemic total linkage a Synergistically recaptiualize client and based
                                    methods of empowerment with
                                    sustainable bandwidth.</p>
                                <p className="text-justify">Progressively whiteboard multifunctional
                                    networks for pandemic total linkage a Synergistically recaptiualize client and based
                                    methods of empowerment with
                                    sustainable bandwidth.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="details-area">
                                        <div className="category flex-wrap mt-4 d-flex py-3 bor-top bor-bottom">
                                            <h4 className="pe-3">Categories :</h4>
                                            <a href="#0" className="primary-hover">Woman</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Man</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Kids</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Accessories</a>
                                        </div>
                                        <div className="d-flex flex-wrap py-3 bor-bottom">
                                            <h4 className="pe-3">Tags :</h4>
                                            <a href="#0" className="primary-hover">Fashion</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Lifestyle</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Travel</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Video</a>
                                            <span className="px-2">|</span>
                                            <a href="#0" className="primary-hover">Audio</a>
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center py-3 bor-bottom">
                                            <h4 className="pe-3">Share:</h4>
                                            <div className="social-media">
                                                <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-twitter"></i></a>
                                                <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-linkedin-in"></i></a>
                                                <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-instagram"></i></a>
                                                <a href="#" className="mx-2 primary-color secondary-hover"><i
                                                        className="fa-brands fa-pinterest-p"></i></a>
                                            </div>
                                        </div>
                                        <div className="cart-wrp py-4">
                                            <div className="cart-quantity">
                                                <form id='myform' method='POST' className='quantity' action='#'>
                                                    <input type='button' value='-' className='qtyminus minus'/>
                                                    <input type='text' name='quantity' value='0' className='qty'/>
                                                    <input type='button' value='+' className='qtyplus plus'/>
                                                </form>
                                            </div>
                                            <div className="discount">
                                                <input type="text" placeholder="Enter Discount Code"/>
                                            </div>
                                        </div>
                                        <a href="#0" className="d-block text-center btn-two mt-40"><span><i
                                                    className="fa-solid fa-basket-shopping pe-2"></i>
                                                add
                                                to
                                                cart</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shop-singe-tab">
                    <ul className="nav nav-pills mb-4 bor-top bor-bottom py-2">
                        <li className="nav-item">
                            <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 pe-3 active">
                                <h4 className="text-uppercase">description</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#review" data-bs-toggle="tab" className="nav-link">
                                <h4 className="text-uppercase">reviews (4)</h4>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="description" className="tab-pane fade show active">
                            <p className="pb-4 text-justify">Proactively disseminate impactful mindshare without technically
                                sound web
                                services.
                                Distiively harness
                                compelling
                                innovation before high payoff testing procedures. Uniquely fashion customized web
                                services
                                with cross
                                functional
                                internal or "organic" sources. Uniquely restore error-free e-commerce via
                                multidisciplinary
                                antailers.
                                Completely whiteboard user friendly quality vectors rather than synergistic technologi
                                Professionally
                                evisculate
                                enterprise wide metrics without resource maximizing interfaces. Synergistically
                                benchmark
                                enterprise-wide e-tailers
                                through optimal paradigms. Phosfluorescently foster cutting-edge was and benefits
                                without
                                magnetic</p>
                            <p className="pb-4 text-justify">Completely build emerging ideas through covalent applications.
                                Distinctively
                                synthesize user
                                friendly
                                collaboration and
                                idsharing with superior content. Energistically incentivize user friendly models rather
                                than
                                timely
                                convergence.
                                Objectively disintermediate high standards in paradigms before state the art process
                                improvements.
                                Interactively
                                orchestrate plug-and-play human capital whereas customer directed initiatives.</p>
                            <p className="text-justify">Intrinsicly provide access to team driven information without
                                adaptive content.
                                Collaboratively embrace
                                reliable supply
                                chains via extensible benefits. Enthusiastically visualize accurate human capital before
                                backend
                                meta-services.
                                Continually reinvent interdependent schemas through mission-critical benefits.
                                Competently
                                leverage
                                existing parallel
                                action items through end-to-end "outside the box" thinking.</p>
                        </div>
                        <div id="review" className="tab-pane fade">
                            <div className="review-wrp">
                                <div className="abmin d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                    <div className="img pb-4 pb-md-0 me-4">
                                        <img src="assets/images/about/comment3.png" alt="image"/>
                                    </div>
                                    <div className="content position-relative p-4 bor">
                                        <div className="head-wrp pb-1 d-flex flex-wrap justify-content-between">
                                            <a href="#0">
                                                <h4 className="text-capitalize primary-color">Janaton Doe <span
                                                        className="sm-font ms-2 fw-normal">27
                                                        March 2023
                                                        at
                                                        3.44
                                                        pm</span>
                                                </h4>
                                            </a>
                                            <div className="star primary-color">
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star-half-stroke sm-font"></i></span>
                                            </div>
                                        </div>
                                        <p className="text-justify">Globally leverage existing sticky testing procedures
                                            whereas
                                            timely
                                            alignments. Appropriately leverage existing cross unit human a capital
                                            Globally
                                            distributed
                                            process improvements and empowered
                                            internal or sources. </p>
                                    </div>
                                </div>
                                <div className="abmin d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                    <div className="img pb-4 pb-md-0 me-4">
                                        <img src="assets/images/about/comment2.png" alt="image"/>
                                    </div>
                                    <div className="content position-relative p-4 bor">
                                        <div className="head-wrp pb-1 d-flex flex-wrap justify-content-between">
                                            <a href="#0">
                                                <h4 className="text-capitalize primary-color">kawser ahemd<span
                                                        className="sm-font ms-2 fw-normal">27
                                                        March 2023
                                                        at
                                                        3.44
                                                        pm</span>
                                                </h4>
                                            </a>
                                            <div className="star primary-color">
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star-half-stroke sm-font"></i></span>
                                            </div>
                                        </div>
                                        <p className="text-justify">Globally leverage existing sticky testing procedures
                                            whereas
                                            timely
                                            alignments. Appropriately leverage existing cross unit human a capital
                                            Globally
                                            distributed
                                            process improvements and empowered
                                            internal or sources. </p>
                                    </div>
                                </div>
                                <div className="abmin d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                    <div className="img pb-4 pb-md-0 me-4">
                                        <img src="assets/images/about/comment1.png" alt="image"/>
                                    </div>
                                    <div className="content position-relative p-4 bor">
                                        <div className="head-wrp pb-1 d-flex flex-wrap justify-content-between">
                                            <a href="#0">
                                                <h4 className="text-capitalize primary-color">famad sami<span
                                                        className="sm-font ms-2 fw-normal">27
                                                        March 2023
                                                        at
                                                        3.44
                                                        pm</span>
                                                </h4>
                                            </a>
                                            <div className="star primary-color">
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star-half-stroke sm-font"></i></span>
                                            </div>
                                        </div>
                                        <p className="text-justify">Globally leverage existing sticky testing procedures
                                            whereas
                                            timely
                                            alignments. Appropriately leverage existing cross unit human a capital
                                            Globally
                                            distributed
                                            process improvements and empowered
                                            internal or sources. </p>
                                    </div>
                                </div>
                                <div className="abmin d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                    <div className="img pb-4 pb-md-0 me-4">
                                        <img src="assets/images/about/comment4.png" alt="image"/>
                                    </div>
                                    <div className="content position-relative p-4 bor">
                                        <div className="head-wrp pb-1 d-flex flex-wrap justify-content-between">
                                            <a href="#0">
                                                <h4 className="text-capitalize primary-color">Abu rayhan <span
                                                        className="sm-font ms-2 fw-normal">27
                                                        March 2023
                                                        at
                                                        3.44
                                                        pm</span>
                                                </h4>
                                            </a>
                                            <div className="star primary-color">
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star sm-font"></i></span>
                                                <span><i className="fa-solid fa-star-half-stroke sm-font"></i></span>
                                            </div>
                                        </div>
                                        <p className="text-justify">Globally leverage existing sticky testing procedures
                                            whereas
                                            timely
                                            alignments. Appropriately leverage existing cross unit human a capital
                                            Globally
                                            distributed
                                            process improvements and empowered
                                            internal or sources. </p>
                                    </div>
                                </div>
                                <div className="section-title mt-5 py-15 mb-30">
                                    <h2 className="text-capitalize primary-color mb-10">add a review</h2>
                                    <p className="mb-20">Your email address will not be published. Required fields are
                                        marked *
                                    </p>
                                    <div className="shop-single__rate-now">
                                        <p>Rate this product? *</p>
                                        <div className="star">
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <form action="#">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <input type="text" className="w-100 mb-4 bor px-4 py-2"
                                                    placeholder="Your Name*"/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="w-100 mb-4 bor px-4 py-2"
                                                    placeholder="Your Email*"/>
                                            </div>
                                        </div>
                                        <textarea className="w-100 mb-4 bor p-4" placeholder="Message"></textarea>
                                    </form>
                                    <div className="btn-wrp">
                                        <button className="btn-one"><span>Submit Now</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShopSingle
