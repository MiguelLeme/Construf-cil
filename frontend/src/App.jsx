import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CadastroProduto from "./pages/CadastroProduto";
import Estoque from "./pages/Estoque";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/cadastro-produto", element: <CadastroProduto /> },
      { path: "/estoque", element: <Estoque /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
