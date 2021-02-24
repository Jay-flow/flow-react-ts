module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
