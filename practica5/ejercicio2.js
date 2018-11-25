function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

function pinta(){
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        let img = new Image();
        img.src = 'imagen.jpg';
        img.onload = function(){
            contexto.drawImage(img,0,0);
            contexto.drawImage(img,700,200,250,400);
            contexto.drawImage(img,50,0,600,600,0,600,150,200);
        }
    }
}

window.addEventListener('load', init);

function init() {
    pinta();
}
