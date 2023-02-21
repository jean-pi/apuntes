# EXEL

# Basicos exel
### Insertar tablas
    --Adaptar la celda al texto: inicio/Alineacion/Ajustar texto.
    --adactar varias celdas al texto: seleccionar varias celdas; inicio/Alineacion/ombinar y centrar.
    --Adaptar del alto de varias filas: seleccionar varias filas; clic derecho; alto de fila
    --Aplicar filtros: seleccionar los encabezados; Dtos/Ordenar y filtrar/Filtro
    --cambiar el colores de la celda segun EL DATO RESULTADO: inicio/estilos/formato condicional/ reglas para reasltar celdas

### crear tablas de esta forma no permite usar funciones ni crear elementos dinamicos

    --Para crear una TABLA FUNCIONAL Y MAS UTIL seleccionar toda la tabla con los encabezados ir a: Isertar/Tablas/Tabla; seleccionar "la tabla tiene encabezados"

### Trabajar con bastentes datos
    --Eliminar datos repetidos: datos/herramientas de datos/ quitar duplicados


[libro exel de apuntes](./Libro1.xlsx)


# Error functions

    #value! : values incompatibles
    #DIV/0! : operacion imposible no se puede divivi algo para 0
    #NAME? : cuando se usa funcion, constante o variables que es inexistente
    #N/A : no se puede hacer operaciones con valores inxistentes
    #¡REF! : se coloca una referencia que no existe, si se borra un dato o si se cambia de lugar una celda podria ocurrir esto
    ######## : el contenido no estra en la celda
    #NUM : numero muy grande
    #¡NULL! : error poco comun por lo general pasa por no escrbir bien en el parentesiside una operacion

# Functions 

### LOGICAS

    =AND() - Y : &&
    =OR() - O  : ||
    =NOT() - NO : 
    =XOR() - XO : es mas estricta que =OR si o si solo un valor puede ser TRUE
    =SWITCH() - CAMBIAR : 
    =CELL() :
    =ROW() : 

### CONDICIONALES 

    =IF() - =si() : la entiendo facil
    =IFS() - =si.conjunto() : lo mismo que un else if en javascript

### DATES
    Devuelven el dato que muestra su nombre
    =today()
    =now()
    =day()
    =month()
    =year()
    =date()
    =weekday()
    =weeknum()
    =networdays()
    =days()
    =hour()
    =minute()
    =second()

### FILTRAR

    "=filtrar(Tabla1;Tabla1[mes]=G33;"no se encontraron los datos")"7
    -Acepta un /array de datos/casilla buscadora/mensage en caso de no coincidencias/

### MATEMATICAS 

#### COUNT
    count() {cantidad de elementos}
    SOLO CUENTA CELDAS CON NUMEROS, muestra la cantidad de elementos que hay

    counta() {cantidad de elementos}
    Lo mismo que la enterios pero tambien cuenta celdas con texto

    outblank() {cantidad de elementos}
    Devuelve la cantidad de celtas vacias

    coutif() {cantidad de elementos, elento a contar}
    devuelve la cantidad de elementos que coincidan con la condicional

    coutifs() 
    igual que =countif() pero con varias condicionales

#### ROUND
    round() {celda con el dato a redondear,cantidad de nuemeros que se quiere mostrar}

#### SUM
    sum() suma

### AVERAGE(PROMEDIO)
    =average() 
    =averageif()


#### SUBTOTALES
    Lafuncion subtotal acepta
    1er parametro: el tipo de operacion a realizar, un subtotal de suma, promedio, min, max, contador etc
    2dp parametro: lista de datos

#### POTENCIA
    1er parametro: numero a elevar
    2do parametro: potencia

#### MOD (RESIDUO)
    1er parametro: divisor
    2do parametro: dividendo
    resultado: residuo

#### INT (ENTERO) Y TRUNC (TRUNCAR)
    INT: convierte un numero decimal a unto entero
    TRUNC: 1er paramtro: numero
            2do parametro: cantidad de numeros despues de la coma

#### MAX - MIN
    devuelve maximos y minumos, se pueden usar en diversas situaciones por ejemplo usarla junto a la funcion =ROUND()

## FUNCIONES DE TEXTO

#### UPPER (MINUSC)
    transforma texto en mayuscula
#### LOWER (MAYUSC)
    Transforma texto en minusculas
#### LEN (LARGO)
    devuelve el largo de una palabra (tambien cuenta los espacios)
#### TRIM (ESPACIOS)
    Elimina todos los espacios de una celda
#### MID (EXTRAE)
    corta una cadena de texto
    1er parametro: cadena de texto
    2do parametro: posicion inicial
    3er paramtro: numeros de caracteres
#### REPT (REPETIR)
    1er parametro: valor a repetir
    1do parametro: cuantas veces
#### SPLIT 
    se usa para separar cadenas de texto
    es mas comoda usar la interfaz grafica DATOS/HERRAMIENTAS DE DATOS/ TEXTO EN COLUMNAS

## FUNCIONES DE BUSQUEDA

#### INDEX (INDICE)


#### MATCH(COINCIDIR)
    Acepta una celda de busqueda y un array de datos, tipo de coincidencia  1-menor que; 0-coincidencia exacta -1-mayor que
    Devolvera la ubicacion de la busqueda

#### EXACT

#### VLOOKUP

#### HLOOKUP

#### XLOOLUP
