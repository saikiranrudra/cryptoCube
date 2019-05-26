// variable declaration
let encryptBtn = document.getElementById('encrypt');
let decryptBtn = document.getElementById('decrypt');
let view = document.querySelector('.content');
let back;

let render = (html) => {
    view.innerHTML = "";
    view.innerHTML = html;
}

let encryptHTML = "<h1 class=\"heading\">Encrypt</h1> <input type=\"text\" placeholder=\"Input\" class=\"input\"> <input type=\"text\" placeholder=\"output\" class=\"output\"> <button class=\"btn\">encrypt</button> <button class=\"btn btn__align back\" >back</button>";

let decryptHTML = "<h1 class=\"heading\">Decrypt</h1> <input type=\"text\" placeholder=\"Input\" class=\"input\"> <input type=\"text\" placeholder=\"output\" class=\"output\"> <button class=\"btn\">decrypt</button> <button class=\"btn btn__align back\" >back</button>";

let homeHTML =  "<h1 class=\"heading\">cryptoCube</h1><div class=\"btn__container\"><button class=\"btn btn__align\"id=\"encrypt\">Encrypt</button><button class=\"btn\" id=\"decrypt\">Decrypt</button></div>";


let backBtnClick = () => {
    back = document.querySelector('.back'); 
    back.addEventListener('click', () => {
        render(homeHTML);
        encryptBtnClick();
        decryptBtnClick(); 
    });
};

let encryptBtnClick = () => {
    encryptBtn = document.getElementById('encrypt');
    encryptBtn.addEventListener('click', () => {
        render(encryptHTML);
        backBtnClick();
    });
};

let decryptBtnClick = () => {
    decryptBtn = document.getElementById('decrypt');
    decryptBtn.addEventListener('click', () => {
        render(decryptHTML);
        backBtnClick();
    })
};


encryptBtnClick();