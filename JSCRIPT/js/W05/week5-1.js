function Info (studentId, name, grade, major) {
    this.studentId = studentId
    this.name = name
    this.grade = grade
    this.major = major
    this.print_name = function() {
        document.write(`학번 : ${this.studentId}, 이름 : ${this.name}<br>`)
    }
    this.print_info = function() {
        document.write(`이름 : ${this.name}, 학과 : ${this.major}, 학년 : ${this.grade}<br>`)
    }
}

let stddata = []

while (true) {
    info = prompt('학번, 이름, 학년, 학과를 입력하세요')
    if (info === null)    break;
    infos = info.split(', ')
    stddata.push(new Info(infos[0], infos[1], infos[2], infos[3]))
}

console.log(stddata)

for (let data of stddata) {
    data.print_name()
    data.print_info()
    document.write('<br>')
}