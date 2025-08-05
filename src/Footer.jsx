import React from 'react';
import { theme } from './Utils';
import footerLogo from './assets/Logo.svg'; // Import the logo from assets

const Footer = () => (
    <footer style={{ backgroundColor: theme.colors.darkGray }} className="text-white py-12 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <img src={footerLogo} alt="Little Lemon Logo" className="h-20 mb-4 bg-white p-2 rounded"/>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4" style={{fontFamily: theme.fonts.body}}>Doormat Navigation</h3>
                <ul className="space-y-2" style={{fontFamily: theme.fonts.body}}>
                    <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                    <li><a href="#" className="hover:text-yellow-400">About</a></li>
                    <li><a href="#" className="hover:text-yellow-400">Menu</a></li>
                    <li><a href="#" className="hover:text-yellow-400">Reservations</a></li>
                    <li><a href="#" className="hover:text-yellow-400">Order Online</a></li>
                    <li><a href="#" className="hover:text-yellow-400">Login</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-4" style={{fontFamily: theme.fonts.body}}>Contact information</h3>
                <ul className="space-y-2" style={{fontFamily: theme.fonts.body}}>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
             <div>
                <h3 className="font-bold text-lg mb-4" style={{fontFamily: theme.fonts.body}}>Social media links</h3>
                <ul className="space-y-2" style={{fontFamily: theme.fonts.body}}>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
