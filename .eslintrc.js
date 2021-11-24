module.export = {
  "root": true,
  "plugins": ["@typescript-eslint", "prettier", "jsx-conditionals", "jsx/a11y"],
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb-typescript/base",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "parser": "@typescript-eslint/parser",
  "rules": {
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-indent": "warn",
    "prefer-arrow-callback": "error",
    "arrow-spacing": "warn",
    "func-names": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    "implicit-arrow-linebreak": "off",
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "warn",
  }
}