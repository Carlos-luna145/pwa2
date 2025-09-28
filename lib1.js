// http://localhost/pwasd25/index.html?n=2&d=5
const params = new URLSearchParams(window.location.search);
const n = +params.get('n');  // rebanadas marcadas
const d = +params.get('d');  // total de rebanadas

class Quickchart {
    constructor(d, n) {
        this.d = d;
        this.n = n;
    }

    crearValores() {
        // Todas las rebanadas tienen valor 1
        return Array(this.d).fill(1).join(',');
    }

    crearEtiquetas() {
        // Las primeras n rebanadas muestran n/d, el resto solo /
        let etiquetas = [];
        for (let i = 0; i < this.d; i++) {
            if (i < this.n) {
                etiquetas.push(`${1}/${this.d}`);
            } else {
                etiquetas.push(''); // o '0' si quieres que aparezca
            }
        }
        return etiquetas.join('|');
    }

    generarSrcImg() {
        let url = "https://quickchart.io/chart?cht=p3"
            + "&chd=t:" + this.crearValores()
            + "&chs=500x250"
            + "&chl=" + this.crearEtiquetas();
        return url;
    }
}

let q = new Quickchart(d, n);
document.getElementById("contenido").innerHTML =
    '<img src="' + q.generarSrcImg() + '" />';
