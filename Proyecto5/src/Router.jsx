import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Layout from "./components/Layout";
import About from "./pages/About";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/recetas",
        element: <RecipeList />,
      },
      {
        path: "/recetas/:nombre",
        element: <RecipeDetail />,
      },
      {
        path: "/categorias",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
