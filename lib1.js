// Obtener parámetros de URL
const params = new URLSearchParams(window.location.search);
const n = params.get('n');
const d = params.get('d');

// Solo crear el gráfico si ambos parámetros existen
if (n && d) {
    class Quickchart {
        constructor(n, d) {
            this.n = n;
            this.d = d;
        }

        crearCadunos() {
            // Creamos d rebanadas iguales (1,1,1,...)
            let cad = "";
            for (let i = 0; i < this.d; i++) {
                cad += "1,";
            }
            return cad.slice(0, -1);
        }

        generarSrcImg() {
            // La fracción que se muestra es n/d
            let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
                + "&chs=500x250&chl=" + this.n + "/" + this.d;
            return url;
        }
    }

    let q = new Quickchart(n, d);
    document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
} else {
    document.getElementById("contenido").innerHTML = "<p>Por favor, agrega n y d en la URL</p>";
}
