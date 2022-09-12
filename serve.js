const esbuild = require("esbuild");

esbuild
  .serve(
    {
      servedir: "public",
      port: 8000,
    },
    {
      entryPoints: ["./client/src/index.tsx"],
      outfile: "./public/assets/app.js",
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
