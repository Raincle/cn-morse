"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
// 加密
const chMap_1 = require("./chMap");
function encode(chStr) {
    let chArr = chStr.split('');
    return chArr.map((ch, index) => {
        const code = chMap_1.CH_MAP[ch];
        if (code) {
            return code;
        }
        else {
            throw new Error(`加密失败，请检查第${index + 1}个中文: ${ch}`);
        }
    })
        .join(' ');
}
exports.encode = encode;
