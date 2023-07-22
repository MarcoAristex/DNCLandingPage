var depoimento1 = window.document.getElementById("depoimento1")
var depoimento2 = window.document.getElementById("depoimento2")
var depoimento3 = window.document.getElementById("depoimento3")
var SetaDireita = window.document.getElementById("SetaDireita")
var SetaEsquerda = window.document.getElementById("SetaEsquerda")


function RolarDireita(){
    depoimento1.style="display:none"
    depoimento3.style="display:flex"
    SetaDireita.style="display:none"
    SetaEsquerda.style="display:flex"

}

function RolarEsquerda(){
    depoimento1.style="display:flex"
    depoimento3.style="display:none"
    SetaDireita.style="display:flex"
    SetaEsquerda.style="display:none"

}