document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('mi-div').addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    document.getElementById('saludar-btn').addEventListener('click', function(event) {
        event.stopPropagation(); 
        alert('Hola!');
    });
});
