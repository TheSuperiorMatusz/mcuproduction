import React from 'react';
import '../../assets/styles/ui/Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header: React.FC = () => {

    return (
        <header className="header">
            <nav>
                <AnchorLink href="#purpose" className="headerLink">Purpose</AnchorLink>
                <AnchorLink href="#about-mcu-container" className="headerLink">What is MCU?</AnchorLink>
                <AnchorLink href="#phases-container" className="headerLink">Phases</AnchorLink>
                <AnchorLink href="#films-container" className="headerLink">Movies</AnchorLink>
                <AnchorLink href="#series-container" className="headerLink" >Tv shows </AnchorLink>
            </nav>
        </header>
    );
};

export default Header;