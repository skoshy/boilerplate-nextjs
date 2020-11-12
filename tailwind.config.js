module.exports = {
  theme: {},
  variants: {},
  plugins: [
    function ({ addUtilities, variants }) {
      const prefix = ".justify-items";
      const key = "justifyItems";

      const arr = [
        "baseline",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "inherit",
        "initial",
        "left",
        "legacy",
        "normal",
        "right",
        "safe",
        "self-end",
        "self-start",
        "start",
        "stretch",
        "unsafe",
        "unset",
      ];

      const newUtilities = arr.reduce((acc, val) => {
        acc[`${prefix}-${val}`] = {
          [key]: val,
        };

        return acc;
      }, {});

      addUtilities(newUtilities, variants("customPlugin"));
    },
  ],
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.vue",
    // etc.
  ],
};
