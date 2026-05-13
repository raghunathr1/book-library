import { Link } from "react-router-dom";
import './style.css'

function Header() {

  return (
    <nav className="nav">

      <h1>Book Library</h1>

      <ul id="head2">  
          <Link to="/" className="h3">Home</Link>
          <Link to="/browse" className="h3">Browse</Link>
          <Link to="/add" className="h3">Add</Link>
      </ul>

    </nav>
  )
}

export default Header;