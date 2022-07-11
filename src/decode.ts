// 解密
import { CODE_MAP } from './codeMap';

export function decode(morse: string): string {
    let morseArr = morse.split(' ');
    return morseArr.map((code) => {
        return CODE_MAP[code]
    })
    .join('')
}