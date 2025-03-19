import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">CRYPTODAY</div>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#info">Info</a>
          <a href="#soon">Soon</a>
        </nav>
      </div>
    </header>
  );
};
