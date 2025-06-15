import { useState } from 'react';
import { Menu, X, Brain, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Logo isScrolled={isScrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-200'
            }`}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-200'
            }`}
          >
            About
          </a>
          <a 
            href="#training" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-200'
            }`}
          >
            Training & Placement
          </a>
          <a 
            href="#software-solutions" 
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-200'
            }`}
          >
            AI Software Solutions
          </a>
          <a 
            href="#contact" 
            className={`flex items-center font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
            }`}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium text-gray-800 hover:text-primary-600 py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="font-medium text-gray-800 hover:text-primary-600 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#training" 
              className="font-medium text-gray-800 hover:text-primary-600 py-2"
              onClick={toggleMenu}
            >
              Training & Placement
            </a>
            <a 
              href="#software-solutions" 
              className="font-medium text-gray-800 hover:text-primary-600 py-2"
              onClick={toggleMenu}
            >
              AI Software Solutions
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center font-medium bg-primary-600 text-white hover:bg-primary-700 py-3 rounded-lg"
              onClick={toggleMenu}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;