import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
return (
    <footer className="footer mt-5">
    <div className="container text-center">
        
        <div>
        <Link to="/" className="text-muted me-3">
            <i className="bi bi-facebook"></i>
        </Link>
        <Link to="/" className="text-muted me-3">
            <i className="bi bi-instagram"></i>
        </Link>
        <Link to="/" className="text-muted me-3">
            <i className="bi bi-tiktok"></i>
        </Link>
        </div>

        <div className="mt-3">
        </div>
        <span className="text-muted">© 2023 Versus Gaming. Todos los derechos reservados.</span>
    </div>
    </footer>
);
};

export default Footer;
