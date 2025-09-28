// lib.js (Actualizado para mostrar d rebanadas, n resaltadas, y etiquetas en cada una)

// 1. Obtener y convertir parámetros a números
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')); // Rebanadas a resaltar (ej: 2)
const d = parseInt(params.get('d')); // Rebanadas totales (ej: 5)

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
        // Colores personalizables
        this.colorResaltado = '0080FF'; // Un azul vibrante
        this.colorNormal = 'CCCCCC';   // Gris claro
    }
    
    // Genera la cadena de datos (d veces el número 1)
    generarCadenaDatos() {
        // Para d=5, devuelve: "1,1,1,1,1"
        return new Array(this.d).fill(1).join(',');
    }
    
    // Genera la cadena de colores (n resaltados, d-n normales)
    generarCadenaColores() {
        const resaltadas = new Array(this.n).fill(this.colorResaltado);
        const normales = new Array(this.d - this.n).fill(this.colorNormal);
        
        // Combina: [Color, Color, Gris, Gris, Gris]
        return resaltadas.concat(normales).join(',');
    }

    // NUEVO: Genera la cadena de etiquetas para cada rebanada
    generarCadenaEtiquetas() {
        const etiqueta = `1/${this.d}`;
        // Para d=5, devuelve: "1/5,1/5,1/5,1/5,1/5"
        return new Array(this.d).fill(etiqueta).join(',');
    }
    
    // Genera la URL completa
    generarSrcImg() {
        let url = "https://quickchart.io/chart?cht=p3"
             + "&chd=t:" + this.generarCadenaDatos()      // Datos de las rebanadas
             + "&chco=" + this.generarCadenaColores()     // Colores de las rebanadas
             + "&chs=500x250"
             + "&chl=" + this.generarCadenaEtiquetas();   // Etiquetas para CADA rebanada
             
        return url;
    }
}

// 2. Crear una instancia y renderizar
let q = new Quickchart(n, d); 
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
