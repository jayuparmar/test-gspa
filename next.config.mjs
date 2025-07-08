/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:[
            "us.abbottlyon.com",
            "cleopatrajewelers.com",
            "www.proclamationjewelry.com",
            "www.sabbia.com",
            "images.unsplash.com",
        ]
    },
    async redirects() {
        return [
            {
                source: '/dashboard',
                destination: '/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
