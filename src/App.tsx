import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Register, Login, UserList} from './pages'
import { LoginLayout } from './layouts'
import {Task} from './containers'

function App() {
  const router = createBrowserRouter([
    {
      element: <LoginLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    },
    {
      path: '/admin-dashboard',
      element: <UserList />
    },
    {
      path: '/user-dashboard',
      element: <Task />
    },
  ])  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
