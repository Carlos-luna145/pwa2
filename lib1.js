// lib.js (Actualizado para mostrar d rebanadas, con n resaltadas)

// 1. Obtener y convertir parámetros a números
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n')); // Rebanadas a resaltar (ej: 4)
const d = parseInt(params.get('d')); // Rebanadas totales (ej: 7)

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
        // Definimos los colores aquí para facilitar el uso
        this.colorResaltado = '0080FF'; // Un azul vibrante
        this.colorNormal = 'CCCCCC';   // Gris claro
    }
    
    // Genera la cadena de datos (d veces el número 1)
    generarCadenaDatos() {
        // Para d=7, devuelve: "1,1,1,1,1,1,1"
        return new Array(this.d).fill(1).join(',');
    }
    
    // Genera la cadena de colores (n resaltados, d-n normales)
    generarCadenaColores() {
        const resaltadas = new Array(this.n).fill(this.colorResaltado);
        const normales = new Array(this.d - this.n).fill(this.colorNormal);
        
        // Combina: [Color, Color, Color, Color, Gris, Gris, Gris]
        return resaltadas.concat(normales).join(',');
    }
    
    // Genera la URL completa
    generarSrcImg() {
        // Ejemplo para n=4, d=7:
        // ...&chd=t:1,1,1,1,1,1,1&chco=0080FF,0080FF,0080FF,0080FF,CCCCCC,CCCCCC,CCCCCC...
        let url = "https://quickchart.io/chart?cht=p3"
             + "&chd=t:" + this.generarCadenaDatos() // Los 7 unos
             + "&chco=" + this.generarCadenaColores() // La secuencia de colores
             + "&chs=500x250"
             // Puedes dejar la etiqueta de título o usar una etiqueta vacía si no la quieres en el centro
             + "&chl=" + this.n + "/" + this.d; 
             
        return url;
    }
}

// 3. Crear una instancia y renderizar
let q = new Quickchart(n, d); 
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
