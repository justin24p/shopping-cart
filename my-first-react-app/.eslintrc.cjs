module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
        "airbnb",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "prettier"],
    rules: {
        "prettier/prettier": ["error"],
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
};
// Indent with 4 spaces
"indent": ["error", 4],

// Indent JSX with 4 spaces
"react/jsx-indent": ["error", 4],

// Indent props with 4 spaces
"react/jsx-indent-props": ["error", 4],