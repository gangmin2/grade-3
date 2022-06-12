const repl = require('repl')

repl.start({
    prompt: "입력 때 앞에 출력할 문자열",
    eval: (command, context, filename, callback) => {
        console.log(command)
        callback()
    }
})