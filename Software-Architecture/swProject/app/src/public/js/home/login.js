const login = () => {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    console.log(req);
};

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", login);