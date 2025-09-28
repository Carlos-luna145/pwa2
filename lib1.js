// Obtener parámetros de URL
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')); // número de porciones resaltadas
const d = parseInt(params.get('d')); // total de porciones

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    // Crear datos para Quickchart
    crearCadunos() {
        // La idea: n porciones resaltadas y d-n normales
        let cad = Array(this.n).fill(1); // porciones resaltadas
        cad = cad.concat(Array(this.d - this.n).fill(0)); // resto
        return cad.join(',');
    }

    generarSrcImg() {
        // Usamos "chco" para dar color a las porciones: rojo para resaltadas, gris para las demás
        let colors = Array(this.n).fill("ff0000").concat(Array(this.d - this.n).fill("cccccc")).join('|');

        let url = "https://quickchart.io/chart?cht=p&chd=t:" + this.crearCadunos() +
                  "&chs=500x250&chl=" + this.n + "/" + this.d +
                  "&chco=" + colors;
        return url;
    }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
