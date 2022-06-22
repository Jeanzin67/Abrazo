setTimeout(cambiarMensaje,4700)
function cambiarMensaje(){
    document.getElementById("loading-message").innerText = "Enviado!"
}
setTimeout(function (){
    alert("Recibiste un abrazo de Jean🙂")
},5000)
