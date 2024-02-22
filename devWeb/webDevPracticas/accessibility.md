


# Accesibilidad

### principios de las WCAG: perceptibles, operables, comprensibles y robustas (PUR). 



## semantica

|Elemento de punto de referencia HTML|	Rol de punto de referencia de ARIA|
|--------|--------|
|    header:	     banner |   
|    aside: 	complementario   |   
|  footer:   infodecontenido    | 
|  nav:     navigation    | 
|  main:   	principal    | 
|  form:	formulario    | 
|  section:  	region    | 
| table: tablas |


## iframes

    <iframe title="Google Pixel - Lizzo in Real Tone"
      src="https://www.youtube.com/embed/3obixhGZ5ds"
      scrolling="auto">
    </iframe>

## Enfoque del teclado

    <p tabindex="0">Focus goes here 4th</p>
    <p tabindex="2">Focus goes here 2nd</p>
    <p tabindex="1">Focus goes here 1st</p>
    <p tabindex="-1">Focus never goes here</p>
    <p tabindex="3">Focus goes here 3rd</p>

    a:focus {
    outline: auto 5px Highlight; /* for non-webkit browsers */
    outline: auto 5px -webkit-focus-ring-color; /* for webkit browsers */
    }

    *los <button> <a> y otros ya tiene tabindex automatico

## imagenes 

    alt="" 
    no colocar "imagen de"

## text
    usar rem

## formularios

    <label required aria-describedby="name-validation"> nombre </label>
    <label required aria-describedby="password-validation"> password </label>

    cunado el textod de un imput es menor de 16px se hace zoon cuando se escriba en el

## pruebas
    usar lighthouse

## otros
    mostrar cuando una toogle esta activo o recogido 
    mostrar cuando un botton permanece activo o no