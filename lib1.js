// Obtener parámetros de URL con valores por defecto
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')) || 1; // por defecto 1
const d = parseInt(params.get('d')) || 4; // por defecto 4

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    crearCadunos() {
        let cad = "";
        for (let i = 0; i < this.d; i++) {
            cad += "1,";
        }
        return cad.slice(0, -1); // quitar la última coma
    }

    generarSrcImg() {
        // Solo mostramos la fracción n/d en las etiquetas
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
            + "&chs=500x250&chl=" + this.n + "/" + this.d;
        return url;
    }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
