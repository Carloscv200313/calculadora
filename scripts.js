function escribir(numero){
    valor=document.getElementById("pantalla").value
    if (valor=="0"){
        document.getElementById("pantalla").value=""
        document.getElementById("pantalla").value+= numero
    }
    else{
        document.getElementById("pantalla").value+= numero
    }
}
function calcular(){
    document.getElementById("pantalla").value= eval(document.getElementById("pantalla").value)
}