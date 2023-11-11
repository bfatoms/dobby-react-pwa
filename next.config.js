/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const withPWA = require('next-pwa')({
  dest: 'public',
})

// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
//     // Your other options,
//     extendDefaultRuntimeCaching: true,
//     workboxOptions: {
//       runtimeCaching: [
//         // Your runtimeCaching array
//       ],
//     },

// });

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features

module.exports = withPWA({
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
});
