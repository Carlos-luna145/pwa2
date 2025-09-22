window.exhibirLineas = function() {
    var lienzo = document.getElementById("lienzo");
    var cd = lienzo.getContext("2d");
    var x = 0;
    while(x < 400){
        cd.beginPath();
        cd.moveTo(x, 0);
        cd.lineTo(400, 300 - x);
        cd.stroke();
        x += 10;
    }
}
