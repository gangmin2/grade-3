class User {
    constructor(id, pw) {
        this.id = id
        this.pw = pw
    }
}

let users = []
let invalids = []

let validId = (id) => {
    let regExp = /^[a-zA-Z]{5,10}$/
    return regExp.test(id)
}

let validPw = (pw) => {
    let regExp = /[a-zA-Z]+[0-9]+[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/g
    return regExp.test(pw)
}

let idPw = (id, pw) => {
    let regExp = new RegExp(id, "gi")
    return regExp.test(pw)
}


while (true) {
    let id = prompt('ID를 입력하세요(5~10자리 영문자)')
    let pw = prompt("PASSWORD를 입력하세요(8~12자리 영문자, 숫자, 특수문자 1개 이상)")

    if (validId(id)) {
        if(validPw(pw) && !(idPw(id, pw))) {
            users.push(new User(id, pw))
        } else {
            invalids.push(new User(id, pw))
        }
    } else {
        invalids.push(new User(id, pw))
    }

    if (users.length == 5)    break
}

document.write('<h1>유요한 ID, PW</h1>')
for (let user of users) {
    document.write(`<p>ID : ${user.id}, PW : ${user.pw}</p>`)
}

document.write('<h1>유요하지 않은 ID, PW</h1>')
for (let invalid of invalids) {
    document.write(`<p>ID : ${invalid.id}, PW : ${invalid.pw}</p>`)
}
