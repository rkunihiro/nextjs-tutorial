module.exports = {
    plugins: ["@typescript-eslint"],
    extends: [
        //
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next",
        "next/core-web-vitals",
        "prettier",
    ],
    rules: {
        "curly": ["error", "all"],
        "no-console": "warn",
    },
};
