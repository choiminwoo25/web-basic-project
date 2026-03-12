const id = localStorage.getItem('id');
document.getElementById('welcomeMsg').textContent = `${id}님 환영합니다!`;