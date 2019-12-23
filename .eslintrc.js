module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["react-hooks"],
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:jsdoc/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowTypedFunctionExpressions: true,
        allowExpressions: true
      }
    ],
    "react/prop-types": 0,
    "import/first": 2,
    "import/newline-after-import": 2,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "never"
      }
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "query-string",
            importNames: ["default"],
            message: "Use useQueryParams instead from `lib`"
          },
          {
            name: "react-redux",
            importNames: ["useSelector", "useDispatch", "useStore"],
            message:
              "Use the selectors from `lib/useRedux` or `helpers/*/useSelector` instead"
          },
          {
            name: "shelljs",
            importNames: ["exec"],
            message: "Use `scripts/lib:spawn` instead"
          },
          {
            name: "npm-run",
            importNames: ["spawn"],
            message: "Use `scripts/lib:spawn` instead"
          }
        ],
        patterns: [
          "src/types/*" // types should only be imported from `src/types`
        ]
      }
    ],
    "no-return-assign": ["error", "except-parens"],
    "no-undef": [0], // turn off this rule because TypeScript does this for us, plus it conflicts with optional chaining working
    "import/no-default-export": [0],
    "react/no-children-prop": [0], // turn this off so it doesn't conflict with things like Grommet's `children` prop
    "@typescript-eslint/explicit-function-return-type": [0], // maybe can turn back on once project is complete?
    "react/jsx-wrap-multilines": [0],

    // JSDoc stuff, let's progressively use JSDoc, not force it on people. typescript should do most of this work
    "jsdoc/require-jsdoc": [0],
    "jsdoc/require-returns": [0],
    "spaced-comment": ["error", "always", { markers: ["/"] }], // prevents errors in *.d.ts files - https://github.com/typescript-eslint/typescript-eslint/issues/600
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      "babel-plugin-root-import": {},
      node: {
        paths: ["./"]
      }
    }
  }
};
