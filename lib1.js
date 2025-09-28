// http://localhost/pwasd25/index.html?n=1&d=4
const params = new URLSearchParams(window.location.search);
const n = +params.get('n');  // rebanadas destacadas
const d = +params.get('d');  // total de rebanadas

class Quickchart {
    constructor(d, n) {
        this.d = d;
        this.n = n;
    }
    crearCadunos() {
        let cadunos = "";
        for (let i = 0; i < this.d; i++) {
            if (i < this.n) {
                cadunos += "2,"; // rebanada marcada
            } else {
                cadunos += "1,"; // rebanada normal
            }
        }
        return cadunos.slice(0, -1);
    }
    generarSrcImg() {
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
            + "&chs=500x250&chl=" + this.n + "/" + this.d;
        return url;
    }
}

let q = new Quickchart(d, n);
document.getElementById("contenido").innerHTML =
    '<img src="' + q.generarSrcImg() + '" />';
