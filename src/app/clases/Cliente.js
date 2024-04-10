export default class Cliente {
    constructor(cliente, Impuesto){
        this.cliente = ()=>{
            return cliente;
        };
        this._impuesto = ()=>{
            return Impuesto;
        };
    }

    get cliente(){
        return this._cliente()
    }

    set cliente(name){
        this._cliente = ()=>{
            return name;
        }
    }

    calcularImpuesto(){
        return (`El impuesto es: ${(this._impuesto()._montoBruto() - 
            this._impuesto()._deducciones()) * 0.21}`)
    }
}