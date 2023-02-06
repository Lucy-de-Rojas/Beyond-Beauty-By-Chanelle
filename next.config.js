/** @type {import('next').NextConfig} */
const nextConfig = {
  // original setting:
  // reactStrictMode: true,
  reactStrictMode: false,
  env: {
    PORT: process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    USER: process.env.USER,
    DATABASE_NAME: process.env.DATABASE_NAME,
    HOST: process.env.HOST,
  },
}

module.exports = nextConfig
