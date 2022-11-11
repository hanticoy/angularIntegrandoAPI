# Objetivos
- Generar una aplicación Angular
- Generar en el router el redireccionamiento basico pagina no encontrada '**' y ruta no existe ''
- Integrarlo con una API (ejecutar los metodos CRUD que implementa)
- Usar interfaces
- Mostrar los datos en la Web (lista de tareas)
- Ver el detalle de una tarea

# Comandos
ng generate --help        : para ver todos los tipos de elementos que podemos crear dentro de mi proyecto
ng new angularApi         : para crear el proyecto
ng g s http               : para agregar un servicio
ng generate component "components/pageNotFound"    : para crear una pagina de no encontrado
ng generate component "components/detalleTarea"
npm install               : para reconstruir el proyecto a partir del package.json

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
