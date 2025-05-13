import React from "react";

function Navbar({ toggleMenu, menuOpen }) {
  return (
    <>
      {/* Barre principale */}
      <nav className="fixed top-0 left-0 w-full h-24 bg-yellow-400 flex items-center justify-between px-4 z-50">
        {/* Logo */}
        <img src="/enactus.png" alt="Logo" className="h-20" />

        {/* Liens (grands écrans) */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#membres" className="hover:text-blue-600">Membres</a></li>
          <li><a href="#activites" className="hover:text-blue-600">Activités</a></li>
          <li><a href="#about" className="hover:text-blue-600">À propos</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        
        </ul>

        {/* Bouton Menu (petits écrans) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-sm px-3 py-2 bg-white border rounded hover:bg-gray-100"
        >
          {menuOpen ? "Fermer" : "Menu"}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 mt-24 space-y-3 text-lg font-medium z-40 relative">
          <a href="#home" onClick={toggleMenu} className="block hover:text-blue-500">Home</a>
          <a href="#membres" onClick={toggleMenu} className="block hover:text-blue-500">Membres</a>
          <a href="#activites" onClick={toggleMenu} className="block hover:text-blue-500">Activités</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-500">À propos</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-500">Contact</a>
          

        </div>
      )}
    </>
  );
}

export default Navbar;