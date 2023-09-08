import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import Index from './Pages/Index';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';

const Layout = () => {
  return(
    <div>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
