


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
| H1, H2, H3, H4, H5, H6 |


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

## imagenes iconos svg

    alt="" 
    no colocar "imagen de"


    // svg 
    <figure>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-21 -21 42 42" width="100" height="100">
        <title>Smiling face</title>
        <circle r="20" fill="yellow" stroke="black"/>
        <ellipse rx="2.5" ry="4" cx="-6" cy="-7" fill="black"/>
        <ellipse rx="2.5" ry="4" cx="6" cy="-7" fill="black"/>
        <path stroke="black" d="M -12,5 A 13.5,13.5,0 0,0 12,5 A 13,13,0 0,1 -12,5"/>
        </svg>
        <figcaption>
        A description of the image. // accessibility
        </figcaption>
    </figure>
## text
    usar rem

## formularios

    <label required for="email" aria-describedby="name-validation"> nombre </label>
    <label required for="number" aria-describedby="password-validation"> password </label>

    cunado el textod de un imput es menor de 16px se hace zoon cuando se escriba en el


    // decirle a teclados virtuales que se va a escribir para que se adapten

    <input type="email" id="email">
    <input type="number" id="number">
    <input type="tel" id="tel">
    <input type="url" id="url">


    <label for="age">Age</label>
    <input type="number" id="age" inputmode="numeric"> // numeric, mostrara unteclado adaptaro para escribir numeros enteros


    <label for="price">Price</label>
    <input type="number" id="price" inputmode="decimal"> // ovbio


    // Auto completado
    <label for="name">Name</label>
    <input type="text" id="name" autocomplete="name">
    
    <label for="country">Country</label>
    <input type="text" id="country" autocomplete="country">
    
    <label for="email">Email</label>
    <input type="email" id="email" autocomplete="email">
## pruebas de accesibilidad
    usar lighthouse


## otros
    mostrar cuando una toogle esta activo o recogido 
    mostrar cuando un botton permanece activo o no