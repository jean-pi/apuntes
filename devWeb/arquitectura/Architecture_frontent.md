
# Architecture

## Witch architecture choose?

- [https://www.workingsoftware.dev/frontend-rendering-techniques/]
- [https://developers.google.com/search/docs/appearance/core-web-vitals?hl=es-419]


+ **1. requirements**
    - requirements negocios
        - no se rige por una limitación tecnica (no se puede crear una cuenta bancaria a un menor de 18 años)
    - requirements Aplicacion
        - investigar


+ **2. Quality goals**
    - requirements funcionales
    - requirements no funcionales

+ **3. Google web vitals (perfonmance - eficiencia)**
    - TTFB (time to firs byte - tiempo para primer byte)
        - *start*
        - 1. red
        - 2. cache
        - 3. DNS
        - 4. TCP
        - 5. Requets
        - 6. response
        - *end time to first byte*
        - 7. procesing
        - 8. Load application complete

    + FCP (first content paint)
        - como la web carga de a poco a poco hata que renderiza todo el contenido

    + LCP (largest contenful paint)
        - Que es lo que mas tarde, (las imagenes generalmente cargan mas lento)
        - cuanto tarda el cargar la seccion pedazo mas pesado

    + FID (Firs imput dalay )& TTI (time to interactive)
        - FID: tiempo en cargar el primer imput o algi interactivo (un search ejemplo)
        - TTI: cuanto timpo demora en poder ser usado ese imput, o algo interactivo, cuando existe el handler

    + CLS (content layout shift)
        - Cuando hay una imagen y demora en cargar mas que el texto y los textos se muevan y se alteren


---

## Preguntas para escoger una arquitecura?

+ Portabilidad
    - browsers
    - mobile/destok
    - ambos
    - devices
    - limitación ancho de banda

+ Confiable
    - se puede ejecutar offline
    - como se comporta el front cuando el back esta offline
    
+ Mantenible
    - es necesario hacer componente reutilizables en varios proyectos? (coporate design)
    - rapidez para hacer un deploy cambios en producción , fist time to vite?
    - Requerimientos, trouble shooting web (enfoque sistemático y lógico para identificar, diagnosticar y solucionar fallos en sitios web, aplicaciones web, servidores o redes)
    
+ Compatibilidad
    - soporte a otras aplicaciones?
    - se tiene que poder embeber en otro contexto
    - some crawlers , preview de link al compartir un link de youtube o instagram
    - SEO 

+ Seguridad
    - top 10 OWASP

+ Usability
    - WCAG21 reglas para apps , practicas para accesibilidad
    - interaction - driven: content (orientada al contenido SSG Y SSR perfecto) y interaction (CSR mucho contenido dinamico)


## SPA(single page application) - CSR (client side rendenring)


    + SPA o sea CRS , el renderizado y precios se realizan del lado del cliente.
    + Tecnicas para reducir costos, uso alto del IndexDb del Browser del ususrio
    + La info llega por peticiones api
    + Solo hay una pagina con un enrutamiento simulado

+ Venetajas
    + TTFB (time to fisrt byte) sera bajo
    + Permite applicaciones de alta interactividad
    + testing se facilita?
    + frontend esta desligado del backend, esta desacoplado, puedo cambiar de frameworks frontend no importa.

+ Desvantajas
    + alta diferencia entre FCP (fisrt contenful paint) y TTI (time to interactive), desde la primera aparicion de un elementos hasta que este se pueda usar hay una diferencia considerada alta
    + SEO, crawlers esperan para obtener la info y interactuar con la pagina
    + Complejidad tegnologica , tener dos sistemas back y front es un problema para empresas pequeñas, hay que orquetar todo esto y alojar en diferentes sitos , y demas problemas por tener dos tegnologias.
    + Portabilidad, posible alta ocupacion de recursos del dispositivo cliente


## Arquitectura ROCA (resource oriented client arch)

    ROCA (PHP, RUBI, PHYTON ...) genial para proyectos de bajos recursos

+ caracteristicas
    - cada recurso tiene un URL --- json - xlm
    - maneja los estados por las url o por cookies
    - todo en el backend
    - js minimo, muy minimo, para interacciones de la UI
    - usable sin jsvascript

- ventajas
    - FCP (fisrt contenful paint) y TTI (time to interactive), no diferencia es instataneo, da todo servido, no latencia
    - TTI es muy rapdio, mejora la experiencia de usuario
    - simple tech
    - bajo ancho de banda , consume muy poco -- solo html - css - no tiene javascript

- desventajas
    - TTFB (time to first byte) es alto, el servidor debe hacer todo antes de enviarlo
    - si la app es altamente interactiva, No se puede, muy dificil, no real time
    - estrategias de cache son muy limitadas


### SSR (server side rendering)
    Esto es generla una forma de hacer web, antes se hacia server side, pero ahora hay maneras modernas, Todo se renderiza en el servidor, usa template engines, usando la data de logica de negocios y el administrador de bases de datos o servicios a terceros pasan los datos a template engine para que le pase al Cliente (browser) el html, js, css, todo lo necesario, el js se carga luego del html se llama hidratacion, asocia los elementos html a ventos js.

---
+ Ventajas 
    - altamente dinamica
    - FCP y TTI casi instantáneos
    - Performance (UX)
    - SEO Nativo
    - Seguridad de servido
+ Desventajas
    - Critico: No se puede hacer referencia a nada del DOM browser, o window. , no existe, no sabe lo que es el browser
    - TTFB (Time to First Byte) Alto
    - Complejidad Tecnológica y Costos
    - Estrategias de Caché Limitadas
    - Acoplamiento (Tight Coupling)
    - Escalabilidad más costosa?

---

+ Hidratacion: Por qué se dice que es "MALA"? (Las Desventajas)
    - El Problema del "Doble Envío" (Double Data): Para hidratar un componente, el servidor envía el HTML, pero también debe enviar los datos en formato JSON para que el JavaScript sepa cómo reconstruir el estado. Estás enviando la misma información dos veces, lo que aumenta el peso de la página.

    - Ejecución Redundante: El navegador tiene que descargar el JS, leerlo, y luego ejecutarlo para "re-renderizar" lo que el servidor ya renderizó. Esto consume CPU y batería en el dispositivo del usuario.

    - El "Valle de la Muerte" de la Interactividad: Es el tiempo entre el FCP (el usuario ve el botón) y el TTI (el usuario hace clic y no pasa nada). Si el JS es muy pesado, el usuario siente que la web está "congelada" o rota.

    -  Inconsistencias (Hydration Mismatch): Si el servidor renderiza una cosa (ej. la hora actual) y el cliente intenta hidratar con otra distinta, el sitio puede romperse visualmente o lanzar errores de consola molestos.

+ ¿Por qué es "BUENA" o NECESARIA? (Las Ventajas)
    - Experiencia de App (SPA): Una vez que la página está hidratada, navegar entre secciones es instantáneo. No hay más pantallas blancas porque el JS ya tomó el control de la navegación.

    - SEO con Interactividad: Te permite tener lo mejor de ambos mundos: un HTML que los buscadores aman, pero con la capacidad de tener carritos de compra, chats y dashboards complejos que requieren lógica de cliente.

    - Ecosistema de Componentes: Permite usar frameworks como React o Vue, donde los desarrolladores pueden reutilizar lógica fácilmente sin preocuparse por manipular el DOM manualmente.




### SSG (server static generator)
    Una forma de server side rendering la final, esta forma compila toda la app en el server, tiene ventajas siempre que tenga contenido estatico y no dependa de interacciones, si se actualiza la base de datos se renderiza TODO, o la otra se renderiza cada cierto intervalo, Arquitectura JAM?



## Arquitectura JAM
     
    + GabsBy, nextJs, Hugo

    + CDNS (content delivery network): servicio que provee contenido estatico a paginas web, cargar imagenes, de todo, se cachean en el dns, pido algo y el cdns no lo tiene lo pide al server y lo guarda en el cdns, es preferible guardar imagenes, js, html, css, video,... busca el serve DNS mas cercano al user para mas velocidad, el CDN se conecta con el user que pide info si no esta en el CDN se conecta con sel server de la app y lo guarda en el CDN para tenerlo listo para proxcimas deciciones, es un tipo de CACHE SERVER.

    + El CDNS devuelve GSS (generetir statis site) 

    + SSG (static site generator) (no directamente server) , este hace un prebuild de la app, HTML + HTML + HTML ... esto se deploea en el CDNS , estos se crean desde una BASE DE DATOS Y UN .MD?

    + Una CDN (Content Delivery Network o Red de Entrega de Contenidos) es una red geográficamente distribuida de servidores que trabajan juntos para entregar contenido web rápidamente. Almacena copias de archivos (imágenes, video, HTML, CSS) en servidores "edge" (borde) cercanos al usuario, reduciendo la latencia, acelerando la carga de webs y mejorando la seguridad contra ataques. 

    + El SSG prooveido por vercel, nextjs, utilza la Edge network, que algo propio de vercel, este "servidor" podria llamarse CI / CD Pipeline (continue deploiment)

    + Third parties services, se encuentra fuera de la arquitectura, es desacoplado, se conecta directamente del html enviado por el HTML, (auth, search, payment ...)

+ Ventajas
    - Performance , TTFB (time to first byte) rapido
    - buena UX (archivos estaticos) permite herramientas de cacheo, esto hace que el FCP (fisrt contenful paint) y TTI (time to interactive) sean muy buenos
    - Buena seguridad, es un archivo estatico, no permite el cosas como cross-scripting, la app completa esta guardada statica en el cdns
    - Desarrollo simple, el desarrollo server necesita meter mas codigo, como se genera, las templates engines y demas, aqui con el build time ya esta todo, no framework of server side render.
    - Es muy escalable y confiable

+ Desvenjas
    - Contenido dinamico, no existe real time
    - Actualizacion deploy, hay que meter un poquito mas de logica
    - Costos, mas desarrollo, mantenimiento mas costoso, mas herramientas?
    - Usa hidratacion web, No es intrínsecamente "mala", pero en arquitecturas modernas se considera un cuello de botella


## CSR : Client Side Rendering con Pre-rendering

    Funciona igual que clien side rendering pero... ahora el render tiene la capacidad de otorgarle a ciertas rutas de una SPA (single page aplication) un pre-render que se envia al cliente browser ya que en estas paginas se sabe que solo hay contenido estatico, usa un CI / CD pipeline , que en vez de un SSG tiene un creador de paginas pre-renderizadas.

+ Ventajas
    - Mejor performante mejor UX
    - TTFB , FCP mejores
    - Cachear en el Browser
    - Mejor seo
    - Codigo simple (client side rendering tiene sus temas)
    - menos peso en el servidor, menos costos

+ Desventajas
    -  HTML inicial .app debe venir del servidor, esto complica pre-renderizar contenido dinamico mas complejo
    - Mas costosos, mas herramientas, mas procesos



## Universal rendering??? SSR server side rendering + Rehidratación

    Combinación, prerenderizar contenido y luego hacerlo dinamico, cada una de las redirecciones que hagamos la hace el servidor

    // https://www.youtube.com/watch?v=apWv5e23RK8&list=PL42UNLc8e48RcntFIC9RF4zA3cnEGDyJr&index=7


