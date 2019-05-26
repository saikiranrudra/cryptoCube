// variable declaration
let encryptBtn = document.getElementById('encrypt');
let decryptBtn = document.getElementById('decrypt');
let view = document.querySelector('.content');
let back, encrypt, decrypt;
let input, output, key;
let cubes;
let render = (html) => {
    view.innerHTML = "";
    view.innerHTML = html;
}

let encryptHTML = "<h1 class=\"heading\">Encrypt</h1> <div class=\"input__container\"> <input type=\"text\" placeholder=\"Input\" class=\"input\"> <input type=\"text\" placeholder=\"output\" class=\"output\"> <input type=\"text\" placeholder=\"Key\" class=\"key\"> </div> <div class=\"button__container\"> <button class=\"btn encrypt\">Encrypt</button> <button class=\"btn btn__align back\" >back</button> </div>";

let decryptHTML = "<h1 class=\"heading\">Decrypt</h1> <div class=\"input__container\"> <input type=\"text\" placeholder=\"Input\" class=\"input\"> <input type=\"text\" placeholder=\"output\" class=\"output\"> <input type=\"text\" placeholder=\"Key\" class=\"key\"> </div> <div class=\"button__container\"> <button class=\"btn decrypt\">decrypt</button> <button class=\"btn btn__align back\" >back</button> </div>";

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
        //encrypt btn click event listner
        encrypt = document.querySelector('.encrypt');
        encrypt.addEventListener('click', () => {
            //a. select input class
            input = document.querySelector('.input');
            //b. take input value
            //c. create cubes()
            cubes = createCube(input.value);
            //d. rotate cubes()
            //e. access output and key and display it

        });
        

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
function createCube(value) {
    let array = value.split('');
    let cube = Array();
    // calculate no of cube can be formed
    let noOfCubes = Math.ceil(array.length/8);
    // slice parts of size 8
    // store in cube
    //need to edit 8 parts cubes are not creating
    for(let count = 0; count < noOfCubes; count++) {

        if( (count+1)*8 < array.length)  {
            cube.push(array.slice(count*8, ((count+1)*8)));
        } else {
            cube.push(array.slice(count*8, (array.length)));
        }
    }
    
    return cube;
}
encryptBtnClick();
