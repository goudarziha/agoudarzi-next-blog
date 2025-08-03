/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Ensure single React instance
        config.resolve.alias = {
            ...config.resolve.alias,
            'react': require.resolve('react'),
            'react-dom': require.resolve('react-dom'),
        }

        return config
    },
}

module.exports = nextConfig 