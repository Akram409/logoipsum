import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import CompanyDetails from "../Pages/CompanyDetails/CompanyDetails";


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
            path: '/companyDetail',
            element: <CompanyDetails />,
        }
      ]
    },
  ]);