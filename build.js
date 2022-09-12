// build.js
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./client/src/index.tsx"],
  outfile: "./public/assets/app.js",
  minify: true,
  bundle: true,
  loader: {
    ".js": "jsx",
  },
  // plugins: [inlineImage()],
}).catch(() => process.exit(1));
