import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import EmployDetails from "../Pages/EmployDetails/EmployDetails";
import Error from "../Pages/Shared/Error/Error";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <Home />,
            errorElement: <Error />,
        },
        {
            path: '/employDetails/:id',
            element: <EmployDetails />,
        },
        {
          path: "*",
          element: <Error />,
        }
      ]
    },
  ]);