	
$ git --version

$ git config --global user.name "Jean Pierre Veliz"
$ git config --global user.email jeanpierreveliz26@gmail.com
$ git config --global core.editor "code --wait"
$ git config --global -e
$ git config --global core.autocrlf true     // elimina los saltos de linea que coloca windows [en mac es "input" y en vez de "true"]
$ git config -h  // opciones configuracion

--FLUJO DE TRABAJO
 1-stage: $ git add {} // guarda solo los cambios que se han echo esta accion no 
 se sube al repositorio
 2-commit: $ git commit {} // una vez que este en stage todo los cambios que quiero subir se hace un commit
 3-server: $git push // subir a un server el commit


$ ls //todas las carpetas y archivos
$ ls -a // muestra los archivos y los archivos ocultos
$ pwd // en que carpeta estoy
// tecla tab para completar el nombre del directorio
$ cd {directorio} //entrar a carpeta
$ cd .. {directorio} //subir una carpeta
$ mkdir {name} // crear una carpeta
$ git init // iniciar un repositorio git (la carpeta esta oculta [nombreDeCarpeta/.git])
$ code . //abre el editor de codigo en la carpeta actual
$ git rm --cached ..file..  //dejar de seguir un archivo
$ git log -p  //muestra los cambios de los commit linea a linea



//STAGE
$ git status
$ git status -s //forma diferende de mostar los modificados
$ git diff // muestra exactamente las lineas eliminadas y lo agregadas que aun no estan en stage (q para salir)
$ git diff --staged // lo mismo anterior pero solo lo que tengo en stage
// cuando se hace un salto de linea se vuelve a rescribir una liena ya que se agrega un caracter invisible de salto de linea a
$ git add {nombreDelArchivo} {otroArchivo} || {.}  //el punto agrega todo
// agregar archivos a ETAPA DE STAGE
// buena practica solo pasar a stage los archivos modificados
$ git restored --staged {} // se quita del stage


//COMMIT
$ git commit -m "commit inicial"  //guardar una lista de cambios (commit:comprometer)
// cuanto se haga un commit no aparecera ningun archivo con $ git status ya que no ningun cambio en el stage($ git add {})
$ git commit  //se abrira el editor de texto ahi se peude escribir una descripcion en la primera linea
$ git log --oneline o $ git log // muestra historial de commits y info (se lase con que)


//PUSH
$ git remote add origin htpps:repositoriogithub
$ git push -u origin main // la primera vez: -u se crea una rama , origin donde sera creada, master nombre de la ramma
$ git push origin main // origin--nombre del servidor  main--rama en la que estoy  ESTO ES PARA SUBIR AL SERVIDOR
$ git remote -v //muestra la direccion del servidor
$ git remote //muestra el name del servidor asociado // $ 	git remote rename "newName"
// esto es para crear la rama en github
//LUEGO PIDE USUARIO Y TOKEN DE ACCESO : el token esta en github.com   , settings/developer settings 


//ARCHIVOS BORRADOS
$ rm {} // borrar un archivo
// si se hace un $ git status se podra ver los elementos eliminados y hay que subirlos a stage con $ git add {}
// hacer un commit especificando que se elimino $ git commit -m "se borro .vsCode"
//restaurar un archivo eliminado o deshacer una modificacion
$ git restore {} // solo funciona cuando el cambio aun aparece en el $ git status    deleted: archivo.js o

//CAMBIO DE NOMBRE
$ vm {nombredearchivo.txt} {nuevoNombredearchivo.txt} // cambia de nombre a un archivo
$ git add {nombredearchivo.txt} {nuevoNombredearchivo.txt} // se sube a stage la modificacion del nombre de un archivo
$ git vm {nombredearchivo.txt} {nuevoNombredearchivo.txt} //cambia de nombre y sube a stage(resume lo anterior)

//IGNORAR ARCHIVOS
.gitingnore // carpeta se debe agregar las rutas a IGNORAR
// las rutas dentro de este no se veran en los cambios 
// hay que subir el .gitingnore add y commit


//ACTUALIZAR EL REPOSITORIO
$ git pull //descargar los ultimos cambios del repositorio ($ git fetch) y hace un MERGE con nuestros datos locales($ git merge)
$ git fetch //descarga las ultimas modificaciones del repositorio
$ git pull //une nuestros achivos locales con la ultima descarga del repositorio
$ git pull --verbose //Proporciona una salida detallada durante una incorporación de cambios que muestra el contenido descargado y los detalles de la fusión.


//RAMAS
// se crear una rama para trabajar aparte, para poder ver los cambios que solo yo he echo y una vez que el codigo este probado y terminado
se hace un  MERCH para unir esa rama a la principal
$ git branch // rama actual de TRABAJO
$ git branch "nameRama" //crea una rama
$ git checkout -b newramab // crear rama (-b) , sin (-b) solo cambia de rama // Crea rama y nos cambia a esa rama
// solo se hace el commit en la rama en la que estoy si cambio de rama y veo el archivo que modifique pero en otra rama este no tendra cambios
$ git merge "nombreDeRama" //Esto une la rama en la que estoy con la rama que le paso
$ git rebase "nombreDeRama" //coloca todos los COMMITS de "nombreDeRama" atras de mi ultimo commit de la rama que estoy en ese momento
esto es un poco mas ordenado porque se pude ver de forma mas lineal lo commits
$ git log --graph //puedo ver mis ramas y cuando de unen mas forma visual

//SI EN DOS RAMAS DIFERENTES SE HA MODIFICADO LA MISMA LINEA GIT MOTRARA UN MENSAJE DE CONFLICTO Y MANDARA A ARREGLAR ESTO


// STASH
// son modificaciones que quiero que se guaren en otro lugar para trbajar ahi despues quizas ,pero sin hacer un commit
$ git stash list //muestra la lista de stash
// investigar mas sobre esto esta interesante


//VIAJAR EN EL TIEMPO
$ git checkout "e1f0c6" //se pone el codigo del commit // cuano ejecuto esto estoy en un modo desanexado todos los cambios que haga no se guardaran
//para poder comenzar a hacer cambios y modificar cosas en este COMMIT antiguo se debe crear una nueva rama
$ git checkout -b newramab // crear rama (-b) , sin (-b) solo cambia de rama // Crea rama y nos cambia a esa rama


//TAGS Y RELEASES
//una version solida y que no se va a modificar (v1.1) ya asi se va a quedar , o si se podria modificar pero ajan es un paquete que delimita versiones
$ git tag -a v0.1.1 -m "esta es la version (beta)" // v0.1.1 es el nombre que le doy a mi version || -m "menssage" es opcional 
$ git tag //muestra mis versiones
$ git push origin v0.1.1 //subir mi version ya finalizada
// LAS TAGS SE PUEDEN VER EN GITHUB EN ORDEN 




GIT AVANZADO
-Control de conflictos
-herramientas visuales
-hooks y deploy
-manejar muchas branches
