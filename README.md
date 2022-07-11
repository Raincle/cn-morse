# cn-morse
中文摩尔斯码

## Motivation
1. 中文是表意字符，相比英文，理论上中文摩尔斯码应该更短，用更少的字符传达更多信息。
2. 然而作者看到市面上的中文摩尔斯码，只是简单地将中文转化为Unicode，然后再转化为摩尔斯码，失去了摩尔斯思想的精髓。
3. 因此，作者决定开源基于字频二叉树的中文摩尔斯码

## Features
1. 加密解密常用500字中文
2. 用更少的字符传达更多信息
3. 用传统摩尔斯解码无效，混淆视听

## Installation
```sh
$ npm i --save cn-morse
```

## Common Usage
```js
/*
 *Calculate max loss of an array
 */
const { encode } = require('cn-morse')

const morseCode = encode('我爱你')

console.log(morseCode) //
```


## Advanced Usage

## License
MIT
