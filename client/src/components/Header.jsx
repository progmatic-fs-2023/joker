import React from 'react';
import CollapsibleNav from './CollapsibleNav';
import NavbarSearch from './NavbarSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
      <header className="text-center text-success">
        <h1>Herbalism.hu</h1>
        <pre>
          <h3>{}</h3>
        </pre>
      </header>
      <CollapsibleNav />
      <NavbarSearch />
    </div>
  );
}

export default Header;
