import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const { t } = useTranslation('common')


const langSelector = (e: any)=>{
  const { pathname, asPath, query } = router
  router.push({ pathname, query }, asPath, { locale: e.target.value })
}


  return (
    <>
<header className="header">
  <div className="header-top">
    <div className="container">
      <div className="header-left">
        <p className="welcome-msg">
          Welcome to Riode store message or remove it!
        </p>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <a href="#currency">USD</a>
          <ul className="dropdown-box">
            <li>
              <a href="#USD">USD</a>
            </li>
            <li>
              <a href="#EUR">EUR</a>
            </li>
          </ul>
        </div>
        {/* End DropDown Menu */}
        <div className="dropdown ml-5">
          <a href="#language">ENG</a>
          <ul className="dropdown-box">
            <li>
              <a href="#USD">ENG</a>
            </li>
            <li>
              <a href="#EUR">FRH</a>
            </li>
          </ul>
        </div>
        {/* End DropDown Menu */}
        <span className="divider" />
        <a href="#" className="contact d-lg-show">
          <i className="d-icon-map" />
          Contact
        </a>
        <a href="#" className="help d-lg-show">
          <i className="d-icon-info" /> Need Help
        </a>
        <a href="#signin" className="login-toggle link-to-tab d-md-show">
          <i className="d-icon-user" />
          Sign in
        </a>
        <span className="delimiter">/</span>
        <a
          href="#register"
          className="register-toggle link-to-tab d-md-show ml-0"
        >
          Register
        </a>
        <div className="dropdown login-dropdown off-canvas">
          <div className="canvas-overlay" />
          {/* End Login Toggle */}
          <div className="dropdown-box scrollable">
            <div className="login-popup">
              <div className="form-box">
                <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                  <ul
                    className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active border-no lh-1 ls-normal"
                        href="#signin"
                      >
                        Login
                      </a>
                    </li>
                    <li className="delimiter">or</li>
                    <li className="nav-item">
                      <a
                        className="nav-link border-no lh-1 ls-normal"
                        href="#register"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="signin">
                      <form action="#">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email"
                            name="singin-email"
                            placeholder="Username or Email Address *"
                    
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password"
                            name="singin-password"
                            placeholder="Password *"
       
                          />
                        </div>
                        <div className="form-footer">
                          <div className="form-checkbox">
                            <input
                              type="checkbox"
                              className="custom-checkbox"
                              id="signin-remember"
                              name="signin-remember"
                            />
                            <label
                              className="form-control-label"
                              htmlFor="signin-remember"
                            >
                              Remember me
                            </label>
                          </div>
                          <a href="#" className="lost-link">
                            Lost your password?
                          </a>
                        </div>
                        <button
                          className="btn btn-dark btn-block btn-rounded"
                          type="submit"
                        >
                          Login
                        </button>
                      </form>
                      <div className="form-choice text-center">
                        <label className="ls-m">or Login With</label>
                        <div className="social-links">
                          <a
                            href="#"
                            title="social-link"
                            className="social-link social-google fab fa-google border-no"
                          />
                          <a
                            href="#"
                            title="social-link"
                            className="social-link social-facebook fab fa-facebook-f border-no"
                          />
                          <a
                            href="#"
                            title="social-link"
                            className="social-link social-twitter fab fa-twitter border-no"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="register">
                      <form action="#">
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="register-email"
                            name="register-email"
                            placeholder="Your Email Address *"
                   
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            name="register-password"
                            placeholder="Password *"
                     
                          />
                        </div>
                        <div className="form-footer">
                          <div className="form-checkbox">
                            <input
                              type="checkbox"
                              className="custom-checkbox"
                              id="register-agree"
                              name="register-agree"
                    
                            />
                            <label
                              className="form-control-label"
                              htmlFor="register-agree"
                            >
                              I agree to the privacy policy
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-dark btn-block btn-rounded"
                          type="submit"
                        >
                          Register
                        </button>
                      </form>
                      <div className="form-choice text-center">
                        <label className="ls-m">or Register With</label>
                        <div className="social-links">
                          <a
                            href="#"
                            title="social-link"
                            className="social-link social-google fab fa-google border-no"
                          />
                          <a
                            href="#"
                            title="social-link"
                            className="social-link social-facebook fab fa-facebook-f border-no"
                          />
                          <a
                            href="#"
                            title="social-link"
                            className="social-link social-twitter fab fa-twitter border-no"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button title="Close (Esc)" type="button" className="mfp-close">
                <span>×</span>
              </button>
            </div>
          </div>
          {/* End Dropdown Box */}
        </div>
        {/* End of Login */}
      </div>
    </div>
  </div>
  {/* End HeaderTop */}
  <div className="header-middle sticky-header fix-top sticky-content">
    <div className="container">
      <div className="header-left">
        <a href="#" className="mobile-menu-toggle">
          <i className="d-icon-bars2" />
        </a>
        <Link href="/" className="logo">
          <Image src="/assets/images/logo.png" alt="logo" width={153} height={44} />
        </Link>
        {/* End Logo */}
        <div className="header-search hs-simple">
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search..."
    
            />
            <button
              className="btn btn-search"
              type="submit"
              title="submit-button"
            >
              <i className="d-icon-search" />
            </button>
          </form>
        </div>
        {/* End Header Search */}
      </div>
      <div className="header-right">
        <a href="tel:#" className="icon-box icon-box-side">
          <div className="icon-box-icon mr-0 mr-lg-2">
            <i className="d-icon-phone" />
          </div>
          <div className="icon-box-content d-lg-show">
            <h4 className="icon-box-title">Call Us Now:</h4>
            <p>0(800) 123-456</p>
          </div>
        </a>
        <span className="divider" />
        <div className="dropdown wishlist wishlist-dropdown off-canvas">
          <a href="#" className="wishlist-toggle">
            <i className="d-icon-heart" />
          </a>
          <div className="canvas-overlay" />
          {/* End Wishlist Toggle */}
          <div className="dropdown-box scrollable">
            <div className="canvas-header">
              <h4 className="canvas-title">wishlist</h4>
              <a
                href="#"
                className="btn btn-dark btn-link btn-icon-right btn-close"
              >
                close
                <i className="d-icon-arrow-right" />
                <span className="sr-only">wishlist</span>
              </a>
            </div>
            <div className="products scrollable">
              <div className="product product-wishlist">
                <figure className="product-media">
                  <a href="#">
                    <Image
                      src="/assets/images/wishlist/product-1.jpg"
                      width={100}
                      height={100}
                      alt="product"
                    />
                  </a>
                  <button className="btn btn-link btn-close">
                    <i className="fas fa-times" />
                    <span className="sr-only">Close</span>
                  </button>
                </figure>
                <div className="product-detail">
                  <a href="#" className="product-name">
                    Girls Dark Bag
                  </a>
                  <div className="price-box">
                    <span className="product-price">$84.00</span>
                  </div>
                </div>
              </div>
              {/* End of wishlist Product */}
              <div className="product product-wishlist">
                <figure className="product-media">
                  <a href="#">
                    <Image
                      src="/assets/images/wishlist/product-2.jpg"
                      width={100}
                      height={100}
                      alt="product"
                    />
                  </a>
                  <button className="btn btn-link btn-close">
                    <i className="fas fa-times" />
                    <span className="sr-only">Close</span>
                  </button>
                </figure>
                <div className="product-detail">
                  <a href="#" className="product-name">
                    Womens Fashional Comforter
                  </a>
                  <div className="price-box">
                    <span className="product-price">$84.00</span>
                  </div>
                </div>
              </div>
              {/* End of wishlist Product */}
              <div className="product product-wishlist">
                <figure className="product-media">
                  <a href="#">
                    <Image
                      src="/assets/images/wishlist/product-3.jpg"
                      width={100}
                      height={100}
                      alt="product"
                    />
                  </a>
                  <button className="btn btn-link btn-close">
                    <i className="fas fa-times" />
                    <span className="sr-only">Close</span>
                  </button>
                </figure>
                <div className="product-detail">
                  <a href="#" className="product-name">
                    Wide Knickerbockers
                  </a>
                  <div className="price-box">
                    <span className="product-price">$84.00</span>
                  </div>
                </div>
              </div>
              {/* End of wishlist Product */}
            </div>
            <a href="#" className="btn btn-dark wishlist-btn mt-4">
              <span>Go To Wishlist</span>
            </a>
            {/* End of Products  */}
          </div>
          {/* End Dropdown Box */}
        </div>
        <span className="divider" />
        <div className="dropdown cart-dropdown type2 off-canvas mr-0 mr-lg-2">
          <a href="#" className="cart-toggle label-block link">
            <div className="cart-label d-lg-show">
              <span className="cart-name">Shopping Cart:</span>
              <span className="cart-price">$0.00</span>
            </div>
            <i className="d-icon-bag">
              <span className="cart-count">2</span>
            </i>
          </a>
          <div className="canvas-overlay" />
          {/* End Cart Toggle */}
          <div className="dropdown-box">
            <div className="canvas-header">
              <h4 className="canvas-title">Shopping Cart</h4>
              <a
                href="#"
                className="btn btn-dark btn-link btn-icon-right btn-close"
              >
                close
                <i className="d-icon-arrow-right" />
                <span className="sr-only">Cart</span>
              </a>
            </div>
            <div className="products scrollable">
              <div className="product product-cart">
                <figure className="product-media">
                  <a href="#">
                    <Image
                      src="/assets/images/cart/product-1.jpg"
                      alt="product"
                      width={80}
                      height={88}
                    />
                  </a>
                  <button className="btn btn-link btn-close">
                    <i className="fas fa-times" />
                    <span className="sr-only">Close</span>
                  </button>
                </figure>
                <div className="product-detail">
                  <a href="#" className="product-name">
                    Riode White Trends
                  </a>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$21.00</span>
                  </div>
                </div>
              </div>
              {/* End of Cart Product */}
              <div className="product product-cart">
                <figure className="product-media">
                  <a href="#">
                    <Image
                      src="/assets/images/cart/product-2.jpg"
                      alt="product"
                      width={80}
                      height={88}
                    />
                  </a>
                  <button className="btn btn-link btn-close">
                    <i className="fas fa-times" />
                    <span className="sr-only">Close</span>
                  </button>
                </figure>
                <div className="product-detail">
                  <a href="#" className="product-name">
                    Dark Blue Women’s Leomora Hat
                  </a>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$118.00</span>
                  </div>
                </div>
              </div>
              {/* End of Cart Product */}
            </div>
            {/* End of Products  */}
            <div className="cart-total">
              <label>Subtotal:</label>
              <span className="price">$139.00</span>
            </div>
            {/* End of Cart Total */}
            <div className="cart-action">
              <a href="/cart" className="btn btn-dark btn-link">
                View Cart
              </a>
              <a href="/checkout" className="btn btn-dark">
                <span>Go To Checkout</span>
              </a>
            </div>
            {/* End of Cart Action */}
          </div>
          {/* End Dropdown Box */}
        </div>
      </div>
    </div>
  </div>
  <div className="header-bottom d-lg-show">
    <div className="container">
      <div className="header-left">
        <nav className="main-nav">
          <ul className="menu">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
              <div className="megamenu">
                <div className="row">
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <h4 className="menu-title">Variations 1</h4>
                    <ul>
                      <li>
                        <a href="shop-classic-filter.html">Classic Filter</a>
                      </li>
                      <li>
                        <a href="shop-left-toggle-sidebar.html">
                          Left Toggle Filter
                        </a>
                      </li>
                      <li>
                        <a href="shop-right-toggle-sidebar.html">
                          Right Toggle Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-horizontal-filter.html">
                          Horizontal Filter{" "}
                        </a>
                      </li>
                      <li>
                        <a href="shop-navigation-filter.html">
                          Navigation Filter
                        </a>
                      </li>
                      <li>
                        <a href="shop-off-canvas.html">Off-Canvas Filter </a>
                      </li>
                      <li>
                        <a href="shop-top-banner.html">Top Banner</a>
                      </li>
                      <li>
                        <a href="shop-inner-top-banner.html">
                          Inner Top Banner
                        </a>
                      </li>
                      <li>
                        <a href="shop-with-bottom-block.html">
                          With Bottom Block
                        </a>
                      </li>
                      <li>
                        <a href="shop-category-in-page-header.html">
                          Category In Page Header
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <h4 className="menu-title">Variations 2</h4>
                    <ul>
                      <li>
                        <a href="shop-grid-3cols.html">3 Columns Mode</a>
                      </li>
                      <li>
                        <a href="shop-grid-4cols.html">4 Columns Mode</a>
                      </li>
                      <li>
                        <a href="shop-grid-5cols.html">5 Columns Mode</a>
                      </li>
                      <li>
                        <a href="shop-grid-6cols.html">6 Columns Mode</a>
                      </li>
                      <li>
                        <a href="shop-grid-7cols.html">7 Columns Mode</a>
                      </li>
                      <li>
                        <a href="shop-grid-8cols.html">8 Columns Mode</a>
                      </li>
                      <li>
                        <a href="shop-list-mode.html">List Mode</a>
                      </li>
                      <li>
                        <a href="shop-pagination.html">Pagination</a>
                      </li>
                      <li>
                        <a href="shop-infinite-ajaxscroll.html">
                          Infinite Ajaxscroll{" "}
                        </a>
                      </li>
                      <li>
                        <a href="shop-loadmore-button.html">Loadmore Button</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <h4 className="menu-title">Variations 3</h4>
                    <ul>
                      <li>
                        <a href="shop-category-grid-shop.html">
                          Category Grid Shop
                        </a>
                      </li>
                      <li>
                        <a href="shop-category%2bproducts.html">
                          Category + Products
                        </a>
                      </li>
                      <li>
                        <a href="shop-default-1.html">Shop Default 1 </a>
                      </li>
                      <li>
                        <a href="shop-default-2.html">Shop Default 2</a>
                      </li>
                      <li>
                        <a href="shop-default-3.html">Shop Default 3</a>
                      </li>
                      <li>
                        <a href="shop-default-4.html">Shop Default 4</a>
                      </li>
                      <li>
                        <a href="shop-default-5.html">Shop Default 5</a>
                      </li>
                      <li>
                        <a href="shop-default-6.html">Shop Default 6</a>
                      </li>
                      <li>
                        <a href="shop-default-7.html">Shop Default 7</a>
                      </li>
                      <li>
                        <a href="shop-default-8.html">Shop Default 8</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-3 menu-banner menu-banner1 banner banner-fixed">
                    <figure>
                      <Image
                        src="/assets/images/menu/banner-1.jpg"
                        alt="Menu banner"
                        width={221}
                        height={330}
                      />
                    </figure>
                    <div className="banner-content y-50">
                      <h4 className="banner-subtitle font-weight-bold text-primary ls-m">
                        Sale.
                      </h4>
                      <h3 className="banner-title font-weight-bold">
                        <span className="text-uppercase">Up to</span>70% Off
                      </h3>
                      <a
                        href="shop.html"
                        className="btn btn-link btn-underline"
                      >
                        shop now
                        <i className="d-icon-arrow-right" />
                      </a>
                    </div>
                  </div>
                  {/* End Megamenu */}
                </div>
              </div>
            </li>
            <li>
              <a href="product.html">Products</a>
              <div className="megamenu">
                <div className="row">
                  <div className="col-6 col-sm-4 col-md-3">
                    <h4 className="menu-title">Product Pages</h4>
                    <ul>
                      <li>
                        <a href="product-simple.html">Simple Product</a>
                      </li>
                      <li>
                        <a href="product-featured.html">
                          Featured &amp; On Sale
                        </a>
                      </li>
                      <li>
                        <a href="product.html">Variable Product</a>
                      </li>
                      <li>
                        <a href="product-variable-swatch.html">
                          Variation Swatch Product
                        </a>
                      </li>
                      <li>
                        <a href="product-grouped.html">Grouped Product </a>
                      </li>
                      <li>
                        <a href="product-external.html">External Product</a>
                      </li>
                      <li>
                        <a href="product-in-stock.html">In Stock Product</a>
                      </li>
                      <li>
                        <a href="product-out-stock.html">
                          Out of Stock Product
                        </a>
                      </li>
                      <li>
                        <a href="product-upsell.html">Upsell Products</a>
                      </li>
                      <li>
                        <a href="product-cross-sell.html">
                          Cross Sell Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <h4 className="menu-title">Product Layouts</h4>
                    <ul>
                      <li>
                        <a href="product-vertical.html">Vertical Thumb</a>
                      </li>
                      <li>
                        <a href="product-horizontal.html">Horizontal Thumb</a>
                      </li>
                      <li>
                        <a href="product-gallery.html">Gallery Type</a>
                      </li>
                      <li>
                        <a href="product-grid.html">Grid Images</a>
                      </li>
                      <li>
                        <a href="product-masonry.html">Masonry Images</a>
                      </li>
                      <li>
                        <a href="product-sticky.html">Sticky Info</a>
                      </li>
                      <li>
                        <a href="product-sticky-both.html">
                          Left &amp; Right Sticky
                        </a>
                      </li>
                      <li>
                        <a href="product-left-sidebar.html">
                          With Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-right-sidebar.html">
                          With Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-full.html">Full Width Layout </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3">
                    <h4 className="menu-title">Product Features</h4>
                    <ul>
                      <li>
                        <a href="product-sale.html">Sale Countdown</a>
                      </li>
                      <li>
                        <a href="product-hurryup.html">
                          Hurry Up Notification{" "}
                        </a>
                      </li>
                      <li>
                        <a href="product-attribute-guide.html">
                          Attribute Guide{" "}
                        </a>
                      </li>
                      <li>
                        <a href="product-sticky-cart.html">Add Cart Sticky</a>
                      </li>
                      <li>
                        <a href="product-thumbnail-label.html">
                          Labels on Thumbnail
                        </a>
                      </li>
                      <li>
                        <a href="product-more-description.html">
                          More Description Tabs
                        </a>
                      </li>
                      <li>
                        <a href="product-accordion-data.html">
                          Data In Accordion
                        </a>
                      </li>
                      <li>
                        <a href="product-tabinside.html">Data Inside</a>
                      </li>
                      <li>
                        <a href="product-video.html">Video Thumbnail </a>
                      </li>
                      <li>
                        <a href="product-360-degree.html">
                          360 Degree Thumbnail{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 menu-banner menu-banner2 banner banner-fixed">
                    <figure>
                      <Image
                        src="/assets/images/menu/banner-2.jpg"
                        alt="Menu banner"
                        width={221}
                        height={330}
                      />
                    </figure>
                    <div className="banner-content x-50 text-center">
                      <h3 className="banner-title text-white text-uppercase">
                        Sunglasses
                      </h3>
                      <h4 className="banner-subtitle font-weight-bold text-white mb-0">
                        $23.00 - $120.00
                      </h4>
                    </div>
                  </div>
                  {/* End MegaMenu */}
                </div>
              </div>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul>
                <li>
                  <a href="about-us.html">About</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a href="account.html">My Account</a>
                </li>
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
                <li>
                  <a href="faq.html">FAQs</a>
                </li>
                <li>
                  <a href="error-404.html">Error 404</a>
                  <ul>
                    <li>
                      <a href="error-404.html">Error 404-1</a>
                    </li>
                    <li>
                      <a href="error-404-1.html">Error 404-2</a>
                    </li>
                    <li>
                      <a href="error-404-2.html">Error 404-3</a>
                    </li>
                    <li>
                      <a href="error-404-3.html">Error 404-4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="coming-soon.html">Coming Soon</a>
                </li>
              </ul>
            </li>
            <li className="d-xl-show">
              <a href="element.html">Elements</a>
              <div className="megamenu">
                <div className="row">
                  <div className="col-md-3">
                    <h4 className="menu-title">Elements 1</h4>
                    <ul>
                      <li>
                        <a href="element-accordions.html">Accordions</a>
                      </li>
                      <li>
                        <a href="element-alerts.html">
                          Alert &amp; Notification
                        </a>
                      </li>
                      <li>
                        <a href="element-banner-effect.html">Banner Effect</a>
                      </li>
                      <li>
                        <a href="element-banner.html">Banner</a>
                      </li>
                      <li>
                        <a href="element-blog-posts.html">Blog Posts</a>
                      </li>
                      <li>
                        <a href="element-breadcrumb.html">Breadcrumb</a>
                      </li>
                      <li>
                        <a href="element-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="element-cta.html">Call to Action</a>
                      </li>
                      <li>
                        <a href="element-countdown.html">Countdown</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h4 className="menu-title">Elements 2</h4>
                    <ul>
                      <li>
                        <a href="element-counter.html">Counter </a>
                      </li>
                      <li>
                        <a href="element-creative-grid.html">Creative Grid</a>
                      </li>
                      <li>
                        <a href="element-animation.html">Entrance Effect</a>
                      </li>
                      <li>
                        <a href="element-floating.html">Floating</a>
                      </li>
                      <li>
                        <a href="element-hotspot.html">Hotspot</a>
                      </li>
                      <li>
                        <a href="element-icon-boxes.html">Icon Boxes</a>
                      </li>
                      <li>
                        <a href="element-icons.html">Icons</a>
                      </li>
                      <li>
                        <a href="element-image-box.html">Image box</a>
                      </li>
                      <li>
                        <a href="element-instagrams.html">Instagrams</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h4 className="menu-title">Elements 3</h4>
                    <ul>
                      <li>
                        <a href="element-categories.html">Product Category</a>
                      </li>
                      <li>
                        <a href="element-products.html">Products</a>
                      </li>
                      <li>
                        <a href="element-product-banner.html">
                          Products + Banner
                        </a>
                      </li>
                      <li>
                        <a href="element-product-grid.html">Products + Grid</a>
                      </li>
                      <li>
                        <a href="element-product-single.html">Product Single</a>
                      </li>
                      <li>
                        <a href="element-product-tab.html">Products + Tab</a>
                      </li>
                      <li>
                        <a href="element-single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="element-slider.html">Slider</a>
                      </li>
                      <li>
                        <a href="element-social-link.html">Social Icons </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h4 className="menu-title">Elements 4</h4>
                    <ul>
                      <li>
                        <a href="element-subcategory.html">Subcategory</a>
                      </li>
                      <li>
                        <a href="element-svg-floating.html">Svg Floating</a>
                      </li>
                      <li>
                        <a href="element-tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="element-testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="element-titles.html">Title</a>
                      </li>
                      <li>
                        <a href="element-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="element-vendor.html">Vendor</a>
                      </li>
                      <li>
                        <a href="element-video.html">Video</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="blog-classic.html">Blog</a>
              <ul>
                <li>
                  <a href="blog-classic.html">Classic</a>
                </li>
                <li>
                  <a href="blog-listing.html">Listing</a>
                </li>
                <li>
                  <a href="#">Grid</a>
                  <ul>
                    <li>
                      <a href="blog-grid-2col.html">Grid 2 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-3col.html">Grid 3 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-4col.html">Grid 4 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-sidebar.html">Grid sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Masonry</a>
                  <ul>
                    <li>
                      <a href="blog-masonry-2col.html">Masonry 2 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-3col.html">Masonry 3 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-4col.html">Masonry 4 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Mask</a>
                  <ul>
                    <li>
                      <a href="blog-mask-grid.html">Blog mask grid</a>
                    </li>
                    <li>
                      <a href="blog-mask-masonry.html">Blog mask masonry</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="post-single.html">Single Post</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <a href="#">
          <i className="d-icon-card" />
          Special Offers
        </a>
        <a href="https://d-themes.com/buynow/riodehtml" className="ml-6">
          Buy Riode!
        </a>
      </div>
    </div>
  </div>
</header>

    </>
  )
}



export default Header