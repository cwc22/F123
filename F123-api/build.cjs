const esbuild = require("esbuild")

esbuild.build({
  platform: 'node',
  entryPoints: ["./server/src/index.js"],
  outfile: "./public/assets/index.js",
  minify: true,
  bundle: true,
  loader: {
    ".js": "jsx",
  },
  // plugins: [inlineImage()],
}).catch(() => process.exit(1));
