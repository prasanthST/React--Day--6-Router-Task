import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import FullStackdeveloper from './Components/FullStackdeveloper';
import CyberSecurity from './Components/CyberSecurity';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Career from './Components/Career';
import NavbarSearch from './Components/NavbarSearch';
import MostRecent from './Components/MostRecent';
import DataScience from './Components/DataScience';

function App() {

  const router = createBrowserRouter([
    // {element: <NavbarSearch/> },

    {
      element: <Navbar />,
      children: [{
        path: "/",
        element: <Home />,
      },
      {
        path: "fullstackdeveloper",
        element: <FullStackdeveloper />,
      },
      {
        path: "datascience",
        element: <DataScience />,
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ]
    },
   
  ]);

  return (
    <>
      <NavbarSearch/>
      <MostRecent/>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
