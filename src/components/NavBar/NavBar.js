import { Link } from "react-router-dom";
import './NavBar.css'
import { GiTurtleShell } from 'react-icons/gi';

export default function NavBar() {

  return (
    <nav className="nav-background">
      <div className="left">
          &nbsp; | &nbsp;
      </div>
      <div className="right">
        <Link className="nav-links" to="/">Shell</Link>
        <Link className="nav-links" to="/learn">Learning Center</Link>
        <Link className="nav-links" to="/trending">Trending</Link>
      </div>
    </nav>
  );
}