/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Ensure proper React resolution
        config.resolve.alias = {
            ...config.resolve.alias,
            'react': require.resolve('react'),
            'react-dom': require.resolve('react-dom'),
            'react-dom/client': require.resolve('react-dom/client'),
        }

        // Ensure JSX runtime is properly resolved
        config.resolve.fallback = {
            ...config.resolve.fallback,
            'react/jsx-runtime': require.resolve('react/jsx-runtime'),
            'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
        }

        return config
    },
    experimental: {
        esmExternals: false,
    },
}

module.exports = nextConfig 