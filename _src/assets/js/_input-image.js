'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

const lsUserImage = localStorage.getItem('user-image');
let requestData = {}
let userNewImage = '';

if (lsUserImage) {
    profileImage.style.backgroundImage = `url(${lsUserImage})`;
    profilePreview.style.backgroundImage = `url(${lsUserImage})`;
    userNewImage = lsUserImage;
    fileField.removeAttribute('required');
} else {
    profileImage.style.backgroundImage = `url(${defaultImage})`;
    requestData.photo = `url(${userNewImage})`;

}


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
    var myFile = e.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado
     */
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
    userNewImage = fr.result;
    if (fr.result) {
        localStorage.setItem('user-image', fr.result);
    } else {
        localStorage.removeItem('user-image');
    }
}



/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
    fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
