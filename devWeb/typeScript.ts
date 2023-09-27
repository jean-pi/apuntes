
let myNumber: number = 1;
myNumber = 2;
let myString: string = "hola mundo";
myString = "o";

let simulaJsVanilla: any = 2;// jamas usar esto
simulaJsVanilla= "2";//lo acepta

let ArrMyString: string[] = ["hola","mundo"];
let ArrMyString2: [string,string,string] = ["hola","mundo","2"];
ArrMyString = ["o"];
let siNo: boolean = false;
let siNo2: boolean[] = [false, true, false];


class guitar{

    marca: string;
    valor: number;
    color: string;
    
    constructor(marca: string, valor: number, color: string){
        this.marca = marca;
        this.valor = valor;
        this.color = color;
    }

    getMarca(): string{
        //este get solo retorna strings
        return this.marca;
    }

    setMarca(marca: string){
        //if(el valor de entrada es texto aceptalo) // esto se haria en js
        this.marca = marca;
    }
}

    const guitarJean = new guitar("fender", 2200.00, "rojo");
    console.log(guitarJean)
    guitarJean.setMarca("gibson")
    console.log(guitarJean)
    console.log(guitarJean.getMarca)


