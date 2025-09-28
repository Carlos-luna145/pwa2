// lib.js
// Ejemplo de URL: http://localhost/pwasd25/index.html?n=1&d=4

// 1. Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);

// CORRECCIÓN CLAVE: Convertir los valores a números enteros (int) 
// ya que URLSearchParams.get() devuelve strings.
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d')); 

class Quickchart {
    constructor(d) {
        // Aseguramos que 'd' es un número al ser almacenado.
        this.d = d; 
    }
    
    // Este método crea una cadena de '1,1,1,...' para el parámetro chd=t:
    crearCadunos() {
        let cadunos = "";
        // El bucle se ejecuta d-1 veces. Por ejemplo, si d=4, se ejecuta 3 veces (i=1, 2, 3).
        for(var i=1; i < this.d; i++) {
            cadunos += "1,";
        }
        
        // Quitar la última coma extra.
        cadunos = cadunos.slice(0, -1);
        return cadunos;
    }
    
    // Este método genera la URL completa para la imagen.
    generarSrcImg() {
        // La URL final será similar a: 
        // https://quickchart.io/chart?cht=p3&chd=t:1,1,1&chs=500x250&chl=1/4 (si d=4)
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
             + "&chs=500x250&chl=" + "1/" + this.d;
        return url;
    }
}

// 2. Crear una instancia de Quickchart con el valor numérico de 'd'
let q = new Quickchart(d);

// 3. Insertar la etiqueta <img> en el elemento con id="contenido"
// **Nota:** Debes tener un elemento en tu HTML con id="contenido" (ej: <div id="contenido"></div>).
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
