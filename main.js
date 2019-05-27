// variable declaration
let encryptBtn = document.getElementById('encrypt');
let decryptBtn = document.getElementById('decrypt');
let view = document.querySelector('.content');
let back, encrypt, decrypt;
let input, output, key, keyValue;
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
            cubes = createCube(input.value, '');
            //d. rotate cubes()
            //e. get the key
            keyValue = rotateCube(cubes);
            //f. access output and key and display it
            output = document.querySelector('.output');
            key = document.querySelector('.key');
            output.value = cubes;
            key.value = keyValue;
        });
        
        backBtnClick();
    });
};

let decryptBtnClick = () => {
    decryptBtn = document.getElementById('decrypt');
    decryptBtn.addEventListener('click', () => {
        render(decryptHTML);
        decrypt = document.querySelector('.decrypt');
        
        decrypt.addEventListener('click', () => {
            input = document.querySelector('.input').value;
            output = document.querySelector('.output');
            keyValue = document.querySelector('.key').value;
            cubes = createCube(input, ',');
            keyValue = keyValue.split(',');
            deRotateCube(cubes, keyValue);
            value = [];
            cubes.forEach((cube) => {
                value = value.concat(cube);
            });
            output.value = value.join('');  
        });

        backBtnClick();
    });
};

function createCube(value, delemeter) {
    let array = value.split(delemeter);
    let cube = Array();
    // calculate no of cube can be formed
    let noOfCubes = Math.ceil(array.length/8);
    // slice parts of size 8s
    // store in cube
    for(let count = 0; count < noOfCubes; count++) {

        if( (count+1)*8 < array.length)  {
            cube.push(array.slice(count*8, ((count+1)*8)));
        } else {
            cube.push(array.slice(count*8, (array.length)));
            for(let k = array.length - (count*8); k < 8 ; k++) {
                cube[(noOfCubes-1)][k]=' '; 
            }
        }
    }
    
    return cube;
}

function rotate (cube, direction) {
    let temp = [...cube];

    if (direction == 1) { //rotate right    
        cube[0] = temp[4];
        cube[1] = temp[0];
        cube[2] = temp[3];
        cube[3] = temp[7];
        cube[4] = temp[5];
        cube[5] = temp[1];
        cube[6] = temp[2];
        cube[7] = temp[6];
    }
        
    if (direction == 2) { //rotate left
        cube[0] = temp[1];
        cube[1] = temp[5];
        cube[2] = temp[6];
        cube[3] = temp[2];
        cube[4] = temp[0];
        cube[5] = temp[4];
        cube[6] = temp[7];
        cube[7] = temp[3];
        
    }

    if (direction == 3) { //rotate top
        cube[0] = temp[4];
        cube[1] = temp[5];
        cube[2] = temp[1];
        cube[3] = temp[0];
        cube[4] = temp[7];
        cube[5] = temp[6];
        cube[6] = temp[2];
        cube[7] = temp[3];
    }

    if (direction == 4) { //rotate down
        cube[0] = temp[3];
        cube[1] = temp[2];
        cube[2] = temp[6];
        cube[3] = temp[7];
        cube[4] = temp[0];
        cube[5] = temp[1];
        cube[6] = temp[5];
        cube[7] = temp[4];
        
    }

} 

function rotateCube(Cubes) {
    let key = [];
    let random;
    //randomly rotate cubes and store rotation in key
    Cubes.forEach((cube) => {
        random = Math.floor(1 + Math.random()*4);
        key.push(random);
        rotate(cube, random);
    });

    // return key

    return key;

}

function deRotateCube(Cubes, direction) {
    let reverse;
    
    Cubes.forEach((cube, counter) => {
        if(direction[counter] == 1) {
            rotate(cube, 2);
        } 

        if(direction[counter] == 2) {
            rotate(cube, 1);
        } 

        
        if(direction[counter] == 3) {
            rotate(cube, 4);
        } 

        
        if(direction[counter] == 4) {
            rotate(cube, 3);
        } 
    });
}

encryptBtnClick();
decryptBtnClick();