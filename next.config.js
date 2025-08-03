/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    webpack: (config, { isServer }) => {
        // Ensure single React instance and proper JSX runtime
        config.resolve.alias = {
            ...config.resolve.alias,
            'react': require.resolve('react'),
            'react-dom': require.resolve('react-dom'),
            'react/jsx-runtime': require.resolve('react/jsx-runtime'),
            'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
        }

        return config
    },
}

module.exports = nextConfig 