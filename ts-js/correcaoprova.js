"use strict";
let cont = 0;
function hexa(x) {
    while (x % 16 >= 1) {
        let rest = x % 16;
        let code = [];
        if (rest >= 0 && rest <= 9) {
            code.push(rest);
        }
        if (rest === 10) {
            code.push("A");
        }
        if (rest === 11) {
            code.push("B");
        }
        if (rest === 12) {
            code.push("C");
        }
        if (rest === 13) {
            code.push("D");
        }
        if (rest === 14) {
            code.push("E");
        }
        if (rest === 15) {
            code.push("F");
        }
        x = x / 16;
        code.reverse();
        console.log(x, rest, code);
        return code;
    }
}
console.log(hexa(438));
