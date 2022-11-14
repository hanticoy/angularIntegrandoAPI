# Objetivos
Tareas RESTful:
- Generar una aplicación Angular
- Generar en el router el redireccionamiento basico pagina no encontrada '**' y ruta no existe ''
- Utilizar una Interfaz
- Crear un servicio
- Registrar el servicio
- Importar HttpClientModule al proyecto
- Inyectar HttpClient en el servicio
- Inyectar el servicio en el componente raíz
- Escribir las funciones en el servicio que hacen peticiones AJAX para obtener las rutas en la tarea RESTful de API.
- Invocar cada función que escribiste en el servicio y hacer que console.log registre los datos que recibe

Tareas RESTful continuadas:
- Hacer que el componente raíz invoque las peticiones al servidor y reciba los datos
- Hacer que el componente raíz almacene los datos recibidos en sus propios atributos
- Mostrar los datos recibidos en el HTML

Tareas RESTful interactivas:
- Agregar un botón para que el usuario active la obtención de todas las tareas
- Mostrar los datos obtenidos en el HTML
- Proporcionar un botón para cada tarea para mostrar sus detalles

Tareas RESTful de CRUD
- Crear una aplicación CRUD completa con Angular, Express, Node y MongoDB.
- Incorporar los formularios para permitirle al usuario publicar datos

 Tareas RESTful con componentes anidados
 - Usar un componente anidado en la asignación de tareas RESTful interactivas

# Componentes
- ng generate component conponents/Task            : Generar un componente llamado Task en la carpeta "components"

# Comandos
ng generate --help        : para ver todos los tipos de elementos que podemos crear dentro de mi proyecto
ng new angularApi         : para crear el proyecto
ng g s http               : para agregar un servicio
ng generate component "components/pageNotFound"    : para crear una pagina de no encontrado
ng generate component "components/detalleTarea"
npm install               : para reconstruir el proyecto a partir del package.json
<p>{{qryTask | json}}</p> : para poder visualizar los cambios de un objeto en forma inmediata
git rm -r myFolder: para eliminar algun elemento que no se debe subir al repo 

# repositorio en GitHub
- git init NO APLICA
- si debemos setear:
git remote add origin https://github.com/hanticoy/angularIntegrandoAPI.git
git branch -M main

# utilizaremos esta API de BackEnd, en archivo environnment.ts
environment.urlServicetask : https://github.com/hanticoy/RESTful.git


# AngularApi


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
