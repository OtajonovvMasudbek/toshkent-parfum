export default [
    {
      ignores: ["node_modules"], 
      files: ["**/*.js", "**/*.vue"], 
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
      },
    },
  ];
  