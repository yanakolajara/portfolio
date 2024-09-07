import React from 'react';
import { useScroll } from '../../hooks/useScroll';

export default function NavbarOption({ renderIcon, text, href }) {
  //   const { ref, handleScroll } = useScroll();
  return (
    <a className='navbar-option' href={href}>
      {renderIcon}
      <p className='text'>{text}</p>
    </a>
  );
}
