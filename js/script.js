const contrasenaEl = document.getElementById('contrasena');
const copiarEl = document.getElementById('copiar');
const longitudEl = document.getElementById('longitud');
const mayusculaEl = document.getElementById('mayuscula');
const minusculaEl = document.getElementById('minuscula');
const numeroEl = document.getElementById('numero');
const especialEl = document.getElementById('especial');
const generarContrasenaEl = document.getElementById('generarContrasena');

const letrasMayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnñopqrstuvwxyz';
const numeros = '0123456789';
const especiales = '!@_-."#$%&/()=?¡+*';

function getMayusculas() {
    return letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
}

function getMinusculas() {
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

function getNumeros() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getEspeciales() {
    return especiales[Math.floor(Math.random() * especiales.length)];
}

function generarContrasena() {
    const longitudContrasena = longitudEl.value;
    let contrasena = '';

    if (mayusculaEl.checked) {
        contrasena += getMayusculas();
    }

    if (minusculaEl.checked) {
        contrasena += getMinusculas();
    }

    if (numeroEl.checked) {
        contrasena += getNumeros();
    }

    if (especialEl.checked) {
        contrasena += getEspeciales();
    }

    for (let i = contrasena.length; i < longitudContrasena; i++) {
        const x = generarCombinacion();
        contrasena += x;
    }

    contrasenaEl.innerText = contrasena;
}

function generarCombinacion() {
    const xs = [];

    if (mayusculaEl.checked) {
        xs.push(getMayusculas());
    }

    if (minusculaEl.checked) {
        xs.push(getMinusculas());
    }

    if (numeroEl.checked) {
        xs.push(getNumeros());
    }

    if (especialEl.checked) {
        xs.push(getEspeciales());
    }

    if (xs.length === 0) return '';

    return xs[Math.floor(Math.random() * xs.length)];
}

generarContrasenaEl.addEventListener('click', generarContrasena);

copiarEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const contrasena = contrasenaEl.innerText;

    if (!contrasena) { return; }

    textarea.value = contrasena;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Contraseña copiada en el portapapeles');
});