
function clicar() {
    let txt;
    let person = prompt("Por favor, escriba su nombre aquí");
    if (person == null || person == "") {
    txt = " Usted necesita escribir su nombre para empezar.";
    }
    else {
    let resp = prompt('Desea responder nuestras preguntas?    1-si   2- no');
    if (resp == "1") {
    let resposta = prompt ("1ª Pregunta - Complete la frase abajo:       Hoy mi gato peleo con mi ___!                    1- Pero    2- Perro   3- Pelo");
    if (resposta == "2"){
        document.getElementsByClassName ("true")[0].innerHTML = "1ª Pregunta"
    }
    else{
        document.getElementsByClassName ("false")[0].innerHTML = "1ª Pregunta"
    }

    let resposta2 = prompt ("2ª Pregunta -  Que significa la palabra: Rojo      1-Vermelho   2- Roxo   3- Rosa");
    if (resposta2 == "1"){
        document.getElementsByClassName ("verdade")[0].innerHTML = "2ª Pregunta"
    }
    else{
        document.getElementsByClassName ("falso")[0].innerHTML = "2ª Pregunta"
    }

    let resposta3 = prompt ("3ª Pregunta - Que día da semana es Jueves?     1- Segunda-Feira    2- Quinta-Feira  3-  Domingo");
    if (resposta3 == "2"){
        document.getElementsByClassName ("si")[0].innerHTML = "3ª Pregunta"
    }
    else{
        document.getElementsByClassName ("no")[0].innerHTML = "3ª Pregunta"
    }
} 
    else {
        txt = "Gracias!";
    }
}
    
    document.getElementById("clic").innerHTML = txt;
}
