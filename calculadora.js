"use strict"
function alerta(evt){
    let valor = evt.target.value;
    console.log(cajaTexto.value)
    switch(valor){
        case "c":
            cajaTexto.innerHTML = "0";
            break;
        case "=":
            cajaTexto.innerHTML = eval(cajaTexto.innerHTML);
            break;
        default:
            if(cajaTexto.innerHTML=="0"){
                cajaTexto.innerHTML = valor;
            }
            else{
                cajaTexto.innerHTML += valor;
            }
            break;
    }
}
let botones = document.getElementsByTagName("button");
let cajaTexto = document.getElementById("textoOperacion");
for(let i = 0;i<botones.length;i++){
    botones[i].onclick = alerta;
}