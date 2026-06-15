"use strict";

/**
 * Obtiene categorías desde una URL y parsea la respuesta como XML.
 *
 * @async
 * @function fetchCategories
 * @param {string} url - URL del endpoint desde el cual obtener las categorías.
 * @returns {Promise<{success: boolean, body: Document|string}>} Objeto con `success: true` y un `Document` XML en `body` en caso de éxito; en caso de error `success: false` y un mensaje de error (string) en `body`.
 */
let fetchCategories = async (url) => {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        let text = await response.text()

        const parser = new DOMParser();
        const data = parser.parseFromString(text, "application/xml");

        return {
            success: true,
            body: data
        };

    } catch (error) {

        return {
            success: false,
            body: error.message
        };

    }
}

/**
 * Obtiene productos desde una URL y parsea la respuesta como JSON.
 *
 * @function fetchProducts
 * @param {string} url - URL del endpoint desde el cual obtener los productos.
 * @returns {Promise<{success: boolean, body: any}>} Promesa que resuelve con un objeto con `success: true` y el JSON parseado en `body` en caso de éxito; en caso de error `success: false` y un mensaje de error (string) en `body`.
 */
let fetchProducts = (url) => {

    return fetch(url)
        .then(response => {

            // Verificar si la respuesta no es exitosa
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            // Respuesta exitosa
            return {
                success: true,
                body: data
            };

        })
        .catch(error => {

            // Error en la solicitud
            return {
                success: false,
                body: error.message
            };

        });
}





export { fetchCategories, fetchProducts }