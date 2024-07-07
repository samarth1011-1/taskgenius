import Todo from "./components/todo";
import Home from "./Landingpages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./GlobalContexts/GlobalContext";
import Dashboard from "./Landingpages/Dashboard";
import Statspage from "./statistics/statspage";
import AI from "./AI/AI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "stats",
        element: <Statspage />
      },
      {
        path: "AI",
        element: <AI />
      },
      {
        path: "todo",
        element: <Todo />
      }
    ]
  },
  {
    path: "/todo",
    element: <Todo />
  }
]);

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};

export default App;
