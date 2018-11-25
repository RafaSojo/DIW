function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

window.onload = function () {
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {

        let img = new Image();
        img.src = 'imagen.jpg';
        img.onload = function(){
            contexto.drawImage(img,0,0);
            contexto.drawImage(img,500,200,250,400);
            contexto.drawImage(img,300,0,100,239,0,360,300,239);
            contexto.drawImage(img,200,0,370,200,0,600,370,200);
        }

        // contexto.fill();



    }
}