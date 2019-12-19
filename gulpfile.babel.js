import { cp } from "shelljs";
import { spawn } from "./scripts/lib";

// Runs the app
exports.default = end => {
  spawn("node server.js");

  end();
};

exports.build = end => {
  spawn("NODE_ENV=production NODE_PATH=./ next build && next export");

  end();
};

exports.postInstall = end => {
  // this script must be idempotent, see `postinstall-postinstall` for more info

  // Create default .env if it doesn't exist
  cp("-n", ".env.example", ".env");

  end();
};
