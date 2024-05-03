import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Route.jsx';
import { AuthContext } from './component/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthContext>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
    </AuthContext>
  </div>
)
