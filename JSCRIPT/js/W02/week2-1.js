let age = Number(prompt("나이를 입력하시오"))

if (!isNaN(age)) {
    console.log(`입력한 나이보다 10살 많은 ${age + 10}살입니다`)
} else {
    console.log("input error")
}