
# React - rouer - dom
***
> React es una sola pagina y para tener varias vistas debo de hacer un routing 

> Se simula un sistema de carpetas, con diferentes HTML pero en realidad sonlo hay un html

> Es nesesario hacer un enrutamiento del lado del servidor. caso contrario fallaran las rutas que no se entren desde la pagina principal, esto pasa solo en produccion. antes se usaba HashRouter

>$npm install react-router-dom




## Administrar rutas
    import {Routes, Route, Outlet} from "react-router-dom";
    //Outlet indica donde se renderizan los hijos de las rutas, 
    //es como un hueco donde puedo mostrar info dinamica,manejada por tutas


    <Routes>
        //las rutas que estan arriba tieten mas rango
        <Route path = "/" element = {<PresentacionView/>}/>
        <Route path = "/presentacion" element = {<PresentacionView/>}/>
        <Route path = "/login" element = {<LoginView/>} />
        <Route path = "/signup" element = {<SignUpView/>} />
        <Route path = "/registration" element = {<RegistrationView/>}/>
        <Route path = "/app" element = {<MyApp/>}/> 
            <Route path = "tiposdeapp" element = {<TyposDeApp/>}/> //ruta relativa sin "/" no modifica la url desde raiz solo se le agrega 
            // <Outlet> este componente de "react-router-dom" crea un espacio para redenrizar rutas hijas 
        </Route>
        <Route path = "*" element = {<Error404/>}/> 
        //forma bonita de decir que la pagina no exista
        //SI QUIERO UN ERROR 404, INDICCARLE A GOOGLE Y A NIVEL DE SERVIDOR QUE UN RECURSO NO EXISTE
        //ES HACERLO A NIVEL DE SERVIDOR
        //ESTO SE HACE haciendo una redireccion a una ruta que el servidor envia como 404
        //DESDE EL CLIENTE NO SE PUEDE DEVOLVER UN 404
    </Routes>
    



## NavLink
    //Perfecto para navs de navegacion
    <NavLink to= «/content/new» className= «active»> New content </NavLink>

    //de forma nativa tiene un parametro isActive : true o false , deprendiendo si el link esta activo o no
    <NavLink to= «/about» className={({isActive})=> isActive ? ‘active’ : ‘ ‘}> About </NavLink>


    import { Link, NavLink as NavLinkAlias } from "react-router-dom";
    //navLink permite detectar si el link esta activo o no

    <Link to={"/"}> Home </Link>
    <Link to={"/reseñas"}> Reseñas </Link>
    //esto usa el history.pushState()

    <NavLinkAlias
        className={({ isActive }) => {
            // La varaible is active no se puede cambiar
            return isactive? "is-active" : undefined;
        }} 
        to={"/reseñas"}> Reseñas 
    </NavLinkAlias>

    //imagina CREAR UN COMPONENTE QUE TENGA EL CODIGO DE NavLink dentro para no tener que repetir esa funcion de "isActive" cada vez

## Url dinamicas
    SIRVE PARA OBTENER LA URL DE , Y MOSTRAR CONTENIDO DIFERENTE SEGUN CAMBIEN LA url DE FORMA DINAMICA

    import { useParams } from "react-router-dom";
    const {categorias} = useParams();
    path: "categorias/:categorias"


## Routing del lado del servidor
    Cuando despliego la web hay que especificar en el servidor que uso, que siempre redirija al index html, ya que ahí esta toda mi App y ahi carca todo lo que nesecita toda la web de una sola vez y cuando se ingresa a la web.
    Lo que se espera de una url es que sean carpetas y dentro haya un .html y como react es una single-page-application solo hay un index html

## Error 404- falso del cliente - real desde el servidor

    // Error "falso" de parte del cliente, falso porque no manda un 404 si no un 200, ok
    <Route path = "*" element = {<Error404/>}/> 

    //Error desde servidor
    //El navegador manda un 404 cuando no se encuantra un recurso
    //esto se configura cunado de sube la web
    //el servidor o lugar donde suba la web mandara una pagina con sus estilos, esto yo lo puedo estilar, personalzar

    //CUANDO CAMBIE UNA URL, DEBO REDIRIGIR AL USUARIO AL LA NUEVA URL
## Rutas protegidas y roles

    1.crear un componente que maneje cuando es permitido entrar a la url y cuando no

    import {Navigate} from "react-router-dom"

    export const ProtectedRoute = ({children, user}) => {
        // al colocar un hijo dentro del componente , este agarra este componente automaticamente
        if(!user){
            return <Navigate to="/landingPage">
        }else{
            return children ? children : <Outlet/ >
            // el children: es para cuando solo tenga un elemento.
            // el <Outlet/ > cuando tenga varias rutas protegidas a la vez.
        }
    }
    //PARA ROLES EL USER DEBE TENER UNA PROPIEDAD DE SU ROL CON ESO SE VALIDA


##### Una ruta a la vez: se maneja con children.
    import {ProtectedRoute} from "./components/protectedRoute;

    <Route path = "/app" element = {
        <ProtectedRoute user={!!user}> //forma corte de decir: si user exite manda true y si no false
            <App/>
        </ProtectedRoute>
    }/> 

##### Varias rutas protegidas a la vez para ahorrar codigo.
    <Route element = {<ProtecterRoute user={user}/>}> 
        <Route path="/home" element={<App />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        // el componente <ProtecterRoute user={user}/>
    <Route>



## Routing programatico y  redirecciones

    import { Navigate } from "react-router-dom";
    <Navigate to="/landing"/>

    UseLocation()? es una tonteria pero mejora mucho el rendimiento? enviar info y utilizarla en otra ruta, mejora el tiempo de carga.
    consiste en llevar informacion de una ruta para ya no hacer peticiones http en la siguiente

#### UseLocation() para atrapar datos de la url y llevarla a la siguiente
    import { Navigate, useLocation} from "react-router-dom";

    //location tiene info de donde esta el usuario ahora
    const location = useLocation()
    <Navigate to="/propiedad:id" state={{Location, urlFoto, metadatos}} / >
    //NO TERMINO DE ENTENDER PERO ES MUY MUY UTIL PARA REUTILIZAR INFORMACION QUE VOY A USAR EN LA SIGUINETE RUTA Y NO VOLVERLA A PEDIR
    