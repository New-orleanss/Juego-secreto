let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados =[];

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento(`p`, `Acertaste carnal en: ${intentos} ${intentos == 1 ? `intento`:`intentos`}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }
    else{
        if(numeroSecreto > numeroDeUsuario)
        {
            asignarTextoElemento(`p`,`El numero secreto es mayor`);
        }
        else
        {
            asignarTextoElemento(`p`,`El numero secreto es menor`);
        }
        intentos ++;
        limpiar();
    }
    return;
}
function limpiar()
{
    document.querySelector(`#valorUsuario`).value = "";
}

function reiniciarJuego()
{
    limpiar();
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function mensajesIniciales(){
    asignarTextoElemento(`h1`, `Adivina`)
    asignarTextoElemento(`p`,`Elige un numero de 1 a 10`);
}

