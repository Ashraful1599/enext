import React from 'react'
import { useTranslation } from 'next-i18next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

export default function About() {

    const { t } = useTranslation('common')
  return (
    <main className="main">
  <nav className="breadcrumb-nav">
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <a href="demo1.html">
            <i className="d-icon-home" />
          </a>
        </li>
        <li>About Us</li>
      </ul>
    </div>
  </nav>
  <div
    className="page-header pl-4 pr-4"
    style={{ backgroundImage: "url(/assets/images/page-header/about-us.jpg)" }}
  >
    <h3 className="page-subtitle font-weight-bold">Welcome to Riode</h3>
    <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
      Our Services
    </h1>
    <p className="page-desc text-white mb-0">
      Lorem quis bibendum auctor, nisi elit consequat ipsum,
      <br /> nec sagittis sem nibh id elit.
    </p>
  </div>
  <div className="page-content mt-10 pt-10">
    <section className="about-section pb-10 appear-animate">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-10 mb-lg-4">
            <h5 className="section-subtitle lh-2 ls-md font-weight-normal">
              01. What We Do
            </h5>
            <h3 className="section-title lh-1 font-weight-bold">
              Provide perfect and practical services
            </h3>
            <p className="section-desc">
              Lorem quis bibendum auctar, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
          </div>
          <div className="col-lg-8 ">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="counter text-center text-dark">
                  <span
                    className="count-to"
                    data-fromvalue={0}
                    data-tovalue={34}
                    data-duration={900}
                    data-delimiter=","
                  >
                    0
                  </span>
                  <h5 className="count-title font-weight-bold text-body ls-md">
                    Business Year
                  </h5>
                  <p className="text-grey mb-0">
                    Lorem ipsum dolor sit
                    <br />
                    amet, conctetur adipisci elit. viverra erat orci.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="counter text-center text-dark">
                  <span
                    className="count-to"
                    data-fromvalue={0}
                    data-tovalue={50}
                    data-duration={900}
                    data-delimiter=","
                  >
                    0
                  </span>
                  <h5 className="count-title font-weight-bold text-body ls-md">
                    Design Brands
                  </h5>
                  <p className="text-grey mb-0">
                    Lorem ipsum dolor sit
                    <br />
                    amet, conctetur adipisci elit. viverra erat orci.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="counter text-center text-dark">
                  <span
                    className="count-to"
                    data-fromvalue={0}
                    data-tovalue={130}
                    data-duration={900}
                    data-delimiter=","
                  >
                    0
                  </span>
                  <h5 className="count-title font-weight-bold text-body ls-md">
                    Team Members
                  </h5>
                  <p className="text-grey mb-0">
                    Lorem ipsum dolor sit
                    <br />
                    amet, conctetur adipisci elit. viverra erat orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section*/}
    <section className="customer-section pb-10 appear-animate">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 mb-4">
            <figure>
              <Image
                src="/assets/images/subpages/customer.jpg"
                alt="Happy Customer"
                width={580}
                height={507}
                className="banner-radius"
                style={{ backgroundColor: "#BDD0DE" }}
              />
            </figure>
          </div>
          <div className="col-md-5 mb-4">
            <h5 className="section-subtitle lh-2 ls-md font-weight-normal">
              02. Happy Customer
            </h5>
            <h3 className="section-title lh-1 font-weight-bold">
              Provide fashionable and
              <br />
              qualifed products
            </h3>
            <p className="section-desc text-grey">
              Already millions of people are very satisfied by thi.
              <br />
              s page builder and the number is growing more and more. Technolog
              <br />
              developing, requirements are increasing. Riode has brought.
            </p>
            <a href="#" className="btn btn-dark btn-link btn-underline ls-m">
              Visit Our Store
              <i className="d-icon-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Customer Section */}
    <section className="store-section pb-10 appear-animate">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-first mb-4">
            <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1">
              03. Our Store
            </h5>
            <h3 className="section-title lh-1 font-weight-bold">
              Expect Restless
              <br />
              Amazing Support
            </h3>
            <p className="section-desc text-grey">
              Already millions of people are very satisfied by thi.
              <br />
              s page builder and the number is growing more and more. Technolog
              <br />
              developing, requirements are increasing. Riode has brought.
            </p>
            <a href="#" className="btn btn-dark btn-link btn-underline ls-m">
              Get Our Store
              <i className="d-icon-arrow-right" />
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <figure>
              <Image
                src="/assets/images/subpages/store.jpg"
                alt="Our Store"
                width={580}
                height={507}
                className="banner-radius"
                style={{ backgroundColor: "#DEE6E8" }}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    {/* End Store-section */}
    <section className="brand-section grey-section pt-10 pb-10 appear-animate">
      <div className="container mt-8 mb-10">
        <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">
          04. Our Clients
        </h5>
        <h3 className="section-title lh-1 font-weight-bold text-center mb-5">
          Popular Brands
        </h3>
        <div
          className="owl-carousel owl-theme row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                      'nav': false,
                      'dots': false,
                      'autoplay': true,
                      'margin': 20,
                      'responsive': {
                          '0': {
                              'items': 2
                          },
                          '576': {
                              'items': 3
                          },
                          '768': {
                              'items': 4
                          },
                          '992': {
                              'items': 5
                          },
                          '1200': {
                              'items': 6
                          }
                      }
                  }"
        >
          <figure className="brand-wrap bg-white banner-radius">
            <Image
              src="/assets/images/brands/1.png"
              alt="Brand"
              width={180}
              height={100}
            />
          </figure>
          <figure className="brand-wrap bg-white banner-radius">
            <Image
              src="/assets/images/brands/2.png"
              alt="Brand"
              width={180}
              height={100}
            />
          </figure>
          <figure className="brand-wrap bg-white banner-radius">
            <Image
              src="/assets/images/brands/3.png"
              alt="Brand"
              width={180}
              height={100}
            />
          </figure>
          <figure className="brand-wrap bg-white banner-radius">
            <Image
              src="/assets/images/brands/4.png"
              alt="Brand"
              width={180}
              height={100}
            />
          </figure>
          <figure className="brand-wrap bg-white banner-radius">
            <Image
              src="/assets/images/brands/5.png"
              alt="Brand"
              width={180}
              height={100}
            />
          </figure>
          <figure className="brand-wrap bg-white banner-radius">
            <Image
              src="/assets/images/brands/6.png"
              alt="Brand"
              width={180}
              height={100}
            />
          </figure>
        </div>
      </div>
    </section>
    <section className="team-section pt-8 mt-10 pb-10 mb-6 appear-animate">
      <div className="container">
        <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">
          04. Our Leaders
        </h5>
        <h3 className="section-title lh-1 font-weight-bold text-center mb-5">
          Meet our team
        </h3>
        <div className="row cols-sm-2 cols-md-4">
          <div
            className="member appear-animate"
            data-animation-options="{'name': 'fadeInLeftShorter'}"
          >
            <figure className="banner-radius">
              <Image
                src="/assets/images/subpages/team1.jpg"
                alt="team member"
                width={280}
                height={280}
                style={{ backgroundColor: "#EEE" }}
              />
              <div className="overlay social-links">
                <a
                  href="#"
                  className="social-link social-facebook fab fa-facebook-f"
                />
                <a
                  href="#"
                  className="social-link social-twitter fab fa-twitter"
                />
                <a
                  href="#"
                  className="social-link social-linkedin fab fa-linkedin-in"
                />
              </div>
            </figure>
            <h4 className="member-name">Tomasz Treflerzan</h4>
            <h5 className="member-job">Ceo / Founder</h5>
          </div>
          <div
            className="member appear-animate"
            data-animation-options="{'name': 'fadeInLeftShorter', 'delay': '.3s'}"
          >
            <figure className="banner-radius">
              <Image
                src="/assets/images/subpages/team2.jpg"
                alt="team member"
                width={280}
                height={280}
                style={{ backgroundColor: "#121A1F" }}
              />
              <div className="overlay social-links">
                <a
                  href="#"
                  className="social-link social-facebook fab fa-facebook-f"
                />
                <a
                  href="#"
                  className="social-link social-twitter fab fa-twitter"
                />
                <a
                  href="#"
                  className="social-link social-linkedin fab fa-linkedin-in"
                />
              </div>
            </figure>
            <h4 className="member-name">Dylan Chavez</h4>
            <h5 className="member-job">Support manager / founder</h5>
          </div>
          <div
            className="member appear-animate"
            data-animation-options="{'name': 'fadeInLeftShorter', 'delay': '.4s'}"
          >
            <figure className="banner-radius">
              <Image
                src="/assets/images/subpages/team3.jpg"
                alt="team member"
                width={280}
                height={280}
                style={{ backgroundColor: "#E8E7E3" }}
              />
              <div className="overlay social-links">
                <a
                  href="#"
                  className="social-link social-facebook fab fa-facebook-f"
                />
                <a
                  href="#"
                  className="social-link social-twitter fab fa-twitter"
                />
                <a
                  href="#"
                  className="social-link social-linkedin fab fa-linkedin-in"
                />
              </div>
            </figure>
            <h4 className="member-name">Viktoriia Demianenko</h4>
            <h5 className="member-job">Designer</h5>
          </div>
          <div
            className="member appear-animate"
            data-animation-options="{'name': 'fadeInLeftShorter', 'delay': '.5s'}"
          >
            <figure className="banner-radius">
              <Image
                src="/assets/images/subpages/team4.jpg"
                alt="team member"
                width={280}
                height={280}
                style={{ backgroundColor: "#465D7F" }}
              />
              <div className="overlay social-links">
                <a
                  href="#"
                  className="social-link social-facebook fab fa-facebook-f"
                />
                <a
                  href="#"
                  className="social-link social-twitter fab fa-twitter"
                />
                <a
                  href="#"
                  className="social-link social-linkedin fab fa-linkedin-in"
                />
              </div>
            </figure>
            <h4 className="member-name">Mikhail Hnatuk</h4>
            <h5 className="member-job">Support</h5>
          </div>
        </div>
      </div>
    </section>
    {/* End Team Section */}
  </div>
</main>

  )
}


export const getStaticProps: GetStaticProps = async ({
    locale,
  }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
      ])),
    },
  })