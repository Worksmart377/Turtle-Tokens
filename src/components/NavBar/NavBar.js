import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
        {user && <span>&nbsp;Welcome, {user.name}</span>}
        &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp;

      <Link to="/home">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/trending">Trending</Link>

    </nav>
  );
}