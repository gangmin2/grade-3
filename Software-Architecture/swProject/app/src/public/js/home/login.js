const login = () => {
    const req = {
        id: id.value,
        pw: pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/registration"
        } else {
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    })
};

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", login);