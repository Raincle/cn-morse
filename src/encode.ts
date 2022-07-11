// 加密
import { CH_MAP } from './chMap';

export function encode(chStr: string): string {
    let chArr = chStr.split('')
    return chArr.map((ch: string) => {
        const code = CH_MAP[ch]
        return code
    })
    .join(' ')
}