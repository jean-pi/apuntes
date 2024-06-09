gi# ☁️AWS

## VENTAJAS DE LA NUBE
> cambio de gasto fijo a gasta variable: Esta escalada no se necesita hacer manualmente, se puede programar para escalar dinámicamente.

> Beneficiarse se la economía a escala masiva: permite llegar a muchas partes del mundo.

> Dejar de adivinar la capacidad de los servidores 

> Aumentar la velocidad y agilidad: el proceso de crear una app con propios servidores es mas lento.

> Dejar de gastar dinero en crear y mantener servicios.

> Dedicar mas tiempo al negocio, a tus clientes, llegar a ello, recuerda el negocio es vender no , el software es una forma de llegar(la mejor actualmente)
 
## Framework para trabajar con aws proporcionado por amazon

> SON UN CONJUNTO DE BUENAS PRÁCTICAS Y FORMAS DE TRABAJAR EN LA NUBE QUE RECOMIENDA AMAZON, SON 6 PILARES
1. Seguridad
2. Fiabilidad (reliability)
3. Eficiencia de rendimiento 
4. Optimización de costes
5. Excelencia operativa 
6. Sustentabilidad 
  
> HERRAMIENTA PARA APLICAR WELL-ARCHITECTED TOOL QUE OFRECE AMAZON:
<https://aws.amazon.com/es/well-architected-tool/>


## VPN (virtual private network)
    una VPN cliente-sitio conecta a usuarios individuales con la red de una empresa. En cambio, una VPN de sitio a sitio conecta redes enteras de diferentes ubicaciones físicas, y permite que los sitios se comuniquen de forma segura como si formaran parte de la misma red.En el mundo corporativo, una VPN ayuda con el aislamiento del entorno, independientemente del tipo de VPN que elija. Las empresas utilizan las VPN para crear túneles virtuales aislados que conectan a los empleados remotos o a las oficinas de terceros con la red central. Este aislamiento está diseñado para confinar los datos y las comunicaciones dentro de la red designada, y para minimizar el riesgo de accesos no autorizados o fugas de datos.

## Opetating System, What is?

Otorga de capacidades basicas:
1. gestion de memoria
2. programacion de procesos
3. correr aplicaciones(procesos?)
4. controlar el imput y output de perifericos
5. interfaz de usuario.

> cuando se hace doble clip de ejecuta un “Archivo ejecutable” que inicia un proceso.

> Un sistema operativo como windows puede ejecutar varios procesos a la vez, es multi hilo.

> Cada vez que se ejecuta un proceso se guarda espacio en memoria ram y el cpu ejecuta las instrucciones necesarias para que siga ejecutando este proceso hasta que este proceso se cierre.

> Los calculos y data que genera arrancar un proceso se guardan en la RAM ya que es mas rápido

> El sistema operativo tiene que hacer una distribución eficiente de la memoria RAM para que todos los procesos se ejecuten correctamente.

> tasklist /v   para ver procesos en cmd

## Funciones escenciales del SO: 
  
### EL NUCLEO:
    $Gestión de la memoria: El núcleo gestiona la memoria del sistema. Asigna y reasigna espacio de memoria para los procesos, y está diseñado para utilizar la memoria de forma eficiente.
    $Programación de procesos: El núcleo se encarga de la programación y ejecución de los procesos. Permite que varios procesos se ejecuten simultáneamente en un único procesador o en varios procesadores.
    $Controladores de dispositivos: El núcleo proporciona los controladores necesarios para facilitar la comunicación entre el sistema operativo y los dispositivos de hardware. El sistema operativo utiliza estos controladores para interactuar con los periféricos, como impresoras, adaptadores de red y dispositivos de almacenamiento.
    $Gestión de interrupciones: El núcleo gestiona las interrupciones de hardware, que son señales que los dispositivos envían para llamar la atención del sistema operativo. Gestiona la respuesta a las interrupciones y coordina la ejecución de las rutinas de servicio de interrupción adecuadas.

### SISTEMA DE ARCHIVOS:
    La gestión de archivos es un término general que abarca diversas operaciones, como la creación, apertura, cierre, lectura, escritura y eliminación de archivos. El sistema de archivos permite realizar estas operaciones de forma eficiente. También proporciona organización para facilitar la navegación y la recuperación de archivos.

### HILOS:
    Los hilos son unidades individuales de ejecución dentro de un proceso. Comparten el mismo espacio de memoria y los mismos recursos, y permiten la ejecución concurrente. Puede pensar en los hilos como procesos ligeros que permiten la multitarea dentro de un único programa. Es posible que se encuentre con el término multihilo, que se refiere a un programa en el que los procesos pueden ejecutar varios hilos al mismo tiempo.


## CLI

### BASH:
    Bash es una de las interfaces de línea de comandos más comunes y populares. Son las siglas de Bourne Again SHell. 

### POWESHELL:
    PowerShell también es una interfaz de línea de comandos que puede utilizar para interactuar con su ordenador. Sin embargo, PowerShell está diseñado específicamente para sistemas operativos Windows
    Los comandos de PowerShell se denominan cmdlets (que se pronuncia como "command-lets"). Estos cmdlets están diseñados para trabajar juntos y realizar diversas tareas, y pueden funcionar como bloques de construcción. 


### INTERFAZ DE LINEA DE COMANDOS DE AWS (CLI DE AWS)
    Además de CLI como Bash y PowerShell, también puede utilizar CLI especializadas diseñadas para interactuar con diversos servicios y plataformas en Internet. La interfaz de línea de comandos de AWS (CLI de AWS) es un ejemplo de ello.
   

## VIRTUALIZACION
> Se hizo muy popular ya que permitía ejecutar muchos sistemas operativos dentro de un mismo servidor (un servidor en una computadora al final) 

> se pueden ejecutar incluso cientos miles de VM (virtual machines) en un server,
  Cada uno de estos SO invitados tiene su propia gestión de red, tendrán sus propias demandas de red o cada SO invitado servirá a clientes data dentro del sistema operativo, por eso es común que un servidor físico tenga muchos adaptadores de red, con muchos cables de fibra óptica con velocidades a baja latencia
  EXISTEN VARIOS TIPOS DE VIRTUALIZACION:
 De almacenamiento, datos, aplicaciones, escritorio y virtualizacion de red.

> Se puede virtualizar aspector especificos de una PC, por ejemplo virtualizacion de RED, no necesito virtualizar todo un SO para tener varias redes virtualizadas

> En AWS se puede tener acceso de 1 a miles de maquinas virtuales.

> !!!Cada máquina virtual es una instancia de EC2( elastic compute cloud)

> !!!Se puede tener acceso una red definida por software( una red virtualizada) con el servicio de Amazon VPC(Amazon virtual private cloud) 

  
## COMO FUNCIONA AWS

> Cuando se interactúa con los servicios se AWS todas las llamadas administrativas están cifradas por defecto.

> La virtualizacion permite usar un servidor de manera mas eficiente.

> Servicios como S3 son solo virtualizaciones de storage, los servicios de amazon son servidores que se virtualizan para simular que es una pc, pero en realidad es una VM que corre dentro de un servidos con miles de otras VM.

> Virtualizacion de redes.

> Virrualizacion de datos

> Virualizacion de aplicaciones (permite ejecutar aplicaciones en entornos diferentes de la que fueron creadas, la app ya tiene todo lo que necesita lara ejecutarse en ella misma, contenedores?



## Diccionario

> SERVER: Se llama server porque sirve o proporciona servicios a un cliente

> WEB SERVER: es un servidor que tiene un software específico para responder con protocolos web como Https://; Los servidores web sirven los archivos para que una web funcione, html, css, 

> HTTP ( hypertext transfer protocol ) es el sistema por el que se comparten archivos en la web

> HTTP: tiene métodos como GET, POST, DELETE, PUT

> IP: codigo unico de un dispositivo, direccion que permite saber a donde enviar la informacion

> PORT: Puertas de entrada y salida de información, si quiero enviar información entres servidores nesesito la IP - PORT

> FLOTA: (conjunto de servidores) Tener una copia de la app que quiero servir a un cliente en varios server, para poder servir a muchos clientes, si falla un servidor los otros siguen funcionando, no seria inteligente tener solo uno si falla se acabo. Entonces si tengo una flota se servidores que sirven lo mismo a un cliente, como se a cual pedir la info, esto lo hace los: 

> DISTRIBUIDORES DE CARGA: Esto distribuye las periciones de los clientes de manera eficiente, un ejemplo si un servidor falla la carga que tenia ese servidor se puede distribuir entre los demad

> DNS:(sistem domain system) Cuando se entra a una web en navegador busca una dirección IP del servidor para establecer una conexión, el DNS es como una forma de darle un nombre a una dirección ip, el navegador busca la dirección IP detrás de ese dominio. Yo podría una la dirección IP en la barra se búsqueda y aparecerá mi web igual.

> SOLUCIONADOR DE DNS: se enruta a un solucionador de DNS, que generalmente es administrado por el proveedor de servicios de Internet (ISP) del usuario

> CACHE DNS: cuando se hace una segunda peticion a un dominio la data de acceso a ese dominio de guarda en cache para no hacer todo el recorrido por el SOLUCIONADOR SE DNS, la data en cache puede quedar obsoleta cuando la fuente cambia (se cambio de servidor y ahora se obtiene otra ip?) y en cache se tiene data antigua, se puede configurar la cache para darle un tiempo de vida, 

> ENCRIPTACIÓN: ENCRIPTACIÓN EN TRANSITO: los datos en cripta dos viajan sobre el medio fisico; ENCRIPTACIÓN EN RESPOSO: los datos se almacenan encriptados 


> PUERTOS: Cuando se establece una conexión entre dos hosts, la conexión utiliza un puerto en ambos dispositivos de red. Los puertos generalmente se identifican con un número que se les ha asignado. El número de puerto identifica de forma única un punto final de conexión con un servicio específico, Es importante comprender el concepto de puertos porque los firewalls utilizan puertos cuando toman la decisión de permitir o bloquear una solicitud. Como administrador de red, debería poder determinar qué puertos desea abrir o cerrar, dado un servicio o un punto final. 

> Números de puerto altos y bajos: La mayoría de los núcleos de los sistemas operativos protegen el uso de puertos bajos y los restringen a usuarios avanzados. Esta práctica proporciona una capa adicional de protección en el lado del servidor porque solo los usuarios autorizados del sistema operativo deben poder usar puertos que son puertos predeterminados para los servicios. 

> Cortafuegos: Un firewall es un componente de seguridad de la red que puede filtrar solicitudes entrantes y salientes. Puede ser un dispositivo de hardware, software o un servicio en la nube.


## ELASTICIDAD: escala en AWS

### Escala in & out: escala horizontal 
    Tengo una requerimiento de 32gb pero tengo 16gb, en escalado vertical añado otro servidor de 16gb. Tener servidores así de rápido es la increíble de la nube. Es horizontal porque es como decir agregar un servidor al lado, side by side.

### Escala up & down: escala vertical: 
    Cambiar dinámicamente la infraestructura, ejemplo: tengo un requerimiento de 32gb pero mi servidor está configurado para 16gb, puedo hacer escalado vertical ampliando la configuración de mi servidor, esto con una llamada API. Vertical porque es como tener un servidor que crece para arriba.

