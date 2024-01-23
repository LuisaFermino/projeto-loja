import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import TelaInicial from "./TelaInicial.js";
import Home from "./Home.js";

function App() {
  const [visivel, setVisivel] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaInicial visivel={visivel} setVisivel={setVisivel} />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
