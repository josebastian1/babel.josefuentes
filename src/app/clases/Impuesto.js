export default class Impuesto {
    constructor(montoBruto, deducciones){
        this._montoBruto = ()=>{
            return montoBruto;
        };
        this._deducciones = ()=> {
            return deducciones;
        };
    }

    get montoBruto(){
        return this._montoBruto();
    }
    get deducciones(){
        return this._deducciones();
    }

    set montoBruto(value){
        this._montoBruto = ()=>{
            return value;
        }
    }
    set deducciones(value){
        this._deducciones = ()=>{
            return value;
        }
    }
}