import React from 'react';
import './Logo.css';
import logoImg from '../../../img/VersusGaming.png'

const Logo = () => {
  return (
    <div>
      <img src={logoImg} className="logo" alt="Logo Versus Gaming" />
    </div>
  );
};

export default Logo;
