# **Gramophone App**:

Gramophone se trata de una aplicación donde puedes encontrar los festivales de musica más importantes alrededor del globo.


## Levantar ambos servicios:

- npm run dev
o
-npm run start

<br>

##  Para levantar los servidores instalando las dependencias necesarias:

- **npm i** (al iniciar ambos proyectos)

<br >

**Funcionalidades de la aplicación**: Para el correcto funcionamiento tenemos una pagina de login, donde el usuario puede registrarse. Para aplicar una correcta validación se ha usado la libreria **Formik** y **Yup**.


En este proyecto trabajaremos con los diferentes lenguajes/herramientas: **Vite**, **React**, **Redux**, **Hooks de React**, **JavaScript**, **HTML**, **CSS5**,**REACT-Bootstrap**, **NodeJS**,**MongoDB**, **MongoAtlas**, **ThunderClient**.

### **BACKEND** ->

Se ha creado una base de datos de productos, asi como una de usuarios. Ambas se han desplegado en MongoAtlas (el usuario que use la web necesitará dar permiso a su IP). 
Cada una de las colecciones dispone de una serie de atributos que complementan la funcionalidad de la web, para de está manera poder realizar un **CRUD** completo en ambos casos. Estas funcionalidades se establecen a través de sus **controllers** y sus **routers**. Para evitar que usuarios no autorizados entren o modifiquen contenido de la app, se han creado unos middlewares que controlen los tokens y los roles.

Se ha creado una tercera colección con los mails que se obtienene en el componente de **newsletter**, los cuales serán usados para enviar en un feature que se añadirá, en la cual se mantendrá informado de cada nuevo festival, enviando un listado de los mismos en formato pdf.


El puerto donde trabajaremos en el backend será el 3002. [localhost:](http://localhost:3002/products), [localhost:](http://localhost:3002/user) y [localhost:](http://localhost:3002/login).

Las dependencias instaladas en el back son estas:

- cors
- express
- mongoose
- nodemoon
- dotenv (lectura de archivo env)
- bcrypt (encriptación de password)
- jsonwebtoken (control de token)

Se ha creado un archivo .gitignore que contiene -> /node_modules y el .env (a futuro)

Para arrancar el servicio en el back lo haremos con un:

- npm run start

### **FRONT** ->

Creación de un esquema en excalidraw para una mejor visualización de las funcionalidades del proyecto.
![alt text](gramophone\src\assets\images\Gramophone app flow.png)

En cuanto al Front trabajaremos con React principalmente. El proyecto se crea con un primer **npm create vite@latest "..."**. Tras la creacion del back, podemos trabajar en el front para ir dandole "vida" a nuestras funcionalidades.

Crearemos los **componentes** donde se realizaran todas las acciones de nuestra aplicación, ya sea conexión con otros componentes atómicos, reducers y actions. Tambien estuve navegando para averiguar la forma de incluir SVG's en REACT, no encontre otra forma que creando un componente con su css correspondiente y luego importandolo atomicamente donde yo quisiera utilizarlo (en este caso en el ContactPage.jsx para las redes sociales creadas).

También tendremos las **pages** para poder atomizar aun más nuestra aplicación. Nada mas acceder entraremos a la LoginPage, y tras logearnos y conseguir permiso, accedemos a HomePage, desde donde tendremos acceso a todas las funcionalidades de nuestra aplicacion navegando gracias al router.

Conseguiremos esa conexión con el backend gracias a los fetch que realizaremos para obtener los endpoints en nuestra aplicación.

En cuanto a los estilos, encontraremos algunos en linea, pero la mayoría se realizan directamente desde el **index.css**, **HomePage.css**, **ProductListComponent.css**, **App.css** ya que serán estilos globales y no he visto necesario crear un css para cada componente (aunque se que sería lo ideal).

Las dependencias instaladas en el front son:

- npm i
- npm install redux react-redux
- npm install --save react-router-dom
- npm i formik yup



<br >
## **Features próximas**

Nuevas funcionalidades serán impplementadas:
    - Acceso a información de perfil 
    - Modificaciones de perfil de usuarios desde acceso administrador
    - Lista de productos favoritos, con funcionalidad de añadir o quitar.
    - Servicio de aviso de nuevos productos añadidos a traves de nuestro servicio de newsletter (ya funcional la incripción de emails)
<br>

#### **Javier Marín Almagro**

_Email de contacto_: jamarinweb@gmail.com
message.txt
4 KB
