const path = require("path");
const withTM = require("next-transpile-modules")(["@subzero/glacier"]);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === "object"
    );
    const fixUse = (use) => {
      if (use.loader.indexOf("css-loader") >= 0 && use.options.modules) {
        use.options.modules.mode = "local";
      }
    };
    if (oneOf) {
      oneOf.oneOf.forEach((rule) => {
        if (Array.isArray(rule.use)) {
          rule.use.map(fixUse);
        } else if (rule.use && rule.use.loader) {
          fixUse(rule.use);
        }
      });
    }
    return config;
  },
});
