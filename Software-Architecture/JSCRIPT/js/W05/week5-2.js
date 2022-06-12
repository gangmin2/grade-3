class Product {
    constructor(name, ko = 0, en = 0, math = 0) {
        this.name = name
        this.ko = parseInt(ko)
        this.en = parseInt(en)
        this.math = parseInt(math)
    }
    sum() {
        return this.ko + this.en + this.math
    }
    ave() {
        return (this.sum() / 3)
    }
    print_info() {
        console.log(this.name, this.sum(), this.ave())
        return `이름 : ${this.name} &nbsp; 합계 : ${this.sum()} &nbsp; 평균 : ${this.ave()}`
    }
}

// class1이라는 인스턴스 배열을 만듦
let class1 = []

// prompt 입력 받기
while (true) {
    info = prompt('이름(필수), 국어, 영어, 수학을 입력하세요.\n(종료를 원한다면 "종료" 입력)')
    if (info == null)    continue
    if (info == '종료')     break
    if (info == '')      continue
    infos = info.split(' ')
    class1.push(new Product(infos[0], infos[1], infos[2], infos[3]))
}

// 이름을 기준으로 오름차순 정렬
class1.sort(function(a, b) {
 if (a.name < b.name)    return -1
 else if (a.name > b.name)    return 1
 else return 0
})

// 반복문을 이용하여 print_info()를 호출하여 document.write에 출력
for (let c of class1) {
    document.write(`<p>${c.print_info()}</p>`)
}