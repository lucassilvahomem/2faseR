import './Header.css'
import Logo from './Logo'

function Header() {
  return (
    <div className='container-header'>
        <Logo />
        <h1 className='titulo'>Farmarcia</h1>
    </div>
  )
}

export default Header