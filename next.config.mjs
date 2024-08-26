/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['flotiq-components-react'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.flotiq.com',
                port: '',
                pathname: '/image/**',
            },
        ],
    },
};

export default nextConfig;
