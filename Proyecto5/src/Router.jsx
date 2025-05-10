import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Layout from "./components/Layout";
import About from "./pages/About";
import Categories from "./pages/Categories";
import { ErrorBoundary } from "./components/ErrorBoundary";
import CategoriesDetail from "./pages/CategoriesDetail";
import RandomDog from "./pages/RandomDog";
import UserFinder from "./pages/UserFinder";
import Pokedex from "./pages/Pokedex";
import TestError from "./pages/TestError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/recetas",
        element: <RecipeList />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/recetas/:nombre",
        element: <RecipeDetail />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/categorias",
        element: <Categories />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/categorias/:nombre",
        element: <CategoriesDetail />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/randomdog",
        element: <RandomDog />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/gituser",
        element: <UserFinder />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/pokedex",
        element: <Pokedex />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/testerror",
        element: <TestError />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
