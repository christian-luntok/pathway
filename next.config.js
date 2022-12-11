/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    siteTitle: 'Your Company',
    siteDescription: 'Your company description.',
    siteKeywords: 'your company keywords',
    siteUrl: 'You site url',
    siteImagePreviewUrl: '/images/preview.jpeg',
    twitterHandle: '@your_handle'
  } 
}

module.exports = nextConfig
