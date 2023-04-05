import React from 'react'
import Image from 'next/image'

export default function shop() {
  return (
<main className="main">
  <div
    className="page-header"
    style={{
      backgroundImage: 'url("/assets/images/shop/page-header-back.jpg")',
      backgroundColor: "#3C63A4"
    }}
  >
    <h1 className="page-title">Riode Shop</h1>
    <ul className="breadcrumb">
      <li>
        <a href="demo1.html">
          <i className="d-icon-home" />
        </a>
      </li>
      <li className="delimiter">/</li>
      <li>Riode Shop</li>
    </ul>
  </div>
  {/* End PageHeader */}
  <div className="page-content mb-10 pb-3">
    <div className="container">
      <div className="row main-content-wrap gutter-lg">
        <aside className="col-lg-3 sidebar sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper">
          <div className="sidebar-overlay" />
          <a className="sidebar-close" href="#">
            <i className="d-icon-times" />
          </a>
          <div className="sidebar-content">
            <div className="sticky-sidebar" data-sticky-options="{'top': 10}">
              <div className="filter-actions mb-4">
                <a
                  href="#"
                  className="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded"
                >
                  Filter
                  <i className="d-icon-arrow-left" />
                </a>
                <a href="#" className="filter-clean">
                  Clean All
                </a>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">All Categories</h3>
                <ul className="widget-body filter-items search-ul">
                  <li>
                    <a href="#">Accessosries</a>
                  </li>
                  <li>
                    <a href="#">Bags</a>
                    <ul style={{ display: "block" }}>
                      <li>
                        <a href="#">Backpacks &amp; Fashion Bags</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                    <ul>
                      <li>
                        <a href="#">Computer</a>
                      </li>
                      <li>
                        <a href="#">Gaming &amp; Accessosries</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">For Fitness</a>
                  </li>
                  <li>
                    <a href="#">Home &amp; Kitchen</a>
                  </li>
                  <li>
                    <a href="#">Mens</a>
                  </li>
                  <li>
                    <a href="#">Shoes</a>
                  </li>
                  <li>
                    <a href="#">Sporting Goods</a>
                  </li>
                  <li>
                    <a href="#">Summer Seasons</a>
                  </li>
                  <li>
                    <a href="#">Travel &amp; Clothing</a>
                  </li>
                  <li>
                    <a href="#">Watches</a>
                  </li>
                  <li>
                    <a href="#">Women’s</a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">Filter by Price</h3>
                <div className="widget-body mt-3">
                  <form action="#">
                    <div className="filter-price-slider" />
                    <div className="filter-actions">
                      <div className="filter-price-text mb-4">
                        Price:
                        <span className="filter-price-range" />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark btn-filter btn-rounded"
                      >
                        Filter
                      </button>
                    </div>
                  </form>
                  {/* End Filter Price Form */}
                </div>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">Size</h3>
                <ul className="widget-body filter-items">
                  <li>
                    <a href="#">Extra Large</a>
                  </li>
                  <li>
                    <a href="#">Large</a>
                  </li>
                  <li>
                    <a href="#">Medium</a>
                  </li>
                  <li>
                    <a href="#">Small</a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">Color</h3>
                <ul className="widget-body filter-items">
                  <li>
                    <a href="#">Black</a>
                  </li>
                  <li>
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <a href="#">Green</a>
                  </li>
                  <li>
                    <a href="#">White</a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-collapsible">
                <h3 className="widget-title">Brands</h3>
                <ul className="widget-body filter-items">
                  <li>
                    <a href="#">Cinderella</a>
                  </li>
                  <li>
                    <a href="#">Comedy</a>
                  </li>
                  <li>
                    <a href="#">Rightcheck</a>
                  </li>
                  <li>
                    <a href="#">SkillStar</a>
                  </li>
                  <li>
                    <a href="#">SLS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div className="col-lg-9 main-content">
          <nav className="toolbox sticky-toolbox sticky-content fix-top">
            <div className="toolbox-left">
              <a
                href="#"
                className="toolbox-item left-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none"
              >
                Filter
                <i className="d-icon-arrow-right" />
              </a>
              <div className="toolbox-item toolbox-sort select-box text-dark">
                <label>Sort By :</label>
                <select name="orderby" className="form-control">
                  <option value="default">Default</option>
                  <option value="popularity" >
                    Most Popular
                  </option>
                  <option value="rating">Average rating</option>
                  <option value="date">Latest</option>
                  <option value="price-low">Sort forward price low</option>
                  <option value="price-high">Sort forward price high</option>
                  <option value="">Clear custom sort</option>
                </select>
              </div>
            </div>
            <div className="toolbox-right">
              <div className="toolbox-item toolbox-show select-box text-dark">
                <label>Show :</label>
                <select name="count" className="form-control">
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                </select>
              </div>
              <div className="toolbox-item toolbox-layout">
                <a
                  href="shop-list-mode.html"
                  className="d-icon-mode-list btn-layout"
                />
                <a
                  href="shop.html"
                  className="d-icon-mode-grid btn-layout active"
                />
              </div>
            </div>
          </nav>
          <div className="row cols-2 cols-sm-3 product-wrapper">
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/1.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-new">new</label>
                    <label className="product-label label-sale">12% OFF</label>
                  </div>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Bags &amp; Backpacks</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Womens Fashion Handbag</a>
                  </h3>
                  <div className="product-price">
                    <ins className="new-price">$53.99</ins>
                    <del className="old-price">$67.99</del>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 16 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/2.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-sale">25% OFF</label>
                  </div>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Bags &amp; Backpacks</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Mackintosh Poket Backpack</a>
                  </h3>
                  <div className="product-price">
                    <ins className="new-price">$125.99</ins>
                    <del className="old-price">$160.99</del>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 8 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/3.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Shoes</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Converse Blue Trainaing Shoes</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$111.00</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "40%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 4 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/4.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Clothing</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Fashionable Orginal Trucker</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$78.64</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "40%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 2 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/5.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Watches</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Fashion Man Watch</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$314.41</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "20%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 14 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/6.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-sale">20% off</label>
                  </div>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Clothing</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Men Beautiful Clothing</a>
                  </h3>
                  <div className="product-price">
                    <ins className="new-price">$93.42</ins>
                    <del className="old-price">$127.72</del>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 36 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/7.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-new">new</label>
                  </div>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Shoes</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Converse Training Shoes</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$113.00</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 11 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/8.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Women</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Women Beautiful Headgear</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$78.24</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "40%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 8 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/9.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Accessories</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Hand Electric Cell</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">26.00</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "100%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 6 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/10.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-new">new</label>
                  </div>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Bags &amp; Backpacks</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">A Dress-suit Valise</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$189.23</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 26 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/11.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">men</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Converse Season Shoes</a>
                  </h3>
                  <div className="product-price">
                    <span className="price">$135.62</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "40%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 7 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="product">
                <figure className="product-media">
                  <a href="product.html">
                    <Image
                      src="/assets/images/shop/12.jpg"
                      alt="product"
                      width={280}
                      height={315}
                    />
                  </a>
                  <div className="product-label-group">
                    <label className="product-label label-sale">8% off</label>
                  </div>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      title="Add to cart"
                    >
                      <i className="d-icon-bag" />
                    </a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    >
                      <i className="d-icon-heart" />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-quickview"
                      title="Quick View"
                    >
                      Quick View
                    </a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-grid-3col.html">Watches</a>
                  </div>
                  <h3 className="product-name">
                    <a href="product.html">Mans Black Wrist Watch</a>
                  </h3>
                  <div className="product-price">
                    <ins className="new-price">$280.25</ins>
                    <del className="old-price">$310.24</del>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "40%" }} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="product.html" className="rating-reviews">
                      ( 3 reviews )
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="toolbox toolbox-pagination">
            <p className="show-info">
              Showing <span>12 of 56</span> Products
            </p>
            <ul className="pagination">
              <li className="page-item disabled">
                <a
                  className="page-link page-link-prev"
                  href="#"
                  aria-label="Previous"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <i className="d-icon-arrow-left" />
                  Prev
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item page-item-dots">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link page-link-next"
                  href="#"
                  aria-label="Next"
                >
                  Next
                  <i className="d-icon-arrow-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}
