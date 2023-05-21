import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import BlogPage from "../Pages/BlogPage";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import AddToyPage from "../Pages/AddToyPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            }, {
                path: '/blog',
                element:<BlogPage></BlogPage>
            }, {
                path: '/login',
                element:<LoginPage></LoginPage>
            }, {
                path: '/register',
                element:<Register></Register>
            }, {
              path:'/add-toy',
              element:<AddToyPage></AddToyPage>
          }
      ]
    },
]);
  export default router;