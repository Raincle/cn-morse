// 加密
import { CH_MAP } from './chMap';

export function encode(chStr: string): string {
    let chArr = chStr.split('')
    return chArr.map((ch: string, index) => {
        const code = CH_MAP[ch]
        if (code) {
            return code
        } else {
            throw new Error(`加密失败，请检查第${index + 1}个中文: ${ch}`);
        }
    })
    .join(' ')
}