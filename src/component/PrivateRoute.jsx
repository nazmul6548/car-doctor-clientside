import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)



    if (loading) {
        console.log(loading);
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg flex "></span>
          </div>
        
      }


    if (user?.email) {
        return children;
    }
    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRoute;