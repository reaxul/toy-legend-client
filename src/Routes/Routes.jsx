import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import BlogPage from "../Pages/BlogPage";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import AddToyPage from "../Pages/AddToyPage";
import ErrorPage from "../Pages/ErrorPage";
import MyToys from "../Pages/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys";
import ToyDetails from "../Pages/ToyDetails";
import UpdateToy from "../Pages/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-toy",
        element: <PrivateRoute><AddToyPage></AddToyPage></PrivateRoute>,
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        }, {
          path: '/all-toys',
          element: <AllToys></AllToys>,
        }, {
          path: '/details/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://toy-legend-server.vercel.app/details/${params.id}`)
        }, {
          path: '/update-toy',
            element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
      }
    ],
  },
]);
export default router;
