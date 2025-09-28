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
        // Todas las rebanadas iguales
        return Array(this.d).fill(1).join(',');
    }

    generarSrcImg() {
        // Mostrar la fracción n/d como título
        let url = "https://quickchart.io/chart?cht=p3"
            + "&chd=t:" + this.crearValores()
            + "&chs=500x250"
            + "&chl=" + Array(this.d).fill('').join('|')  // etiquetas vacías
            + "&chtt=" + encodeURIComponent(`${this.n}/${this.d}`); // título con la fracción
        return url;
    }
}

let q = new Quickchart(d, n);
document.getElementById("contenido").innerHTML =
    '<img src="' + q.generarSrcImg() + '" />';
