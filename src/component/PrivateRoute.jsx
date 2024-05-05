import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

const location = useLocation()
// console.log(location.pathname);

    if (loading) {
        console.log(loading);
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg flex "></span>
          </div>
        
      }


    if (user?.email) {
        return children;
    }
    return  <Navigate state={location.pathname} to='/logIn' replace></Navigate>
};

export default PrivateRoute;