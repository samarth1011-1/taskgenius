import Todo from "./components/todo";
import Home from "./Landingpages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./GlobalContexts/GobalContext";
import Dashboard from "./Landingpages/Dashboard";
import Statspage from "./statistics/statspage";
import AI from "./AI/AI";
const App= ()=> {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:'/todo',
      element:<Todo/>
    },
    {
      path:'/stats',
      element:<Statspage/>
    },
    {
      path:'/AI',
      element:<AI/>

    }
  ]);

  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
      
  );
}

export default App;
