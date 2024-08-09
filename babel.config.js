module.exports = {
    presets: [
      [
      "@babel/preset-env",       "@babel/preset-typescript",
      { targets: { node: "current" } }],
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src/"],
          alias: {
            "@modules": "./src/modules",
            "@main": "./src/main",
            "@error": "./src/error"
          },
          extensions: [".js", ".ts"]

        },
      ],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };