// lib.js
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d'));

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    crearCadunos() {
        const arr = [
            ...Array(this.n).fill(1),
            ...Array(this.d - this.n).fill(0)
        ];
        return arr.join(",");
    }

    generarSrcImg() {
        // Generamos colores: azul para llenos, gris claro para vacíos
        const colores = [
            ...Array(this.n).fill("4e79a7"), // azul
            ...Array(this.d - this.n).fill("dddddd") // gris claro
        ].join(",");

        return "https://quickchart.io/chart?cht=p&chd=t:" + this.crearCadunos()
            + "&chs=500x250"
            + "&chl=" + this.n + "/" + this.d
            + "&chco=" + colores;
    }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML =
    '<img src="' + q.generarSrcImg() + '" />';
