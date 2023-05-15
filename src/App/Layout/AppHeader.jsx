import React from 'react';
import { Logo } from '../Components/Logo/Logo';

import './styles/header.css';
import { Link } from 'react-router-dom';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <div>
        {/* <div className="header-title">Tytuł nagłówka</div> */}
        <Link to="./">
          <Logo />
        </Link>
      </div>
      <div>
        <HeaderMenu />
      </div>
    </header>
  );
}
