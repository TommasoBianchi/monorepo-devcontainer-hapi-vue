require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-recommended", "@vue/eslint-config-prettier"],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["vue"],
  rules: {
    // Increase max length of code lines
    "max-len": ["warn", { code: 120 }],
  },
};
