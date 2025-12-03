import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSectionClick = (sectionId) => {
        // If not on homepage, navigate to homepage first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation, then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // Already on homepage, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-10 h-10 bg-primary-yellow rounded-lg flex items-center justify-center">
                            <span className="text-primary-dark font-bold text-xl">TW</span>
                        </div>
                        <span className="font-bold text-xl text-primary-dark">Telugu Wala Links</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => handleSectionClick('how-it-works')}
                            className="text-gray-700 hover:text-primary-dark transition cursor-pointer"
                        >
                            How it works
                        </button>
                        <Link to="/pricing" className="text-gray-700 hover:text-primary-dark transition">
                            Pricing
                        </Link>
                        <button
                            onClick={() => handleSectionClick('faq')}
                            className="text-gray-700 hover:text-primary-dark transition cursor-pointer"
                        >
                            FAQ
                        </button>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-700 hover:text-primary-dark transition">
                            Login
                        </Link>
                        <Link to="/signup" className="btn-primary">
                            Get Access
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-3">
                        <button
                            onClick={() => handleSectionClick('how-it-works')}
                            className="block w-full text-left py-2 text-gray-700 hover:text-primary-dark"
                        >
                            How it works
                        </button>
                        <Link
                            to="/pricing"
                            className="block py-2 text-gray-700 hover:text-primary-dark"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <button
                            onClick={() => handleSectionClick('faq')}
                            className="block w-full text-left py-2 text-gray-700 hover:text-primary-dark"
                        >
                            FAQ
                        </button>
                        <Link
                            to="/login"
                            className="block py-2 text-gray-700 hover:text-primary-dark"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="block btn-primary text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Access
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
