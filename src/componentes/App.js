import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TelaInicial from "./TelaInicial.js";
import Home from "./Home.js";
import Explorar from "./Explorar..js";
import Carrinho from "./Carrinho.js";
import Conta from "./Conta.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaInicial />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Explorar",
      element: <Explorar />,
    },
    {
      path: "/Carrinho",
      element: <Carrinho />,
    },
    {
      path: "/Conta",
      element: <Conta />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
