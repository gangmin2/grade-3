console.log(typeof([]))    // object



let fruit = ['사과', '바나나', '망고', '딸기']
console.log(fruit[0])    // 사과
console.log(fruit[1])    // 바나나



let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
}
console.log(product['제품명'])
console.log(product['유형'])
console.log(product.제품명)
console.log(product.유형)



let product2 = {
    '물건 제품명': '7D 건조 망고',
    '!!~%%-유형': '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
}
// 식별자 규칙에 어긋나는 문자열일 경우 대괄호로만 접근 가능; .으로 접근하면 문법 오류 발생
console.log(product2['물건 제품명'])
console.log(product2['!!~%%-유형'])
console.log(product2.물건 제품명)    // SyntaxError
console.log(product2.!!~%%-유형)    // SyntaxError



let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
}
for (let k in product) {
    console.log(`${k} : ${product[k]}`)
}
console.log()
for (let k in product) {
    console.log(`${k} : ${product.k}`)
}



let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
}
console.log('제품명' in product)
console.log('별점' in product)



let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
}
if(!('가격' in product)) {
    // 둘 다 사용 가능
    product.가격 = 1000
    // product['가격'] = 1000
}
for (let k in product) {
    console.log(`${k} : ${product[k]}`)
}
console.log('가격' in product)



let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
}
product.가격 = 2000
for (let k in product) {
    console.log(product[k])
}
delete(product.가격)    // 없는 키 값을 delete 하려고 하면 error...가 안 생기는데?
if ('바보' in product) {
    delete(product.바보)
}
for (let k in product) {
    console.log(product[k])
}



let object = {
    name: '바나나',
    price: 1200,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}입니다`)
    }
}
object.print()



let obj = {
    name: '바나나',
    print: function() {
        console.log(name)
    }
}
obj.print()    // ReferenceError



let obj = {
    name: '바나나',
    print: function() {
        console.log(this.name)
    }
}
obj.print()



console.log(this)    // Window



let s = function() {
    let n = 10
    console.log(this.n)
}
let n = 100
console.log(this.n)
s()    // Window에 n을 선언한 적 없음 그래서 undefined가 출력됨



// 브라우저에서 실행
let s = function() {
    let n = 10
    console.log(this.n)
}
window.n = 100
console.log(this.n)
s()



// this -> 객체에 속한 메소드에서 사용될 때에는 메소드가 속한 객체를 가리킴
let obj = {
    name: '바나나',
    print: function() {
        console.log(this.name)
    }
}
obj.print()



// this -> 객체에 속한 메소드의 내부 함수에서 사용될 때 this는 전역 객체를 가리킴
let obj = {
    name: '바나나',
    print: function() {
        console.log(this)
        function inner() {
            console.log('inner this : ' + this)
        }
        inner()
    }
}
obj.print()



// this -> 생성자에서 사용될 때 this는 생성자로 인해 생성된 새로운 객체를 가리킴
class Sample {
    constructor(name) {
        this.name = name
        console.log(this)
    }
}
let s = new Sample("test")



let person = {
    name: '홍길동',
    eat: function(food) {
        console.log(`${name}이 ${food}을(를) 먹습니다.`)
    }
}
person.eat('카카오')    // 이 카카오을(를) 먹습니다.



// 객체 배열
let products = [
    { name: '바나나', price: 1200 },
    { name: '사과', price: 2000 },
    { name: '배', price: 3000 },
    { name: '고구마', price: 700 },
    { name: '감자', price: 600 },
    { name: '수박', price: 5000 }
]

let products = []
products.push({ name: '바나나', price: 1200 })
products.push({ name: '사과', price: 2000 })
products.push({ name: '배', price: 3000 })
products.push({ name: '고구마', price: 700 })
products.push({ name: '감자', price: 600 })
products.push({ name: '수박', price: 5000 })

// name 속성만 출력
for (let k in products)    console.log(products[k].name)
// price 속성의 합
let sum = 0
for (let k in products)    sum += products[k].price
console.log(sum)

let products = [
    {
        name: '바나나',
        price: 1200,
        print: function() {
            console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        }
    },
    {
        name: '사과',
        price: 2000,
        print: function() {
            console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        }
    },
    {
        name: '배',
        price: 3000,
        print: function() {
            console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        }
    },
    {
        name: '고구마',
        price: 700,
        print: function() {
            console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        }
    },
    {
        name: '감자',
        price: 600,
        print: function() {
            console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        }
    },
    {
        name: '수박',
        price: 5000,
        print: function() {
            console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
        }
    }
]

for (let product of products) {
    product.print()
}



// 함수를 외부로 보낸 형태
let products = [
    { name: '바나나', price: 1200 },
    { name: '사과', price: 2000 },
    { name: '배', price: 3000 },
    { name: '고구마', price: 700 },
    { name: '감자', price: 600 },
    { name: '수박', price: 5000 }
]

function printProduct(product) {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`)
}

for (let product of products) {
    printProduct(product)
}



// 생성자 함수와 프로토타입
function Product (name, price) {
    this.name = name
    this.price = price
    this.print_price = function() {
        console.log(`price = ${this.price}`)
    }
    this.print_name = function() {
        console.log(`name = ${this.name}`)
    }
}
let product = new Product('바나나', 2000)
let product1 = new Product('사과', 1500)
console.log(product)
console.log(product1)

product.print_name()
product1.print_price()



// split
let s = 'hello memory id'
let t = s.split(' ')
console.log(t)

let str = 'hello,memory,id'
let t1 = str.split(',')
console.log(t1)

// 클래스 선언 - 대문자로 시작하는 이름
class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }
    print() {
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
    }
}

let product = new Product('바나나', 1200)
console.log(product.name)
console.log(product.price)

let products = [
    new Product('바나나', 1200),
    new Product('사과', 2000),
    new Product('배', 3000),
]

for (let product of products) {
    product.print()
}

console.log(null)
console.log(typeof(null))

let num = 0;
let fbool = ''
let emptyString = ""
let undefinedValue
let nullValue = null

if (num == null)                console.log("0은 존재하지 않는 값입니다.")
if (fbool == null)              console.log("false는 존재하지 않는 값입니다.")
if (emptyString == null)        console.log("빈 문자열은 존재하지 않는 값입니다.")
if (undefinedValue == null)     console.log("undefinedValue는 존재하지 않는 값입니다.")
if (nullValue == null)          console.log("null은 존재하지 않는 값입니다.")