import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import glslify from "rollup-plugin-glslify";
import image from "@rollup/plugin-image";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import pkg from "./package.json";
import del from "rollup-plugin-delete";
const extensions = [".js", ".jsx", ".ts", ".tsx"];
export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        external(),
        alias({
            entries: {
                "@": __dirname + "/src",
            },
        }),
        resolve({
            extensions,
        }),
        commonjs(),
        postcss({
            modules: {
                ".module.css": true,
                ".module.scss": true,
            },
            use: ["sass"],
        }),
        image(),
        glslify({
            include: ["**/*.glsl"],
            exclude: "node_modules/**",
            compress: false,
        }),
        babel({
            exclude: "./node_modules/**",
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false,
                        targets: "defaults",
                    },
                ],
                "@babel/preset-react",
                "@babel/preset-typescript",
            ],
            babelHelpers: "bundled",
            extensions,
        }),
    ],
};
