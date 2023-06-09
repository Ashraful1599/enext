import { appWithTranslation } from 'next-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'
import { Poppins } from '@next/font/google'
// import '../public/assets/vendor/fontawesome-free/css/all.min.css'
// import '../public/assets/vendor/animate/animate.min.css'
// import '../public/assets/vendor/magnific-popup/magnific-popup.min.css'
// import '../public/assets/vendor/owl-carousel/owl.carousel.min.css'
// import '../public/assets/vendor/sticky-icon/stickyicon.css'
// import '../public/assets/css/demo1.min.css'
// import '../public/assets/vendor/nouislider/nouislider.min.css'
// import '../public/assets/css/style.min.css'



const poppins = Poppins({
  weight: ['300','400','500','600','700','800'],
  subsets: ['latin'],
})



const MyApp = ({ Component, pageProps }:any) => (
  <>
  
  <div className={'page-wrapper '+ poppins.className}>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>

  <>
  {/* Sticky Footer */}
  <div className="sticky-footer sticky-content fix-bottom">
    <a href="demo1.html" className="sticky-link">
      <i className="d-icon-home" />
      <span>Home</span>
    </a>
    <a href="shop.html" className="sticky-link">
      <i className="d-icon-volume" />
      <span>Categories</span>
    </a>
    <a href="wishlist.html" className="sticky-link">
      <i className="d-icon-heart" />
      <span>Wishlist</span>
    </a>
    <a href="account.html" className="sticky-link">
      <i className="d-icon-user" />
      <span>Account</span>
    </a>
    <div className="header-search hs-toggle dir-up">
      <a href="#" className="search-toggle sticky-link">
        <i className="d-icon-search" />
        <span>Search</span>
      </a>
      <form action="#" className="input-wrapper">
        <input
          type="text"
          className="form-control"
          name="search"
          autoComplete="off"
          placeholder="Search your keyword..."
   
        />
        <button className="btn btn-search" type="submit" title="submit-button">
          <i className="d-icon-search" />
        </button>
      </form>
    </div>
  </div>
  {/* Scroll Top */}
  <a
    id="scroll-top"
    href="#top"
    title="Top"
    role="button"
    className="scroll-top"
  >
    <i className="d-icon-arrow-up" />
  </a>
  {/* MobileMenu */}
  <div className="mobile-menu-wrapper">
    <div className="mobile-menu-overlay"></div>
    {/* End of Overlay */}
    <a className="mobile-menu-close" href="#">
      <i className="d-icon-times" />
    </a>
    {/* End of CloseButton */}
    <div className="mobile-menu-container scrollable">
      <form action="#" className="input-wrapper">
        <input
          type="text"
          className="form-control"
          name="search"
          autoComplete="off"
          placeholder="Search your keyword..."

        />
        <button className="btn btn-search" type="submit" title="submit-button">
          <i className="d-icon-search" />
        </button>
      </form>
      {/* End of Search Form */}
      <ul className="mobile-menu mmenu-anim">
        <li>
          <a href="demo1.html">Home</a>
        </li>
        <li>
          <a href="shop.html">Categories</a>
          <ul>
            <li>
              <a href="#">Variations 1</a>
              <ul>
                <li>
                  <a href="shop-classic-filter.html">Classic Filter</a>
                </li>
                <li>
                  <a href="shop-left-toggle-sidebar.html">Left Toggle Filter</a>
                </li>
                <li>
                  <a href="shop-right-toggle-sidebar.html">
                    Right Toggle Sidebar
                  </a>
                </li>
                <li>
                  <a href="shop-horizontal-filter.html">Horizontal Filter </a>
                </li>
                <li>
                  <a href="shop-navigation-filter.html">Navigation Filter</a>
                </li>
                <li>
                  <a href="shop-off-canvas.html">Off-Canvas Filter </a>
                </li>
                <li>
                  <a href="shop-top-banner.html">Top Banner</a>
                </li>
                <li>
                  <a href="shop-inner-top-banner.html">Inner Top Banner</a>
                </li>
                <li>
                  <a href="shop-with-bottom-block.html">With Bottom Block</a>
                </li>
                <li>
                  <a href="shop-category-in-page-header.html">
                    Category In Page Header
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Variations 2</a>
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
            </li>
            <li>
              <a href="#">Variations 3</a>
              <ul>
                <li>
                  <a href="shop-category-grid-shop.html">Category Grid Shop</a>
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
            </li>
          </ul>
        </li>
        <li>
          <a href="product.html">Products</a>
          <ul>
            <li>
              <a href="#">Product Pages</a>
              <ul>
                <li>
                  <a href="product-simple.html">Simple Product</a>
                </li>
                <li>
                  <a href="product-featured.html">Featured &amp; On Sale</a>
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
                  <a href="product-out-stock.html">Out of Stock Product</a>
                </li>
                <li>
                  <a href="product-upsell.html">Upsell Products</a>
                </li>
                <li>
                  <a href="product-cross-sell.html">Cross Sell Products</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Product Layouts</a>
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
                  <a href="product-sticky-both.html">Left &amp; Right Sticky</a>
                </li>
                <li>
                  <a href="product-left-sidebar.html">With Left Sidebar</a>
                </li>
                <li>
                  <a href="product-right-sidebar.html">With Right Sidebar</a>
                </li>
                <li>
                  <a href="product-full.html">Full Width Layout </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Product Features</a>
              <ul>
                <li>
                  <a href="product-sale.html">Sale Countdown</a>
                </li>
                <li>
                  <a href="product-hurryup.html">Hurry Up Notification </a>
                </li>
                <li>
                  <a href="product-attribute-guide.html">Attribute Guide </a>
                </li>
                <li>
                  <a href="product-sticky-cart.html">Add Cart Sticky</a>
                </li>
                <li>
                  <a href="product-thumbnail-label.html">Labels on Thumbnail</a>
                </li>
                <li>
                  <a href="product-more-description.html">
                    More Description Tabs
                  </a>
                </li>
                <li>
                  <a href="product-accordion-data.html">Data In Accordion</a>
                </li>
                <li>
                  <a href="product-tabinside.html">Data Inside</a>
                </li>
                <li>
                  <a href="product-video.html">Video Thumbnail </a>
                </li>
                <li>
                  <a href="product-360-degree.html">360 Degree Thumbnail </a>
                </li>
              </ul>
            </li>
          </ul>
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
              <a href="account.html">Login</a>
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
          <a href="element.html">Elements</a>
          <ul>
            <li>
              <a href="#">Elements 1</a>
              <ul>
                <li>
                  <a href="element-accordions.html">Accordions</a>
                </li>
                <li>
                  <a href="element-alerts.html">Alert &amp; Notification</a>
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
            </li>
            <li>
              <a href="#">Elements 2</a>
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
            </li>
            <li>
              <a href="#">Elements 3</a>
              <ul>
                <li>
                  <a href="element-categories.html">Product Category</a>
                </li>
                <li>
                  <a href="element-products.html">Products</a>
                </li>
                <li>
                  <a href="element-product-banner.html">Products + Banner</a>
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
            </li>
            <li>
              <a href="#">Elements 4</a>
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
            </li>
          </ul>
        </li>
        <li>
          <a href="https://d-themes.com/buynow/riodehtml">Buy Riode!</a>
        </li>
      </ul>
      {/* End of MobileMenu */}
      {/* <ul class="mobile-menu mmenu-anim">
          <li><a href="login.html">Login</a></li>
          <li><a href="cart.html">My Cart</a></li>
          <li><a href="wishlist.html">Wishlist</a></li>
      </ul> */}
      {/* End of MobileMenu */}
    </div>
  </div>
  {/* newsletter-popup default */}
  <div
    className="newsletter-popup newsletter-pop1 mfp-hide"
    id="newsletter-popup"
    style={{ backgroundImage: "url(assets/images/newsletter-popup.jpg)" }}
  >
    <div className="newsletter-content">
      <h4 className="text-uppercase text-dark">
        Up to <span className="text-primary">20% Off</span>
      </h4>
      <h2 className="font-weight-semi-bold">
        Sign up to <span>RIODE</span>
      </h2>
      <p className="text-grey">
        Subscribe to the Riode eCommerce newsletter to receive timely updates
        from your favorite products.
      </p>
      <form
        action="#"
        method="get"
        className="input-wrapper input-wrapper-inline input-wrapper-round"
      >
        <input
          type="email"
          className="form-control email"
          name="email"
          id="email2"
          placeholder="Email address here..."
  
        />
        <button className="btn btn-dark" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="form-checkbox justify-content-center">
        <input
          type="checkbox"
          className="custom-checkbox"
          id="hide-newsletter-popup"
          name="hide-newsletter-popup"

        />
        <label htmlFor="hide-newsletter-popup">
          Dont show this popup again
        </label>
      </div>
    </div>
  </div>
</>

{/* <Script src="assets/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
<Script src="assets/vendor/parallax/parallax.min.js" strategy="afterInteractive" />
<Script src="assets/vendor/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
<Script src="assets/js/main.min.js" strategy="afterInteractive" />    */}



  </>
)

export default appWithTranslation(MyApp)


