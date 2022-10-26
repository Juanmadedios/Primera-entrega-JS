class Banco {
    constructor(nombre,id,tasa12,tasa24,tasa36){
        this.nombre = nombre;
        this.id = id;
        this.tasa12 = tasa12;
        this.tasa24 = tasa24;
        this.tasa36 = tasa36;
    }
}

const bancoprovincia = new Banco('bancoprovincia',5.20,35,45);
const bancogalicia = new Banco('bancogalicia',10.25,40,50);
const bancofrances = new Banco('bancofrances',15.30,45,60);

console.log(bancoprovincia,bancogalicia,bancofrances)

let bancoSeleccionado = parseInt(prompt('Ingrea el Banco que deseas cotizar? 1.BancoProvincia - 2.BancoGalicia - 3.BancoFrances')
let escogioBanco = false

while(escogioBanco === false){
if(bancoSeleccionado === bancoprovincia.id){
escogioBanco = true
infoBancoSeleccionado = bancoprovincia
}else if(bancoSeleccionado === bancogalicia.id){
    escogioBanco = true
    infoBancoSeleccionado = bancogalicia
}else if(bancoSeleccionado === bancofrances.id){
    escogioBanco = true
    infoBancoSeleccionado = bancofrances
} else {
    bancoSeleccionado = parseInt (prompt(
        'Ingrea el Banco que deseas cotizar? 1.BancoProvincia - 2.BancoGalicia - 3.BancoFrances'
        )
    )
 }
}
console.log('Banco Seleccionado',infoBancoSeleccionado)