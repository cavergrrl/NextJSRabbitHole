module.exports = {
    target: 'serverless',
    env: {
        CHARACTER_API_URL: process.env.CHARACTER_API_URL,
        STARSHIPS_API_URL: process.env.STARSHIPS_API_URL,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ]
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
        return config;
    }
}
