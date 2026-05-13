import { Link } from "react-router-dom";
import './style.css'

function Header() {

  return (
    <>
    <div id="wel">
      <h3 className="wel1"> 🤗Welcome To Our Library 🤗</h3>
      <h6 className="wel1"> 📚 When In Doubt Go TO The Library 📚</h6>
      <marquee>👨‍🎓👩‍🎓📖 Libraries are reservoirs of ✏️ energy that power the imagination 📓👩‍🎓👨‍🎓</marquee>
    </div>
    <nav className="nav">
      <h1>Book Library</h1>
      <ul id="head2">  
          <Link to="/" className="h3">Home</Link>
          <Link to="/browse" className="h3">Browse</Link>
          <Link to="/add" className="h3">Add</Link>
      </ul>
    </nav>
    </>
  )
}

export default Header;