import { Outlet } from "react-router-dom"
import Contact from "../Pages/Contact"


const ContactLayout = () => {
  return (
      <div className="container">
      <Contact />
      <Outlet/>
      </div>
  )
}

export default ContactLayout