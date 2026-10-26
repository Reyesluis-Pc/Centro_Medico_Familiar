// Esperar a que cargue el documento
window.addEventListener("load", function () {

    const pantallaCarga = document.getElementById("pantalla-carga");

    // Dar tiempo para mostrar la animación
    setTimeout(function () {

        pantallaCarga.classList.add("oculta");

        // Retirar la pantalla cuando termine la transición
        setTimeout(function () {
            pantallaCarga.remove();
        }, 600);

    }, 2000);

});