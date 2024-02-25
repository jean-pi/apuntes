# functional programming

    Es un paradigma

    Son un conjunto de practicas    


    Utilizar las funciones de la mejor manera posible para crear un software limpio y mantenible


## Inmutabilidad

    Los datos de una entidad no cambian, si quiero trabajar con esos datos debo de hacer una copia(clon)
    Los datos iniciales quedanintectos, los estados de datos no cambian

    //EJEMPLO: cuando tienes una clase, puede tener tus propiedades #privadas y solo se podran modificar con un setter()
    //pero si existe un getter() que me de una informacion y luego modifico lo que me regresa el getter() igual es una forma de modificar
    //la propiedad del objeto, porque en si es la misma referencia en memoria
    //CUANDO ESCRIBA LOS getters() de una clase SIEMPRE devolver una copia: return [...proiedadAdevolver]
    //uso la inmutabilidad para escoger una unica forma de modificar mis propiedades

##### Metodos mutables e inmutables de los arreglos[]

    //El objeto Array[] define algunas operaciones MUTABLES, es decir, modifican el arreglo original al operar sobre el: 
    -push()//agrega al final del arreglo 
    -pop()//remueve el último item del arreglo y lo retorna
    -splice()// (inicio, cantidad de elementos a eliminar, elemento que se va a ubicar en su lugar) permite borrar y agregar nuevos valores
    -shift()//remueve el primer elemento y lo retorna
    -unshift()//agrega al inicio del arreglo 
    -reverse()//invierte
    -sort()//ordena
    -fill()//remplaza todo el arreglo (o algunos elementos creo) con lo que le pasemos
    //Usar estos métodos implica la existencia de side effects y posibles bugs difíciles de rastrear.


    -hacer un "push" inmutable => const newUsuarios = [...usuarios, newUser] 
    -hacer un unshift() inmutable => const newUsuarios = [newUser, ...usuarios,]
    -hacer un pop() inmutable => 
        const user = usuarios[usuarios.length - 1]; // obtencion del ultimo indice para saber que se elimino, simular el pop()
        const newUsuarios = usuarios.slice(0, usuarios.length - 1) //obtengo desde el incide 0 hasta el antepenultimo
        //slice()acepta el inicio de un array y el final, dejando afuera a los demas, aqui el ultimo se "borra"
        //slice() es inmutable por defecto, CREA UN NUEVO ARREGLO
    -hacer un shift() inmutable => 
        const user = usuarios[0]//simulo el shift() para saber el primero, el que se borrara
        let newUsuarios = usuarios.slice(1)//copio todo menos el primero
    -hacer un splice() inmutable => const newUsuarios = [...usuarios.slice(0,1), newUser, ...usuarios.slice(3)]


    //Metodos de arreglo utiles (los que regresan el arreglo modificado, ya son i mutables por defecto)
    -concat() combina uno o más arreglos y regresa un arreglo combinado. Es un método inmutable.
    -join() junta todos los elementos de un arreglo usando un separador y regresa una cadena. El separador por defecto usado para juntar es coma(,)
    -filter() El método filtró crea un nuevo arreglo con todos los elementos que satisfagan la condición mencionada en la función.
    -map()  crea un nuevo arreglo iterando a través de los elementos y aplicando la lógica que proveemos en la función como argumento
    -reduce() aplica la función reducer de cada elemento del arreglo y regresa el valor output
    -some() regresa un valor booleano (verdadero/falso) basado al menos en un elemento en el arreglo pasando la condición en la función. vamos a   ver si ahí hay algún estudiante menor de 30 años de edad.
    -find(). Este regresa el primer elemento encontrado del arreglo que satisface la condición de la función.
    - includes() determinar la presencia de un elemento en un arreglo usando el método includes(), retorna true o false
    -indexOf() Si tú quieres saber la posición  índice de un elemento arreglo. Tú puedes usar el método  indexOf() 
    -every() detecta si cada  elemento del arreglo satisface la condición pasada en la función. Vamos a encontrar si todos los estudiantes que se han suscrito al menos dos cursos.

#### Pasar por referencia

    const ciudades = {
        name:barcelona,
        habitantes: 1,000.000
    }

    const newCiudad = ciudades; // no, si modifico newCiudad tambien se modifica ciudades
    const newCiudad = {...ciudades} // copio ciudades y modifico una copia no la original
    const newCiudad = structuredClone(ciudades) // nuevo metodo de js, con {...ciudades} puede haber problemas con objetos complejos, con esta nueva forma no existen esos problemas

#### Funcion pura

1. Funcion que si recive los mismos parametros siempre va a regresar el mismo resultado, hoy, mañana y siempre.
2. Si la funcion hace cambios fuera de si mismas no es pura
3. Una funcion pura usa el concepto de inmutabilidad para coger data externa,copiarla y luego regresar la info, resultado no hizo cambios de infomacion ya establecida, creo copias de ella y regreso una infomacion nueva

>Se podria decir que la inmutabilidad usa mas espacio en memoria ya que instacia una nueva entidad