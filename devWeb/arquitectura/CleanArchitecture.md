# Clean Architecture en Front End


+ Domain: Logica de negocios (lo no depende de la tegnologia) + entidades
+ UseCases: metodos que representan la logica de aplicación
+ Puertos: significado igual a una Interface de typescript, un contrato que no se rompe
+ Adapters: implementa la Interface




## Separation of concerns
## Que es?

    construir aplicaciones escalables y faciles de mantener
    ---
    Arquitectura, forma de estruturar el proyecto para cumplir un objetivo
    ---
    objetivo: Separation of concerns, dividir el proyecto en capas, las mas posibles, modificar parte del proyecto y que lo demas funcione perfectamente
    ---
    Ventajas: super mantenible toco algo y no se rompe todo, escalabilidad comoda
    ---
    Desventajas: muy estructurado, muchas reglas, se gasta tiempo en su estruturacion, tengo un proyecto que lo necesito en una semana entonces mejor no lo aplico, no tiene sentido perder tanto tiempo es arquitecturas
    

## Que habra en este markdown?
(lista de reproduccion clean arquitecture:) aqui hay info completa, revisar videos mas actuales en caso de pasar mucho tiempo
<https://www.youtube.com/watch?v=HU6OfkrIJqQ&list=PL42UNLc8e48TF9l07z_tLGHzmC_d-yfJJ&ab_channel=GentlemanProgramming>


(Cómo estructurar tu project de ReactJs? Aplicamos Clean Architecture en Front End - #part1:)
<https://www.youtube.com/watch?v=5LqhlCd2_nE&list=PL42UNLc8e48TF9l07z_tLGHzmC_d-yfJJ&index=9&ab_channel=GentlemanProgramming>

(Estructuramos en vivo un project de React usando conceptos de Clean Architecture - #part2:)
<https://www.youtube.com/watch?v=XEcZaKK38fg&list=PL42UNLc8e48TF9l07z_tLGHzmC_d-yfJJ&index=11&ab_channel=GentlemanProgramming>


# Codigo atomico
    Dividir el codigo en las partes mas pequeñas posibles será falcil de probar. Esto también trae más beneficios, como la reutilización del código, un mejor mantenimiento e incluso un mejor rendimiento; a medida que el código se vuelve más pequeño y mejor organizado y dependiendo del lenguaje / marco que usemos, podríamos terminar con menos ciclos de procesamiento.

# Clean architecture para frontend

<img src="./assets/Captura%20de%20pantalla%202023-12-03%20132719.png" alt="drawing" width="400px" />

|        |        |
|--------|--------|
|    CAPA EXTERNA (Servicios Externos en frontend)     |   Recursos externos que como no son de nosotros con el tiempo pueden cambiar por ejemplo una Llamadas a un endpoint - llamada api . Debe ser intercambiable, algo que se pueda sacar poner , poner otros|
|    ADAPTADORES (en frontedn Adaptadores)        |    Adaptador que crear un objeto js ,  si lo que retorna la Api cambia, porque aveces no se tiene control sobre las apis que se usan, entonces solo se modifica el adaptador y la nueva info que retorna la api se adaptara en toda la App, ya que se supone que toda la app usa la info procesada y estandarizada del adaptador, (mi abse de datos me regresa, id, userName y en mi adapter lo cambio a idUser, displayName y estas nuevas variables son las que usare en mi app) |
|    CASOS DE USO (en fronted Componentes)        |   Logica de aplicacion , una funcion importante de la logia de aplicacion es que acerca las entidades a la logica de negocios(usuario(entidad) debe ser mayor de 18 años(logica de negocios) y estos dos se conectan con la logia de application(logica que depende de la tegnologia) Los componentes(en react) trabajaran sobre los modelos y states los componentes usan la logia de nogecios del dominio |
|    DOMINIO (Modelos/ State en frontend)       |    interfaces, clases, logica de negocios (todo requerimientos que no dependen de la tegnologia , puede ser hasta un mensaje de error, otra cosa es como muestro este error, con diferentes colores o estilos, pequeño mensaje, pop up etc es logica de aplicacion), cosas que representan entidades en la app, el state es donde se guardaran estas entidades en diferentes momentos y cliclos de vida ejEmplo luego de un login se guarda la info del usuario en el state, porque esta info se usara por toda la aplicacion   |

>Cliclo de trabajo con clean architecture aplicada a frontend: 1. llamada a una api que retorna info de un user.  2. Adaptamos la info en un objeto Js. 3. Es ta info representara una entidad modelo. 4. usamos los modelos para crear logica de negocio en componentes, usamos estos modelos/entidades predefinidos y actualizamos estados y ciclos de vida.


### Carpetas en la raiz
|🟣: reutilizables  🟪: no reutilizables           |           |
|-----------|-----------|
|🟣Adapters   | Traer esa data llamada en "services" y estandarizarla, crear un modelo obj          |
|🟪Assets   |  audios, imagenes, tipografias, videos         |
|🟣Componets   | componetes         |
|🟪Contexts   |  api nativa context de react        |
|🟣Hooks    |   hooks, custon hooks        |
|🟣Interceptors   | axios se interceta una peticion y se la modifica? |
|🟣Models   |  mas para TypeScript, interfaces que tengan las estruturas, modelos , contratos que se deben de seguir estrcitamente, logica de negocio |
|🟪Pages   |  Vistas   |
|🟪Redux   |   Estados manejados en Redux  |
|🟣Services   | Lamadas externas, punto donde se llama a la api  |
|🟣StyleComponents - CSS   |     archivos Css      |
|🟪Utilities   |  Logica que se vaya a reutilizar, especifica ejemplo: script que se se pasa una fecha y regresa la fecha en formato mmddaa, format-date-mmddaa.utility.tsx     |



### Recomendacion de Alan de gentleman programming - usar modulorización.

    Modularizacion es una formade dividir el codigo de cierta forma que cada modulo sea independiente entre si, esto simplifica la logica, ayuda al lazy loading (carga perezosa) porque solo se cargan los modulos que se necesiten de apoquito, este concepto se aplica bastente en Angular y es facil de aplicar a React.

    Las carpetas marcadas antes "🟣: reutilizables" se pueden volver a crear dentro de pages(la idea es colocar solo lo que voy a utilizar en esa vista), un poco complicado de entender asi que Ejmplo:

>Tengo dentro de carpeta pages(es reutilizable) , vista "login" "register" "home" y dentro de estas vistas puedo tener de vuelta todas las carpetas marcadas como reutilizables, puedo volver a tener adapters, services, componentes models, etc...

    Las carpetas que se repiten dentro, se diferencian de las que estan en la raiz porque , por ejemplo con vista "login" , los dapters, services, componentes models, etc... solo se relacionan con login, solo trabajan dentro de login , no les importa lo exterior, solo tiene su ciclo de vida dentro del login.

    Esto hace que no se sobrecarge lo que esta en la raiz (root) con cosas que no son para todo el mundo, en el root solo estara cosas que se utilizaran, se reutilizaran en toda la app. ejemplo:

>Tengo un imput que se usa en toda la app: va al root, raiz
>Tengo un input que es diferente y solo se usa en una vista, esa no va en root

<img src="./assets/Captura de pantalla 2023-12-03 151105.png" alt="drawing" width="600px" />


### Contenido de carpetas a detalle

#### Carpeta adapters

<code>

    import {EndpointUser, user} from "@/models";

    export const createAddaptedUser = (user: EndpointUser) =>{
        const formattedUser: User = {
            name: user.name,
            lastName: user.last_name
        }
        return formattedUser;
    }

</code>

>si la api cambia de  "last_name" cambia a "last-name" el cambio lo hago aqui y listo, si no tendria que ser una por una.


#### Carpeta context
    
>Alan de gentleman programming recomienda usar la Api context nativa de  ract , solo para intercambiar informacion en una sola vista, o cosas que soy muy sencillas para meterlas en redux, redux seria para info que estara en toda la app.

<code>

    import { User } from "@/models";
    import {createContext} from "react"

    export const SelectedUserContext = createContext({
        selectedUser: {} as User,
        setSelectedUser: (user: User) => {}
    });

</code>

