import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbarContainer">
        <div className="navbarWrapper">
            <div className="navbarLeft">
                <Link to = '/' style = {{textDecoration: 'none'}}>
                <span className="navbarTitle">News Mania</span>
                </Link>
            </div>
            <div className="navbarRight">
                <Link to = '/login' style = {{textDecoration: 'none'}}>
                    <span className="navbarLogin">Login</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar