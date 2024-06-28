import Todo from "./components/todo";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App= ()=> {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/todo",
      element:<Todo/>
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
