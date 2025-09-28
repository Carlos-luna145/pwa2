// lib.js
// ejemplo: index.html?n=2&d=5

const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')); // numerador
const d = parseInt(params.get('d')); // denominador

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    crearCadunos() {
        // genera n unos y (d - n) ceros
        const arr = [
            ...Array(this.n).fill(1),
            ...Array(this.d - this.n).fill(0)
        ];
        return arr.join(",");
    }

    generarSrcImg() {
        return "https://quickchart.io/chart?cht=p3"
            + "&chd=t:" + this.crearCadunos()
            + "&chs=500x250"
            + "&chl=" + this.n + "/" + this.d;
    }
}

// crear objeto con n y d desde la URL
let q = new Quickchart(n, d);

// mostrar gráfico dentro de un div con id="contenido"
document.getElementById("contenido").innerHTML =
    '<img src="' + q.generarSrcImg() + '" />';
