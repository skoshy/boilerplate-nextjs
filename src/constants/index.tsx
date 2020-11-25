import getConfig from 'next/config'
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigJson from "tailwind.config.js";

const { publicRuntimeConfig } = getConfig();

interface TailwindConfig {
  theme: Record<string, any>;
}

export const tailwindConfig = resolveConfig(
  tailwindConfigJson
) as TailwindConfig;

export const SITE_NAME = publicRuntimeConfig.SITE_NAME;
