import { App } from "./App";
import { Button } from "./Button";
export { App, Button };
export function replaceAll(content: string, searchValue: string, replaceValue: string): string {
    if (!content) {
        return content;
    }
    let txt = content;
    while (true) {
        let p = txt.replace(searchValue, replaceValue);
        if (p === txt) {
            break;
        } else {
            txt = p;
        }
    }
    return txt;
}
