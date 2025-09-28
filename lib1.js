// lib.js
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')); // número seleccionado
const d = parseInt(params.get('d')); // total de divisiones

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }
    crearCadunos() {
        let cadunos = "";
        for (var i = 0; i < this.d; i++) {
            cadunos += "1,";
        }
        cadunos = cadunos.slice(0, -1);
        return cadunos;
    }
    generarSrcImg() {
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
            + "&chs=500x250&chl=" + this.n + "/" + this.d;
        return url;
    }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
