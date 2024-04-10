import Cliente from "./clases/Cliente.js"
import Impuesto from "./clases/Impuesto.js"

let impuesto1 = new Impuesto(950000, 55000)
let cliente1 = new Cliente('NPC', impuesto1)

console.log(cliente1.calcularImpuesto());
