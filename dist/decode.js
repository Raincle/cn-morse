"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
// 解密
const codeMap_1 = require("./codeMap");
function decode(morse) {
    let morseArr = morse.split(' ');
    return morseArr.map((code, index) => {
        const ch = codeMap_1.CODE_MAP[code];
        if (ch) {
            return ch;
        }
        else {
            throw new Error(`解密失败，请检查第${index + 1}个密码: ${code}`);
        }
    })
        .join('');
}
exports.decode = decode;
