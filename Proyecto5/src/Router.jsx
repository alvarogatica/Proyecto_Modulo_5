import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Layout from "./components/Layout";
import About from "./pages/About";
import Categories from "./pages/Categories";
import { ErrorBoundary } from "./components/ErrorBoundary";
import CategoriasDetail from "./pages/CategoriasDetail";

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
        element: <CategoriasDetail />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
