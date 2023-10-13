# React Apuntes


## Javascript para react

>Programacion orientada a objetos

>arreglos y metodos actuales de ecmaScript6 para trabajar con arreglos

>pasar por referencia: hacer un copy paste de un arreglo es diferente a hacer una referencia de este arreglo

>DOM

>Eventos : 

>Asicronismo

## Funcionamiento de react
>Single-page-application: todo carga en el momento de entrar a la web, y si se entra desde una url que no sea la princial no se podra hacer esta carga

>Create-react-app: para crear proyecto basico, se peude crear un propia configuracion con webPack, babel para iniciar mi propio proyecto

## Virtual dom react
>El virtual dom es algo nativo de react, se ejecuta cada vez que se hace un render
>Compara la version pasada del que ya estaba renderizada con lo que se quiere renderizar
>Recorre cada etiqueta para comparar y cunado encuentra el elemento que fue actualizado hace el render pero solo de ese cambio

## Re-Render
>ESTA ES UNAS DE LA PEGAS DE REACT:Cuando se vuelve a renderizar un componente se remderizan todos sus hijos y componenete relacionadas a los estados que cambiaron

## Iniciar un proyecto react
> instalar react, descargar *nodeJS* y con esto de descarga *npm* :

>En la consola de node: npx create-react-app myplication

> Luego entar a la carpeta donde se creo y darle:

>En la consola de node: npm start




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
        

## Hook
>Funcion especial que fue creada para administrar los estados de los componentes.

>Funcionales y otros aspectos de react(solo se usa en componentes funcionales).

## Event listener
> funcion js que se ejecuta al activarse un evento

## Elemento 
> Unidades mas pequeñas de React, define lo que se va a ver en la pantalla 

> ¡Un coponente se forma de elementos!

    <h1>hola mundo{user.name}</h1> 

## Extension de chrome React developed tools UTIL

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es

### React basico
>JSX

>EVENTOS

>COMPONENTES

>PROPS

>Estado

>cliclo de vida

>Hooks basicos: useState useEffect

>Refs (prefiero no usar ref())

#### MAS AVANZADO
>Context: amplia el concepto de estado.

>useMemo: hooks menos usado

>useReduce: hooks menos usado

>Custom hook

>solicitudes Http

>Arquitecturas, hight orden components

>Portals

>tipado


#### TESTING
>LIBRERIAS MARA MEJOS DE ESTADO PARA APP GRANDES

#### ECOSISTEMA DE REACT
>react-router

>next.js/SSR: server side renderig

>Gapsby/SSG: static side generator

>Apollo/graphQL: desarrollo de apis echo por facebook

>Axios/HTTP: manejos de solitude y fechting de datos mas complejos

>React-query/HTTTP: manejos de solitudes y fechting de datos mas complejos

>Style-componet: agregar css a componentes para evitar tener archivos css, opcional tambien se podria implementar sass

>React native 



