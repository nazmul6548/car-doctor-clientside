import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Error from "./component/Error";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/logIn",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
    ]
  },

]);
        

export default router;