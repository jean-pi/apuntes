# EXEL

# Basicos exel
### Insertar tablas
    --Adaptar la celda al texto: inicio/Alineacion/Ajustar texto.
    --Adaptar la celda al texto: inicio/Celdas/Formato/ Auto ajustar ancho de columna.
    --adactar varias celdas al texto: seleccionar varias celdas; inicio/Alineacion/ombinar y centrar.
    --Adaptar del alto de varias filas: seleccionar varias filas; clic derecho; alto de fila
    --Aplicar filtros: seleccionar los encabezados; Datos/Ordenar y filtrar/Filtro
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


El soporte técnico informático es un servicio que se encarga de darle al cliente un soporte por diferentes medios para buscar una solución al problema del mismo, ya sean físicas (hardware) o lógicas (software) de cualquier tipo de dispositivo electrónico. El personal debe estar especializado para así poder dar un servicio de calidad a los clientes, por un lado aportan un apoyo técnico a los clientes, pero también ayudan a resolver problemas específicos en los diferentes dispositivos.

Un técnico informático no solo trabaja cuando algo grave como un ciberataque ocurre, sino que también tiene una serie de trabajos diarios que debe realizar para que todos los dispositivos informáticos en la empresa funcionen a la perfección. Entre ellos podemos destacar comprobación de puntos vulnerables en la seguridad de los sistemas, instalación de sistemas operativos, verificación del funcionamiento de software y hardware, copias de seguridad de bases de datos, actualización de sistemas, configuración e instalación de redes internas y externas.


# tabla dinamicas

    CREAR LA TABLA (NO DINAMICA)
    1. inicio/ estilos /dar formato de tabla
    2. seleccionar la tabla y aceptar en "la tabla tiene emcabezados"
    3. si quiero cambiar el nombre de la tabla- Diseño/ propiedades/ nombre de la tabla 

### limpiar datos

    ELIMINAR CELDAS EN BLANCO
    1. seleccionar toda la tabla
    2. inicio/edicion/buscar y seleccionar/ ir a especial/ celdas en blanco
    3. no dar Suprimir
    4. ir a inicio/ celdas/ eliminar filas de la hoja


    DE FECHAS SIN FORMATO A FECHA CON FORMATO
    1. crear una columna al lado de toda las fechas
    2. usar la funcion =FECHANUMERO() y selecionar la fechas
    3. copiar los datos de la nueva columna y colocarlos en la columna original para perder la funcion FECHANUMERO
    4. eliminar la columna nueva


    ELIMINAR ESPACIOS DE LAS CELDAS
    1. los mismos paso que la anterior pero con la funcion =ESPACIOS()

    PASAR NUMEROS A FORMATO NUMERO
    se pueden ver numeros pero puede que no esten en formato numero
    1. los mismos pasos que la anterio pero con la funcion =VALOR()

    PASAR PRECIOS A TIPO DE DATO "CONTABILIDAD"??

    AGREGAR FILA DE TOTALES A FINAL DE LA TABLA
    1. Diseño de tabla/ Opciones de estilo de tabla/ fila de totales
    2. hacer clip en la celda y se peude elegir que tipo de total quiero: suma,promedio, max,mix, etc.
    3. Si filtro los datos con los encabezados de la tabla se actualizan los totales DEMASIADO UTIL ESTO


### comenzar a trabajar con tablas dinamicas

    Para iniciar nesesito un origen de datos , esta puede ser de una fuente externa o una hoja de exel con una tabla de datos

    CREAR LA TABLA (DINAMICA)---------------------------------------------
    1. Insertar/ tablas/ tabla dinamica
    2. seleccionar si la quiero en lamisma hoja o una aparte

    Crar paginas separadas para cada filtro------------------------------------
    poder mostar una pagina por cada provincia en las que hubo ventas
    Analizar tabla dinamica/ tabla dinamica/ Opciones/ mostar paginas de filtros de informe 

    Crear graficos de la info-------------------------------------
    Analizar tabla dinamica/ Herramientas/Grafico dinamico

    Crear filtros con botones cuadrito con las opciones-------------------------------
    segmentacion de datos
    Analizar tabla dinamica/ insertar/segmentacion de datos

    Segmentacion de datos con dos tablas dinamicas con varias tablas conectadas-------------------------------
    Segmentacion/ segmentacion de datos/ conexiones de informe/Conexiones de informes

    Insertar una escala de tiempo-----------------------------------------
    Analizar tabla dinamica/ insertar/insertar escala de tiempo

    Agregar dos capos en fila----------------------------------------
    Al colocar dos campos en filas se ve medio raro ,
    ir a Diseño/Diseño/Diseño de informe/ Mostrar en formato esquema
    ir a Diseño/Diseño/Diseño de informe/ Repetir todas las etiquetas
    , con esto se visualiza mejor

    Modificar subtotales---------------------------------
    Diseño/ Diseño/ Subtotales
    Puedo colocar un subtotal por cada elemento y modificar los totales generales y demas

    Seleccionar muchos datos especificos---------------------------
    Querer seleccionar todos los totales para cambiarles el color , o solo quiero seleccionar ciertas columnas o filas.
    ir a Analizar/ Acciones/ Seleccionar/ habilitar edicion = esto mostrara una flecha en las celdas y si se hace clic se seleccionara todas las celdas iguales
     ir a Analizar/ Acciones/ Seleccionar/ toda la tabla = luego de esto ir otra vez a las mismas opciones

    Mover una tabla dinamica-----------------------------
    Analizar tabla dinamica/ Acciones/ mover tabla dinamica

 
## Ordenar campos de tablas dinamicas

    Ordenar de mayor a menor-------------------
    Seleccionar el campo a ordenar , clic/ ordenar/ de mayor a menor

    Se puede ordenar con un orden personalizado, eligiendo campos con el clic y soltandolos ----------------------------

    Se puede ordenar por fechas- meses - trimestres - anual --------------------

    Agrupar por varios grupos personalizados--------------------------
    Ctrl / clic sobre los integrantes del grupo/ clic derecho / agrupar

    Crear una tabla nueva con detalles especificos-----------------------
    Hcer dos clic sobre la info que quiero ver a detalles


## Hacer calculos con tablas dinamicas

    Cambiar del formato: numero, moneda, contabilidad, -----------------------
    1-ir a los 4 cuadritos de "campos de la tabla dinamica"
    2-Hacer clic sobre un campo
    3-Comfiguracion de campo de valor
    4-esquina inferior izquierda "formato de numero"

    Cambiar el mensage de error de posibles errores---------------------------------------------
     aveces no es que haya un error si no que hay errores por falta de datos o no coincide algo y se ve feo el "ERROR===000!"
    1-analizar tabla dinamica
    2-tabla dinamica
    3-opciones
    4-para valores erroneos motrar
    5-colocar "---" o lo que sea


    Crear un campo calculado------------------------------
    nesesino mostrar un calculo pero el calculo no viene echo desde los datos de origen asi que: 
    1.creo el campo con el calculo desde la fuente de datos esto va a hacer que este en el origen y en la tabla dinamica
    2. Creo el calculo directamente en la tabla dinamica sin modificar la fuente de datos:
    Analizar tabla dinamica/Calculos/ Campos elementos y conjuntos/ campo calculado
    --aqui puedo sacar funciones, y calculos simples


    Hacer una comparacion de ganancias con el mes anterior--------------------------------
    investigar

## Demas

    Relcacionar varias tablas dinamicas------------------------------
    investigar

    Crear una tabla dinamica con un grafico automaticamento solo con una simple tabla------------------------
    Inicio / Analisis / Analisis de datos / 
    Se mostraran varios graficos y ahi se puede seleccionar que datos mostrar y que no, y muchas otras opciones
    Esto creara una tabla dinamica y un grafico en una hoja aparte


***

### Exel comtabilidad

## Cuenta de PYG(perdidas y ganancias): Ingresos


    Analisis de ingreso con formato condicional-----------------
    Inicio / estilos / formato condicional

    hacer sumas, promedio, min ,max y mas rapido----------------------
    Inicio / Edicion / simbolo de suma

    Funcion PRONOSTICO-----------------------   

## Cuenta de PYG: Gastos

    Funcion sumar.si---------------------
    Util para hacer sumas que solo coincidan con un dato: solo suma las que tienen un 21% de iva; solo suma las ventas de pepe, etc
    SUMAR.SI(criterio de filtro, casilla donde este el dato que va a coincidir co el criterio, valores nuemricos de todos los criterios para sumar
    
    









