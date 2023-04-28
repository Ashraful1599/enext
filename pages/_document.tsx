import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";


export default function Document() {


  return (
    <Html lang="en">
      <Head>
        <>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
          <title>Ecommerce project - enext</title>
          <meta name="keywords" content="HTML5 Template" />
          <meta
            name="description"
            content="Riode - Ultimate eCommerce Template"
          />
          <meta name="author" content="D-THEMES" />
          {/* Favicon */}
          <link rel="icon" type="image/png" href="/assets/images/icons/favicon.png" />
          {/* Preload Font */}
          <link
            rel="preload"
            href="/assets/fonts/riode115b.ttf?5gap68"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/vendor/fontawesome-free/webfonts/fa-solid-900.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/vendor/fontawesome-free/webfonts/fa-brands-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />







           <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/fontawesome-free/css/all.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/animate/animate.min.css"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/magnific-popup/magnific-popup.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/owl-carousel/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/sticky-icon/stickyicon.css"
          />

          <link rel="stylesheet" type="text/css" href="/assets/css/demo1.min.css" />
    

	
	<link rel="stylesheet" type="text/css" href="/assets/vendor/nouislider/nouislider.min.css" />



	<link rel="stylesheet" type="text/css" href="/assets/css/style.min.css" /> 


        </>
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script src="/assets/vendor/jquery/jquery.min.js" strategy="afterInteractive" onLoad={() => console.log('jquery')} />
        <Script src="/assets/vendor/parallax/parallax.min.js" strategy="lazyOnload" onLoad={() => console.log('parallax')} />
         <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/elevatezoom/jquery.elevatezoom.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js" strategy="lazyOnload" />  
        <Script src="/assets/vendor/owl-carousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.min.js" strategy="lazyOnload" onLoad={() => console.log('main')}/> 


      </body>
    </Html>
  );
}
