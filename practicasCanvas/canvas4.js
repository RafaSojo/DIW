function cargaContextoCanvas(idCanvas){
    let elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if(contexto)
            return contexto;
    }
    return false;
}

window.onload = function(){
    let contexto = cargaContextoCanvas('miCanvas');
    if(contexto){
        contexto.fillStyle = "#FF0033";
        contexto.beginPath();
        contexto.moveTo(50,5);
        contexto.lineTo(75,65);
        contexto.lineTo(50,125);
        contexto.lineTo(50,65);
        contexto.fill()
    }
}