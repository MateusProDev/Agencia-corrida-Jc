// NOTE: Components
import React from 'react'

// NOTE: styles
import './Header.css'

// NOTE: Meu cabeçalho
const Header = () => {
  return (
    <>
        <header className="navBar">
            <div className="logo"><img src="/logo192.png" alt="LOGO" /></div>
            <nav className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <nav className="redes">
                <ul>
                    <li><img src="/logo192.png" alt="redes sociais" /></li>
                    <li><img src="/logo192.png" alt="redes sociais" /></li>
                    <li><img src="/logo192.png" alt="redes sociais" /></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header