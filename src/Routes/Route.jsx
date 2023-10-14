import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import EmployDetails from "../Pages/EmployDetails/EmployDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/employDetails/:id',
            element: <EmployDetails />,
        }
      ]
    },
  ]);