import {NavLink, replace, useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="logo">ShopEase</div>
            <ul>
                <NavLink to='/'>
                <li>Home</li>
                </NavLink >
                 <NavLink  to={'/about'}>
                <li>About</li>
                </NavLink >
                 <NavLink  to={'/products'}>
                    <li>Products</li> 
                </NavLink>
                 <NavLink  to={'/contact'}>
                <li>Contact</li>
                </NavLink >
            </ul>
            <button onClick={() => navigate('/login', { replace: true})}>Login</button>
       </div>
  )
}

export default Navbar