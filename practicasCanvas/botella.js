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
    let c = cargaContextoCanvas('miCanvas');
    if (c) {
        c.fillStyle = 'gray';
        let lineGrad = c.createLinearGradient(150, 81, 150, 268);
        lineGrad.addColorStop(0, '#fff');
        lineGrad.addColorStop(0.05, '#450c0c');
        lineGrad.addColorStop(0.6, '#874040');
        lineGrad.addColorStop(1, 'rgba(202, 147, 147, 0.6)');
        c.fillStyle = lineGrad;
        c.fill();

        c.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        c.lineWidth = 2;
        let radGrad = c.createRadialGradient(116, 107, 1, 120, 110, 10);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(0.9, 'rgba(255, 255, 255, 0)');
        c.fillStyle = radGrad;
        c.beginPath();
        c.arc(120, 110, 10, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
        radGrad = c.createRadialGradient(164, 140, 1, 168, 143, 8);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(0.9, 'rgba(255, 255, 255, 0)');
        c.fillStyle = radGrad;
        c.beginPath();
        c.arc(168, 143, 8, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
        radGrad = c.createRadialGradient(127, 185, 1, 130, 188, 6);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(0.9, 'rgba(255, 255, 255, 0)');
        c.fillStyle = radGrad;
        c.beginPath();
        c.arc(130, 188, 6, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();


    }
}