/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "cypress"],
  ignorePatterns: [
    "**/*.styles.*",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:cypress/recommended",
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
