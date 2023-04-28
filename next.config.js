const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['pickbazarlaravel.s3.ap-southeast-1.amazonaws.com'],
  },
}

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)