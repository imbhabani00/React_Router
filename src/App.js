import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/items";
import Navbar from "./Components/Navbar";
import ItemDetail from "./pages/itemsDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement:<ErrorPage />,
      children: [
        { path: '', element: <Home /> },
        { path: '/about', element: <About /> },
        {
          path: 'items', 
          children: [
            { index: true, element: <Items /> },
            {
              path: ':id', // Define a dynamic segment for the item ID
              element: <ItemDetail />
            }
          ]
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
