function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

let posicionBase = 0;

function pinta(){
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        let img = new Image();
        img.src = 'correcaminos.gif';
        img.onload = function(){
            contexto.clearRect(0,0,1500,700)
            contexto.drawImage(img,posicionBase,0);
            posicionBase += 30;
            if (posicionBase > 1600)
                posicionBase = -100;

        }
    }
}

window.addEventListener('load', init);

function init() {
    setInterval(pinta, 40);
}
