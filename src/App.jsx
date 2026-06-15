import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/add_user',
      element:<Add/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
