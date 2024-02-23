Nuevos selectores de seudoclase funcionales de CSS :is() y :where() 
<https://web.dev/articles/css-is-and-where?hl=es-419>


Guia de animaciones
https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9


CLS esos espacios que hacen que la pagina se mueva al cagar y son molestos
https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=lr#images-without-dimensions



1. los elementos no se ubican con margin o padding, estos deben ubicarse con un layout padre que los colque donde deben ir.
se podria pasar por props con margin o padding pero esto no seria fluido y habria que colocar el responsive con @medias

2. Con la ui definida estandarizar variables de colores y textos definidas en un archivo aparte

3. nombres descriptivos con BEM

4. con la ui definida, escribir que componentes css voy a nececitar, en este paso se detecta componenets que comparten caracteristicas para estandarizarlos

5. El css esta ligado a los componenetes, con la ui ya echa puedo determinar que componentes necesito y que funcionalidad van a tener

6. Es preferible que los medias se coloquen segun el contenido de el box o seccion, de esta forma la UI no se adapta segun el tamaño de la pantalla si no segun el contenido, el responsive no debe ser una vercion pequeña o grande de la UI 