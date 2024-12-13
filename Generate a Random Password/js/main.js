let pass = document.getElementById("pass");
let length = 8;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialCharacter = `~!@#$%^&()-_=+[]{}\|;:'",.<>?/</>`;
let text = upperCase + lowerCase + specialCharacter + number;

function createPassword() {
    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length) {
        password += text[Math.floor(Math.random() * text.length)];
    }
    pass.value = password;
}

let img = document.getElementById("copy");
let copy = document.getElementById("copyText");
img.addEventListener("click", function copyPass() {
    pass.select();
    document.execCommand("copy");
    copy.innerHTML = "Copied!";
    
})