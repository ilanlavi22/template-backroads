import { navLinks, socialLinks } from '../utils/constants';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {navLinks.map((link, index) => (
          <PageLink key={index} {...link} parentClass='footer-link' />
        ))}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link, index) => (
          <SocialLink key={index} parentClass='footer-icon' {...link} />
        ))}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span>{new Date().getFullYear()} </span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
