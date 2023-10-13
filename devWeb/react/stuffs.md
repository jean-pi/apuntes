
# Cookies
    document.cookie="number=7" 
    Se usan ya muy muy poco
>En su mayoria se definen en el servidor, pero tambien se puede en el navegador

>Pueden tener un tiempo de expiracion

>tamaño 4kb

>Son accesibles por cada ventana o pestañas del navegador


# LocalStorage

    localStorage.setItem("key","value");
    localStorage.getItem("key");
    localStorage.removeItem("key","value");
    localStorage.clear();

>Son accesibles por cada ventana del navegador

>tamaño 5MB a 10MB

>nunca se eliminan, se eliminan manualmente

# SesionStorage
    localStorage.setItem("key","value");
    localStorage.getItem("key");
    localStorage.removeItem("key","value");
    localStorage.clear();

>tamaño 5MB

>Desaparecen cuando se cierra la ventana o pestaña

>NO son accesibles desde otras ventanas o pestañas del navegador

# menejar cache

>El cache es una memoria que guarda automaticamente los assets (imagenes, css, js, etc) para cargar mas rapido a la segunda vez que se ingresa

>No encontre mucha info para react

# fragments react

    //ESTO NO , NO HAY NECECIDAD DE CREAR UN DIV AHI
    export function myComponent(){
        <div>
          <div>first name</div>
          <div>last name</div>
        </div>
    }

    //ESTO SI , AHORA LOS ELEMENTOS NO TIENEN ESE DIV QUE PODRIA INTERFERIR CON EL MAQUETADO CSS    
    export function myComponent(){
        <>
          <div>first name</div>
          <div>last name</div>
        </>
    }

# Configurar rutas react en el servidor

# 404 desde el servidor