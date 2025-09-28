const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d'));

class Quickchart {
  constructor(d) {
    this.d = d;
  }

  crearCadunos() {
    let cadunos = "";
    for (let i = 1; i < this.d; i++) {
      cadunos += "1,";
    }
    cadunos += "1"; // agrega el último sin coma
    return cadunos;
  }

  generarSrcImg() {
    let url = "https://quickchart.io/chart?cht=p3&chd=t:" 
      + this.crearCadunos() 
      + "&chs=500x250&chl=" 
      + "1/" + this.d;
    return url;
  }
}

let q = new Quickchart(d);
document.getElementById("contenido").innerHTML = 
  '<img src="' + q.generarSrcImg() + '" />';
