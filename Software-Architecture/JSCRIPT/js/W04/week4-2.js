let input = prompt("숫자를 입력하시오")

let discount = (num = 1) => {
    let minus = setInterval(() => {
        document.write(`<p>${num}</p>`)
        num--
        if (num < 0)    clearInterval(minus)
    }, 1000)
    clearInterval()
}

let count = (num) => {
    let plus = setInterval(() => {
        document.write(`<p>${num}</p>`)
        num++
        if (num > 0)    clearInterval(plus)
    }, 1000)
}

if (input < 0) count(input)
else if (input > 0) discount(input)
else discount()