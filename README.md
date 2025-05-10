# Proyecto_Modulo_5

Esta es una Aplicacion web desarrollada con React, la cual se encarga de consumir APIs para manejar su informacion y mostrarla al usuario.

## Tecnologias utilizadas: 

* React
* Vite (como generador del proyecto)
* Material UI (para diseños de interfaz)
* React Router DOM
* Vercel

## Funcionalidades del Proyecto:

* Consumir APIs publicas
* generar un listado de recetas, categorias de recetas, mostrar informacion detallada de alguna receta, buscar un usuario de github por nombre, cargar imagen random de perro.
* Barra de navegacion 100% funcional
* Manejo de errores con componente ErrorBoundary
* Diseño responsivo y moderno con Material UI
* Deploy con Vercel

## Instalacion del proyecto de manera local
* Clona este link de github: ``git clone https://github.com/alvarogatica/Proyecto_Modulo_5.git``
* Localizate en la carpeta principal del proyecto: ``cd \Proyecto_Modulo_5\Proyecto5``
* Instala las dependencias del proyecto: ``npm install``
* Corre el proyecto: ``npm run dev``

## Link de acceso a la App : https://projectmod5.vercel.app/

## Arquitectura de carpetas: 

````js
-Proyecto5
---node_modules
---public
------_redirects
------vite.svg
---src
------assets
---------react.svg
------components
---------AleatorioDog.jsx
---------ErrorBoundary.jsx
---------Layout.jsx
---------NavbarComponent.jsx
---------randomMeal-jsx
---------UserGitHub.jsx
------hooks
---------useFetch.jsx
------pages
---------About.jsx
---------Categories.jsx
---------CategoriesDetail.jsx
---------RandomDog.jsx
---------RecipeDetail.jsx
---------RecipeList.jsx
---------UserFinder.jsx
------App.css
------App.jsx
------index.css
------main.jsx
------Router.jsx
---.env
---.gitignore
---eslint.config.js
---index.html
---package-lock.json
---package.json
---README.md
---vite.config.js
````

## Manejo de errores con componente ErrorBoundary: 
