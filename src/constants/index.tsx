import getConfig from 'next/config'
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigJson from "tailwind.config.js";

const { publicRuntimeConfig } = getConfig();

export const IS_BROWSER = typeof window !== 'undefined';
export const SITE_NAME = publicRuntimeConfig.SITE_NAME;

export const tailwindConfig = resolveConfig(
  tailwindConfigJson
) as {
  theme: Record<string, any>;
};
