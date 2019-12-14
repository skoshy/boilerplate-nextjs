import { spawn as npmRunSpawn } from "npm-run"; // eslint-disable-line no-restricted-imports

export const spawnDefaultOptions = {
  shell: true,
  stdio: "inherit"
};

export const spawn = (cmd, params = [], options = spawnDefaultOptions) =>
  npmRunSpawn(cmd, params, options);
