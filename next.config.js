/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['api.bl.uk', 'iiif-cloud.princeton.edu'],
  },
  env: {
    REACT_APP_API: process.env.REACT_APP_API
  },
}
