/*
* @type {import('next').NextConfig} 
*/

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  env: {
    API_URL2: "http://localhost:4000/api",
    // API_URL: "/api",
  },
});
