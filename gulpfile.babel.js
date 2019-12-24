import { cp } from "shelljs";
import { spawn, getPort } from "./scripts/lib";

// Runs the app
exports.default = async end => {
  // get an open port
  process.env.PORT = await getPort(process.env.PORT);

  spawn("node server.js");

  end();
};

exports.build = end => {
  spawn("NODE_ENV=production NODE_PATH=./ next build && next export");

  end();
};

// this script must be idempotent, see `postinstall-postinstall` for more info
// runs not only after installs, but after removing packages too
exports.postInstall = end => {
  // Create default .env if it doesn't exist
  cp("-n", ".env.example", ".env");

  end();
};
