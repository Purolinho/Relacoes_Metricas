var res = document.getElementById("res")
var botao = document.getElementById("botao")
var controle = 0



function CalcularValores() {

    var a = document.getElementById("valorA").value
    var b = document.getElementById("valorB").value
    var c = document.getElementById("valorC").value
    
    var m = document.getElementById("valorM").value
    var n = document.getElementById("valorN").value
    
    var h = document.getElementById("valorH").value
    

    for(let i = 0; i <= 3; i++) {
    //Caso nao tenha o valor de a e tenha os valores de m e n
    if(a == "" && m != "" && n != "") {
        a = Number(m) + Number(n)
    } 
    else if(a == "" && b != "" && c != "") { //pitagoras
        a = Math.sqrt(b**2 + c**2)
    }
    else if(a == "" && c != "" && m != "") {
        a = c**2 / m
    }
    
    //Método normal para achar o h
    if(h == "" && m != "" && n != "") {
        h = Math.sqrt(m * n)
    }
    else if(h == "" && a != "" && b != "" && c != "") {
        h = (b*c) / a
    } else if(h == "" && b != "" && n != "") { //pitagoras
        h = Math.sqrt(b**2 + n**2)
    }
    
    //achar o c
    if(c == "" && a != "" && m != "") {
        c = Math.sqrt(a * m)
    }


    //achar o b
    if(b == "" && a != "" && n != "") {
        b = Math.sqrt(a * n)
    } else if(b == "" && a != "" && c != "") {
        b = Math.sqrt(a**2 - c**2)
    }   

    //achar o valor de m
    if(m == "" && a != "" && n != "") {//normalmente
        m = a - n
    } 
    else if(m == "" && c != "" && a != "") {
        m = c**2 / a
    }
    else if(m == "" && b != "" && a != "") {
        m == b**2 /a
    }
    else if(m == "" && c != "" && h != "") {
        m = Math.sqrt(c**2 + h**2) //pitagoras
    }
    else if(m == "" && n != "" && h != "") {
        m = h**2 / n
    }

    //achar o valor de n
    if(n == "" && a != "" && m != "") {
        n = a - m
    }
    else if(n == "" && b != "" && a != "") {
        n = b**2 / a
    } 

    res.innerHTML = 
    "Valor de a = " + parseFloat(a).toFixed(2) + "<br>" +
    "Valor de b = " + parseFloat(b).toFixed(2)  + "<br>" +
    "Valor de c = " + parseFloat(c).toFixed(2)  + "<br>" +
    "Valor de m = " + parseFloat(m).toFixed(2)  + "<br>" +
    "Valor de n = " + parseFloat(n).toFixed(2)  + "<br>" +
    "Valor de h = " + parseFloat(h).toFixed(2)  + "<br>"

}
    



}

botao.addEventListener("click", calcular)

function calcular() {

    CalcularValores()

}
