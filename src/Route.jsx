import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Error from "./component/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },

]);
        

export default router;