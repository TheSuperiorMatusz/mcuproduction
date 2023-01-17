import React from 'react';
import '../../assets/styles/Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header: React.FC = () => {

    return (
        <header className="header">
            <nav>
                <AnchorLink href="#about-mcu-container" className="headerLink">What is MCU?</AnchorLink>
                <AnchorLink href="#phases-container" className="headerLink">Phases</AnchorLink>
                <AnchorLink href="#home" className="headerLink">Contact</AnchorLink>
            </nav>
        </header>
    );
};

export default Header;