const modal = document.getElementById('imageModal')
const modalImg = document.querySelector('.modal-image')
const closeBtn = document.querySelector('.close')
const thumbnails = document.querySelectorAll('.thumbnail')

//Bucle para que las img se muestren en el modal emergente
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        modal.style.display = "block"
        // Señala la ruta de la img a mostrar con el data-full creado
        modalImg.src = thumb.getAttribute('data-full')
        modalImg.alt = thumb.alt
    })
})

// FUNCION PARA CERRAR LA VENTANA MODAL PINCHANDO EN CUALQUIER SITIO SIN CONTENIDO
window.onclick = (event) => {
    if (event.target.classList.contains ('modal-content')){
    modal.style.display = "none"
    }
}

// FUNCION PARA CERRAR PINCHANDO A LA X
closeBtn.onclick = () => {
    modal.style.display = "none"
}



// ESTO HACE LO MISMO QUE ARRIBA

// closeBtn.addEventListener ('click', () => {
//     modal.style.display = "none"
// })