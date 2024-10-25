// eslint.config.js
import vue from "eslint-plugin-vue";

export default [
  {
    ignores: ["node_modules"], // kerakli papkalarni e'tiborsiz qoldiradi
    files: ["**/*.js", "**/*.vue"], // .js va .vue fayllarni tekshiradi
    languageOptions: {
      parser: "@babel/eslint-parser", // Babel parserni ishlatadi
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      vue, // Vue pluginini qo'shadi
    },
    rules: {
      "vue/no-multiple-template-root": "off", // Vue 3 uchun kerak bo'lishi mumkin
      "no-unused-vars": "warn",
      "no-console": "off",
      // Boshqa qoidalaringizni kiriting
    },
  },
];
