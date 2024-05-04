import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading]= useState(true)

const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   
  };

  const logout = () => {
    setLoading(true)
    setUser(null)
    signOut(auth)
}

useEffect(()=>{
    const unsubscrive =onAuthStateChanged(auth, (user) => {
        
        setUser(user)
        console.log(user);
        setLoading(false)
         
        
      });
      return () => unsubscrive();
   },[])
    const authInfo = {
user,loading,createUser,login,logout
    }
    console.log("currentuser",user);
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;