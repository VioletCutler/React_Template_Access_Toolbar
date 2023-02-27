import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../stylesheets/Navbar.css'

const Navbar = ({theme}) => {
  const navigate = useNavigate()

  function handleClick(){
    navigate('/')
  }

  return <div id="navbar">
      <nav id={`${theme}-nav-links`}>
        <Link id="link-to-homepage" to="/">Home</Link>
      </nav>
  </div>;
};

export default Navbar;