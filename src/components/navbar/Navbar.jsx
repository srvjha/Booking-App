import "./navbar.css"
import pic from "./img/logo.png"


export const Navbar = () => {
  
  return (
    <div className="navbar">
        <div className="navContainer">
            {/* <span className="logo">srvbooking</span> */}
            <img src={pic} alt="" className="logo" />
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
