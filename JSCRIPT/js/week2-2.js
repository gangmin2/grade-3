let text = prompt("문자 하나를 입력해주세요")
text = text.charCodeAt(0)

let gap = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)

if (text >= 'a'.charCodeAt(0) && text <= 'z'.charCodeAt(0)) {
    console.log(String.fromCharCode(text - gap))
} else if (text >= 'A'.charCodeAt(0) && text <= 'Z'.charCodeAt(0)) {
    console.log(String.fromCharCode(text + gap))
} else {
    console.log("not alphabet")
}