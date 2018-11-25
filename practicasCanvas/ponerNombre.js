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
    let c = cargaContextoCanvas('miCanvas');
    if(c){
        c.fillStyle = 'rgb(255,0,0)';
        c.fillRect(0,0,300,200);
        c.strokeRect(0,0,300,200);
        
        c.fillStyle = 'white';
        c.fillRect(10,60,280,130);
        c.strokeStyle = 'rgb(128,128,128)';
        c.strokeRect(10,60,280,130);

        c.font = 'bold 1.8em sans-serif';
        c.fillText('Hola, mi nombre es:',20,40);
        c.fillStyle = 'black';
        c.textAlign = 'center';
        c.font = 'bold 90px Verdana';
        c.fillText('Sojo',150,150);

    }
}