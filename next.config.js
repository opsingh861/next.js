/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['getwallpapers.com']
    },
    async redirects() {
        return [
            {
                source: '/users',
                destination: '/',
                permanent: false,
            },
            {
                source: '/users/:user',
                destination: '/',
                permanent: false,
            }
        ]
    },
}

module.exports = nextConfig
