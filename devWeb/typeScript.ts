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






// ESTE ES TODO EL TypeScript Que piden en una entrevista tecnica (en teoria)


//LA FORMA (SHAPES) EN LA QUE ESTA ESTRUCTURADO TYPESCRIPT ------------------------------------------------------------------------------------------------------------

console.log("--------------------------------------------------------")
 class moto1 {
    cilindraje: number;
    color: string;
    constructor(cilindraje: number, color: string){
        this.cilindraje = cilindraje;
        this.color = color;
    }
 }
 class moto2 {
    cilindraje: number;
    color: string;
    constructor(cilindraje: number, color: string){
        this.cilindraje = cilindraje;
        this.color = color;
    }
 }

 let instanciaMoto1 = new moto1(150,"rojo");
 let instanciaMoto2 = new moto2(150,"rojo");
 const a: moto1 = instanciaMoto2;
 // a solo acepta clases de tipo "moto1" y le paso algo instanciado desde "moto2" , si lo acepta porque son exactamente iguales
 // lo que importa es que cumpla con los tipos de datos y el nombre de variables. cumple las reglas
// solo se fija en la forma que tiene, ya la forma es igual



// EN TYPESCRIPT TENER EN EN CUENTA
    // 1.- Que tipos valores entran
    // 2.- Que tipos valores salen
    // 3.- Que no cambien los tipos de valores

    console.log("--------------------------------------------------------")


// TIPADO SIEMPRE --------------------------------------------------------------------------------------------------------------------------------------------
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

// CLASES CON TIPADO --------------------------------------------------------------------------------------------------------------------------------------

console.log("------------------------------")
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
    let guitarJean = new guitar("fender", 2200.00, "rojo");
    console.log(guitarJean)
    const marcaGuitarJean = guitarJean.getMarca();
    console.log(marcaGuitarJean)


    class Guitar7cuerdas extends guitar {
        private tono7cuerda: string;

        constructor(tono7cuerda: string,marca: string, valor: number, color: string){
            super(marca,valor,color);
            this.tono7cuerda = tono7cuerda;
        }

        getMarca(): string {
            return super.getMarca() + ": con 7 cuerdas (este getter usa el metodo de la clase padre guitar y le agrega : con 7 cuerdas";
            // POLIMORFISMO: poder usar metodos de las clases padres, y tambien se peude modificar el comprtamiento de estos
        }
    }

    let guitarJean7Cuerdas = new Guitar7cuerdas("sol", "gibson", 1000.00, "red");
    console.log(guitarJean7Cuerdas.getMarca());
    console.log(guitarJean7Cuerdas);


    const arregloDeGuitarras: guitar[] = [guitarJean7Cuerdas, guitarJean];
    // tambien acepta "guitarJean7Cuerdas" porque es hijo de "guitar"
    console.log(arregloDeGuitarras);

    for(const guitarras of arregloDeGuitarras){
        console.log(guitarras.getMarca());
        //aqui se puede ver muy bien el polimorfismo
    }

    console.log("------------------------------")


// TYPES Y SU GRAN AYUDA -------------------------------------------------------------------------------------------------------------------------------------

type dni = string;

const tellMeMyId1 = (TheDni : dni) =>{
    return TheDni;
}
const tellMeMyId2 = (TheDni : dni) =>{
    return TheDni;
}
const tellMeMyId3 = (TheDni : dni) =>{
    return TheDni;
}
// sin Type tendria que cambiar el tipo uno por uno xd7


//union de interfaces con types

interface contrato1 {
    prop1: number,
}
interface contrato2 {
    prop2: string,
}

type contratosAceptados = contrato1 | contrato2;

const recopilacionDeContratos: contratosAceptados = {
    prop1: 1227646378,
    prop2: "162637281"
    //  " | " puede ser uno o otro o los dos, con " && " serian los dos al mismo tiempo caso contrario saldria error
}


type contratosObligatorios = contrato1 & contrato2; 

const recopilacionDeContratosObligatorios: contratosObligatorios = {
    prop1: 1227646378,
    prop2: "162637281"
    // " && " serian los dos al mismo tiempo caso contrario saldria error
}


// type, para comprobar funciones, ejemplo: tengo un metodo que requiere una funcion como parametro, pero solo quiero que sea posible pasar cierto "tipo" de funcion


type modeloFuncionSuma = (param1: number, param2: number) => number
// solo se podra pasar una funcion que acepte dos parametro y regrese un numero

const expectSuma = (sum: modeloFuncionSuma) =>{
    return sum(1,2);
}






// INTERFACES TYPESCRIPT ----------------------------------------------------------------------------------------------------------------------------------------
 
// OJO: TYPE, son parecidas a las interfaces?? usar mejor type?
// https://www.youtube.com/watch?v=Idf0zh9f3qQ&ab_channel=ByteGrad

// Las interfaces no son lo mismo que las clases
// SE PODRIA ENTENDER COMO UN CONTRATO, SERIA UN TIPO DE OBJETO QUE CREA UN MODELO PREDEFINIDO DE DATOS, SE PUEDEN HEREDAR

interface Person {
    name: string,
    age: number,
    lastName: string;
    birth?: number; // esto es opcional, el contrato es flexible aqui
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

// INTERFACES: UTILOTY TYPES: PARTIALS - REQUIRED -READ ONLY

// Esto no se usa tanso segun gentlenman programing, pero lo pueden pedir en entrevistas
// ejemplo de uso: tengo una interface(contrato) pero solo dispongo de una propiedad
// opcion 1: colocar "?" en cada variable de la interface (asqueroso)
// opcion 2:usar partial

interface persona {
    name: string,
    lastName: string,
    age: number,
    weightLb: number
}

const miPersona : persona = {
    name: "jean",
    lastName: "veliz",
    age: 30,
    weightLb: 50
}


const miPersona2 : Partial<persona> = {
    name: "jean",
    lastName: "veliz"
    // lo acepta no inporta que no cumpla el contrato 
}
const miPersona3 : Required<persona> = {
    name: "jean",
    lastName: "veliz",
    age: 30,
    weightLb: 50
    // SI O SI PIDEO TODAS LAS PROPIEDADES
}


type interfacePesonaReadOnly = Readonly<persona>; // forma correcta. ordenar en variables para reutilizar

const miPersona4 : interfacePesonaReadOnly = {
    name: "jean",
    lastName: "veliz",
    age: 30,
    weightLb: 50
    // Solo se puede leer
}
// Esto da error:  miPersona4.name("jean no puedo modificarlo")


//Existen mas (muchas) utility types pero estos son los mas relevantes

// AS CONST ----------------------------------------------------------------------------------------------------------------------------------------------------

// Sirve para retonar los valores exactos que se retornan, estos no se 
// pueden modificar, con esto ya no se pondria que tipo de datos retornara el metodo

// TIPOS GENERICOS -----------------------------------------------------------------------------------------------------------------------------------------

// que ocurre quiero  crear un metodo o componente (react) que funcione con una variedad de tipos en lugar de solo uno.

console.log("----------------------------------------------------------------------------")
function getArray<T ,U>(arr: T[] , option: U) : T[] {
    return new Array<T>().concat(arr);
}
let resultGetArray = getArray(["a"],1);
let result2GetArray = getArray<number , string>([1,2,4,1],"1"); 
console.log(resultGetArray)
console.log(result2GetArray)

function metodoGenerico<T>(data: T): T{
    return data;
}
const z = metodoGenerico<string>("lo detecta automaticamente como string");
const w = metodoGenerico<interfacePesonaReadOnly>(miPersona4); // T tambien puede ser una interface, solo acepta objetos creados en base a la interface pasada
console.log(z)


// tambien con interfaces
interface musicUserContrato<T>{
    cancionMasEscuchada : T;
} 
const musicUser: musicUserContrato<String> = {
    cancionMasEscuchada: "take it",
} 




console.log("----------------------------------------------------------------------------")












// TypeScript mas complejo, basado en el curso de gentlenman programming


// OJO CON OVERLOADING DE FUNCIONES-------------------------------------------------------------------------------------------------------------------------------
  
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


// TYPESCRIPT NO ES TAN INTELIGENTE -------------------------------------------------------------------------------------------------------------------------------

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

// RETURN TYPE --------------------------------------------------------------------------------------------------------------------------------------------------------

// Estos son tema un poco mas avanzados
// https://www.youtube.com/watch?v=OnNyP021TVw&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&index=5&t=889s&ab_channel=GentlemanProgramming
// parece que no hay contenido en español sobre esto xd
// sirve para saber lo que una funcion, metodo, elementos va a devolver 
// Ejemplo: te encuentras con una clase inmensa o un metodo inmenso, usas return type y ya










