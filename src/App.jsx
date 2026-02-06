
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Products from './Pages/Products'
import RootLayout from './Layout/RootLayout'
import Login from './Pages/Login'
import ContactLayout from './Layout/ContactLayout'
import Info from './Components/Info'
import Conform from './Components/Conform'
import ProductLayout from './Layout/ProductLayout'
import { Productloader } from './Utilities/Productloader'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
        <Route path='products' element={<ProductLayout/>}>
          <Route index element={<Products />} loader={Productloader} />
        </Route>
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<Info />} />
          <Route path='conform' element={<Conform/>} />
        </Route>
          <Route path='login' element={<Login/>}  />
        </Route>
      )
    )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
