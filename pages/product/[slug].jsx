import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import Image from 'next/image'
//import axios from 'axios';
import { useEffect, useState } from 'react';



const Product = (props) => {


  const { product } = props


  return(
<main className="main mt-6 single-product">
        <div className="page-content mb-10 pb-6">
          <div className="container">
            <div className="product product-single row mb-7">
              <div className="col-md-6 sticky-sidebar-wrapper">
                <div className="product-gallery pg-vertical sticky-sidebar" data-sticky-options="{'minWidth': 767}">
                  <div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1 gutter-no">
                    <figure className="product-image">
                      <img src="/assets/images/product/product-1-1-580x652.jpg" data-zoom-image="/assets/images/product/product-1-1-800x900.jpg" alt="Women's Brown Leather Backpacks" width={800} height={900} />
                    </figure>
                    <figure className="product-image">
                      <img src="/assets/images/product/product-1-2-580x652.jpg" data-zoom-image="/assets/images/product/product-1-2-800x900.jpg" alt="Women's Brown Leather Backpacks" width={800} height={900} />
                    </figure>
                    <figure className="product-image">
                      <img src="/assets/images/product/product-1-3-580x652.jpg" data-zoom-image="/assets/images/product/product-1-3-800x900.jpg" alt="Women's Brown Leather Backpacks" width={800} height={900} />
                    </figure>
                    <figure className="product-image">
                      <img src="/assets/images/product/product-1-4-580x652.jpg" data-zoom-image="/assets/images/product/product-1-4-800x900.jpg" alt="Women's Brown Leather Backpacks" width={800} height={900} />
                    </figure>
                  </div>
                  <div className="product-thumbs-wrap">
                    <div className="product-thumbs">
                      <div className="product-thumb active">
                        <img src="/assets/images/product/product-1-1-109x122.jpg" alt="product thumbnail" width={109} height={122} />
                      </div>
                      <div className="product-thumb">
                        <img src="/assets/images/product/product-1-2-109x122.jpg" alt="product thumbnail" width={109} height={122} />
                      </div>
                      <div className="product-thumb">
                        <img src="/assets/images/product/product-1-3-109x122.jpg" alt="product thumbnail" width={109} height={122} />
                      </div>
                      <div className="product-thumb">
                        <img src="/assets/images/product/product-1-4-109x122.jpg" alt="product thumbnail" width={109} height={122} />
                      </div>
                    </div>
                    <button className="thumb-up disabled"><i className="fas fa-chevron-left" /></button>
                    <button className="thumb-down disabled"><i className="fas fa-chevron-right" /></button>
                  </div>
                  <div className="product-label-group">
                    <label className="product-label label-new">new</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <div className="product-navigation">
                    <ul className="breadcrumb breadcrumb-lg">
                      <li><a href="demo1.html"><i className="d-icon-home" /></a></li>
                      <li><a href="#" className="active">Products</a></li>
                      <li>Detail</li>
                    </ul>
                    <ul className="product-nav">
                      <li className="product-nav-prev">
                        <a href="#">
                          <i className="d-icon-arrow-left" /> Prev
                          <span className="product-nav-popup">
                            <img src="/assets/images/product/product-thumb-prev.jpg" alt="product thumbnail" width={110} height={123} />
                            <span className="product-name">Sed egtas Dnte Comfort</span>
                          </span>
                        </a>
                      </li>
                      <li className="product-nav-next">
                        <a href="#">
                          Next <i className="d-icon-arrow-right" />
                          <span className="product-nav-popup">
                            <img src="/assets/images/product/product-thumb-next.jpg" alt="product thumbnail" width={110} height={123} />
                            <span className="product-name">Sed egtas Dnte Comfort</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="product-name">{product.name}</h1>
                  <div className="product-meta">
                    SKU: <span className="product-sku">12345670</span>
                    BRAND: <span className="product-brand">The Northland</span>
                  </div>
                  <div className="product-price">${product.price}</div>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{width: '80%'}} />
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="#product-tab-reviews" className="link-to-tab rating-reviews">( 11 reviews )</a>
                  </div>
                  <p className="product-short-desc">Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
                    adipiscing.</p>
                  <div className="product-form product-variations product-color">
                    <label>Color:</label>
                    <div className="select-box">
                      <select name="color" className="form-control">
                        <option value selected="selected">Choose an Option</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="brown">Brown</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                      </select>
                    </div>
                  </div>
                  <div className="product-form product-variations product-size">
                    <label>Size:</label>
                    <div className="product-form-group">
                      <div className="select-box">
                        <select name="size" className="form-control">
                          <option value selected="selected">Choose an Option</option>
                          <option value="s">Small</option>
                          <option value="m">Medium</option>
                          <option value="l">Large</option>
                          <option value="xl">Extra Large</option>
                        </select>
                      </div>
                      <a href="#" className="product-variation-clean" style={{display: 'none'}}>Clean All</a>
                    </div>
                  </div>
                  <div className="product-variation-price">
                    <span>$239.00</span>
                  </div>
                  <hr className="product-divider" />
                  <div className="product-form product-qty">
                    <div className="product-form-group">
                      <div className="input-group mr-2">
                        <button className="quantity-minus d-icon-minus" />
                        <input className="quantity form-control" type="number" min={1} max={1000000} />
                        <button className="quantity-plus d-icon-plus" />
                      </div>
                      <button className="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"><i className="d-icon-bag" />Add to
                        Cart</button>
                    </div>
                  </div>
                  <hr className="product-divider mb-3" />
                  <div className="product-footer">
                    <div className="social-links mr-4">
                      <a href="#" className="social-link social-facebook fab fa-facebook-f" />
                      <a href="#" className="social-link social-twitter fab fa-twitter" />
                      <a href="#" className="social-link social-pinterest fab fa-pinterest-p" />
                    </div>
                    <span className="divider d-lg-show" />
                    <a href="#" className="btn-product btn-wishlist mr-6"><i className="d-icon-heart" />Add to
                      wishlist</a>
                    <a href="#" className="btn-product btn-compare"><i className="d-icon-compare" />Add
                      to
                      compare</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab tab-nav-simple product-tabs">
              <ul className="nav nav-tabs justify-content-center" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#product-tab-description">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#product-tab-additional">Additional information</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#product-tab-size-guide">Size Guide</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#product-tab-reviews">Reviews (2)</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active in" id="product-tab-description">
                  <div className="row mt-6">
                    <div className="col-md-6">
                      <h5 className="description-title mb-4 font-weight-semi-bold ls-m">Features</h5>
                      <p className="mb-2">
                        Praesent id enim sit amet.Tdio vulputate eleifend in in tortor.
                        ellus massa. siti iMassa ristique sit amet condim vel, facilisis
                        quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id
                        enim sit amet.
                      </p>
                      <ul className="mb-8">
                        <li>Praesent id enim sit amet.Tdio vulputate</li>
                        <li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
                        <li>Massa ristique sit amet condim vel</li>
                        <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
                      </ul>
                      <h5 className="description-title mb-3 font-weight-semi-bold ls-m">Specifications
                      </h5>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th className="font-weight-semi-bold text-dark pl-0">Material</th>
                            <td className="pl-4">Praesent id enim sit amet.Tdio</td>
                          </tr>
                          <tr>
                            <th className="font-weight-semi-bold text-dark pl-0">Claimed Size</th>
                            <td className="pl-4">Praesent id enim sit</td>
                          </tr>
                          <tr>
                            <th className="font-weight-semi-bold text-dark pl-0">Recommended Use
                            </th>
                            <td className="pl-4">Praesent id enim sit amet.Tdio vulputate eleifend
                              in in tortor. ellus massa. siti</td>
                          </tr>
                          <tr>
                            <th className="font-weight-semi-bold text-dark border-no pl-0">
                              Manufacturer</th>
                            <td className="border-no pl-4">Praesent id enim</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6 pl-md-6 pt-4 pt-md-0">
                      <h5 className="description-title font-weight-semi-bold ls-m mb-5">Video Description
                      </h5>
                      <figure className="p-relative d-inline-block mb-2">
                        <img src="/assets/images/product/product.jpg" width={559} height={370} alt="Product" />
                        <a className="btn-play btn-iframe" href="video/memory-of-a-woman.mp4">
                          <i className="d-icon-play-solid" />
                        </a>
                      </figure>
                      <div className="icon-box-wrap d-flex flex-wrap">
                        <div className="icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10">
                          <div className="icon-box-icon">
                            <i className="d-icon-lock" />
                          </div>
                          <div className="icon-box-content">
                            <h4 className="icon-box-title lh-1 pt-1 ls-s text-normal">2 year
                              warranty</h4>
                            <p>Guarantee with no doubt</p>
                          </div>
                        </div>
                        <div className="divider d-xl-show mr-10" />
                        <div className="icon-box icon-box-side icon-border pt-2 pb-2 mb-4">
                          <div className="icon-box-icon">
                            <i className="d-icon-truck" />
                          </div>
                          <div className="icon-box-content">
                            <h4 className="icon-box-title lh-1 pt-1 ls-s text-normal">Free shipping
                            </h4>
                            <p>On orders over $50.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="product-tab-additional">
                  <ul className="list-none">
                    <li><label>Brands:</label>
                      <p>SkillStar, SLS</p>
                    </li>
                    <li><label>Color:</label>
                      <p>Blue, Brown</p>
                    </li>
                    <li><label>Size:</label>
                      <p>Large, Medium, Small</p>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane " id="product-tab-size-guide">
                  <figure className="size-image mt-4 mb-4">
                    <img src="/assets/images/product/size_guide.png" alt="Size Guide Image" width={217} height={398} />
                  </figure>
                  <figure className="size-table mt-4 mb-4">
                    <table>
                      <thead>
                        <tr>
                          <th>SIZE</th>
                          <th>CHEST(IN.)</th>
                          <th>WEIST(IN.)</th>
                          <th>HIPS(IN.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>XS</th>
                          <td>34-36</td>
                          <td>27-29</td>
                          <td>34.5-36.5</td>
                        </tr>
                        <tr>
                          <th>S</th>
                          <td>36-38</td>
                          <td>29-31</td>
                          <td>36.5-38.5</td>
                        </tr>
                        <tr>
                          <th>M</th>
                          <td>38-40</td>
                          <td>31-33</td>
                          <td>38.5-40.5</td>
                        </tr>
                        <tr>
                          <th>L</th>
                          <td>40-42</td>
                          <td>33-36</td>
                          <td>40.5-43.5</td>
                        </tr>
                        <tr>
                          <th>XL</th>
                          <td>42-45</td>
                          <td>36-40</td>
                          <td>43.5-47.5</td>
                        </tr>
                        <tr>
                          <th>XXL</th>
                          <td>45-48</td>
                          <td>40-44</td>
                          <td>47.5-51.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                </div>
                <div className="tab-pane" id="product-tab-reviews">
                  <div className="row">
                    <div className="col-lg-4 mb-6">
                      <div className="avg-rating-container">
                        <mark>5.0</mark>
                        <div className="avg-rating">
                          <span className="avg-rating-title">Average Rating</span>
                          <div className="ratings-container mb-0">
                            <div className="ratings-full">
                              <span className="ratings" style={{width: '100%'}} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <span className="rating-reviews">(2 Reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="ratings-list mb-2">
                        <div className="ratings-item">
                          <div className="ratings-container mb-0">
                            <div className="ratings-full">
                              <span className="ratings" style={{width: '100%'}} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                          </div>
                          <div className="rating-percent">
                            <span style={{width: '100%'}} />
                          </div>
                          <div className="progress-value">100%</div>
                        </div>
                        <div className="ratings-item">
                          <div className="ratings-container mb-0">
                            <div className="ratings-full">
                              <span className="ratings" style={{width: '80%'}} />
                              <span className="tooltiptext tooltip-top">4.00</span>
                            </div>
                          </div>
                          <div className="rating-percent">
                            <span style={{width: '0%'}} />
                          </div>
                          <div className="progress-value">0%</div>
                        </div>
                        <div className="ratings-item">
                          <div className="ratings-container mb-0">
                            <div className="ratings-full">
                              <span className="ratings" style={{width: '60%'}} />
                              <span className="tooltiptext tooltip-top">4.00</span>
                            </div>
                          </div>
                          <div className="rating-percent">
                            <span style={{width: '0%'}} />
                          </div>
                          <div className="progress-value">0%</div>
                        </div>
                        <div className="ratings-item">
                          <div className="ratings-container mb-0">
                            <div className="ratings-full">
                              <span className="ratings" style={{width: '40%'}} />
                              <span className="tooltiptext tooltip-top">4.00</span>
                            </div>
                          </div>
                          <div className="rating-percent">
                            <span style={{width: '0%'}} />
                          </div>
                          <div className="progress-value">0%</div>
                        </div>
                        <div className="ratings-item">
                          <div className="ratings-container mb-0">
                            <div className="ratings-full">
                              <span className="ratings" style={{width: '20%'}} />
                              <span className="tooltiptext tooltip-top">4.00</span>
                            </div>
                          </div>
                          <div className="rating-percent">
                            <span style={{width: '0%'}} />
                          </div>
                          <div className="progress-value">0%</div>
                        </div>
                      </div>
                      <a className="btn btn-dark btn-rounded submit-review-toggle" href="#">Submit
                        Review</a>
                    </div>
                    <div className="col-lg-8 comments pt-2 pb-10 border-no">
                      <nav className="toolbox">
                        <div className="toolbox-left">
                          <div className="toolbox-item">
                            <a href="#" className="btn btn-outline btn-rounded">All Reviews</a>
                          </div>
                          <div className="toolbox-item">
                            <a href="#" className="btn btn-outline btn-rounded">With Images</a>
                          </div>
                          <div className="toolbox-item">
                            <a href="#" className="btn btn-outline btn-rounded">With Videos</a>
                          </div>
                        </div>
                        <div className="toolbox-right">
                          <div className="toolbox-item toolbox-sort select-box text-dark">
                            <label>Sort By :</label>
                            <select name="orderby" className="form-control">
                              <option value>Default Order</option>
                              <option value="newest" selected="selected">Newest Reviews
                              </option>
                              <option value="oldest">Oldest Reviews</option>
                              <option value="high_rate">Highest Rating</option>
                              <option value="low_rate">Lowest Rating</option>
                              <option value="most_likely">Most Likely</option>
                              <option value="most_unlikely">Most Unlikely</option>
                            </select>
                          </div>
                        </div>
                      </nav>
                      <ul className="comments-list">
                        <li>
                          <div className="comment">
                            <figure className="comment-media">
                              <a href="#">
                                <img src="/assets/images/blog/comments/1.jpg" alt="avatar" />
                              </a>
                            </figure>
                            <div className="comment-body">
                              <div className="comment-rating ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{width: '100%'}} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                              </div>
                              <div className="comment-user">
                                <span className="comment-date">by <span className="font-weight-semi-bold text-uppercase text-dark">John
                                    Doe</span> on
                                  <span className="font-weight-semi-bold text-dark">Nov 22,
                                    2018</span></span>
                              </div>
                              <div className="comment-content mb-5">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                  libero sodales leo,
                                  eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                  justo.
                                  Suspendisse potenti.
                                  Sed egestas, ante et vulputate volutpat, eros pede
                                  semper
                                  est, vitae luctus metus libero eu augue.</p>
                              </div>
                              <div className="file-input-wrappers">
                                <img className="btn-play btn-img pwsp" src="/assets/images/products/product1.jpg" width={280} height={315} alt="product" />
                                <img className="btn-play btn-img pwsp" src="/assets/images/products/product3.jpg" width={280} height={315} alt="product" />
                                <a className="btn-play btn-iframe" style={{backgroundImage: 'url(/assets/images/product/product.jpg)', backgroundSize: 'cover'}} href="video/memory-of-a-woman.mp4">
                                  <i className="d-icon-play-solid" />
                                </a>
                              </div>
                              <div className="feeling mt-5">
                                <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                  <i className="fa fa-thumbs-up" />
                                  Like (<span className="count">0</span>)
                                </button>
                                <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                  <i className="fa fa-thumbs-down" />
                                  Unlike (<span className="count">0</span>)
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="comment">
                            <figure className="comment-media">
                              <a href="#">
                                <img src="/assets/images/blog/comments/2.jpg" alt="avatar" />
                              </a>
                            </figure>
                            <div className="comment-body">
                              <div className="comment-rating ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{width: '100%'}} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                              </div>
                              <div className="comment-user">
                                <span className="comment-date">by <span className="font-weight-semi-bold text-uppercase text-dark">John
                                    Doe</span> on
                                  <span className="font-weight-semi-bold text-dark">Nov 22,
                                    2018</span></span>
                              </div>
                              <div className="comment-content">
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                  libero sodales leo, eget blandit nunc tortor eu nibh.
                                  Nullam
                                  mollis.
                                  Ut justo. Suspendisse potenti. Sed egestas, ante et
                                  vulputate volutpat,
                                  eros pede semper est, vitae luctus metus libero eu
                                  augue.
                                  Morbi purus libero,
                                  faucibus adipiscing, commodo quis, avida id, est. Sed
                                  lectus. Praesent elementum
                                  hendrerit tortor. Sed semper lorem at felis. Vestibulum
                                  volutpat.</p>
                              </div>
                              <div className="feeling mt-5">
                                <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                  <i className="fa fa-thumbs-up" />
                                  Like (<span className="count">0</span>)
                                </button>
                                <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                  <i className="fa fa-thumbs-down" />
                                  Unlike (<span className="count">0</span>)
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <nav className="toolbox toolbox-pagination justify-content-end">
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                              <i className="d-icon-arrow-left" />Prev
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item page-item-dots"><a className="page-link" href="#">6</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link page-link-next" href="#" aria-label="Next">
                              Next<i className="d-icon-arrow-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* End Comments */}
                  <div className="review-form-section">
                    <div className="review-overlay" />
                    <div className="review-form-wrapper">
                      <div className="title-wrapper text-left">
                        <h3 className="title title-simple text-left text-normal">Add a Review</h3>
                        <p>Your email address will not be published. Required fields are marked *
                        </p>
                      </div>
                      <div className="rating-form">
                        <label htmlFor="rating" className="text-dark">Your rating * </label>
                        <span className="rating-stars selected">
                          <a className="star-1" href="#">1</a>
                          <a className="star-2" href="#">2</a>
                          <a className="star-3" href="#">3</a>
                          <a className="star-4 active" href="#">4</a>
                          <a className="star-5" href="#">5</a>
                        </span>
                        <select name="rating" id="rating" required style={{display: 'none'}}>
                          <option value>Rate…</option>
                          <option value={5}>Perfect</option>
                          <option value={4}>Good</option>
                          <option value={3}>Average</option>
                          <option value={2}>Not that bad</option>
                          <option value={1}>Very poor</option>
                        </select>
                      </div>
                      <form action="#">
                        <textarea id="reply-message" cols={30} rows={6} className="form-control mb-4" placeholder="Comment *" required defaultValue={""} />
                        <div className="review-medias">
                          <div className="file-input form-control image-input" style={{backgroundImage: 'url(/assets/images/product/placeholder.png)'}}>
                            <div className="file-input-wrapper">
                            </div>
                            <label className="btn-action btn-upload" title="Upload Media">
                              <input type="file" accept=".png, .jpg, .jpeg" name="riode_comment_medias_image_1" />
                            </label>
                            <label className="btn-action btn-remove" title="Remove Media">
                            </label>
                          </div>
                          <div className="file-input form-control image-input" style={{backgroundImage: 'url(/assets/images/product/placeholder.png)'}}>
                            <div className="file-input-wrapper">
                            </div>
                            <label className=" btn-action btn-upload" title="Upload Media">
                              <input type="file" accept=".png, .jpg, .jpeg" name="riode_comment_medias_image_2" />
                            </label>
                            <label className="btn-action btn-remove" title="Remove Media">
                            </label>
                          </div>
                          <div className="file-input form-control video-input" style={{backgroundImage: 'url(/assets/images/product/placeholder.png)'}}>
                            <video className="file-input-wrapper" controls />
                            <label className="btn-action btn-upload" title="Upload Media">
                              <input type="file" accept=".avi, .mp4" name="riode_comment_medias_video_1" />
                            </label>
                            <label className="btn-action btn-remove" title="Remove Media">
                            </label>
                          </div>
                        </div>
                        <p>Upload images and videos. Maximum count: 3, size: 2MB</p>
                        <button type="submit" className="btn btn-primary btn-rounded">Submit<i className="d-icon-arrow-right" /></button>
                      </form>
                    </div>
                  </div>
                  {/* End Reply */}
                </div>
              </div>
            </div>
            <section className="pt-3 mt-10">
              <h2 className="title justify-content-center">Related Products</h2>
              <div className="owl-carousel owl-theme owl-nav-full row cols-2 cols-md-3 cols-lg-4" data-owl-options="{
							'items': 5,
							'nav': false,
							'loop': false,
							'dots': true,
							'margin': 20,
							'responsive': {
								'0': {
									'items': 2
								},
								'768': {
									'items': 3
								},
								'992': {
									'items': 4,
									'dots': false,
									'nav': true
								}
							}
						}">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img src="/assets/images/product/featured1.jpg" alt="product" width={280} height={315} />
                    </a>
                    <div className="product-label-group">
                      <label className="product-label label-new">new</label>
                    </div>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" /></a>
                      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat">
                      <a href="shop-grid-3col.html">Clothing</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Solid Pattern in Summer Dress</a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$140.00</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="#" className="rating-reviews">( <span className="review-count">12</span>
                        reviews
                        )</a>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img src="/assets/images/product/featured2.jpg" alt="product" width={280} height={315} />
                    </a>
                    <div className="product-label-group">
                      <label className="product-label label-sale">27% off</label>
                    </div>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" /></a>
                      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick View</a>
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
                      <ins className="new-price">$125.99</ins><del className="old-price">$160.99</del>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '60%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="#" className="rating-reviews">( <span className="review-count">6</span> reviews
                        )</a>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img src="/assets/images/product/featured3.jpg" alt="product" width={280} height={315} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" /></a>
                      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick View</a>
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
                        <span className="ratings" style={{width: '40%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="#" className="rating-reviews">( <span className="review-count">2</span> reviews
                        )</a>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img src="/assets/images/product/featured4.jpg" alt="product" width={280} height={315} />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" /></a>
                      <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    </div>
                    <div className="product-action">
                      <a href="#" className="btn-product btn-quickview" title="Quick View">Quick View</a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat">
                      <a href="shop-grid-3col.html">Clothing</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Women Red Fur Overcoat</a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$184.00</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{width: '80%'}} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="#" className="rating-reviews">( <span className="review-count">6</span> reviews
                        )</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
  )
}


export async function getStaticProps({ params }) {



    const data =  await fetch(`https://api.shaktidurgaarchive.com/products/${params.slug}`)
    const product = await data.json()
   // console.log(product);
    return { 
      props: { 
        product
       },
    }
  }


  export async function getStaticPaths() {
    const res = await fetch('https://api.shaktidurgaarchive.com/products')
    const data = await res.json()
  
    const paths = data.data.map((user) => ({
      params: { slug: user.slug },
    }))
  
    return { paths, fallback: false }
  }
  
  




export default Product