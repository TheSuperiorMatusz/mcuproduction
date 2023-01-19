import React from 'react';
import  '../../assets/styles/ui/Footer.css'

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footerContainer">
                <p className="project">This project from framework Classes</p>
                <div className="footerLinks">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">About</a>
                    <a href="#" className="link">Contact</a>
                </div>
                <p className="copyright">Copyright © 2023 Maciej Matusz</p>
            </div>
        </footer>
    );
};

export default Footer;