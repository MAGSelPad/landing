"use strict";

/**
 * Muestra un toast buscando el elemento con id "toast-interactive"
 * y añadiendo la clase `md:block` si existe.
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Asigna al botón con id "demo" un listener de click que abre
 * el vídeo de demostración en una nueva pestaña.
 * @returns {void}
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=om3n2ni8luE&list=RDom3n2ni8luE&start_radio=1", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();