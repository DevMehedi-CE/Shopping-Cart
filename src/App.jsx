
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Main from './layout/Main';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ],
    },
  ]);
  

  return (
    <RouterProvider router={router}/>
    
  )
}

export default App
