# Proyecto_Modulo_5

Link de acceso a la App : https://projectmod5.vercel.app/

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

## Arquitectura de carpetas: 
Separamos la carpeta ``components``, que guarda funciones que creemos poder utilizar en algun otro momento en el proyecto. Almacenamos las distintas rutas a las cuales nos dirigira la App, en la carpeta ``pages``

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

````js
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo salio mal!</h2>;
    }

    return this.props.children;
  }
}

````
Este componente ErrorBoundary es un "límite de error" en React, usado para atrapar errores de otros componentes sin romper toda la aplicación.

¿Cómo funciona?:

* ``getDerivedStateFromError``: Se activa si un hijo lanza un error, y actualiza el estado.

* ``componentDidCatch``: Registra el error en consola.

* ``render``: Si hay error, muestra un mensaje; si no, muestra los hijos normalmente ``(this.props.children)``.

## Componente UserGitHub para explicar como funciona

````js
import {
  Avatar,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const UserFinder = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchUsers = async () => {
    const username = inputRef.current.value.trim();
    if (!username) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_GITHUB_USER_API_URL}${username}`
      );
      if (!response.ok) {
        throw new Error("Usuario no encontrado");
      }
      const data = await response.json();
      setUser(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: 420,
        margin: "40px auto",
        padding: 3,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Buscar usuario de GitHub
        </Typography>
        <TextField
          inputRef={inputRef}
          fullWidth
          variant="outlined"
          placeholder="Ingrese el nombre del usuario"
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={fetchUsers}>
          Buscar
        </Button>

        {error && (
          <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {user && (
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Divider sx={{ marginBottom: 2 }} />
            <Avatar
              src={user.avatar_url}
              alt={user.name}
              sx={{ width: 100, height: 100, margin: "0 auto", marginBottom: 1 }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              {user.name || user.login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seguidores: {user.followers}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Repositorios públicos: {user.public_repos}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default UserFinder;

````
``useRef``: Para enfocar automáticamente el campo de texto al cargar.

``useState``: Para manejar el estado del usuario encontrado y posibles errores.

``fetchUsers``: Al hacer clic en "Buscar", se consulta la API de GitHub con el nombre ingresado y se muestran los datos del usuario (avatar, nombre, seguidores, repositorios).
