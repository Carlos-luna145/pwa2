// lib.js (FINAL - Muestra 'd' rebanadas totales con 'n' resaltadas)

// 1. Obtener y convertir parámetros a números
const params = new URLSearchParams(window.location.search);

// CORRECCIÓN: Convertir a entero (parseInt) inmediatamente para evitar errores con strings o NaN.
const n = parseInt(params.get('n')); // Rebanadas a resaltar (ej: 2)
const d = parseInt(params.get('d')); // Rebanadas totales (ej: 5)

class Quickchart {
    // El constructor ahora recibe ambos parámetros, n y d
    constructor(n, d) {
        this.n = n;
        this.d = d;
        // Definimos los colores aquí para facilitar el uso
        this.colorResaltado = '0080FF'; // Azul
        this.colorNormal = 'CCCCCC';   // Gris (para las no resaltadas)
    }
    
    // Genera la cadena de datos: 'd' veces el número 1. 
    // Esto crea 'd' rebanadas de igual tamaño.
    generarCadenaDatos() {
        // Ejemplo: Si d=5, devuelve: "1,1,1,1,1"
        // new Array(this.d).fill(1) crea [1, 1, 1, 1, 1] y luego join(',') lo convierte a string.
        return new Array(this.d).fill(1).join(',');
    }
    
    // Genera la cadena de colores: 'n' colores resaltados seguidos de 'd-n' colores normales.
    generarCadenaColores() {
        // [Azul, Azul]
        const resaltadas = new Array(this.n).fill(this.colorResaltado);
        // [Gris, Gris, Gris]
        const normales = new Array(this.d - this.n).fill(this.colorNormal);
        
        // Combina: [Azul, Azul, Gris, Gris, Gris]
        return resaltadas.concat(normales).join(',');
    }

    // Genera la cadena de etiquetas '1/d' para cada rebanada.
    generarCadenaEtiquetas() {
        const etiqueta = `1/${this.d}`;
        // Usa '|' como separador para QuickChart
        return new Array(this.d).fill(etiqueta).join('|');
    }
    
    // Este método genera la URL completa de QuickChart.
    generarSrcImg() {
        // cht=p3 (Pie Chart 3D)
        // chd=t: (Datos de las rebanadas: 1,1,1...)
        // chco= (Colores: Azul,Gris...)
        // chs= (Tamaño)
        // chl= (Etiquetas en cada rebanada)
        let url = "https://quickchart.io/chart?cht=p3"
             + "&chd=t:" + this.generarCadenaDatos()     
             + "&chco=" + this.generarCadenaColores()   
             + "&chs=500x250"
             + "&chl=" + this.generarCadenaEtiquetas(); 
             
        return url;
    }
}

// 2. Crear una instancia y renderizar
// Se llama al constructor con los valores n y d
let q = new Quickchart(n, d); 

// Esto inyecta la etiqueta <img> en tu HTML.
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';

// NOTA sobre tu comentario:
// El comentario '// "<h1>Adios</h1>";' NO HACE NADA, es solo una línea de texto inactiva. 
// Para que algo haga efecto, debe ser código que se ejecute (como document.getElementById...).
