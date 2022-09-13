const esbuild = require("esbuild");

esbuild
  .serve(
    {
      servedir: "public",
      port: 8080,
    },
    {
      platform: 'node',
      entryPoints: ["./server/src/index.ts"],
      outfile: "./public/assets/index.js",
      minify: true,
      bundle: true,
      loader: {
        ".js": "jsx",
      },
      // plugins: [],
    }
  )
  .catch((e) => {
    console.log(e)
    process.exit()
  });
