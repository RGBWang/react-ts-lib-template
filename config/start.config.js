const path = require("path");
const CracoAlias = require("craco-alias");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const crypto = require("crypto");
const buffer = crypto.createHash("md5").update(process.cwd()).digest();
module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: ".",
                aliases: {
                    "@": "./src/",
                },
            },
        },
    ],
    devServer: {
        open: false,
        compress: false,
        port: Math.floor((buffer[0] * (0xff + 1) + buffer[1]) * 0.9 + 8000),
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const testDir = "test";
            let indexFile = path.resolve(paths.appPath, testDir, `index.tsx`);
            paths.appIndexJs = indexFile;
            webpackConfig.entry = indexFile;

            const rules = webpackConfig.module?.rules;
            if (rules?.length) {
                const tsRule = Array.from(rules[rules.length - 1].oneOf).find(
                    (s) => !!s.test?.test && s.test.test(".tsx")
                );
                if (tsRule?.include) {
                    tsRule.include = undefined;
                }
                rules[rules.length - 1].oneOf = [
                    {
                        test: [/\.glsl$/],
                        use: "raw-loader",
                    },
                    ...rules[rules.length - 1].oneOf,
                ];
            }
            paths.appHtml = path.resolve(paths.appPath, testDir, `index.html`);
            webpackConfig.plugins.splice(
                0,
                1,
                new HtmlWebpackPlugin({
                    inject: true,
                    template: paths.appHtml,
                })
            );
            return webpackConfig;
        },
    },
};
