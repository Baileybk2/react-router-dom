import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* localhost:5173 "/" */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
