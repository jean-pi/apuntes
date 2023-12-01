// Que es TypeScript?
// Algo que corre como JavaScript y le agrega cosas LOS MAS IMPORTANTE EL TIPADO

// JavaScript si tiene tipado pero es dinamico, V8 que es el motor de navegadores creado por google
// y el mas usado , es el que interpreta JavaScript y este solo guarda el espacio en memoria pero con un tipado simple
// No se como explicarlo exactamente pero El motor V8 si interpreta en si un tipado para hacer optimizaciones y que todo funcione bien
// nesecita un tipado, pero este es un tipado debil.
// RESUMEN: SI TIENE TIPADO PERO ES DINAMICO, ES CAMBIANTE
// TypeScript tiene un tipado fuerte estricto

//Cuando la app este terminada, se compilara en js vanilla.

//Ayuda a detectar incendios

//TypeScript hace inferencia de tipos, si no coloco el tipo de dato, le asigna uno solo, typeScript es muy inteligente

// alt + 96 : ``



// EN TYPESCRIPT TENER MU EN CUENTA
    // 1.- Que tipos valores entran
    // 2.- Que tipos valores salen
    // 3.- Que no cambien los tipos de valores

// TIPADO SIEMPRE -------------------------------------------------------------
let myNumber: number = 1;
myNumber = 2; // solo puedo actualizarl la variable con datos "number"
let myString: string = "hola mundo";
myString = "o";
console.log(myNumber)

let simulaJsVanilla: any = 2;// jamas usar esto, acepta cualquier dato
simulaJsVanilla= "2";//lo acepta
simulaJsVanilla= 2;// lo acepta

let ArrMyString: string[] = ["hola","mundo"];
let ArrMyString2: [string,string,string] = ["hola","mundo","2"]; // solo acepta 3 valores no mas
ArrMyString2 = ["o","a","z"]; //la actualizacion solo acepta 3 valores
console.log(ArrMyString2);
let siNo: boolean = false;
let siNo2: boolean[] = [false, true, false]; //areglo solo de booleanos

// CALSES TCON TIPADO ----------------------------------------------------------------
class guitar{

    private marca: string;
    private valor: number;
    private color: string;
    //encapsulamiento: solo puedo cambiar las propiedades con setters
    
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


    class Guitar7cuerdas extends guitar {
        private tono7cuerda: string;

        constructor(tono7cuerda: string,marca: string, valor: number, color: string){
            super(marca,valor,color);
            this.tono7cuerda = tono7cuerda;
        }

        getMarca(): string {
            return super.getMarca() + " con 7 cuerdas";
            // POLIMORFISMO: poder usar metodos de las clases padres, y tambien se peude modificar el comprtamiento de estos
        }
    }

    let guitar7cuerdas = new Guitar7cuerdas("sol", "gibson", 1000.00, "red");
    console.log(guitar7cuerdas.getMarca());
    console.log(guitar7cuerdas)

// INTERFACES TYPESCRIPT --------------------------------------------------------
 
// OJO: TYPE, son parecidas a las interfaces?? usar mejor type?
// https://www.youtube.com/watch?v=Idf0zh9f3qQ&ab_channel=ByteGrad

// Las interfaces no son lo mismo que las clases
// SE PODRIA ENTENDER COMO UN CONTRATO, SERIA UN TIPO DE OBJETO QUE CREA UN MODELO PREDEFINIDO DE DATOS, SE PUEDEN HEREDAR

interface Person {
    name: string,
    age: number,
    lastName: string;
    breath: () => void;
}

// EJEMPLO: HAGO UNA PETICION A UN ENDPOINT , Y ESTA BUENO CREAR UN MODELO PREDIFINIDO DE ESA INFO
// Y A LA FUNCION QUE LE VOY A PASAR ESTA INFO DEL ENDPOINT LE PASO LA INFO BASADA EN LA INTERFACE DE ESE INFO
// SOLO LO ACEPTA SI ESTAN TODO LOS DATOS, LA INFO RECOPILADA Y EN TODOS LADOS DONDE USE ESA INFO DEL ENDPOINT VA A SER IGUAL 

// SIRVE PARA CONTROLAR QUE TODO ESTE BIEN

const persona1 : Person = {
    name: "jean pierre",
    age: 20,
    lastName: "veliz lavayen",
    breath: () => {
        console.log("persona 1 respira");
    }
}

// creo mis personas basada en mi estrutura fija de interfase :persona
// esto hace que simpre pero siempre una persona tenga las misma propiedades y metodos


function sayHi(persona: Person){
    console.log(`hola como estas? ${persona}`)
}
const sayHi1 = (persona: Person) =>{
    console.log(`hola como estas? ${persona}`)
}
// Se puede pasar como parametro que sea una interface "Person" entonces POR CONTRATO esta funcion simpre va a recibir los mimo si no ERROR

// SE PUEDE HACER EXTEND COMO LAS CLASES
interface fotballPlayer extends Person{
    // UN JUGADOR DE FOTBALL TIENE LAS PROPIEDADES DE UNA PERSONA
    numeroDeCamiseta: number;
    posicionEnLaCancha: string;
    //statistics: {
        //averageScore: number;
        //shootingAccuracy: number;
        //golesMarcados: number;
        // ESTO ESTA MAL, SI TENGO LA NECESIDAD DE CREA UNA INTERFACE CON 
        // CON UN OBJETO COMPLEJO , OSEA CON SUB OBJETOS.
        // EN ESA CASO ES UNA SEÑAL QUE SE NECESITA CREAR OTRA INTERFACE Y ESA NUEVA INTERFACE COLOCARLA COMO PROPIEDAD
    //}
    //ASI
    statistics: fotballPlayerStatistics; // AQUI ESTA BIEN
}

interface fotballPlayerStatistics {
    averageScore: number;
    shootingAccuracy: number;
    golesMarcados: number;
}


// pregunta de interview sobre interfaces

interface type1 {
    param1: string;
}
interface type2 {
    param1: string;
}

const test1: type1 = {
    param1: "texto"
}
const test2: type2 = test1;
// esto aunque a priori parezca esta mal no
// aunque son dos interfaces diferentes contienen exactamente el mismo contenido,(nombre de variable y tipo)
// las interfaces no funcionan con id, si no con estructuras definidas por tipos de datos

console.log(test1);
console.log(test2);

// NO DUPLICAR INTERFACES NI NINGUNA ESTRUTURA PORFAVOR, LO ACEPTA? SI... PERO SERIA DUPLICAR CODIGO

// AS CONST ------------------------------------------------------------------------------------------------

// Sirve para retonar los valores exactos que se retornan, estos no se 
// peuden modificar, con esto ya no se pondria que tipo de datos retornara el metodo

// TIPOS GENERICOS ---------------------------------------------------------------------------------

// que ocurre quiero  crear un metodo o componente (react) que funcione con una variedad de tipos en lugar de solo uno.

function getArray<T ,U>(arr: T[] , option: U) : T[] {
    return new Array<T>().concat(arr);
}
let resultGetArray = getArray(["a"],1);
let result2GetArray = getArray<number , string>([1,2,4,1],"1");
// puedo definir explicitamente el tipo de dato cuando llamo al metodo 
// pero no hace falta type script lo detecta solo
console.log(resultGetArray)
console.log(result2GetArray)













// OJO CON OVERLOADING DE FUNCIONES----------------------------------------------------------
  
// https://www.youtube.com/watch?v=fEwUoHZYIes&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&index=2&ab_channel=GentlemanProgramming

// Es un tema un poco mas avanzado
// const tellmeWhatYouAreHolding = (persona : VideoGamer || Police){
//     if(persona.videoGame === "algo"){
//         //algo
//     }
// }
// no colocar " || " porque al momento de aceptar dos interfaces va a 
// pasar que uno no tiene las mismas propiedades que el otro aunque las dos hederen de por ejemplo interface : "persona", ya que , 
//los dos cuentan como interface persona ya que la hederan por eso lo acepta "persona : VideoGamer || Police", 
//pero "videogamer" y "Police" tienen agregadas propiedades diferentes y esto causa conflicto y da error

function len(x: any[]): number;
function len(x: string): number;
function len(x: any): number{
    return x.length
}
// no comprendo este tema aun 
//https://www.youtube.com/watch?v=OnNyP021TVw&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&index=4&ab_channel=GentlemanProgramming
// ESTO GENTLENMAN LO USO EN EL CASO DE TRABAJAR CON DOS INTERFACES HIJAS DE UNA INTERFAZ PADRE
// PADRE: PERSONA
// HIJA: POLICE - VIDEOGAMER
// Y QUERIA OBTENER LAS PROPIEDADES DE LAS DOS INTERFACES HIJAS AL MISMO TIEMPO Y ESTRO TRAE CONFLICTO
// LO ARREGLO CON OVERLANDING DE FUNCIONES, PERO DIJO QUE ES MEJOR NO HACER ESTO
// LO OPTIMO ES TRABAJAR CON INTERFACE PADRE QUE NATURALEMENTE COMPARTEN PROPIEDADES


// TYPESCRIPT NO ES TAN INTELIGENTE ------------------------------------------------------------------------

// https://www.youtube.com/watch?v=EjHq2jXEkpU&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&index=3&ab_channel=GentlemanProgramming
//// Estos son tema un poco mas avanzados, profundiza un poco en el funcionamiento de Ts
// al poner el cursor sobre este arreglo muestra los posibles tipos de datos que devolvera
const arregloDeValores = [
    {
        numero: "1",
        label: "numero 1"
    },
    {
        numero: "2",
    }
];

// typeof quiere decir que acepta el tipo de dato que sea el arreglo "arregloDeValores", esto no esta muy bueno, es solo para el ejemplo
const metodo = (parametro: typeof arregloDeValores) =>{
    const indexArray = [1,2]; // esto hace que el typado sea dinamico
    // typeScript no entiende cuando se guardan datos en un arreglo y luego se accede a los datos desde este arreglo
    if(parametro[indexArray[0]].label){
        console.log(parametro[indexArray[0]].label)
    }
}

//ESTA ES LA SOLUCION: guardar el datos que queremos del arreglo en una variable
const metodo2 = (parametro: typeof arregloDeValores) =>{
    const indexArray = [1,2]; 
    const infoQueQuiero = parametro[indexArray[0]].label;
    if(infoQueQuiero){
        console.log(infoQueQuiero)
    }
}

// RETURN TYPE -------------------------------------------------------------------------------------

// Estos son tema un poco mas avanzados
// https://www.youtube.com/watch?v=OnNyP021TVw&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&index=5&t=889s&ab_channel=GentlemanProgramming
// parece que no hay contenido en español sobre esto xd
// sirve para saber lo que una funcion, metodo, elementos va a devolver 
// Ejemplo: te encuentras con una clase inmensa o un metodo inmenso, usas return type y ya










