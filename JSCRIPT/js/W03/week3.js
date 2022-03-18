let info = new Array();
info[0] = 3;
info[3] = 4;
console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]);
console.log(info[4]);
console.log(info.length);

let arr1 = [10, 20, 30, 40];
let arr2 = ["hello", "hi"];
let arr3 = arr1.concat(arr2);
console.log(arr1)
console.log(arr2)
console.log(arr3)

let arr4 = arr1.join(",");
console.log(arr4);
console.log(typeof(arr4));
console.log(typeof(arr1))

let array1 = [100, 21, 13, 40, 200];
let array2 = [1, 41, "hello", "abc", 24, "test", 30, 100];

array1.sort(function compare(a, b) {
    if (!(isNaN(a) && isNaN(b))) return a - b;
});

array2.sort();
console.log(array2);
array2.sort(function compare(a, b) {
    if (!(isNaN(a) && isNaN(b))) return a - b
    else {
        if (a < b)    return -1
        else if (a > b)    return 1
        else    return 0;
    }
});

console.log(array1)
console.log(array2)

let data1 = [10, 22, 34, 50, 30];
let data2 = [1, 1, 0, 0, 1];
let data3 = [];


// forEach
data1.forEach((item, index) => {
    data3.push(item * data2[index])
})

// map
data3 = data1.map((item, index) => {
    return item * data2[index];
})

// filter
data3 = data1.filter((item, index) => {
    return item >= 30
})

console.log(data3)

// 터미널에서 입력 받기
const repl = require('repl')

repl.start({
    prompt: "입력 때 앞에 출력할 문자열",
    eval: (command, context, filename, callback) => {
        console.log(command)
        callback()
    }
})