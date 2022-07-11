import * as fs from 'fs';
import * as path from 'path';
import { CH_FREQUENCY } from './src/chFreqency';

const projectPath = path.resolve(__dirname, `./src`)

function arrange() {
    const chArr = CH_FREQUENCY.split('')
    let chMapFileData = 'export const CH_MAP: { [key: string]: string } = {'
    let codeMapFileData = 'export const CODE_MAP: { [key: string]: string } = {'
    chArr.map((ch: string) => {
        const code = getCode(ch)
        chMapFileData += `"${ch}": "${code}",`
        codeMapFileData += `"${code}": "${ch}",`
    })
    chMapFileData += "}"
    codeMapFileData += "}"
    fs.writeFileSync(`${projectPath}/chMap.ts`, chMapFileData)
    fs.writeFileSync(`${projectPath}/codeMap.ts`, codeMapFileData)
}

arrange()

function getCode(ch: string) {
    const chArr = CH_FREQUENCY.split('')
    chArr.unshift("CH_MORSE")
    let index = chArr.indexOf(ch)
    // console.log('index: ', index);
    let code = ''
    for (let i = 0; i < index; i++) {
        const codeLength = Math.floor(Math.log2(index+1))
        // console.log('codeLength: ', codeLength);
        const totalHeight = codeLength + 1
        // console.log('totalHeight: ', totalHeight);
        
        for (let j = 0; j < codeLength; j++) {
            const total = Math.pow(2, totalHeight - j) - 1
            // console.log('total: ', total);
            const upperTotal = (Math.pow(2, totalHeight - j - 1) - 1)
            // console.log('upperTotal: ', upperTotal);
            const layerT = Math.pow(2, totalHeight - j - 1)
            // console.log('layerT: ', layerT);
            const mid = layerT / 2
            // console.log('mid: ', mid);
            
            if ((index - upperTotal) < mid) {
                code += '.'
                const virtualTreeTotal = (Math.pow(2, totalHeight - j - 2) - 1)
                // console.log('\nvirtualTreeTotal: ', virtualTreeTotal);
                index = index - upperTotal + virtualTreeTotal
                // console.log('index: ', index);
            } else {
                code += '-'
                const virtualTreeTotal = (Math.pow(2, totalHeight - j - 2) - 1)
                // console.log('\nvirtualTreeTotal: ', virtualTreeTotal);
                index = index - upperTotal - layerT / 2 + virtualTreeTotal
                // console.log('index: ', index);
            }
        }
    }
    return code
}

