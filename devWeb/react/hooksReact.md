
# Hooks

## Prop drilling (esto es un issue a evitar)
>Es cuando se crea un estado y quiero pasar ese estado a un hijo del hijo del componente de dodne fue creado el estado, entoces debo pasarselo al hijo y luego a hijo del hijo , y aqui le estoy pasando un estado a un componenete que no lo va a necesitar ya que solo se lo paso para pode pasarelo al hijo.

>Entonces debo pasar el estado y el set de ese estado para manipularlo
## UseState();
>El hook mas basico

## UseEffect();
>El useEffect() 

>Sirve para sincronizar datos exteriores, un endPoint, una llamada de data, etc

>Se colocan acciones que no se ejecutan con un evento echo por el usuario, acciones que se ejecutan sin que el usuario cree un evento

>Aveces parece que los useEffect() se ejecutan dos veces y esto es por el metodo estricto.

    useEffect(() =>{
        // inicio, cambios
        return () =>{
            //destruccion
        }
    },[//estado que actilizara]);

## Hooks personalizados
>Use effect que se repite en toda la aplicacion, entonces se lo encapsula en un customHook para reutilizarlo

>Estado de si hay o no hay conexion

>Permite compartir logica de estado pero no el estado mismo

>OBSERBAR QUE CODIGO RELACIONADO A ESTADOS SE REPITE Y ENCAPSULARLO 

## UseContext()
>No maneja estados globales, solo sirve para compartir informacion (puede ser estados) no muy compleja o grande entre componentes y asi evitar 

>Pasar props a componentes hijos , evitanto el Prop Drilling.

##### Metodos de compartir informacionm entres componentes
>1.caso de uso de redux: Cuando hay data que la uso en toda mi app, es una entidad , ejemplo, carrito de compra.

>2.useContext(): Segun gentlenman programing, usa useContext() para compartir informacion entre componentes que estan en la misma vista(pages)

>3.Rxjs: para algo tan sencillo como enviar un envento entre componentes, no es necesario crear contextos ni nada

>Segun gentlenman programing, no se debe simular el comportamiendo de redux, con un useReducer() y context()

>es mejor usar un custon hook que useContext(); AVECES O ESO CREO https://www.youtube.com/watch?v=I7dwJxGuGYQ&ab_channel=ByteGrad

> la menjor manera de usar context(): min 1:01:20
>https://www.youtube.com/watch?v=USm-uiVyTuQ&ab_channel=GentlemanProgramming


>PRINCIPIO: Puedo generar un contexto, y crear estados dentro de este contexto , esto permite a los componentes acceder a todos los estados que le pasemos al contexto, (los elementos hijos de los elementos que estan dentro del contexto tambien puden acceder al los estados del contexto), sin hacer un import o pasar props a componentes hijos. Esto evita el prop drilling

## UseReduce()
>Alternativa a useState() , react recomienta usar useReducer() cuando los estados de mi app se vuelven muy complejos.

>Es interesante usarla con useContext()

>https://www.youtube.com/watch?v=B9tDYAZZxcE&t=2365s&ab_channel=midulive

>https://www.youtube.com/watch?v=j2-X0Pck9jk&ab_channel=10MinutosProgramando

## useRef()
>Hacer referencia a un nodo html, para manejarlo a mano, tener la etiqueta en una varoable para trabajar con ellañ

>y si tengo 500 botones , creo 500 referencias? NO, tener cuidado con las referencias

## UseId()
>Obtener un iD unico en toda la aplicacion, id en las etiquetas o lo que sea

> const categoryId = useId();

> mp sirve para elementos creados por iteraciones

>para proyectos medianos-pequeños esta bien, para proyectos mas grandes se suelen usar librerias para ahorrar tiempo

## UseMemo()
>Su utilidad es que se le puede decir que es exactamenete el estado que va a cambiar para que solo renderiza eso y no todo el componenete, de esta forma se gana performante. "SOLUCIONA" una de las pegas de react que es que en los re-renders se renderiza mas de los necesario.

>Es una tonteria? he escuchado a personas que no lo deberia utilizar

>PROBLEMATICA 1: los datos se guardan en mnemoria (ram) y al tener bastantes datos se satura

>PROBLEMATICA 2: no simepre devuelve bien el cache, no simpre devuelve un memo? no es fiable entonces

>CUANDO USAR: Calcular que se usa bastante, complicado pero que la data no cambie bastante.

>Usar use memo solo cuando sea necesario, tiene un peso en la app

>En la documentacion de react: si tienes problemas de perfonmance intenta solucionarlo restructurando codigo o usa UseMemo() o useCallBack

## UseCallback()
>En la documentacion de react: si tienes problemas de perfonmance intenta solucionarlo restructurando codigo o usa UseCallBack() o UseMemo()
