const { spawn } = require("child_process");

const apps = {
  home: "npm run start:home",
  cart: "npm run start:cart",
  pdp: "npm run start:pdp",
  server: "npm run start:server",
};

const selectedApps = process.argv.slice(2);
const appsToStart = ["server", ...selectedApps]; // Always include the server

if (selectedApps.length === 0) {
  console.error("No apps specified. Please specify apps to start.");
  console.error("Example: npm run start home cart");
  process.exit(1);
}

appsToStart.forEach((app) => {
  if (!apps[app]) {
    console.error(`Invalid app name: ${app}`);
    process.exit(1);
  }

  const [cmd, ...args] = apps[app].split(" ");
  const process = spawn(cmd, args, { stdio: "inherit", shell: true });

  process.on("close", (code) => {
    if (code !== 0) {
      console.error(`App ${app} exited with code ${code}`);
    }
  });
});
