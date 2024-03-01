# Diseño responsivo


# pensar en la adaptacion fluida 
    
    {
        display: flex;
        flex: 1;
        flex: 2;
        flex-basics: 15em;
        flex-grow: 1;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr))
    }

## Consulta de medios @media
    @media (min-width: 50em) and (max-width: 60em) { }

    no siempre usar consulta de medios
    
## ::before ::after
    usar esto para diseños con detalles, son mas faciles de estilar

## Optar por lo flexibles

    .media {
      display: flex;
      align-items: center;
      gap: 1em; // espacio entre los dos elementos flexibles
    }
    .media-illustration {
      flex: 1;
      max-width: 200px;
    }
    .media-content {
      flex: 3;
    }

## Consulta de contenedores @container

    main,
    aside {
        container-type: inline-size;
    
    }

    // se puede usar un media query especifico para main, aside, afecta a todos los elementos html hijos

    @container (min-width: 25em) {
        .media {
          display: flex;
          align-items: center;
          gap: 1em;
        }

        .media-illustration {
          flex: 1;
        }

        .media-content {
          flex: 3;
        }
    } 

## Textos fluidos

    html {
        font-size: calc(0.75rem + 1.5vw);
    }

    // clamp permite tener un min y un max de tamaño
    html {
         font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
    }

>Se considera ampliamente que cualquier longitud de entre 45 y 75 caracteres es una longitud de línea satisfactoria para una página de una sola columna establecida en una cara de texto con serif en un tamaño de texto. La línea de 66 caracteres (que cuenta tanto letras como espacios) se considera ideal. Para un trabajo de varias columnas, un mejor promedio es de 40 a 50 caracteres.

    article {
      max-inline-size: 66ch;
      // basada en el ancho de los caracteres dentro del elemento
      // se puede usar para definir un maximo de caracteres para tener
      //una visibilidad optima con longitus de caracteres entes entre 45 y 75
    }

## Fuentes locales
    @font-face {
      font-family: Roboto;
      src: url('/fonts/roboto-regular.woff2') format('woff2');
    }
    body {
      font-family: Roboto, sans-serif;
    }


## Cargas de textos

    1. No esperar a que cargue el texto y mientras eso utilizar el texto predeterminado del navegador
    body {
        font-family: Roboto, sans-serif;
        font-display: swap;
    }
    2. No mostrar texto hasta que cargue la fuentes
    body {
        font-family: Roboto, sans-serif;
        font-display: fallback;
    }

## Multimedia

    img,
    video,
    iframe {
      max-inline-size: 100%;
      block-size: auto;
      // no deben ser mas grandes que su contenedor
    }

    {
        aspec-ratio: 1/2;
        objet-fit: cover;
        object-position: top center;
    }

    <img
        src="image.png"
        alt="A description of the image."
        loading="lazy" // no carga la imagen hasta que el se muestre en el viewport

        loading="lazy" // eager cancela es este efecto, default
    >          

    <img
        src="hero.jpg"
        alt="" // alt vacio significa que es una imagen de adorno
        loading="eager"
        fetchpriority="high" // prioridad, cargara primero
    >   

    element {
        // parecido al atributo srcset pero con background
      background-image: image-set(
        small-image.png 1x,
        medium-image.png 2x,
        large-image.png 3x
      );
    }


## Temas: dark light

<https://web.dev/learn/design/theming?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fdesign&hl=es-419#article-https://web.dev/learn/design/theming&hl=es-419>

## interaccion

  // activar un hover cuando se selecciona algo con el teclado 
  button .extra {
    visibility: visible;
  }
  @media (hover: hover) {
    button .extra {
      visibility: hidden;
    }
    button:is(:hover, :focus) .extra {
      visibility: visible;
    }
  }


## Menus, links 

  //Lo optimo seria evitar los botones de hamburguesa ya que ocipan dos cliks para llegar a un sitio
  // y si se usan este debe contener para que sirve no solo un icono
  // "menú" , "novedades", etc..

## Carruseles

  //Para pantallas angostas, muestra elementos en una fila con flexbox. La fila de elementos se extenderá 
  //más allá del borde de la pantalla. Usa overflow-x: auto para permitir el deslizamiento horizontal.


  @media (max-width: 50em) {
    .cards {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: inline mandatory; //  scroll-snap garantizan que los elementos se puedan deslizar de una manera que se sienta fluida.
      scroll-behavior: smooth;
    }
    .cards .card {
      flex-shrink: 0;
      flex-basis: 15em;
      scroll-snap-align: start;
    }
  }

  loading="lazy" // no carga la imagen hasta que el el carrusel se dazplace 


  // Cuando exista espacio suficiente para mostrar el contenido se debe cambia a una grid

  @media (min-width: 50em) {
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    }
  } 


## Tablas desbordadas


## Tipos de pantalla

  // detectar las secciones de la pantalla para adaptar el contenido a dispositivos con dos pantallas o felxibles 
