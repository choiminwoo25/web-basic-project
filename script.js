function login() {
    // 1️⃣ 입력값 가져오기
    const id = document.getElementById("username").value;
    const pw = document.getElementById("password").value;

    // 2️⃣ 메시지 영역 가져오기
    const message = document.getElementById("message");

    // 3️⃣ 로그인 박스 가져오기 (애니메이션용)
    const box = document.querySelector(".login-container");

    // 4️⃣ 조건 확인
    if (id === "asdf" && pw === "1234") {
        message.style.color = "green";
        message.textContent = "로그인 성공!";

        // 🔥 성공 애니메이션
        box.style.animation = "none";
        void box.offsetWidth;  // 애니메이션 초기화
        box.style.animation = "bounce 0.5s";

        //메인화면으로 넘어가기 
        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
    }
}
