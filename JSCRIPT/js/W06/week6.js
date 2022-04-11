let num1 = 248
let string1 = "hi"
let bool1 = true

console.log(typeof(num1))
console.log(typeof(string1))
console.log(typeof(bool1))



let num = new Number(237)
let string = new String("hi")
let bool = new Boolean(true)

console.log(typeof(num))
console.log(typeof(string))
console.log(typeof(bool))



// 기본 자료형과 객체 자료형 둘 다 속성과 메소드 사용 가능
let str = '과자 | 1500'
console.log(str.split('|'))

let str1 = new String('과자 | 1500')
console.log(str1.split('|'))



// 기본 자료형과 객체 자료형의 차이
// 기본자료형의 속성 또는 메소드를 사용할 때 기본 자료형이 자동으로 객체로 변환됨
// 기본 자료형은 객체가 아니므로 속성과 메소드를 추가할 수 없음

// 기본 자료형
let prime = 1
prime.method1 = function() {
    console.log("method1")
}
prime.method1()


// 객체 자료형
let num = new Number(123)
num.method = function() {
    console.log('method')
}
num.method()


// 객체 자료형
let num1 = new Number('212')
num1.val = 214
num1.print = function() {
    console.log(this.val)
}

num1.print()



// 기본 자료형으로 메소드 추가하는 방법
let num = 123
Number.prototype.method = function() {
    console.log('method')
}
Number.prototype.Pi = 3.14
num.method()
console.log(num.Pi)



// 정규표현식