import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigJson from "tailwind.config.js";

interface TailwindConfig {
  theme: Record<string, any>;
}

export const tailwindConfig = resolveConfig(
  tailwindConfigJson
) as TailwindConfig;

export const SITE_NAME = process.env.SITE_NAME;
