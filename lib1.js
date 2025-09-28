// lib.js (Actualizado)

// Usamos n y d
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')); // Parte coloreada (ej: 4)
const d = parseInt(params.get('d')); // Total (ej: 8)

class Quickchart {
    constructor(n, d) { // El constructor debe aceptar ambos parámetros
        this.n = n;
        this.d = d;
    }
    
    // Este método genera la cadena de datos (parte, restante)
    generarDatosFraccion() {
        // Ejemplo: Si n=4 y d=8, devuelve "4,4"
        const restante = this.d - this.n;
        return `${this.n},${restante}`;
    }
    
    // Este método genera la URL completa para la imagen.
    generarSrcImg() {
        // Usamos la cadena de datos correcta: n, d-n
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.generarDatosFraccion()
             // Cambié la etiqueta para que muestre n/d
             + "&chs=500x250&chl=" + this.n + "/" + this.d; 
        return url;
    }
}

// 3. Crear una instancia usando ambos valores: n y d
let q = new Quickchart(n, d); 
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
