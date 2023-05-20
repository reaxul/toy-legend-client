import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import BlogPage from "../Pages/BlogPage";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
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
                path: 'register',
                element:<Register></Register>
          }
      ]
    },
]);
  export default router;