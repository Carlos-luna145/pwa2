
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d'));

class Quickchart {
  constructor(n, d) {
    this.n = n;
    this.d = d;
  }

  crearCadunos() {
    // n unos, d-n ceros
    const arr = [
      ...Array(this.n).fill(1),
      ...Array(this.d - this.n).fill(0)
    ];
    return arr.join(",");
  }

  generarSrcImg() {
    let url = "https://quickchart.io/chart?cht=p3"
      + "&chd=t:" + this.crearCadunos()
      + "&chs=500x250"
      + "&chl=" + this.n + "/" + this.d;
    return url;
  }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML =
  '<img src="' + q.generarSrcImg() + '" />';
</script>

