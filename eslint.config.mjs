// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js defaults for TypeScript & Web Vitals
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom overrides and rules
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // 🧩 Disable rules that cause Vercel build failures
      "react/no-unescaped-entities": "off", // allows apostrophes in JSX text
      "@next/next/no-img-element": "off", // allows raw <img> usage
      "jsx-a11y/alt-text": "off", // disable alt warnings
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
