document.addEventListener("DOMContentLoaded", function(){
    let imagenes = document.querySelectorAll(".imgs img")
    let galeriaImgs = document.getElementById('galeria')

    imagenes.forEach(imgs => {
        imgs.addEventListener("click", function() {
            galeriaImgs.src = this.src
        })
    })
})