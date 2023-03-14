import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/login'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rotas}/>
  </React.StrictMode>,
)
export default Rotas