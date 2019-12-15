import React from 'react';

import {Link} from "react-router-dom";

const Footer = (props) => {
    var d = new Date();

    return (
        <div className="footer">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a rel="noopener noreferrer" href="https://github.com/CodeDigital" target="_blank">Github</a>
            <p className="copyright">&copy; Copyright {d.getFullYear()}, CodeDigital</p>
        </div>
    );
};

export default Footer;
