const { replaceAll } = require("../src/index");
describe("ttt group", () => {
    test("123", () => {
        expect(replaceAll("abab", "a", "c") === "cbcb").toBeTruthy();
    });
});
test("123", () => {
    expect(replaceAll("a[.bab", "[.", "c") === "acbab").toBeTruthy();
});
