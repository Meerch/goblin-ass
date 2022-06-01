/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: ''
    },
    basePath: "/goblin-ass",
    assetPrefix: "/goblin-ass",
}

module.exports = nextConfig
