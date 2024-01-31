import React from 'react'

//styles
import './Header.css'

const Header = () => {
  return (
    <>
        <header className="navBar">
            <div className="logo"><img src="#" alt="LOGO" /></div>
            <nav className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <nav className="redes">
                <ul>
                    <li><img src="#" alt="redes sociais" /></li>
                    <li><img src="#" alt="redes sociais" /></li>
                    <li><img src="#" alt="redes sociais" /></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header