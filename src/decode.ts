// 解密
import { CODE_MAP } from './codeMap';

export function decode(morse: string): string {
    let morseArr = morse.split(' ');
    return morseArr.map((code: string, index) => {
        const ch = CODE_MAP[code]
        if (ch) {
            return ch
        } else {
            throw new Error(`解密失败，请检查第${index + 1}个密码: ${code}`);
        }
    })
    .join('')
}