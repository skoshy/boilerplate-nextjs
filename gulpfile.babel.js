import { cp } from "shelljs";
import { spawn } from "./scripts/lib";

// Runs the app
exports.default = end => {
  // Create default .env if it doesn't exist
  cp("-n", ".env.example", ".env");
  spawn("node server.js");

  end();
};

exports.build = end => {
  spawn("NODE_ENV=production NODE_PATH=./ next build && next export");

  end();
};
