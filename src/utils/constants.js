import {
  FaFacebook,
  FaTwitter,
  FaSquarespace,
  FaBars,
  FaWallet,
  FaTree,
  FaSocks,
  FaMap,
} from 'react-icons/fa';

import navLogo from '../images/logo.svg';

import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Tours', href: '#tours' },
];

export const menuIcon = <FaBars />;
export const logo = navLogo;
export const services = [
  {
    name: 'saving money',
    icon: <FaWallet />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
  },
  {
    name: 'endless hiking',
    icon: <FaTree />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
  },
  {
    name: 'amazing comfort',
    icon: <FaSocks />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
  },
];

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com', icon: <FaFacebook /> },
  { name: 'Twitter', href: 'https://www.twitter.com', icon: <FaTwitter /> },
  {
    name: 'Squarespace',
    href: 'https://www.squarespace.com',
    icon: <FaSquarespace />,
  },
];

export const tours = [
  {
    title: 'tibet adventure',
    price: 2100,
    image: tour1,
    location: 'china',
    days: 6,
    icon: <FaMap />,
    date: 'August 26th, 2023',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    title: 'best of java',
    price: 1400,
    image: tour2,
    location: 'indonesia',
    days: 11,
    icon: <FaMap />,
    date: 'October 1th, 2023',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    title: 'explore hong kong',
    price: 5000,
    image: tour3,
    location: 'hong kong',
    date: 'September 15th, 2023',
    days: 8,
    icon: <FaMap />,
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
  {
    title: 'kenya highlights',
    price: 3300,
    image: tour4,
    location: 'kenya',
    date: 'December 5th, 2023',
    days: 20,
    icon: <FaMap />,
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  },
];
