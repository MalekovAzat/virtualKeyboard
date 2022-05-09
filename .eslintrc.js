module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  //   plugins: ["react"],
  rules: {
    "max-classes-per-file": "off",
    quotes: "off",
    "implicit-arrow-linebreak": "off",
    "no-new": "off",
    "operator-linebreak": "off",
    "object-curly-newline": "off",
    "comma-dangle": "off",
    "no-multi-assign": "off",
    "function-paren-newline": "off",
  },
};
