import {useState} from 'react';
import Logo from "../assets/logo0.png"
import MenuButton from "../assets/menu-button.png"
import { useSpring, animated } from "react-spring";
import {telegramLink} from "../config"
import {Link, useNavigate} from "react-router-dom"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(prev => !prev)

  const animation = useSpring(
    {height: isOpen ? 120 : 0}
  )

  const navigate = useNavigate()

  return (
    <>
      <header>
          <img onClick={() => navigate("/")} className='header-logo' src={Logo} alt=''/>
          <ul className='desktop-header-menu-list'>
            <li className='desktop-header-menu-list-item'><a href={telegramLink} target="_blank" rel="noopener noreferrer">Связаться со мной</a></li>
            <li className='desktop-header-menu-list-item'><Link to="/">Главная</Link></li>
            <li className='desktop-header-menu-list-item'><Link to='/portfolio'>Портфолио</Link></li>
          </ul>
          <img onClick={toggleIsOpen} className='header-menu-button' src={MenuButton} alt=''/>
      </header>
      <animated.div className='header-menu' style={animation}>
        <ul className='header-menu-list'>
          <li className='header-menu-list-item'><a href={telegramLink} target="_blank" rel="noopener noreferrer">Связаться со мной •</a></li>
          <li onClick={toggleIsOpen} className='header-menu-list-item'><Link to="/">Главная •</Link></li>
          <li onClick={toggleIsOpen} className='header-menu-list-item'><Link to='/portfolio'>Портфолио •</Link></li>
        </ul>
      </animated.div>
      <hr className='header-line'/>
    </>
  );
}

export default Header;