function clicar() {
    limpar();
    let txt;
    let person = prompt("POR FAVOR, ESCRIBA SU NOMBRE AQUÍ");
    if (person == null || person == "") {
        txt = "USTED NECESITA ESCRIBIR SU NOMBRE PARA EMPEZAR."
        document.getElementsByClassName("nombre")[0].innerHTML = "person"
    }
    else {
        let resp = prompt('¿Desea Responder Nuestras Preguntas?\n\n ESCRIBA CON NUMERAL:\n1- SÍ \n2- NO');
        if (resp == "1") {
            let resposta = prompt("1ª Pregunta - Complete la frase abajo:\n\nHoy mi gato peleo con mi ___!\n1- Pero\n2- Perro\n3- Pelo");

            if (resposta == "2") { document.getElementsByClassName("true")[0].innerHTML = "1ª Pregunta" }
            else { document.getElementsByClassName("false")[0].innerHTML = "1ª Pregunta" }

            let resposta2 = prompt("2ª Pregunta -  Que significa la palabra: Rojo\n\n1-Vermelho\n2- Roxo\n3- Rosa");
            if (resposta2 == "1") { document.getElementsByClassName("verdade")[0].innerHTML = "2ª Pregunta" }
            else { document.getElementsByClassName("falso")[0].innerHTML = "2ª Pregunta" }

            let resposta3 = prompt("3ª Pregunta - Que día da semana es Jueves?\n\n1- Segunda-Feira\n2- Quinta-Feira\n3-  Domingo");
            if (resposta3 == "2") { document.getElementsByClassName("si")[0].innerHTML = "3ª Pregunta" }
            else { document.getElementsByClassName("no")[0].innerHTML = "3ª Pregunta" }

            let nome = person;
            if (nome != "") { document.getElementsByClassName("nombre")[0].innerHTML = " HOLA, " + nome + " AQUÍ ESTÁ SU RESULTADO!" }
            if (resposta3) {

                txt = "MUCHAS GRACIAS POR PARTICIPAR ";
            }
        }
        else { txt = "GRACIAS!"; }
    }

    document.getElementById("clic").innerHTML = txt;
}
function limpar() {
    var pargrafos = document.getElementById('result').getElementsByTagName('p')
    for (let index = 0; index < pargrafos.length; index++) {
        const element = pargrafos[index];
        element.innerText = "";
    }
}