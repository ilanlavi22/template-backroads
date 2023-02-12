import * as React from 'react';
import { navLinks, socialLinks, logo, menuIcon } from '../utils/constants';
import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='#home'>
            <img src={logo} className='nav-logo' alt='BackRoads' />
          </Link>

          <button type='button' className='nav-toggle'>
            <i className='fas fa-bars'>{menuIcon}</i>
          </button>
        </div>
        <ul className='nav-links'>
          {navLinks.map((link, index) => (
            <PageLink key={index} {...link} parentClass='nav-link' />
          ))}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link, index) => (
            <SocialLink key={index} parentClass='nav-icon' {...link} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
