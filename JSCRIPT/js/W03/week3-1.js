let rawdata = [];
let plus = [];
let minus = [];
let munja = [];

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    rawdata.push(line)
})

rl.on('close', () => {
    rawdata.forEach((item, index) => {
        if (isNaN(item)) {
            munja.push(item);
        } else if (item >= 0) {
            plus.push(item);
        } else {
            minus.push(item);
        }
    })

    for (let i = 0; i < rawdata.length; i++) {
    }
    
    plus.sort(function compare(a, b) {
        if (!(isNaN(a) && isNaN(b)))    return a - b;
    })
    
    minus.sort(function compare(a, b) {
        if (!(isNaN(a) && isNaN(b)))    return a - b;
    })
    
    munja.sort();
    
    console.log("양수의 개수와 최대값 : ", plus.length, plus[plus.length - 1])
    console.log("음수의 최대값과 마지막 문장 : ", minus[minus.length - 1], munja[munja.length - 1])

    process.exit()
})