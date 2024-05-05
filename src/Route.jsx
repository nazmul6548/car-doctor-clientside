import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Error from "./component/Error";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import Checkout from "./Pages/Checkout";
import Booking from "./Pages/Booking";
import PrivateRoute from "./component/PrivateRoute";

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
        },
        {
          path:"/checkout/:id",
          element:<PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>,
          // loader:({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/booking",
          element:<PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        }
    ]
  },

]);
        

export default router;