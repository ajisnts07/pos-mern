const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
        aliases: {
          "@/assets": "./src/assets",
          "@/components": "./src/components",
          "@/pages": "./src/pages",
          "@/route": "./src/route",
          "@/services": "./src/services",
          "@/utils": "./src/utils",
        },
      },
    },
  ],
};
