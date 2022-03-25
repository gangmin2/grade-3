let add = (num) => {
    let inner = (max) => {
        let sum = 0
        while (sum + num <= max) {
            console.log(`${sum} + ${num} = ${sum + num}`)
            sum += num
        }
        return sum
    }
    return inner
}

let add2 = add(2)
let add3 = add(3)

console.log(add2(10))
console.log(add3(10))