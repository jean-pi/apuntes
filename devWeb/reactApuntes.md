# React Apuntes


## Javascript para react

>Programacion orientada a objetos
>arreglos y metodos actuales de ecmaScript6 para trabajar con arreglos
>pasar por referencia: hacer un copy paste de un arreglo es diferente a hacer una referencia de este arreglo
>DOM
>Eventos : 
>Asicronismo


## React 
> create-react-app: para crear proyecto basico, se peude crear un propia configuracion con webPack, babel para iniciar mi propio proyecto
>JSX
>EVENTOS
>COMPONENTES
>PROPS
>Estado
>cliclo de vida
>Hooks basicos: useState useEffetc

MAS AVANZADO
>Context: amplia el concepto de estado.
>Refs
>useMemo: hooks menos usado
>useReduce: hooks menos usado
>Custom hook
>solicitudes Http
>hoc - high order Components: arquitectura 
>portals: arquitectura
>tipado


>TESTING
>LIBRERIAS MARA MEJOS DE ESTADO PARA APP GRANDES

ECOSISTEMA DE REACT
>react-router
>next.js/SSR: server side renderig
>Gapsby/SSG: stati side generator
>Apollo/graphQL: desarrollo de apis echo por facebool
>Axios/HTTP: manejos de solitude y fechting de datos mas complejos
>React-query/HTTTP: manejos de solitude y fechting de datos mas complejos
>Style-componet: agregar css a componentes para evitar tener archivos css, opcional tambien se podria implementar sass
>React native 



## Iniciar un proyecto react
> instalar react, descargar *nodeJS* y con esto de descarga *npm* :
```
En la consola de node: npx create-react-app miaplicacion
```
> Luego entar a la carpeta donde se creo y darle:
```
En la consola de node: npm start
```






---
## Componentes
+ ### Hay dos tipos de componentes
    -  FUNCIONALES:
        + Funcion de js/ES6 que retorna un elemento React(JSX)
        + Se usan mucho
        +  Debe comenzar con una letra minuscula
        +  No se pueden utilizar props de elementos hijos en casos de un componente dentro de otros componentes
    -  DE CLASE
        + cada vez se usan menos
        ```
        class saludo extends React.Component{
            render(){
                return <h1>hola{this.props.name}</h1>;
            }
        }
        ````
---
## Estado
#### conjuntos de propiedades de un "componente" y sus valores actuales
#### para usar el esatdo debo de importarlo
---
## Hook
#### Funcion especial que fue creada para administrar los estados de los componentes.
#### Funcionales y otros aspectos de react(solo se usa en componentes funcionales).
---
## Event listener
#### funcion js que se ejecuta al activarse un evento
---
## Elemento 
#### Unidades mas pequeñas de React, define lo que se va a ver en la pantalla 
#### ¡Un coponente se forma de elementos!
```
--<h1>hola mundo{user.name}</h1> 
```
---
## ReactDOM
#### Paquete que facilita la actualizacion del DOM en react
---
# ¡¡Cosas basicas de react!!
#### Aqui dentro va todo el proyecto:
```
<div id="root"></div>
 ```
---
#### Agregar elementos(o compomentes creo) dentro de otros elementos
```
ReactDOM.render( elemento , document.getElementById(`root`) )
```
- El metodo "render" de "ReactDOM" pide el:
    1. elemento(o componente) que se va a agregar dentro de otro 
    2. contenedor para el elemento(o componente)
¡¡PARA USAR "ReactDOM" hay que importarlo!!
---
#### Extension de chrome React developed tools UTIL
---



