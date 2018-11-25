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
      
        grad=contexto.createLinearGradient(200,30,200,300);
        grad.addColorStop(1,"#a8ffff"); 
        grad.addColorStop(0.3,"#0d7dcf");
        grad.addColorStop(0,"#0030FF");
        contexto.fillStyle=grad; 
        contexto.fillRect(0,0,350,280);


        contexto.beginPath();
        contexto.fillStyle = 'white';
        contexto.font = 'normal normal 16em tf_sw';
        contexto.fillText('O₂',45,220);
      
    }
}
window.addEventListener('load', init);

function init() {
    pinta();
}
