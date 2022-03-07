module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    globals: {
        module: "writable",
        process: "readable",
        require: "readable",
        __dirname: "readable",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "unused-imports"],
    rules: {
        //   "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-empty": process.env.NODE_ENV === "production" ? "warn" : "off", //开发时 不喜欢写代码过程中经常出现红线

        "no-var": "error", //禁止使用var
        eqeqeq: "error", //禁止使用==和!=
        "no-self-compare": "error", //禁止自身比较
        "no-unmodified-loop-condition": "error", //禁用一成不变的循环条件

        "no-constant-condition": "off", //while(true){}
        //  "no-empty":"off",//部分 待实现函数 可能为空，
        // "no-unreachable":"off",//测试分支需要使用，保留原有代码
        "prefer-const": "off", //允许使用let,即使没有赋值
        "prefer-rest-params": "off", //允许使用arguments
        // "prefer-spread": "off", //允许使用 apply(,数组)
        "react/prop-types": "off", //使用 typescript 无需此项，

        "react/display-name": "off",

        "@typescript-eslint/no-unused-vars": "off", //尚未完整完工的项目，为扩展设计的接口，都可能使用未使用的变量
        "@typescript-eslint/no-explicit-any": "off", //允许使用any
        "@typescript-eslint/no-non-null-assertion": "off", //允许使用类型断言
        "@typescript-eslint/no-inferrable-types": "off", //关闭类型推断
        "@typescript-eslint/explicit-module-boundary-types": "off", //每个函数都要写明返回值
        "@typescript-eslint/no-empty-function": "off", //允许空函数，一边后续重新赋值
        "@typescript-eslint/no-this-alias": "off", //允许使用变量指向this
        "@typescript-eslint/no-var-requires": "off", //不允许使用 require() 莫名其妙的规则
        //作为库使用时，不可以使用全局React对象，需要手动导入
        "react/react-in-jsx-scope": "error", //jsx 编译时，需要React 对象，项目默认导入全局对象,

        // "unused-imports/no-unused-imports": "warn", //去除多余import
    },
};
