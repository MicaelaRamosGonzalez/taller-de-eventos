//Selecciono el elemento div para el evento // 

var div = document.getElementById("div")
// Agrego el manejador de eventos para el clic
div.addEventListener('click', function (){
    alert ("Hola soy el div");
});
// div.addEventListener lo que hace es decirle que agregue la funcion cuando el evento ocurra.En este caso la function es el mensaje "Hola soy el div"


var button = document.getElementById("saludo");

// Agrego el manejador de eventos para el clic en el botón
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Detener la propagación del evento hacia el div
});
    
    
    
    
    
    
