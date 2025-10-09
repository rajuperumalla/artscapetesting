

const CheckOut = () => {
  return (
    <>
        <section className="checkout-area pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="checkout__item-left sub-bg">
                            <h3 className="mb-40">Billing Details</h3>
                            <label className="mb-10" for="name">Your Name *</label>
                            <input className="mb-20" id="name" type="text"/>
                            <label className="mb-10" for="email">Email Address *</label>
                            <input className="mb-20" id="email" type="email"/>
                            <label className="mb-10" for="companyName">Company Name (Optional)</label>
                            <input className="mb-20" id="companyName" type="text"/>
                            <h5 className="mb-10">Country / Region *</h5>
                            <select className="mb-20" name="subject">
                                <option value="0">United state america</option>
                                <option value="1">United Kingdom</option>
                                <option value="2">Australia</option>
                                <option value="3">Germany</option>
                                <option value="4">France</option>
                            </select>
                            <label className="mb-10" for="streetAddress">Street Address *</label>
                            <input placeholder="1837 E Homer M Adams Pkwy" className="mb-10" id="streetAddress" type="text"/>
                            <input className="mb-20" id="streetAddress2" type="text"/>
                            <label className="mb-10" for="townName">Town / City *</label>
                            <input className="mb-20" id="townName" type="text"/>
                            <h5 className="mb-10">State *</h5>
                            <select className="mb-20" name="subject">
                                <option value="0">Georgia / ohio / new york</option>
                                <option value="1">Georgia</option>
                                <option value="2">Ohio</option>
                                <option value="3">New York</option>
                                <option value="4">Texas</option>
                            </select>
                            <label className="mb-10" for="zipCode">ZIP Code *</label>
                            <input className="mb-20" id="zipCode" type="number"/>
                            <label className="mb-10" for="phone">Phone *</label>
                            <input className="mb-20" id="phone" type="text"/>
                            <div className="radio-btn">
                                <span></span>
                                <a className="ml-10 fw-bold" href="register.html">Create An Account?</a>
                            </div>
                            <div className="radio-btn mt-2 mb-30">
                                <span className="opacity-75"></span>
                                <p>Ship To A Different Address?</p>
                            </div>
                            <label className="mb-10" for="phone">Order Notes (Optional)</label>
                            <textarea placeholder="Note About Your Order . . ." name="notes" id="notes"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="checkout__item-right sub-bg">
                            <h3 className="mb-40">Your Order</h3>
                            <ul>
                                <li className="bor-bottom pb-4">
                                    <h4>Products</h4>
                                    <h4>Subtotal</h4>
                                </li>
                                <li className="bor-bottom py-4"><a href="#">Secretary desk</a> <span>$15.00</span></li>
                                <li className="bor-bottom py-4"><a href="#">Secretary desk</a> <span>$15.00</span></li>
                                <li className="bor-bottom py-4"><a href="#">Secretary desk</a> <span>$15.00</span></li>
                                <li className="bor-bottom py-4"><a href="#">Secretary desk</a> <span>$15.00</span></li>
                                <li className="bor-bottom py-4"><a href="#">Secretary desk</a> <span>$15.00</span></li>
                                <li className="bor-bottom py-4">
                                    <h4>Subtotal</h4>
                                    <h4>$999.00</h4>
                                </li>
                            </ul>
                            <div className="py-4 bor-bottom">
                                <h5 className="mb-10">Shipping Address</h5>
                                <span>2801 Lafayette Blvd, Norfolk, Vermont <br/>
                                    23509, united state</span>
                            </div>
                            <div className="radio-btn mt-30">
                                <span className="opacity-75"></span>
                                <p>Direct Bank Transfer</p>
                            </div>
                            <div className="radio-btn mt-2">
                                <span></span>
                                <a className="ml-10 fw-bold" href="#0">Check Payments</a>
                            </div>
                            <div className="radio-btn mt-2 pb-30 bor-bottom">
                                <span className="opacity-75"></span>
                                <p>Cash On Delivery</p>
                            </div>
                            <p className="pt-30 bor-top">Your personal data will be used to process
                                your order, support your experience
                                throughout this website.</p>
                            <a href="#0" className="btn-one mt-35"><span>Place Order</span></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CheckOut
