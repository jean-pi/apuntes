# React Apuntes

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
        + Seusan mucho
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



