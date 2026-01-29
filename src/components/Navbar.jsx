import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/main.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
            transition: 'all 0.3s ease',
            height: 'var(--nav-height)',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                        src="/Logo.png"
                        alt="DeepNeuralAI"
                        style={{ height: '50px', borderRadius: '20px', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                    />
                    {/* Fallback if logo fails to load */}
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        background: 'var(--gradient-text)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'none'
                    }}>DeepNeuralAI</span>
                </Link>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/careers" className="nav-link">Careers</Link>
                    <Link to="/contact" className="btn btn-primary">Connect with Us</Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu" style={{
                    position: 'absolute',
                    top: 'var(--nav-height)',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    borderBottom: '1px solid var(--border-color)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/careers" className="nav-link">Careers</Link>
                    <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center' }}>Connect with Us</Link>
                </div>
            )}

            <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s;
          position: relative;
        }
        .nav-link:hover {
          color: var(--accent-blue);
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: var(--accent-blue);
            transition: width 0.3s;
        }
        .nav-link:hover::after {
            width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
