/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['api.bl.uk', 'iiif-cloud.princeton.edu', 'repository.library.brown.edu', 'pemm-data-migration.s3.amazonaws.com'],
  },
  env: {
    REACT_APP_API: process.env.REACT_APP_API,
    WEBSITE: process.env.WEBSITE
  }
}
