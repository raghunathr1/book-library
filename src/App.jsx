import Header from './component/Header'
import Add from './component/Add'
import Fetch from './component/Fetch'
import Browse from './component/Browse'
import Details from './component/Details'
import NotFound from './component/NotFound'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

// Layout Component
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [

        {
          index: true,
          element: <Fetch />
        },

        {
          path: "browse",
          element: <Browse />
        },

        {
          path: "browse/:category",
          element: <Browse />
        },

        {
          path: "book/:id",
          element: <Details />
        },

      
        {
          path: "add",
          element: <Add />
        },
        {
          path:'*',
          element:<NotFound />
        }

      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App