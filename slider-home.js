(function(){

                
    const slider = document.querySelector('.slider');/* Selecciona el elemento HTML con la clase "slider" y lo almacena en la variable 'slider'.*/
            
    const images = document.querySelectorAll('.slider img');// Selecciona todos los elementos HTML con la etiqueta 'img' dentro del elemento con clase "slider" y los almacena en la variable 'images'.
    
    let currentIndex = 0;// Inicializa una variable 'currentIndex' para llevar un seguimiento del índice de la imagen actual.

    function nextSlide() { // Esta función se llama cuando se quiere pasar a la siguiente imagen en el slider.
        
        // Calcula el nuevo índice sumando 1 al índice actual y tomando el módulo del número total de imágenes.
        // Esto asegura que el índice se mantenga dentro del rango de imágenes disponibles.
        currentIndex = (currentIndex + 1) % images.length;
    
        updateSlider();  // Llama a la función 'updateSlider' para actualizar la posición del slider en la pantalla.
    }

    function updateSlider() {// Esta función actualiza la posición del slider en la pantalla.

        const translateX = -currentIndex * 100; // Calcula cuánto se debe trasladar el slider horizontalmente para mostrar la imagen actual.
        slider.style.transform = `translateX(${translateX}%)`; // Aplica una transformación CSS al elemento 'slider' para moverlo horizontalmente.
    }

    setInterval(nextSlide, 8000); // Cambia de imagen cada 8 segundos

})()