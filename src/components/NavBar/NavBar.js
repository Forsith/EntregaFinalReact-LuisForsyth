import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import logo from './Assets/NOCKTA TITULO CLARO.png'


const NavBar = () => {

  return (
    <header className="header">
      <div className="logo">
      <Link to='/'><img src={logo} width={180}></img></Link>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to='/' className='list-item'>Home</Link></li>
          <li><Link to='/productos/Macchiato' className='list-item'>macchiato</Link></li>
          <li><Link to='/productos/Lattes' className='list-item'>lattes</Link></li>
          <li><Link to='/productos/Mocha' className='list-item'>Mocha's</Link></li>
          <li><CartWidget /></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar