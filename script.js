function login() {
    const id = document.getElementById("username").value;
    const pw = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (id === "admin" && pw === "1234") {
        message.style.color = "green";
        message.textContent = "로그인 성공!";
    } else {
        message.style.color = "red";
        message.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
    }
}
