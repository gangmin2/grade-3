let data = []
let plus = []

do {
    input = prompt("데이터를 입력하세요")
    data.push(input)
    if (!isNaN(input) && input > 0) {
        plus.push(input)
    }
} while (input != null)

data.pop()

console.log(data)

plus.sort(function compare(a, b) {
    return a - b
})

console.log(plus)