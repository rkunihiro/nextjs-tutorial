/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase, { defaultConfig }) => {
    // console.log(args);
    return {
        eslint: {
            dirs: ["src"],
        },
        trailingSlash: true,
        productionBrowserSourceMaps: true,
        reactStrictMode: true,
    };
};
