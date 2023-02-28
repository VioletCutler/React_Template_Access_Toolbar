import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../stylesheets/navbar/navbar.css'

const Navbar = ({theme}) => {
  const navigate = useNavigate()

  function handleClick(){
    navigate('/')
  }

  return <div id='navbar' className={`${theme}-navbar`}>
      <nav id={`nav-links`} className={`${theme}-nav-links`}>
        <Link id="link-to-homepage" className={`${theme}-link-to-homepage`} to="/">Home</Link>
        <Link id="link-to-homepage" className={`${theme}-link-to-homepage`}to="/about">About</Link>
      </nav>
  </div>;
};

export default Navbar;