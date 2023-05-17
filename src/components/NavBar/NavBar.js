import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import './NavBar.css'
import { GiTurtleShell } from 'react-icons/gi';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav className="nav-background">
      <div className="left">
          {user && <span>&nbsp;Welcome, {user.name}!</span>}
          &nbsp; | &nbsp;
        <Link className="log-out" to="" onClick={handleLogOut}>Log Out</Link>
      </div>
      <div className="right">
        <Link className="nav-links" to="/home">Shell</Link>
        <Link className="nav-links" to="/learn">Learning Center</Link>
        <Link className="nav-links" to="/trending">Trending</Link>
      </div>
    </nav>
  );
}